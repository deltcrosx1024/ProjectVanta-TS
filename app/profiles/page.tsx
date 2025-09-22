"use client";

import { Header } from "@/app/components/nav";
import Image from "next/image";
import { Mail, Github, Linkedin, Briefcase, GraduationCap, Code } from "lucide-react";

export default function Profiles() {

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

      <main className="mx-auto max-w-7xl pt-16 lg:pt-24">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-6xl">
            Boripat Kunla
          </h1>
          <p className="mt-6 text-xl text-zinc-400">
            Desktop App Developer, Fullstack web developer, and Embedded System Developer
          </p>
          <p className="mt-4 text-base text-zinc-500">
            If it works, don't ask why it works. Just make it better.
          </p>
        </div>

        {/* Two-column Layout for Main Content */}
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-16">
          {/* Left Column: Profile, Contact, Skills */}
          <div className="md:col-span-1 space-y-8">
            {/* Profile Section */}
            <div className="p-6 rounded-xl border border-zinc-700 bg-zinc-800/20 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-zinc-100">Profile</h2>
              <div className="mt-4 text-zinc-400">
                {/* Placeholder for your professional photo */}
                <div className="w-32 h-32 mx-auto rounded-full bg-zinc-700">
                  <Image
                    src="@/public/1755046585772.jpg" // Replace with your image path
                    alt="Boripat Kunla"
                    width={128}
                    height={128}
                    className="rounded-full"
                  />
                </div>
                <p className="mt-4 text-center">
                  Phetchabun, Thailand | Born on 20 March 2006
                </p>
              </div>
              <ul className="mt-6 space-y-4">
                <li>
                  <a href="#" className="flex items-center space-x-3 text-zinc-400 hover:text-white">
                    <Mail className="h-5 w-5 flex-shrink-0" />
                    <span>boripat.kun@outlook.com</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-3 text-zinc-400 hover:text-white">
                    <Linkedin className="h-5 w-5 flex-shrink-0" />
                    <span>https://www.linkedin.com/in/boripat-kunla-57278b203/</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-3 text-zinc-400 hover:text-white">
                    <Github className="h-5 w-5 flex-shrink-0" />
                    <span>https://github.com/deltcrosx1024</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Experience and Education */}
          <div className="md:col-span-2 space-y-12">
            {/* Professional Summary */}
            <div className="p-6 rounded-xl border border-zinc-700 bg-zinc-800/20 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-zinc-100">Summary</h2>
              <p className="mt-4 text-zinc-400 text-wrap">
                A dedicated and results-driven Full Stack Developer with 5+ years of experience building and maintaining modern web applications. Proficient in the MERN stack, with a strong background in Next.js, Tailwind CSS, and serverless architectures. I thrive on solving complex problems, writing clean and efficient code, and collaborating with cross-functional teams to deliver high-quality, scalable solutions. I am actively seeking a challenging role where I can apply my skills to build innovative products and contribute to a team's success.
              </p>
            </div>

            {/* Experience Section */}
            <div className="p-6 rounded-xl border border-zinc-700 bg-zinc-800/20 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-zinc-100">Experience</h2>
              <ul className="mt-6 space-y-8">
                <li>
                  <div className="flex items-start space-x-4">
                    <Briefcase className="h-6 w-6 text-zinc-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">Lead App Developer/server engineer</h3>
                      <p className="text-sm text-zinc-400">Halliday Co, LTD. | 2022-04</p>
                      <ul className="mt-2 list-disc list-inside text-zinc-400 space-y-1 text-sm">
                        <li>Lead App Developer</li>
                        <li>Key accomplishments or projects you worked on.</li>
                        <li>Technologies used.</li>
                      </ul>
                    </div>
                  </div>
                </li>
                {/* Add more experience list items as needed */}
              </ul>
            </div>

            {/* Education Section */}
            <div className="p-6 rounded-xl border border-zinc-700 bg-zinc-800/20 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-zinc-100">Education</h2>
              <ul className="mt-6 space-y-4">
                <li>
                  <div className="flex items-start space-x-4">
                    <GraduationCap className="h-6 w-6 text-zinc-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">High School Diploma</h3>
                      <p className="text-sm text-zinc-400">Petpittayakom School | May 2022</p>
                    </div>
                  </div>
                </li>
                {/* Add more education list items as needed */}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}