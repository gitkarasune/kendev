import Image from "next/image"
import authorKaraImage from "@/public/Images/authors/profile.jpg"
import { JSX, SVGProps } from 'react'
import { FaGithub, FaLinkedinIn, FaCrosshairs } from 'react-icons/fa'
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger, DialogHeader } from "@/components/ui/dialog"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

const navigation = [
    {
        name: 'Linkedin',
        href: 'https://linkedin.com/in/sune-kara',
        icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => <FaLinkedinIn {...props} />,
        
    },
    {
        name: 'Github',
        href: 'https://github.com/gitkarasune',
        icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => <FaGithub {...props} />, 
    }
]

export default function Intro() {

    return (
        <>
            <section className="flex md:flex-row flex-col-reverse items-start gap-x-10 gap-y-10 pb-24 pt-3">
                <div className="flex-1">
                    <h1 className="title no-underline">Hello, I&#39;m Kara Sune</h1>

                    <p className="mt-3 font-light text-muted-foreground">
                        I&#39;m a FullStack Developer | React | JavaScript | NodeJs | Tailwindcss | NextJs | TypeScript | MongoDB | SQL
                    </p>

                    <div className="flex gap-3 mt-6">
                        {navigation.map(item => (
                            <a
                                key={item.name}
                                href={item.href}
                                target="_blank"
                                role='noreferrer noopener'
                                className='text-muted-foreground hover:text-foreground'
                            >
                                <span className='sr-only'>{item.name}</span>
                                <span aria-hidden='true' className='h-10 w-10'>
                                {item.icon({})}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* For the Image */}
                <Dialog>
                    <div className="relative">
                        <DialogTrigger asChild>
                            <Image
                                className="flex-1 rounded-full grayscale hover:grayscale-0"
                                src={authorKaraImage}
                                alt="Kara Sunebari"
                                width={175}
                                height={175}
                                priority={true}
                            />
                        </DialogTrigger>
                        <span className="absolute bottom-1 right-1 bg-blue-400 dark:bg-gray-900 p-2 rounded-full text-white">
                            <HoverCard>
                                <HoverCardTrigger asChild>
                                    <FaCrosshairs />
                                </HoverCardTrigger>
                                <HoverCardContent className="w-24 text-sm">
                                    Avaliable
                                </HoverCardContent>
                            </HoverCard>
                        </span>
                    </div>

                    {/* Now the Dialog Pop-Up is here */}
                    <DialogContent className="mx-auto roboto p-14 rounded-md">
                        <DialogHeader className="flex flex-col justify-center items-center">
                            <DialogTitle className="text-center mb-10">Achievements</DialogTitle>
                            <DialogDescription className="flex flex-col justify-start items-start">
                                <div className="grid grid-col-1 grid-cols-2 gap-3">
                                    <div className="w-10 h-10 bg-red-900 py-10 px-20 flex justify-center items-center rounded-2xl">Hello</div>
                                    <div className="w-10 h-10 bg-red-900 py-10 px-20 flex justify-center items-center rounded-2xl">Hello</div>
                                    <div className="w-10 h-10 bg-red-900 py-10 px-20 flex justify-center items-center rounded-2xl">Hello</div>
                                    <div className="w-10 h-10 bg-red-900 py-10 px-20 flex justify-center items-center rounded-2xl">Hello</div>
                                </div>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </section>
        </>
    )
}
