import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Open source projects by Moniruzzaman Saikat — C++, TypeScript, Python, PHP and more.",
};

const languages = ["All", ...Array.from(new Set(projects.map((p) => p.language)))];

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      {/* Header */}
      <div className="mb-16">
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2">// open source</p>
        <h1 className="text-4xl font-bold text-bright tracking-tight mb-3">Projects</h1>
        <p className="text-text max-w-xl leading-relaxed">
          A selection from{" "}
          <Link
            href="https://github.com/monirsaikat?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-cyan transition-colors"
          >
            169 public repositories
          </Link>
          . Systems work, web tooling, and everything in between.
        </p>
        <div className="w-10 h-0.5 bg-linear-to-r from-accent to-transparent mt-4" />
      </div>

      {/* Featured */}
      <div className="mb-16">
        <h2 className="font-mono text-xs text-green tracking-widest uppercase mb-6">
          ★ Featured
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>

      {/* Others */}
      <div className="mb-16">
        <h2 className="font-mono text-xs text-muted tracking-widest uppercase mb-6">
          More Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {others.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>

      {/* GitHub CTA */}
      <div className="rounded-xl border border-border bg-surface p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-mono text-xs text-muted uppercase tracking-widest mb-1">
            // and many more
          </p>
          <h2 className="text-xl font-bold text-bright">Browse all 169 repos on GitHub</h2>
          <p className="text-text text-sm mt-1">
            Experiments, side projects, and works in progress.
          </p>
        </div>
        <Link
          href="https://github.com/monirsaikat?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-bg font-mono text-sm font-semibold hover:bg-cyan transition-all whitespace-nowrap"
        >
          View on GitHub <ExternalLink size={14} />
        </Link>
      </div>
    </div>
  );
}
