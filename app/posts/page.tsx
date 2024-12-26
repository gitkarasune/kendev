
import { getPosts } from "@/lib/posts"
import PostsSearch from "@/components/posts-search"

export default async function PostPage() {
  const posts = await getPosts()

  return (
    <section className="pb-24 pt-40">
      <div className="container max-w-5xl">

        <h1 className="title mb-12">Posts</h1>

        <PostsSearch posts={posts} />
      </div>
    </section>
  )
}
