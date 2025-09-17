import Link from 'next/link';
import { Eye } from 'lucide-react';
import { Redis } from '@upstash/redis';
import { allProjects } from 'contentlayer/generated';
import { Article } from './article';
import { FeaturedArticle } from './featuredarticle';
import { Header } from '@/app/components/nav';
import { Card } from '@/app/components/card';

const redis = Redis.fromEnv();

export const revalidate = 60;

export default async function Projects() {
    const keys = allProjects.map((p) => ['pageviews', 'projects', p.slug].join(':'));
  
    let views: Record<string, number> = {};
    if (keys.length > 0) {
        const result = (await redis.mget<number[]>(...keys)).reduce((acc, v, i) => {
        acc[allProjects[i].slug] = v ?? 0;
        return acc;
        }, {} as Record<string, number>);
        views = result;
    }

    const featured = allProjects.find((project) => project?.slug === 'projectsinister')!;
    const top2 = allProjects.find((project) => project?.slug === 'projectmcgellan')!;
    const top3 = allProjects.find((project) => project?.slug === 'projectvanta')!;
    const sorted = allProjects
        .filter((p) => p.published)
        .filter((project) =>
            project?.slug !== featured?.slug &&
            project?.slug !== top2?.slug &&
            project?.slug !== top3?.slug,
        )
        .sort(
            (a, b) =>
              new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
              new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
          );

    return (
        <div className=" relative isolate px-0 py-3 lg:px-8 lg:py-14 justify-center items-center bg-gray-900">
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
                    className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
                />
            </div>
            {/*Contents*/}
            <Header />
            <main className="pt-0 lg:pt-0">
                <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                    <div className="max-w-2xl mx-auto lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                            Projects
                        </h2>
                        <p className="mt-4 text-zinc-400">
                            A collection of my work, showcasing my skills and expertise in
                            software development.
                        </p>
                    </div>
                    <div className="w-full h-px bg-white" />
                </div>
            </main>
            <section className="relative isolate content-center justify-center px-[6.25%] py-[1%] md:px-[12.5%] lg:px-[25%] lg:py-[2%]">
                <div className='grid col-auto row-auto gap-4 flex-[3_1_auto]'>
                    <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
                        {[featured].map((project) => (
                        <Card key={project?.slug}>
                            <FeaturedArticle project={project} views={views[project?.slug] ?? 0} />
                        </Card>
                        ))}
                    </div>
                    <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0">
                        <div className="grid grid-flow-col auto-cols-auto gap-4">
                            {[top2, top3].map((project) => (
                            <Card key={project?.slug}>
                                <Article project={project} views={views[project?.slug] ?? 0} />
                            </Card>
                            ))}
                        </div>
                    </div>
                    
                </div>
            </section>
            <div className="mx-auto max-w-7xl">
                <div className="hidden w-full h-px md:block bg-white m-4" />
            </div>
            <section className="relative isolate content-center justify-center px-[6.25%] py-[1%] md:px-[12.5%] px-[25%] py-[2%]">
                

                <div className="p-[2%] pb-[4%]">
                    <h2 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-2xl">
                        Other Projects I do.
                    </h2>
                    <p className="mt-4 text-zinc-400">
                        Discover more about what I can do here.
                    </p>
                </div>

                <div className="grid grid-flow-col auto-cols-full gap-4 auto-rows-full">
                    <div className="grid grid-cols-1 gap-4">
                        {sorted
                        .filter((_, i) => i % 3 === 0)
                        .map((project) => (
                            <Card key={project?.slug}>
                            <Article project={project} views={views[project?.slug] ?? 0} />
                            </Card>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {sorted
                        .filter((_, i) => i % 3 === 1)
                        .map((project) => (
                            <Card key={project?.slug}>
                            <Article project={project} views={views[project?.slug] ?? 0} />
                            </Card>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {sorted
                        .filter((_, i) => i % 3 === 2)
                        .map((project) => (
                            <Card key={project?.slug}>
                            <Article project={project} views={views[project?.slug] ?? 0} />
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>

    );
}