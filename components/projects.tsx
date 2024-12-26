import Link from "next/link"
import Image from "next/image"
 
import { ProjectMetadata } from "@/lib/projects"
import { formatDate } from "@/lib/utils"

export default function Projects({ projects }: { projects: ProjectMetadata[] }) {
    return (
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {projects.map(project => (
                <li key={project.slug} className="group relative w-full overflow-hidden">
                    <Link href={`/projects/${project.slug}`}>
                        {project.image && (
                            <div className="h-72 w-full overflow-hidden bg-muted sm:h-60">
                                <Image
                                    src={project.image}
                                    alt={project.title || ""}
                                    fill
                                    priority
                                    sizes="100vw"
                                    className="rounded-2xl object-cover object-center transition"
                                />
                            </div>
                        )}

                        <div className="absolute inset-0 rounded-lg bg-background/10 dark:bg-background/70 bg-opacity-50 transition-all duration-100 opacity-0 hover:opacity-100">

                            <div className="absolute inset-x-0 bottom-0 translate-y-2 px-6 py-6 bg-background/20 dark:bg-background/0 transition-all duration-500 hover:translate-y-0">
                                <h2 className="title line-clamp-1 text-lg no-underline">
                                    {project.title}
                                </h2>
                                <p className="line-clamp-1 text-sm :text-gray-900 dark:text-muted-foreground">
                                    {project.summary}
                                </p>
                                <p className="text-xs font-light text-gray-700">
                                    {formatDate(project.publishedAt ?? "")}
                                </p>
                            </div>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
