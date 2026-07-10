import { createClient } from 'next-sanity'
import type { PortableTextBlock } from '@portabletext/react'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})

const sanityFetchOptions = { next: { revalidate: 5 } };

 
export type PostCard = {
  _id: string;
  title: string;
  slug: string;
  readTime: string;
};
 
export type PostFull = PostCard & {
  publishedAt: string | null;
  subtitle: string | null; 
  body: PortableTextBlock[];
};

type PostCardFromSanity = Omit<PostCard, "readTime"> & {
  bodyText?: string | null;
};

type PostFullFromSanity = Omit<PostFull, "readTime"> & {
  bodyText?: string | null;
};

export type BioSectionContent = {
  stats?: {
    value?: string | null;
    label?: string | null;
  }[] | null;
  quote?: string | null;
  quoteAttribution?: string | null;
  paragraphs?: string[] | null;
};

export type OurWorkPage = {
  bio?: BioSectionContent | null;
};
 

const POST_CARDS_QUERY = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    "bodyText": pt::text(body),
  }
`;
 
const POST_BY_SLUG_QUERY = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    subtitle,
    "slug": slug.current,
    publishedAt,
    body,
    "bodyText": pt::text(body),
  }
`;

const OUR_WORK_PAGE_QUERY = `
  *[_type == "ourWorkPage" && _id == "ourWorkPage"][0] {
    bio
  }
`;
 
function getReadTime(bodyText?: string | null) {
  const wordCount = bodyText?.trim().split(/\s+/).filter(Boolean).length || 0;
  const minutes = Math.max(1, Math.ceil(wordCount / 200));

  return `${minutes} minute${minutes === 1 ? "" : "s"} read`;
}

function withReadTime<T extends { bodyText?: string | null }>(post: T) {
  const { bodyText, ...rest } = post;

  return {
    ...rest,
    readTime: getReadTime(bodyText),
  };
}

 
export async function getPostCards(): Promise<PostCard[]> {
  const posts = await client.fetch<PostCardFromSanity[]>(
    POST_CARDS_QUERY,
    {},
    sanityFetchOptions
  );

  return posts.map(withReadTime);
}
 
export async function getPostBySlug(slug: string): Promise<PostFull | null> {
  const post = await client.fetch<PostFullFromSanity | null>(
    POST_BY_SLUG_QUERY,
    { slug },
    sanityFetchOptions
  );

  return post ? withReadTime(post) : null;
}
 
export async function getAllPostSlugs(): Promise<string[]> {
  const slugs: { slug: string }[] = await client.fetch(
    `*[_type == "post"]{ "slug": slug.current }`,
    {},
    sanityFetchOptions
  );
  return slugs.map((s) => s.slug);
}

export async function getOurWorkPage(): Promise<OurWorkPage | null> {
  return client.fetch(OUR_WORK_PAGE_QUERY, {}, sanityFetchOptions);
}
