import * as React from "react";
import { getPost } from "@/config/variables";
import { HeroSection } from "./sections/hero-section";
import { ContentSection } from "./sections/content-section";
import { Separator } from "@/components/ui/separator"; // Assuming shadcn Separator is available
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PostPageProps {
  params: { slug: string };
}

// Generate metadata for the single post page
export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      {/* HeroSection will be used for the banner or initial visual */}
      <HeroSection post={post} />
      <ContentSection post={post} />
    </article>
  );
}