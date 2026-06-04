"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Clock } from "lucide-react";
import type { PostCard as PostCardType } from "@/sanity/lib/client";

type Props = {
  post: PostCardType;
  index: number;
};

export function PostCard({ post, index }: Props) {
  return (
    <motion.div
      className="flex flex-col justify-between rounded-2xl border border-[#78706838] p-8 md:py-10"
      style={{ backgroundColor: "#EEECE8" }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 1.3,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1,
      }}
    >
      <h4 className="text-base font-bold leading-[1.45] tracking-[-0.01em] text-[#121416]">
        {post.title}
      </h4>

      <div className="mt-16 flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-base text-[#121416CF]">
          <Clock className="h-3.5 w-3.5" strokeWidth={1.5} />
          {post.readTime}
        </span>
        <span className="flex gap-1 items-center">
          <Link
            href={`/insights/${post.slug}`}
            className="text-base font-semibold text-electric-violet underline underline-offset-2 transition-opacity hover:opacity-70"
          >
            Read more
          </Link>
          <ArrowRight className="w-4 h-4 text-electric-violet" />
        </span>
      </div>
    </motion.div>
  );
}