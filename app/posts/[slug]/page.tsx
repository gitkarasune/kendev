import { getPostBySlug, getPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import React from 'react'
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';
import MDXContent from '@/components/mdx-content';

export async function generateStaticParams() {
    const posts = await getPosts()
    const slugs = posts.map(post => ({ slug: post.slug }))

    return slugs;
}


export default async function Post({ params }: { params: { slug: string } }) {

    const { slug } = await params
    const post = await getPostBySlug(slug)

    if (!post) {
        notFound();
    }

    const { metadata, content } = post
    const { title, image, author, publishedAt } = metadata;

    return (
        <section className='pb-24 pt-32'>
            <div className='container max-w-3xl'>
                <Link
                    href={"/posts"}
                    className='mb-8 inline-flex items-center gap-2 text-sm font-light text-foreground'
                >
                    <FaArrowLeft className='h-4 w-5' />
                    <span>Back to posts</span>
                </Link>

                {image && (
                    <div className='relative mb-6 h-80 overflow-hidden w-full rounded-lg'>
                        <Image
                            src={image}
                            priority
                            alt={title || ""}
                            className='object-cover rounded-2xl'
                            fill
                        />
                    </div>
                )}

                <header>
                    <h1 className='title'>{title}</h1>
                    <p className='mt-3 text-sm text-muted-foreground'>
                        <span className='italic'>by</span> <span className='font-semibold'>{author} - Kendev</span> / <span className='font-semibold'>{formatDate(publishedAt ?? "")}</span>
                    </p>
                </header>

                <main className='prose mt-16 dark:prose-invert'>
                    <MDXContent source={content} />
                </main>
            </div>
        </section>
    )
}
