import type { Metadata } from "next";
import Link from "next/link";
import { Mail, ExternalLink, Download } from "lucide-react";
import GithubIcon from "@/components/GithubIcon";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Moniruzzaman Saikat — open to opportunities and collaborations.",
};

const socials = [
  {
    label: "GitHub",
    handle: "monirsaikat",
    url: "https://github.com/monirsaikat",
    desc: "169+ repos, open source work",
    icon: "github",
    color: "accent",
  },
  {
    label: "LinkedIn",
    handle: "moniruzzamansaikat",
    url: "https://linkedin.com/in/moniruzzamansaikat",
    desc: "Professional profile & experience",
    icon: "li",
    color: "accent",
  },
  {
    label: "Dev.to",
    handle: "moniruzzamansaikat",
    url: "https://dev.to/moniruzzamansaikat",
    desc: "Engineering articles and posts",
    icon: "dev",
    color: "green",
  },
  {
    label: "X / Twitter",
    handle: "@SaikatMonir",
    url: "https://x.com/SaikatMonir",
    desc: "Thoughts, links, and updates",
    icon: "x",
    color: "dim",
  },
  {
    label: "Bluesky",
    handle: "monirsaikat.bsky.social",
    url: "https://bsky.app/profile/monirsaikat.bsky.social",
    desc: "The open social network",
    icon: "bsky",
    color: "cyan",
  },
  {
    label: "Email",
    handle: "artificialcoder1@gmail.com",
    url: "mailto:artificialcoder1@gmail.com",
    desc: "Best for serious inquiries",
    icon: "mail",
    color: "green",
  },
];

function SocialIcon({ icon, size = 20 }: { icon: string; size?: number }) {
  if (icon === "github") return <GithubIcon size={size} />;
  if (icon === "mail")
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
      </svg>
    );
  if (icon === "li")
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  if (icon === "x")
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  if (icon === "bsky")
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 01-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.204-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8z" />
      </svg>
    );
  if (icon === "dev")
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.29zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z" />
      </svg>
    );
  return null;
}

export default function Contact() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      {/* Header */}
      <div className="mb-16">
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2">// reach out</p>
        <h1 className="text-4xl font-bold text-bright tracking-tight mb-3">Let&apos;s Connect</h1>
        <p className="text-text max-w-xl leading-relaxed">
          Whether you have a project in mind, want to collaborate on open source,
          or just want to talk engineering — my inbox is open.
        </p>
        <div className="w-10 h-0.5 bg-linear-to-r from-accent to-transparent mt-4" />
      </div>

      {/* Social links grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {socials.map(({ label, handle, url, desc, icon }) => (
          <Link
            key={label}
            href={url}
            target={url.startsWith("mailto") ? undefined : "_blank"}
            rel={url.startsWith("mailto") ? undefined : "noopener noreferrer"}
            className="card-glow group flex flex-col gap-3 rounded-xl border border-border bg-surface p-6 hover:border-accent transition-all hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(88,166,255,0.1)]"
          >
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-lg bg-accent/8 border border-accent/15 text-accent">
                <SocialIcon icon={icon} size={18} />
              </div>
              <ExternalLink className="text-muted group-hover:text-accent transition-colors" size={14} />
            </div>
            <div>
              <div className="font-semibold text-bright mb-0.5">{label}</div>
              <p className="font-mono text-xs text-muted mb-1">{handle}</p>
              <p className="text-dim text-sm">{desc}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* CV download + open to work */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Link
          href="/Monir_Saikat.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="card-glow group flex items-center gap-5 rounded-xl border border-border bg-surface p-6 hover:border-accent transition-all hover:-translate-y-1"
        >
          <div className="p-3 rounded-lg bg-purple/10 border border-purple/20 text-purple shrink-0">
            <Download size={22} />
          </div>
          <div>
            <div className="font-semibold text-bright mb-0.5">Download CV</div>
            <p className="text-dim text-sm">Monir_Saikat.pdf — full résumé</p>
          </div>
          <ExternalLink className="ml-auto text-muted group-hover:text-accent transition-colors shrink-0" size={15} />
        </Link>

        <div className="rounded-xl border border-border bg-surface p-6 flex items-center gap-5">
          <div className="shrink-0">
            <span className="pulse-dot" />
          </div>
          <div>
            <div className="font-semibold text-bright mb-1">Open to Work</div>
            <p className="text-dim text-sm leading-relaxed">
              Full-time · Contract · Remote · Open Source
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
