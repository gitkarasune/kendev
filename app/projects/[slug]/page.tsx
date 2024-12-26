import { getProjectBySlug, getProjects } from '@/lib/projects';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';
import MDXContent from '@/components/mdx-content';

export async function generateStaticParams() {
    const projects = await getProjects()
    const slugs = projects.map(project => ({ slug: project.slug}))

    return slugs;
}


export default async function Project({ params}: {params: { slug: string }}) {

    const  {slug} = await params 
    const project = await getProjectBySlug(slug)

    if (!project) {
        notFound();
    }

    const { metadata, content } = project
    const { title, image, author, publishedAt } = metadata;

  return (
    <section className='pb-24 pt-32'>
        <div className='container max-w-3xl'>
            <Link
                href={"/projects"}
                className='mb-8 inline-flex items-center gap-2 text-sm font-light text-foreground'
            >
                <FaArrowLeft className='h-4 w-5'/>
                <span>Back to Projects</span>
            </Link>

            { image && (
                <div className='relative mb-6 h-80 w-full overflow-hidden'>
                    <Image
                        src={image}
                        alt={title || ""}
                        className='object-cover rounded-2xl'
                        layout='fill'
                        // sizes="(max-width: 600px)100vw, 50vw"
                    />
                </div>
            )}

            <header>
                <h1 className='title'>{title}</h1>
                <p className='mt-3 text-sm text-muted-foreground'>
                    { author } / { formatDate(publishedAt ?? "")}
                </p>
            </header>

            <main className='prose mt-16 dark:prose-invert'>
                <MDXContent source={content} />
            </main>
        </div>
    </section>
  )
}
