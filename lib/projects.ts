import fs from "fs";
import matter from "gray-matter";
import path from "path";

const rootDirectory = path.join(process.cwd(), "content", "projects")

export type Projects = {
    metadata: ProjectMetadata
    content: string
}

export type ProjectMetadata = {
    title?: string
    summary?: string
    image?: string
    author?: string
    publishedAt?: string
    slug?: string
}

export async function getProjectBySlug(slug: string): Promise< Projects | null> {
    try {
        const filePath = path.join(rootDirectory, `${slug}.mdx`);
        const fileContent = fs.readFileSync(filePath, {encoding: "utf8"})
        const {data, content} = matter(fileContent);
        return { metadata: { ...data, slug }, content }
    } catch(error) {
        return null 
    }
}

// for each post Individually

export async function getProjects(limit?: number): Promise<ProjectMetadata[]> {
    const files = fs.readdirSync(rootDirectory)

    const projects = await Promise.all(
        files.map(async file => await getProjectMetadata(file))
    )
    const sortedProject = projects.sort((a, b) => {
        if (new Date(a.publishedAt ?? "") < new Date(b.publishedAt ?? "")) {
            return 1
        }
        return -1
    })

    if (limit) {
        return sortedProject.slice(0, limit)
    }
    return sortedProject
}

export async function getProjectMetadata(filepath: string): Promise<ProjectMetadata> {
    const slug = filepath.replace(/\.mdx$/, '')
    const filePath = path.join(rootDirectory, filepath)
    const fileContent = await fs.promises.readFile(filePath, { encoding: 'utf8' })
    const { data } = matter(fileContent)
    return { ...data, slug } as ProjectMetadata
}