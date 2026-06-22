import Link from "next/link";
import GithubIcon from "@/components/GithubIcon";

function XIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-5xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted">
          © 2026{" "}
          <span className="text-dim">Moniruzzaman Saikat</span>
          {" "}· built with Next.js + Tailwind
        </p>
        <div className="flex items-center gap-5">
          <Link
            href="https://github.com/monirsaikat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={16} />
          </Link>
          <Link
            href="https://linkedin.com/in/moniruzzamansaikat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={16} />
          </Link>
          <Link
            href="https://x.com/SaikatMonir"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="X / Twitter"
          >
            <XIcon size={16} />
          </Link>
          <Link
            href="https://dev.to/moniruzzamansaikat"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted hover:text-accent transition-colors"
            aria-label="Dev.to"
          >
            dev.to
          </Link>
          <Link
            href="/blog"
            className="font-mono text-xs text-muted hover:text-accent transition-colors"
          >
            blog
          </Link>
          <Link
            href="/projects"
            className="font-mono text-xs text-muted hover:text-accent transition-colors"
          >
            projects
          </Link>
        </div>
      </div>
    </footer>
  );
}
