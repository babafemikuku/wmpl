// app/insights/[slug]/page.tsx

import { notFound } from "next/navigation";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { getAllPostSlugs, getPostBySlug } from "@/sanity/lib/client";
import { TaglineBanner } from "@/components/global/TaglineBanner";

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export const dynamicParams = true;

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-5 text-base leading-[1.75] text-[#121416CC]">
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2 className="mb-4 mt-10 text-2xl font-bold text-[#121416]">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-8 text-xl font-bold text-[#121416]">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="mb-2 mt-6 text-base font-bold uppercase text-[#121416]">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-2 border-electric-violet pl-5 text-base italic text-[#121416CC]">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-5 space-y-2 pl-5">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mb-5 list-decimal space-y-2 pl-5">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="text-base leading-[1.75] text-[#121416CC] before:mr-2 before:content-['→']">
        {children}
      </li>
    ),
    number: ({ children }) => (
      <li className="text-base leading-[1.75] text-[#121416CC]">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-[#121416]">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <span className="underline">{children}</span>,
  },
};

type Props = { params: Promise<{ slug: string }> };

export default async function InsightPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <main
      className="flex flex-1 flex-col pt-16"
      style={{ backgroundColor: "#F7F5F0" }}
    >
      <header className="container max-w-3xl pt-16 pb-10 md:pt-24 md:pb-14">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.1em] text-electric-violet">
          WMP Insight
        </p>
        <h1 className="max-w-2xl font-display text-3xl font-bold leading-[1.2] tracking-[-0.02em] text-[#121416] md:text-5xl">
          {post.title}
        </h1>

        {post.subtitle && (
          <h3 className="mt-4 max-w-2xl font-display text-xl italic leading-[1.4] text-[#121416]/50 md:text-2xl">
            {post.subtitle}
          </h3>
        )}

        <p className="mt-4 text-sm text-[#121416CF]">{post.readTime}</p>
      </header>

      <div className="container">
        <hr className="border-[#78706838]" />
      </div>

      <article className="container max-w-3xl py-12 md:py-16">
        {post.body ? (
          <PortableText value={post.body as any} components={components} />
        ) : (
          <p className="text-[#121416CC]">No content yet.</p>
        )}
      </article>

      <div className="container py-6">
        <TaglineBanner text="We design the system with you, so your team can run it with confidence." />
      </div>
    </main>
  );
}
