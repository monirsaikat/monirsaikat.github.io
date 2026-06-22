import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ExternalLink } from "lucide-react";
import GithubIcon from "@/components/GithubIcon";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Moniruzzaman Saikat — software engineer from Dhaka, Bangladesh. Background, skills, and story.",
};

const skills = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "C++", "Python", "PHP", "Bash"] },
  { group: "Frontend", items: ["React", "Vue", "HTML/CSS", "SCSS", "Tailwind", "Inertia.js"] },
  { group: "Backend", items: ["Node.js", "Laravel", "CakePHP", "REST APIs", "WebSockets"] },
  { group: "Systems", items: ["N-API", "Win32 API", "Native Addons", "C++ STL"] },
  { group: "Tooling", items: ["Git", "Vim/Neovim", "npm", "Webpack", "Linux", "WSL"] },
  { group: "Practices", items: ["Design Patterns", "Clean Code", "TDD", "Code Review", "OSS"] },
];

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      {/* Header */}
      <div className="mb-16">
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2">// about me</p>
        <h1 className="text-4xl font-bold text-bright tracking-tight mb-1">Who I am</h1>
        <div className="w-10 h-0.5 bg-linear-to-r from-accent to-transparent mt-4" />
      </div>

      {/* Profile block */}
      <div className="flex flex-col md:flex-row gap-12 mb-20">
        <div className="shrink-0 flex flex-col items-center md:items-start gap-4">
          <Image
            src="https://github.com/monirsaikat.png"
            alt="Moniruzzaman Saikat"
            width={128}
            height={128}
            className="rounded-full border-2 border-border shadow-[0_0_0_4px_rgba(88,166,255,0.1)]"
          />
          <div className="flex flex-col gap-2 text-center md:text-left">
            <p className="font-bold text-bright text-lg leading-none">Moniruzzaman Saikat</p>
            <p className="font-mono text-xs text-accent">Software Engineer</p>
            <span className="flex items-center gap-1.5 font-mono text-xs text-muted justify-center md:justify-start">
              <MapPin size={11} /> Dhaka, Bangladesh
            </span>
            <Link
              href="https://github.com/monirsaikat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-muted hover:text-accent transition-colors justify-center md:justify-start"
            >
              <GithubIcon size={11} /> monirsaikat
            </Link>
          </div>
        </div>

        <div className="flex-1 space-y-5 text-text leading-relaxed">
          <p>
            I&apos;m a software engineer who enjoys going deep. Whether it&apos;s building a native
            Node.js addon in C++, designing clean APIs, or tracing through a tricky TypeScript
            type error — I&apos;m most engaged when the problem is hard.
          </p>
          <p>
            I&apos;ve spent years exploring multiple paradigms: systems programming, web development,
            scripting automation, and software design patterns. With over{" "}
            <strong className="text-bright">169 public repositories</strong> on GitHub, curiosity
            has always been my most-used tool.
          </p>
          <p>
            My interest in low-level work (C++, Win32, N-API) sits alongside a strong foundation
            in full-stack web development (Laravel, React, TypeScript). I like knowing how things
            actually work, not just how to use them.
          </p>
          <p>
            I write about what I learn — engineering insights, design patterns, and the occasional
            rabbit hole. All here on this blog.
          </p>
        </div>
      </div>

      {/* Terminal card */}
      <div className="mb-20 rounded-lg overflow-hidden border border-border font-mono text-sm">
        <div className="flex items-center gap-2 px-4 py-2.5 bg-surface border-b border-border">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 text-xs text-muted">saikat@dev ~ zsh</span>
        </div>
        <div className="p-5 bg-[#0a0d12] leading-8 text-sm">
          <p><span className="text-green">❯ </span><span className="text-bright">cat profile.json</span></p>
          <p className="text-muted">{"{"}</p>
          <p className="text-muted pl-4"><span className="text-accent">&quot;name&quot;</span>: <span className="text-cyan">&quot;Moniruzzaman Saikat&quot;</span>,</p>
          <p className="text-muted pl-4"><span className="text-accent">&quot;role&quot;</span>: <span className="text-cyan">&quot;Software Engineer&quot;</span>,</p>
          <p className="text-muted pl-4"><span className="text-accent">&quot;location&quot;</span>: <span className="text-cyan">&quot;Dhaka, Bangladesh 🇧🇩&quot;</span>,</p>
          <p className="text-muted pl-4"><span className="text-accent">&quot;passion&quot;</span>: <span className="text-cyan">&quot;Always coding&quot;</span>,</p>
          <p className="text-muted pl-4"><span className="text-accent">&quot;repos&quot;</span>: <span className="text-orange">169</span>,</p>
          <p className="text-muted pl-4"><span className="text-accent">&quot;open_to_work&quot;</span>: <span className="text-green">true</span></p>
          <p className="text-muted">{"}"}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
        {[
          { num: "169+", label: "Public Repos" },
          { num: "10+", label: "Languages" },
          { num: "5+", label: "Years Coding" },
          { num: "∞", label: "Lines Written" },
        ].map(({ num, label }) => (
          <div
            key={label}
            className="rounded-lg border border-border bg-surface p-5 hover:border-accent transition-colors"
          >
            <div className="font-mono text-2xl font-bold text-bright mb-1">{num}</div>
            <div className="font-mono text-xs text-muted">{label}</div>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="mb-20">
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2">// toolbox</p>
        <h2 className="text-2xl font-bold text-bright tracking-tight mb-8">Skills &amp; Technologies</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map(({ group, items }) => (
            <div
              key={group}
              className="rounded-lg border border-border bg-surface p-5 hover:border-muted transition-colors"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs text-accent tracking-widest uppercase">{group}</span>
                <span className="flex-1 h-px bg-border" />
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs px-2.5 py-1 rounded bg-accent/8 border border-accent/15 text-dim"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-xl border border-border bg-surface p-8 text-center">
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">// let&apos;s connect</p>
        <h2 className="text-xl font-bold text-bright mb-3">Interested in working together?</h2>
        <p className="text-text mb-6 max-w-md mx-auto">
          I&apos;m open to new opportunities, collaborations, and interesting conversations.
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          <Link
            href="https://github.com/monirsaikat"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-bg font-mono text-sm font-semibold hover:bg-cyan transition-all"
          >
            <GithubIcon size={15} /> GitHub <ExternalLink size={12} />
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-text font-mono text-sm hover:border-accent hover:text-accent transition-all"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}
