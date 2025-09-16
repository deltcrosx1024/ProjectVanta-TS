import { Header } from './components/nav';

const navigation = [
  { name: 'Projects', href: '/projects' },
  { name: 'Contacts', href: '/contacts' },
  { name: 'Profiles', href: '/profiles' },
];

export default function Home() {
//this is a main page, nothing here only my name and link to projects and contacts page

  return (
    <div className="bg-gray-900 h-screen w-screen">
      
      <Header/>

      <div className="relative isolate px-6 pt-14 lg:px-8 justify-center items-center">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 h-[100%] w-[100%]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
              View my profiles and see what I am capable of doing!{' '}
              <a href="/profiles" className="font-semibold text-indigo-400">
                <span aria-hidden="true">
                  Read more
                </span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl text-shadow-lg text-shadow-[gray]/50">
              DeltCrosX
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
              Freelance Software Developer, specializing in building and optimizing web applications for enhanced performance and user experience.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contacts"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Contact Me!
              </a>
              <a href="/projects" className="text-sm/6 font-semibold text-white">
                View Projects <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}