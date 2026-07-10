import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

 
export type PostCard = {
  _id: string;
  title: string;
  slug: string;
  readTime: string;
};
 
export type PostFull = PostCard & {
  publishedAt: string | null;
  subtitle: string | null; 
  body: unknown[]; 
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
    readTime,
  }
`;
 
const POST_BY_SLUG_QUERY = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    subtitle,
    "slug": slug.current,
    readTime,
    publishedAt,
    body,
  }
`;

const OUR_WORK_PAGE_QUERY = `
  *[_type == "ourWorkPage" && _id == "ourWorkPage"][0] {
    bio
  }
`;
 
 
export async function getPostCards(): Promise<PostCard[]> {
  return client.fetch(POST_CARDS_QUERY, {}, { next: { revalidate: 60 } });
}
 
export async function getPostBySlug(slug: string): Promise<PostFull | null> {
  return client.fetch(
    POST_BY_SLUG_QUERY,
    { slug },
    { next: { revalidate: 60 } }
  );
}
 
export async function getAllPostSlugs(): Promise<string[]> {
  const slugs: { slug: string }[] = await client.fetch(
    `*[_type == "post"]{ "slug": slug.current }`,
    {},
    { next: { revalidate: 60 } }
  );
  return slugs.map((s) => s.slug);
}

export async function getOurWorkPage(): Promise<OurWorkPage | null> {
  return client.fetch(OUR_WORK_PAGE_QUERY, {}, { next: { revalidate: 60 } });
}
