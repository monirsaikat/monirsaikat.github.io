import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getPost, getAllPostSlugs } from "@/lib/posts";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getPost(slug);
    return {
      title: post.title,
      description: post.summary,
      authors: [{ name: "Moniruzzaman Saikat", url: "/" }],
      alternates: {
        canonical: `/blog/${slug}/`,
      },
      openGraph: {
        title: post.title,
        description: post.summary,
        type: "article",
        url: `/blog/${slug}/`,
        publishedTime: post.date,
        authors: ["Moniruzzaman Saikat"],
        tags: [post.tag, "Software Engineering"],
      },
    };
  } catch {
    return { title: "Post Not Found" };
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  let post;
  try {
    post = await getPost(slug);
  } catch {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      {/* Back */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-accent transition-colors mb-10"
      >
        <ArrowLeft size={13} /> back to blog
      </Link>

      {/* Meta */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="font-mono text-xs px-2 py-0.5 rounded-sm bg-green/10 border border-green/20 text-green">
            {post.tag}
          </span>
          <span className="font-mono text-xs text-muted">{post.date}</span>
          <span className="font-mono text-xs text-muted">{post.readTime} read</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-bright tracking-tight leading-tight mb-4">
          {post.title}
        </h1>
        <p className="text-dim text-lg leading-relaxed">{post.summary}</p>
        <div className="w-10 h-0.5 bg-linear-to-r from-accent to-transparent mt-6" />
      </div>

      {/* Content */}
      <article
        className="prose-dark"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-border flex items-center justify-between flex-wrap gap-4">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-accent transition-colors"
        >
          <ArrowLeft size={13} /> All posts
        </Link>
        <span className="font-mono text-xs text-muted">
          by{" "}
          <Link
            href="/about"
            className="text-dim hover:text-accent transition-colors"
          >
            Moniruzzaman Saikat
          </Link>
        </span>
      </div>
    </div>
  );
}
