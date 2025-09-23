"use client";

import { useState, ChangeEvent, FormEvent } from "react";
// @ts-ignore
import { Mail, Github, Linkedin } from "lucide-react";
import { Header } from "@/app/components/nav";
import { motion } from "framer-motion";

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
    <div className="relative isolate min-h-screen bg-gray-900 py-12 px-6 lg:px-8">
      <Header />
      {/* Background gradient blur, similar to your existing site */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 w-screen h-[100%]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
        />
      </div>

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
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <a
                  href="https://www.linkedin.com/in/boripat-kunla-57278b203/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-zinc-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5 flex-shrink-0" />
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
                  <Github className="h-5 w-5 flex-shrink-0" />
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
