"use client";

import type { Project } from "contentlayer/generated";
import Link from "next/link";
import { Eye } from "lucide-react";
import { motion } from "framer-motion";
import CountUp from "@/app/components/countup";

type Props = {
	project: Project;
	views: number;
};

export const Article: React.FC<Props> = ({ project, views }) => {
	return (
		<Link href={`/projects/${project?.slug}`}>
			<motion.article
				className="p-4 md:p-8 flex flex-col h-full"
				whileHover={{ scale: 1.03, y: -5 }}
				transition={{ type: "spring", stiffness: 300, damping: 20 }}
			>
				{/* Card Header with Date and Views */}
				<div className="flex justify-between items-center z-10">
					<span className="text-xs text-zinc-200 duration-1000 group-hover:text-white drop-shadow-orange">
						{project?.date ? (
							<time dateTime={new Date(project?.date).toISOString()}>
								{Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
									new Date(project?.date),
								)}
							</time>
						) : (
							<span>SOON</span>
						)}
					</span>
					<span className="text-zinc-500 text-xs flex items-center gap-1">
						<Eye className="w-4 h-4" />{" "}
						<CountUp to={views} duration={0.5} separator="," />
					</span>
				</div>
				{/* Main Article Content */}
				<div className="mt-8 flex-grow">
					<h2 className="z-20 text-xl text-wrap font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
						{project?.title}
					</h2>
					<p className="z-20 mt-4 text-sm text-wrap duration-1000 text-zinc-400 group-hover:text-zinc-200">
						{project?.description}
					</p>
				</div>
			</motion.article>
		</Link>
	);
};