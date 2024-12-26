import Link from "next/link"
import { getProjects } from "@/lib/projects"
import Project from "@/components/projects"

export default async function RecentProjects() {

    const projects = await getProjects(4);

  return (
    <section className="pb-24">
        <div>
            <h2 className="title mb-12">My Recent Projects</h2>

            <Project projects={projects}/>
            <Link
                href={"/projects"}
                className="mt-8 inline-flex items-center gap-2 text-muted-foreground"
            >
                <span className="hover:text-blue-200 text-sm bg-gray-300 dark:bg-black dark:border transform transition-all text-gray-700 dark:text-gray-200 hover:bg-black hover:dark:bg-white dark:hover:text-black w-32 py-3 rounded-full flex justify-center cursor-pointer items-center">View All Projects</span>
            </Link>
        </div>
    </section>
  )
}
