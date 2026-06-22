import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card-glow group relative flex flex-col rounded-lg border border-border bg-surface p-6 transition-all duration-200 hover:border-accent hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(88,166,255,0.1)]">
      <div className="text-2xl mb-3">{project.icon}</div>

      <div className="font-mono text-sm font-semibold text-bright mb-2">
        {project.name}
      </div>

      <p className="text-sm text-text leading-relaxed flex-1 mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs px-2 py-0.5 rounded-sm bg-accent/8 border border-accent/15 text-dim"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5 font-mono text-xs text-muted">
          <span
            className="inline-block w-2.5 h-2.5 rounded-full"
            style={{ background: project.langColor }}
          />
          {project.language}
        </span>
        <Link
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 font-mono text-xs text-muted hover:text-accent transition-colors"
        >
          view <ExternalLink size={11} />
        </Link>
      </div>
    </div>
  );
}
