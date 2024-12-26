import Link from "next/link"
import ThemeToggle from "./ThemeToggle"

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
        <nav className="container flex max-w-3xl items-center justify-between">

            {/* Whatever to place here matters alot */}
            <div>
                <Link href={"/"} className="text-lg italic">
                    Kendev
                </Link>
            </div>

            {/* For the Navigation to different Pages and routes */}
            <ul className="flex items-center gap-6 text-sm font-light text-muted roboto">
                <li className="transition-colors text-foreground hover:text-foreground">
                    <Link href={"/posts"}>Posts</Link>
                </li>
                <li className="transition-colors text-foreground hover:text-foreground">
                    <Link href={"/projects"}>Builds</Link>
                </li>
                <li className="transition-colors text-foreground hover:text-foreground">
                    <Link href={"/contact"}>Contact</Link>
                </li>
            </ul>

            {/* The Theme Toggler */}
            <div>
                <ThemeToggle/>
            </div>
        </nav>
    </header>
  )
}
