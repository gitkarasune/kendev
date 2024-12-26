import Link from "next/link"
import { getPosts } from "@/lib/posts"
import Posts from "@/components/posts"

export default async function RecentPosts() {

    // I only need 5(Five) Recent Posts
    const posts = await getPosts(5);

  return (
    <section className="pb-24">
        <div>
            <h2 className="title mb-12">My Recent Posts</h2>
            <Posts posts={posts} />

            <Link
                href={"/posts"}
                className="mt-8 inline-flex items-center gap-2 text-muted-foreground"
            >
                <span className="hover:text-blue-200 text-sm bg-gray-300 dark:bg-black dark:border transform transition-all text-gray-700 dark:text-gray-200 hover:bg-black hover:dark:bg-white dark:hover:text-black w-28 px-2 py-3 rounded-full flex justify-center cursor-pointer items-center">View All Posts</span>
            </Link>
        </div>
    </section>
  )
}
