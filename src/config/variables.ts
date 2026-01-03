// GeneralWeb runs on port 5173 (the parent window)
export const IFRAME_ORIGIN = "http://localhost:5173";
// UserWeb runs on port 5175 (the iframe content)
export const IFRAME_LOAD = "http://localhost:3000";

// Define global variables, e.g., site name, API URL, etc.
export const SITE_CONFIG = {
  name: "Simple Blog",
  tagline: "A blog built with Next.js, Tailwind, and shadcn/ui.",
  links: {
    github: "https://github.com/yourusername/yourrepo",
    twitter: "https://twitter.com/yourusername",
  },
};

// API configuration (using the provided structure)
const API_URL = "https://dt4iczdip4q6w6he7vpzj5hgsu0kolzp.lambda-url.eu-west-2.on.aws/"; 

export async function getPosts(): Promise<Post[]> {
  // Mock data for development if the API is not ready
  if (API_URL === "https://dt4iczdip4q6w6he7vpzj5hgsu0kolzp.lambda-url.eu-west-2.on.aws/") {
    return [
      { id: "1", slug: "first-post", title: "Getting Started with Next.js", date: new Date().toISOString(), excerpt: "An introduction to setting up a Next.js project with Tailwind CSS.", tags: ["Nextjs", "React", "WebDev"], coverImage: "/images/post1-cover.jpg" },
      { id: "2", slug: "tailwind-tips", title: "Advanced Tailwind CSS Techniques", date: new Date(Date.now() - 86400000).toISOString(), excerpt: "Learn how to use utility classes effectively for responsive design.", tags: ["Tailwind", "CSS"], coverImage: "/images/post2-cover.jpg" },
      // Add more mock posts
    ];
  }
  
  // Real API call
  // const res = await fetch(`${API_URL}?action=list`);
  // return res.json();
  return []; // Placeholder to avoid real fetch during generation
}

export async function getPost(slug: string): Promise<Post | null> {
  if (API_URL === "https://dt4iczdip4q6w6he7vpzj5hgsu0kolzp.lambda-url.eu-west-2.on.aws/") {
    const posts = await getPosts();
    const post = posts.find(p => p.slug === slug);
    if (post) {
      // Add mock content
      return {
        ...post,
        content: `# ${post.title}\n\nThis is the **full content** for the post with slug **${slug}**. \n\n* List item 1\n* List item 2\n\n\`\`\`javascript\nconsole.log("Hello World");\n\`\`\``
      }
    }
    return null;
  }
  
  // Real API call (assuming the API uses slug, not ID, as is common in blogs)
  // const res = await fetch(`${API_URL}?action=post&slug=${slug}`);
  // return res.json();
  return null; // Placeholder
}

// Re-export Post type for easy access
import { type Post } from "@/lib/utils";
export type { Post };