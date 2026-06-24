import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ExternalLink,
  Layers,
  Monitor,
  Globe,
  Cpu,
  Rocket,
} from "lucide-react";
import GithubIcon from "@/components/GithubIcon";
import ProjectCard from "@/components/ProjectCard";
import { featuredProjects } from "@/lib/projects";
import { getAllPosts } from "@/lib/posts";

const expertise = [
  {
    icon: Globe,
    title: "Web Applications",
    desc: "Full-stack web apps from REST APIs to reactive frontends. Laravel, React, TypeScript, and everything in between.",
    color: "accent",
  },
  {
    icon: Monitor,
    title: "Desktop Apps",
    desc: "Cross-platform desktop applications with Electron.js and native Windows apps with C++ and Win32 API.",
    color: "cyan",
  },
  {
    icon: Cpu,
    title: "Systems Programming",
    desc: "Native Node.js addons with N-API, Win32 system hooks, C++ performance tools, and low-level utilities.",
    color: "orange",
  },
  {
    icon: Layers,
    title: "SaaS Products",
    desc: "End-to-end SaaS products from architecture to deployment. TimoDesk and BuildEcom are live examples.",
    color: "green",
  },
];

const colorMap: Record<string, string> = {
  accent: "text-accent border-accent/20 bg-accent/8",
  cyan:   "text-cyan border-cyan/20 bg-cyan/8",
  orange: "text-orange border-orange/20 bg-orange/8",
  green:  "text-green border-green/20 bg-green/8",
};

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="min-h-[calc(100vh-56px)] flex items-center py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] items-center gap-14 lg:gap-16">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="pulse-dot" />
                <span className="font-mono text-xs text-green tracking-widest uppercase">
                  Available for opportunities
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-bright tracking-[-0.04em] leading-[0.98] mb-5">
                Moniruzzaman
                <br />
                Saikat
              </h1>

              <p className="font-mono text-sm sm:text-base text-accent mb-5">
                Software Engineer · Full-stack &amp; Desktop
              </p>

              <p className="text-lg sm:text-xl text-bright font-medium leading-relaxed max-w-2xl mb-3">
                I build production-ready SaaS, automation tools, and desktop apps
                using Laravel, TypeScript, Electron, and C++.
              </p>

              <p className="text-sm sm:text-base text-dim leading-relaxed max-w-2xl mb-8">
                Senior software engineer from Dhaka. I turn messy product ideas
                into shipped web apps, desktop tools, and internal systems.
              </p>

              <div className="flex gap-3 flex-wrap mb-9">
                <Link
                  href="/projects"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-bg font-mono text-sm font-semibold hover:bg-cyan transition-all hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(88,166,255,0.35)]"
                >
                  View Projects <ArrowRight size={15} />
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-text font-mono text-sm hover:border-accent hover:text-accent transition-all hover:-translate-y-px"
                >
                  Let&apos;s work together
                </Link>
                <Link
                  href="https://github.com/monirsaikat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-3 text-muted font-mono text-sm hover:text-bright transition-colors"
                >
                  <GithubIcon size={16} /> GitHub
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-7 font-mono text-xs text-dim">
                <span><strong className="text-bright">7+</strong> years experience</span>
                <span><strong className="text-bright">2</strong> shipped SaaS products</span>
                <span className="text-cyan">Laravel / TypeScript / Desktop apps</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-8 bg-accent/5 blur-3xl rounded-full pointer-events-none" />

              <div className="relative flex justify-center mb-7">
                <Image
                  src="https://github.com/monirsaikat.png"
                  alt="Moniruzzaman Saikat"
                  width={240}
                  height={240}
                  className="rounded-2xl border border-border shadow-[0_0_0_5px_rgba(88,166,255,0.08),0_24px_80px_rgba(0,0,0,0.45)]"
                  priority
                />
              </div>

              <div className="relative space-y-3">
                <div className="rounded-xl border border-green/20 bg-surface/95 p-4 shadow-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="pulse-dot" />
                    <span className="font-mono text-[10px] text-green tracking-widest uppercase">
                      Currently building
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold text-bright">BuildEcom</p>
                      <p className="text-dim text-xs mt-1">
                        No-code WooCommerce mobile app builder
                      </p>
                    </div>
                    <Rocket size={18} className="text-green shrink-0" />
                  </div>
                </div>

                <Link
                  href="https://timodesk.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-xl border border-border bg-surface/95 p-5 shadow-xl transition-all hover:border-accent hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] text-accent tracking-widest uppercase">
                      Featured project
                    </span>
                    <ExternalLink
                      size={14}
                      className="text-muted group-hover:text-accent transition-colors"
                    />
                  </div>
                  <h2 className="text-lg font-bold text-bright group-hover:text-accent transition-colors">
                    TimoDesk
                  </h2>
                  <p className="text-dim text-xs leading-relaxed mt-1.5">
                    Time tracking and workforce analytics for distributed teams.
                  </p>
                  <div className="flex gap-2 mt-4">
                    {["SaaS", "TypeScript", "Desktop"].map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] px-2 py-1 rounded-sm border border-border text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Build */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12">
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2">{"// expertise"}</p>
            <h2 className="text-3xl font-bold text-bright tracking-tight">What I Build</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {expertise.map(({ icon: Icon, title, desc, color }) => (
              <div
                key={title}
                className="rounded-xl border border-border bg-surface p-6 hover:border-muted transition-all hover:-translate-y-1 group"
              >
                <div className={`inline-flex p-2.5 rounded-lg border mb-4 ${colorMap[color]}`}>
                  <Icon size={18} />
                </div>
                <h3 className="font-semibold text-bright mb-2 text-sm">{title}</h3>
                <p className="text-dim text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2">{"// open source + products"}</p>
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

          <div className="mt-10 sm:hidden text-center">
            <Link href="/projects" className="font-mono text-sm text-muted hover:text-accent transition-colors">
              See all projects →
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      {recentPosts.length > 0 && (
        <section className="border-t border-border py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2">{"// writing"}</p>
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
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className="font-mono text-xs px-2 py-0.5 rounded-sm bg-green/10 border border-green/20 text-green">
                        {post.tag}
                      </span>
                      <span className="font-mono text-xs text-muted">{post.date}</span>
                      <span className="font-mono text-xs text-muted">{post.readTime} read</span>
                    </div>
                    <div className="font-semibold text-bright group-hover:text-accent transition-colors">
                      {post.title}
                    </div>
                    <p className="text-dim text-sm mt-1 line-clamp-1">{post.summary}</p>
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
            {"// tech I work with"}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "TypeScript","JavaScript","C++","Python","PHP","C#/.NET",
              "React","Next.js","Node.js","Electron.js","Laravel","Yii","CodeIgniter",
              "Win32 API","N-API","Desktop Apps","PostgreSQL","MongoDB",
              "Tailwind CSS","SCSS","Git","Linux",
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
