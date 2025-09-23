import { Redis } from '@upstash/redis';
import { allProjects } from 'contentlayer/generated';
import { Article } from './article';
import { FeaturedArticle } from './featuredarticle';
import { Header } from '@/app/components/nav';
import { Card } from '@/app/components/card';
import BackgroundDarkVeil from '@/app/components/bg_darkveil';
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
            
            <BackgroundDarkVeil />
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
                    <div className="w-full h-px bg-gray-700" />
                </div>
            </main>
            <section className="relative isolate content-center justify-center px-[6.25%] py-[1%] md:px-[12.5%] lg:px-[25%] lg:py-[2%]">
                
                <div className="p-[2%] pb-[4%]">
                    <h2 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-2xl">
                        Featured Projects.
                    </h2>
                    <p className="mt-4 text-zinc-400">
                        These are some of my highlighted projects that demonstrate my skills and expertise.
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <Card>
                        <FeaturedArticle project={featured} views={views[featured?.slug] ?? 0} />
                    </Card>
                    <div className="grid grid-col-1 gap-4">
                        {[top2, top3].map((project) => (
                        <Card key={project?.slug}>
                            <Article project={project} views={views[project?.slug] ?? 0} />
                        </Card>
                        ))}
                    </div>
                </div>
            </section>
            <div className="pt-2 lg:pt-0">
                <div className="px-6 mx-auto max-w-7xl lg:px-8">
                    <div className="w-full h-px bg-gray-700"/>
                </div>
            </div>
            <section className="relative isolate content-center justify-center px-[6.25%] py-[1%] md:px-[12.5%] lg:px-[25%] lg:py-[2%]">
                <div className="p-[2%] pb-[4%]">
                    <h2 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-2xl">
                        Other Projects I do.
                    </h2>
                    <p className="mt-4 text-zinc-400">
                        Discover more about what I can do here.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {sorted.map((project) => (
                    <Card key={project?.slug}>
                        <Article project={project} views={views[project?.slug] ?? 0} />
                    </Card>
                    ))}
                </div>
            </section>
        </div>
    );
}