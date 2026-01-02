"use client";

import * as React from "react";
import moment from "moment";
import { Post } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

interface ContentSectionProps {
  post: Post;
}

/**
 * Renders the full content of a single blog post.
 * Uses client-side libraries for markdown rendering and date formatting.
 */
export function ContentSection({ post }: ContentSectionProps) {
  if (!post.content) {
    return (
      <section className="container py-16 text-center">
        <p className="text-xl text-destructive">Error: Post content is missing.</p>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-5">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50 leading-tight">
            {post.title}
          </h1>

          <p className="text-gray-500 dark:text-gray-400 text-sm mt-3">
            {moment(post.date).format("MMM D, YYYY")} • {moment(post.date).fromNow()}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-semibold bg-purple-100 text-purple-700 rounded-full dark:bg-purple-900 dark:text-purple-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* Cover Image */}
        {post.coverImage && (
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full rounded-xl mb-10 shadow dark:shadow-lg"
          />
        )}

        {/* Content - Using the provided structure and prose classes */}
        <article className="prose prose-lg prose-gray max-w-none dark:prose-invert">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {post.content}
          </ReactMarkdown>
        </article>
      </div>
    </section>
  );
}