"use client"

import { useState } from "react"
import { ProjectMetadata } from "@/lib/projects"
import Projects from "@/components/projects"
import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
import { FaTimes } from "react-icons/fa"

export default function ProjectSearch({ projects }: { projects: ProjectMetadata[] }) {

    const [query, setQuery] = useState("");
    const filtered = projects.filter(project => project.title?.toLowerCase().includes(query.toLowerCase()));

    const isFiltered = query.length > 0
    function resetFilter() {
        setQuery("");
    }

    return (
        <div>
            <div className="mb-12 flex items-center gap-5">
                <Input
                    type="text"
                    placeholder="Search Projects"
                    className="h-11 w-full xl:w-full xl:mx-auto sm:w-1/2"
                    value={query}
                    onChange={(e: any) => setQuery(e.target.value)}
                />
                {isFiltered && (
                    <Button
                        size={"sm"}
                        variant={"secondary"}
                        onClick={resetFilter}
                        className="h-8 px-2 lg:px-3"
                    >
                        <FaTimes className="ml-1 h-5 w-5" />
                    </Button>
                )}
            </div>
            <Projects projects={filtered} />
        </div>
    )
}
