import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Engineering articles by Moniruzzaman Saikat — systems programming, TypeScript, design patterns, and more.",
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      {/* Header */}
      <div className="mb-16">
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2">// writing</p>
        <h1 className="text-4xl font-bold text-bright tracking-tight mb-3">Blog</h1>
        <p className="text-text max-w-xl leading-relaxed">
          Engineering insights, deep dives, and things I learned the hard way.
        </p>
        <div className="w-10 h-0.5 bg-linear-to-r from-accent to-transparent mt-4" />
      </div>

      {posts.length === 0 ? (
        <div className="rounded-xl border border-border bg-surface p-12 text-center">
          <p className="font-mono text-muted text-sm">// no posts yet — check back soon</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex items-center justify-between gap-6 rounded-lg border border-border bg-surface px-6 py-5 transition-all hover:border-accent hover:translate-x-1"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span className="font-mono text-xs px-2 py-0.5 rounded-sm bg-green/10 border border-green/20 text-green shrink-0">
                    {post.tag}
                  </span>
                  <span className="font-mono text-xs text-muted">{post.date}</span>
                  <span className="font-mono text-xs text-muted">{post.readTime} read</span>
                </div>
                <div className="font-semibold text-bright group-hover:text-accent transition-colors text-lg leading-snug">
                  {post.title}
                </div>
                <p className="text-dim text-sm mt-1.5 leading-relaxed line-clamp-2">
                  {post.summary}
                </p>
              </div>
              <ArrowRight
                size={18}
                className="text-muted group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0"
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
