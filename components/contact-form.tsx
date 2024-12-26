"use client"

import ProfileCard from "./profile-card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function ContactForm() {

  return (
    <section className="roboto">
      <h1 className="text-xl font-bold mt-14 mb-3">Contact Me</h1>

      <ProfileCard
        name="Kara Sune"
        bio="I&#39;m a FullStack Developer | React | JavaScript | NodeJs | Tailwindcss | NextJs | TypeScript | MongoDB | SQL"
        email="Karasune66@gmail.com"
        linkedin="https://www.linkedin.com/in/sune-kara"
        github="https://github.com/gitKarasune"
      />

      <h2 className="text-xl font-bold mt-16">FAQ</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-semibold">What makes your web development projects stand out?</AccordionTrigger>
          <AccordionContent className="roboto leading-6">
            I always try to make sure my projects are as user-friendly as possible. I focus on writing clean, efficient code and aim to create fast, responsive website. I also make sure that everything is built to scale and <span className="font-bold">optimized</span> for <span className="font-bold">performance</span>, so your website or app runs smoothly no matter what.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="font-semibold">What technologie you specialize in?</AccordionTrigger>
          <AccordionContent>
            I&apos;m comfortable with a bunch of tools and frameworks, like React, JavaScript, Node.js, Next.js and TypeScript. I use Tailwind CSS for styling and sometimes use Bootstrap for quick build and design which makes the Front-End fast and flexible. Whether it&apos;s building the Front-End or Back-End, I make sure everything works together perfectly to create nice end product.
            <a href="https://github.com/gitKarasune" className="ml-1 font-bold hover:text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
               Check out for some other technologie i use:
            </a>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="font-semibold">Can you help with both Front-End and Back-End development?</AccordionTrigger>
          <AccordionContent>
            <span className="font-bold">Certainly</span>, I work on both the Font-End and Back-End. On the Front-End, I build interfaces that are easy to use and look great. On the Back-End, I develop the systems and APIs that power the website or app. I like to make sure everything is smooth, from start to finish.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}
