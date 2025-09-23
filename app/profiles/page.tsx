"use client";

import { Header } from "@/app/components/nav";
import Image from "next/image";
import profile from "./profile.png"; // Ensure you have a profile image in the public directory
import { Mail, Github, Linkedin, Briefcase, GraduationCap } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import BackgroundDarkVeil from '@/app/components/bg_darkveil';

// A reusable component to animate sections as they enter the viewport
const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: delay }}
    >
      {children}
    </motion.div>
  );
};

export default function Profiles() {
  return (
    <div className="relative isolate min-h-screen bg-gray-900 py-12 px-6 lg:px-8">
      <Header />
      {/* Background gradient blur, similar to your existing site */}
      <BackgroundDarkVeil />
      <main className="mx-auto max-w-7xl pt-16 lg:pt-24">
        {/* Hero Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-6xl">
            Boripat Kunla
          </h1>
          <p className="mt-6 text-xl text-zinc-400">
            Desktop App Developer, Fullstack web developer, and Embedded System Developer
          </p>
          <p className="mt-4 text-base text-zinc-500">
            If it works, don't ask why it works. Just make it better.
          </p>
        </motion.div>

        {/* Two-column Layout for Main Content */}
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-16">
          {/* Left Column: Profile, Contact, Skills */}
          <div className="md:col-span-1 space-y-8">
            {/* Profile Section */}
            <AnimatedSection>
              <div className="p-6 rounded-xl border border-zinc-700 bg-zinc-800/20 backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-zinc-100">Profile</h2>
                <div className="mt-4 text-zinc-400">
                  {/* Placeholder for your professional photo */}
                  <div className="w-32 h-32 mx-auto rounded-full bg-zinc-700">
                    <Image
                      src={profile} // Replace with your actual image path
                      alt="Boripat Kunla"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <p className="mt-4 text-center">
                    Phetchabun, Thailand | Born on 20 March 2006
                  </p>
                </div>
                <ul className="mt-6 space-y-4">
                  <li>
                    <motion.a
                      href="mailto:boripat.kun@outlook.com"
                      className="flex items-center space-x-3 text-zinc-400 hover:text-white"
                      whileHover={{ x: 5 }}
                    >
                      <Mail className="h-5 w-5 flex-shrink-0" />
                      <span>boripat.kun@outlook.com</span>
                    </motion.a>
                  </li>
                  <li>
                    <motion.a
                      href="https://www.linkedin.com/in/boripat-kunla-57278b203/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-zinc-400 hover:text-white"
                      whileHover={{ x: 5 }}
                    >
                      <Linkedin className="h-5 w-5 flex-shrink-0" />
                      <span>https://www.linkedin.com/in/boripat-kunla-57278b203/</span>
                    </motion.a>
                  </li>
                  <li>
                    <motion.a
                      href="https://github.com/deltcrosx1024"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-zinc-400 hover:text-white"
                      whileHover={{ x: 5 }}
                    >
                      <Github className="h-5 w-5 flex-shrink-0" />
                      <span>https://github.com/deltcrosx1024</span>
                    </motion.a>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Experience and Education */}
          <div className="md:col-span-2 space-y-12">
            {/* Professional Summary */}
            <AnimatedSection delay={0.2}>
              <div className="p-6 rounded-xl border border-zinc-700 bg-zinc-800/20 backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-zinc-100">Summary</h2>
                <p className="mt-4 text-zinc-400 text-wrap">
                  A dedicated and results-driven Full Stack Developer with 5+ years of experience building and maintaining modern web applications. Proficient in the MERN stack, with a strong background in Next.js, Tailwind CSS, and serverless architectures. I thrive on solving complex problems, writing clean and efficient code, and collaborating with cross-functional teams to deliver high-quality, scalable solutions. I am actively seeking a challenging role where I can apply my skills to build innovative products and contribute to a team's success.
                </p>
              </div>
            </AnimatedSection>

            {/* Experience Section */}
            <AnimatedSection delay={0.3}>
              <div className="p-6 rounded-xl border border-zinc-700 bg-zinc-800/20 backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-zinc-100">Experience</h2>
                <ul className="mt-6 space-y-8">
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <div className="flex items-start space-x-4">
                      <Briefcase className="h-6 w-6 text-zinc-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-zinc-200">Web Developer/Discord Bot Developer</h3>
                        <p className="text-sm text-zinc-400">Juanperfect Cooperation, LTD. | 2021-03 to 2922-01</p>
                        <ul className="mt-2 list-disc list-inside text-zinc-400 space-y-1 text-sm">
                          <li>Develop Website using the legacy web2 technologies. ensuring the best user experiences and backend performance</li>
                          <li>I develop the website for minecraft server, including shop sections, user authentication, and real-time chat features. plus the integrated database used for authenticate user with the minecraft accounts</li>
                          <li>HTML, CSS, JavaScript, PHP, PHPMyAdmin, MySQL</li>
                        </ul>
                      </div>
                    </div>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    <div className="flex items-start space-x-4">
                      <Briefcase className="h-6 w-6 text-zinc-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-zinc-200">Lead App Developer/Server Engineer</h3>
                        <p className="text-sm text-zinc-400">Halliday Co, LTD. | 2022-04 to 2022-09</p>
                        <ul className="mt-2 list-disc list-inside text-zinc-400 space-y-1 text-sm">
                          <li>Develop an applications for internal use, focusing on user experience and performance.</li>
                          <li>I develop the main applications, ensuring high performance and responsiveness. working through backend of the app. Basically develop everything from scratch. Administrate the Server and the Database.</li>
                          <li>Kotlin, Spring Boot, PostgreSQL</li>
                        </ul>
                      </div>
                    </div>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    <div className="flex items-start space-x-4">
                      <Briefcase className="h-6 w-6 text-zinc-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-zinc-200">Freelance Software Developer</h3>
                        <p className="text-sm text-zinc-400">Frelancing, Work from home | 2023-07 to Present</p>
                        <ul className="mt-2 list-disc list-inside text-zinc-400 space-y-1 text-sm">
                          <li>Develop the software and website to match the client preferences and briefing.</li>
                          <li>I received the briefing from the client and translated their needs into technical requirements. make it happen to match the client preference. most of the time working on making website, developing Warehouse Management System(WMS) and other stuff, develop the desktop app, webapp and manage the token, Developing Discord Bot using Discord API.</li>
                          <li>C#, .NET, ASP.NET, Next.js, TailwindCSS, MongoDB Atlas, Discord.js, VertexAI API, Google Cloud Platform, MySQLI, PHP, HTML, CSS, Javascript, React, and WinUI3</li>
                        </ul>
                      </div>
                    </div>
                  </motion.li>
                </ul>
              </div>
            </AnimatedSection>

            {/* Education Section */}
            <AnimatedSection delay={0.4}>
              <div className="p-6 rounded-xl border border-zinc-700 bg-zinc-800/20 backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-zinc-100">Education</h2>
                <ul className="mt-6 space-y-4">
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                  >
                    <div className="flex items-start space-x-4">
                      <GraduationCap className="h-6 w-6 text-zinc-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-zinc-200">High School Diploma</h3>
                        <p className="text-sm text-zinc-400">Petpittayakom School | May 2022</p>
                      </div>
                    </div>
                  </motion.li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </main>
    </div>
  );
}