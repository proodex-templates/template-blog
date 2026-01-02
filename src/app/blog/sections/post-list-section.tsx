"use client";

import * as React from "react";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Post } from "@/lib/utils";
import Link from "next/link";

interface PostListSectionProps {
  posts: Post[];
}

export function PostListSection({ posts }: PostListSectionProps) {
  return (
    <section className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.length > 0 ? (
          posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow p-6 flex flex-col"
            >
              {/* Cover Image */}
              {post.coverImage && (
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="rounded-md mb-4"
                />
              )}

              {/* Title */}
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                {post.title}
              </h2>

              {/* Date */}
              <p className="text-sm text-gray-500 mb-3">
                {moment(post.date).format("MMM D, YYYY")}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Markdown Excerpt */}
              <div className="prose prose-sm prose-gray mb-4 line-clamp-4">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                >
                  {(post?.content ?? "").substring(0, 200) + "..."}
                </ReactMarkdown>
              </div>

              {/* Read More Button */}
              <Link
                href={`/blog/${post.id}`}
                className="mt-auto text-purple-600 hover:text-purple-800 font-semibold"
              >
                Read more →
              </Link>
            </article>
          ))
        ) : (
          <p className="col-span-full text-center text-muted-foreground">
            No posts found. Check your API configuration.
          </p>
        )}
      </div>
    </section>
  );
}
