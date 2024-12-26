//import Projects from "@/components/projects"
import { getProjects } from "@/lib/projects"
import ProjectSearch from "@/components/project-search"

export default async function ProjectPage() {

  const projects = await getProjects()

  return (
    <section className="pb-24 pt-40">
      <div className="container max-w-3xl">
        <h1 className="title mb-12">Project</h1>

        <ProjectSearch projects={projects} />
      </div>
    </section>
  )
}
