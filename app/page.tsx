import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import GithubIcon from "@/components/GithubIcon";
import TypewriterText from "@/components/TypewriterText";
import ProjectCard from "@/components/ProjectCard";
import { featuredProjects } from "@/lib/projects";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="min-h-[calc(100vh-56px)] flex items-center py-20">
        <div className="mx-auto max-w-5xl px-6 w-full">
          <div className="flex flex-col-reverse md:flex-row items-start md:items-center gap-10 md:gap-16">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-5">
                <span className="pulse-dot" />
                <span className="font-mono text-xs text-green tracking-widest uppercase">
                  Available for opportunities
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-bright tracking-tight leading-[1.05] mb-3">
                Moniruzzaman
                <br />
                Saikat
              </h1>

              <div className="mb-5 h-7">
                <TypewriterText />
              </div>

              <p className="text-text leading-relaxed max-w-lg mb-5">
                Engineer based in Dhaka, Bangladesh. I build systems, tools,
                and ideas — from low-level native modules to full-stack web
                applications. Always coding.
              </p>

              <div className="flex items-center gap-4 font-mono text-xs text-muted mb-8 flex-wrap">
                <span className="flex items-center gap-1.5">
                  <MapPin size={12} /> Dhaka, Bangladesh
                </span>
                <span className="flex items-center gap-1.5">
                  <GithubIcon size={12} /> 169 repos
                </span>
              </div>

              <div className="flex gap-3 flex-wrap">
                <Link
                  href="/projects"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-bg font-mono text-sm font-semibold hover:bg-cyan transition-all hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(88,166,255,0.35)]"
                >
                  View Projects <ArrowRight size={15} />
                </Link>
                <Link
                  href="https://github.com/monirsaikat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-text font-mono text-sm hover:border-accent hover:text-accent transition-all hover:-translate-y-px"
                >
                  <GithubIcon size={15} /> GitHub
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-text font-mono text-sm hover:border-accent hover:text-accent transition-all hover:-translate-y-px"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="shrink-0">
              <Image
                src="https://github.com/monirsaikat.png"
                alt="Moniruzzaman Saikat"
                width={160}
                height={160}
                className="rounded-full border-2 border-border shadow-[0_0_0_4px_rgba(88,166,255,0.1),0_0_30px_rgba(88,166,255,0.12)]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2">// open source</p>
              <h2 className="text-3xl font-bold text-bright tracking-tight">Featured Projects</h2>
            </div>
            <Link
              href="/projects"
              className="hidden sm:flex items-center gap-1.5 font-mono text-xs text-muted hover:text-accent transition-colors"
            >
              all projects <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      {recentPosts.length > 0 && (
        <section className="border-t border-border py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2">// writing</p>
                <h2 className="text-3xl font-bold text-bright tracking-tight">Recent Posts</h2>
              </div>
              <Link
                href="/blog"
                className="hidden sm:flex items-center gap-1.5 font-mono text-xs text-muted hover:text-accent transition-colors"
              >
                all posts <ArrowRight size={13} />
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              {recentPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex items-center justify-between gap-6 rounded-lg border border-border bg-surface px-6 py-5 transition-all hover:border-accent hover:translate-x-1"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-xs px-2 py-0.5 rounded-sm bg-green/10 border border-green/20 text-green">
                        {post.tag}
                      </span>
                      <span className="font-mono text-xs text-muted">{post.date}</span>
                      <span className="font-mono text-xs text-muted">{post.readTime} read</span>
                    </div>
                    <div className="font-semibold text-bright group-hover:text-accent transition-colors">
                      {post.title}
                    </div>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-muted group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Skills strip */}
      <section className="border-t border-border py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="font-mono text-xs text-muted text-center mb-6 tracking-widest uppercase">
            // tech I work with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "TypeScript","JavaScript","C++","Python","PHP",
              "React","Node.js","Laravel","Win32 API","N-API",
              "Tailwind CSS","SCSS","Vim/Neovim","Git","Linux",
            ].map((skill) => (
              <span
                key={skill}
                className="font-mono text-xs px-3 py-1.5 rounded-md bg-surface border border-border text-dim hover:border-accent hover:text-accent transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
