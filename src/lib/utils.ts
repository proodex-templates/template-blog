import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// Example type for Blog Post
export type Post = {
  id: string;
  title: string;
  slug: string;
  date: string; // ISO string
  excerpt: string;
  coverImage?: string;
  tags?: string[];
  content?: string; // Only for single post view
};