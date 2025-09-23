"use client";

import Link from 'next/link';
import { Header } from './components/nav';
import SplitText from './components/splittext';

const handleAnimationComplete = () => {
  console.log('Animation complete!');
};

export default function Home() {
  return (
    
    <div className="bg-gray-900 min-h-screen w-screen relative isolate overflow-hidden">
      <Header />
      {/*Background Clipping*/}
      <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 w-screen h-[100%]"
      >
          <div
              style={{
                  clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
            </div>
      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-14 lg:px-8 text-center animate-fade-in">
        <div className="relative isolate">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center animate-fade-in-down">
            <div className="relative rounded-full px-4 py-1.5 text-sm font-semibold text-gray-400 ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300 transform hover:scale-105">
              View my profiles and see what I am capable of doing!{' '}
              <a href="/profiles" className="font-semibold text-indigo-400 transition-colors hover:text-indigo-300">
                <span aria-hidden="true">
                  Read more
                </span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          
          <div className="animate-fade-in-down animation-delay-300">
            <SplitText 
              text="DeltCrosX"
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-balance text-zinc-100 drop-shadow-lg" 
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <p className="mt-6 text-base sm:text-lg font-medium text-pretty text-zinc-400">
              Freelance Software Developer, specializing in building and optimizing web applications for enhanced performance and user experience.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-4">
              <Link
                href="/contacts"
                className="rounded-full bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Contact Me!
              </Link>
              <Link
                href="/projects"
                className="text-sm font-semibold text-zinc-300 transition-colors duration-300 hover:text-white"
              >
                View Projects <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}