import fs from "fs";
import matter from "gray-matter";
import path from "path";

const rootDirectory = path.join(process.cwd(), "content", "posts")

export type Post = {
    metadata: PostMetadata
    content: string
}

export type PostMetadata = {
    title?: string
    summary?: string
    image?: string
    author?: string
    publishedAt?: string
    slug?: string
}

export async function getPostBySlug(slug: string): Promise< Post | null> {
    try {
        const filePath = path.join(rootDirectory, `${slug}.mdx`);
        const fileContent = fs.readFileSync(filePath, {encoding: "utf8"})
        const {data, content} = matter(fileContent);
        return { metadata: { ...data, slug }, content }
    } catch(error) {
        console.log(error);
        return null 
    }
}

// for each post Individually

export async function getPosts(limit?: number): Promise<PostMetadata[]> {
    const files = fs.readdirSync(rootDirectory)

    const posts = await Promise.all(
        files.map(async file => await getPostMetadata(file))
    )
    const sortedPosts = posts.sort((a, b) => {
        if (new Date(a.publishedAt ?? "") < new Date(b.publishedAt ?? "")) {
            return 1
        }
        return -1
    })

    if (limit) {
        return sortedPosts.slice(0, limit)
    }
    return sortedPosts
}

export async function getPostMetadata(filepath: string): Promise<PostMetadata> {
    const slug = filepath.replace(/\.mdx$/, '')
    const filePath = path.join(rootDirectory, filepath)
    const fileContent = await fs.promises.readFile(filePath, { encoding: 'utf8' })
    const { data } = matter(fileContent)
    return { ...data, slug } as PostMetadata
}