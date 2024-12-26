"use client"

import { useState } from "react"
import { PostMetadata } from "@/lib/posts"
import Posts from "@/components/posts"
import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
import { FaTimes } from "react-icons/fa"

export default function PostsSearch({ posts }: { posts: PostMetadata[]}) {
    const [ query, setQuery ] = useState("");
    const filtered = posts.filter(post => post.title?.toLowerCase().includes(query.toLowerCase()));

    const isFiltered = query.length > 0
    function resetFilter() {
        setQuery("");
    }
    return (
        <div>
            <div className="mb-12 flex items-center gap-5">
                <Input 
                    type="text"
                    placeholder="Search Posts"
                    className="h-11 w-full xl:w-full xl:mx-auto sm:w-1/2"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
                { isFiltered && (
                    <Button
                        size={"sm"}
                        variant={"secondary"}
                        onClick={resetFilter}
                        className="h-8 px-2 lg:px-3"
                    >
                        <FaTimes className="ml-1 h-5 w-5"/>
                    </Button>
                )}
            </div>
            <Posts posts={filtered} />
        </div>
    )
}