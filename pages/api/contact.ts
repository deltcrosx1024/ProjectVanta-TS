import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

const redis = Redis.fromEnv();
export const config = {
  runtime: "edge",
};

export default async function contact(req: Readonly<NextRequest>): Promise<NextResponse> {
  if (req.method !== "POST") {
    return new NextResponse("use POST", { status: 405 });
  }
  if (req.headers.get("Content-Type") !== "application/json") {
    return new NextResponse("use application/json", { status: 415 });
  }
  const body = await req.json();
  const { name, email, message } = body;
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name ||
    !email ||
    !message ||
    name.length > 100 ||
    email.length > 100 ||
    message.length > 1000
  ) {
    return new NextResponse("invalid fields", { status: 400 });
  }
  // Rate limit: max 5 submissions per hour per IP
  const forwarded = req.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0]?.trim() : "127.0.0.1";
  const key = `contact:${ip}`;
  const count = await redis.incr(key);
  if (count === 1) {
    await redis.expire(key, 60 * 60); // 1 hour
  }
  if (count > 5) {
    return new NextResponse("rate limit exceeded", { status: 429 });
  }

  // TODO: Send email using an external API (Resend, SendGrid, etc.)
  // Example:
  // await fetch("https://api.resend.com/emails", { ... });

  return new NextResponse("OK", { status: 200 });
}