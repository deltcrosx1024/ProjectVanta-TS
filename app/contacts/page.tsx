"use client";

import { useState, ChangeEvent, FormEvent } from "react";
// @ts-ignore
import { Mail } from "lucide-react";
import { Header } from "@/app/components/nav";
import { motion } from "framer-motion";
import BackgroundDarkVeil from '@/app/components/bg_darkveil';
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("An error occurred. Please try again.");
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative isolate min-h-screen bg-gray-900 px-6 py-14 lg:px-8">
        <Analytics />
        <SpeedInsights />
        <Header />
        <BackgroundDarkVeil />
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl pt-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Let's connect.
          </h2>
          <p className="mt-4 text-zinc-400">
            I'm currently open to new opportunities. Feel free to reach out to me
            for collaborations, job offers, or just a chat!
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:mt-24">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 lg:gap-x-16">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={formVariants}
            >
              <motion.h3 variants={itemVariants} className="text-2xl font-bold tracking-tight text-zinc-100">
                Send me a message
              </motion.h3>
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-zinc-400"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-1 block w-full appearance-none rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-white placeholder-zinc-500 shadow-sm focus:border-zinc-400 focus:outline-none focus:ring-zinc-400 sm:text-sm"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-zinc-400"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 block w-full appearance-none rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-white placeholder-zinc-500 shadow-sm focus:border-zinc-400 focus:outline-none focus:ring-zinc-400 sm:text-sm"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-zinc-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1 block w-full appearance-none rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-white placeholder-zinc-500 shadow-sm focus:border-zinc-400 focus:outline-none focus:ring-zinc-400 sm:text-sm"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-zinc-700 hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-400"
                  >
                    Send Message
                  </button>
                </motion.div>
                {status && <motion.p variants={itemVariants} className="text-center text-sm mt-4 text-zinc-400">{status}</motion.p>}
              </form>
            </motion.div>

            {/* Alternative Contact Links */}
            <div className="mt-16 lg:mt-0">
              <h3 className="text-2xl font-bold tracking-tight text-zinc-100">
                Connect with me
              </h3>
                <ul className="mt-8 space-y-4">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <a
                  href="mailto:boripat.kun@outlook.com"
                  className="flex items-center space-x-3 text-zinc-400 hover:text-white"
                  >
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm">boripat.kun@outlook.com</span>
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <a
                  href="https://www.linkedin.com/in/boripat-kunla-57278b203/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-zinc-400 hover:text-white"
                  >
                    {/* Replace with a custom LinkedIn icon or an icon from another library */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin h-5 w-5 flex-shrink-0"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    <span className="text-sm">LinkedIn</span>
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <a
                    href="https://github.com/deltcrosx1024"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-zinc-400 hover:text-white"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                    </svg>
                    <span className="text-sm">GitHub</span>
                  </a>
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  );
}
