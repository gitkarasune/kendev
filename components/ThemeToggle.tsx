'use client'

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

//import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from "lucide-react"

export default function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme()
    const [ mounted, setMounted ] = useState(false)

    useEffect(()=> {
        setMounted(true);
    },[]);

    if (!mounted) {
        return null
    }

  return (
    <button
        className="h-8 rounded-md px-4 text-xs  hover:bg-accent hover:text-accent-foreground"
        onClick={() => {
            setTheme(resolvedTheme === 'dark' ? 'light': 'dark')
        }}
    >
        { resolvedTheme === 'dark' ? (
            <SunIcon className="size-4 text-white"/>
        ) : (
            <MoonIcon className="size-4 text-sky-950" />
        )}
        <span className="sr-only">Toggle theme</span>
    </button>
  )
}
