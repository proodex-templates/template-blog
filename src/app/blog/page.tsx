import * as React from "react";
import { getPosts } from "@/config/variables";
import { HeroSection } from "./sections/hero-section";
import { PostListSection } from "./sections/post-list-section";
import { Separator } from "@/components/ui/separator"; // Assuming shadcn Separator is available

export default async function BlogListPage() {
  const posts = await getPosts();

  return (
    <div className="flex flex-col">
      <HeroSection />
      <Separator className="my-8" />
      <PostListSection posts={posts} />
    </div>
  );
}