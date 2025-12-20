import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

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
  const { name, email, subject, message } = body;
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof subject !== "string" ||
    typeof message !== "string" ||
    !name ||
    !email ||
    !subject ||
    !message ||
    name.length > 100 ||
    email.length > 100 ||
    subject.length > 100 ||
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
  try {
    await sendEmail({ name, email, subject, message });
  } catch (error) {
    console.error("Failed to send email", error);
    return new NextResponse("Failed to send email", { status: 500 });
  }

  return new NextResponse("OK", { status: 200 });
}

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail({ name, email, subject, message }: { name: string; email: string; subject: string; message: string }) {
  try {
    const data = await resend.emails.send({
      from: 'New Contact Notification <onboarding@resend.dev>',
      to: ['githubdcx@outlook.com'],
      subject: subject,
      html: `<p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong> ${message}</p>`,
    });

    console.log('Email sent successfully:', data);
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
}