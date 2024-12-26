import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa"
import { Button } from "@/components/ui/button"

export default function notFound() {
    return (
        <section className="pb-24 pt-40">
            <div className="min-h-full px-4 sm:py-24 md:grid md:place-items-center">
                <div className="max-w-max mx-auto">
                    <main className="sm:flex">
                        <p className="text-4xl font-bold tracking-wide lg:text-8xl text-muted-foreground lg:text-black dark:lg:text-white lg:animate-bounce">
                            404
                        </p>
                        <div className="sm:ml-6">
                            <div className="sm:border-1 sm:border-gray-200 sm:pl-6">
                                <h1 className="text-4xl font-bold tracking-tight text-gray-800">
                                    Page not found
                                </h1>
                                <p className="mt-1 text-base text-muted-foreground">
                                    Please check your URL in the address bar and try again.
                                </p>
                            </div>

                            <button
                            className="h-9 px-12 mt-7 bg-black dark:bg-white rounded-sm text-white dark:text-black lg:ml-6"
                            >
                                <div className="flex items-center space-x-3 sm:border-1 sm:border-transparent">
                                    <Link
                                        href={"/"}
                                        className="inline-flex items-center gap-3 font-bold"
                                    >
                                        <FaArrowLeft className="h-5 w-5 " />
                                        <span>Go back home</span>
                                    </Link>
                                </div>
                            </button>
                        </div>

                    </main>
                </div>
            </div>
        </section>
    )
}
