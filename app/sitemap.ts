import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

const siteUrl = "https://monirsaikat.github.io";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/about/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/projects/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/blog/`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/uses/`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/contact/`, changeFrequency: "yearly", priority: 0.6 },
  ];

  const posts: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${siteUrl}/blog/${post.slug}/`,
    lastModified: post.date ? new Date(post.date) : undefined,
    changeFrequency: "yearly",
    priority: 0.8,
  }));

  return [...pages, ...posts];
}
