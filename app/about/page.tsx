import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ExternalLink, Download } from "lucide-react";
import GithubIcon from "@/components/GithubIcon";

export const metadata: Metadata = {
  title: "About Moniruzzaman Saikat",
  description:
    "Learn about Moniruzzaman Saikat, a senior software engineer from Dhaka specializing in SaaS, Laravel, TypeScript, Electron, C++, and desktop applications.",
  alternates: { canonical: "/about/" },
};

const skills = [
  {
    group: "Languages",
    color: "accent",
    items: ["TypeScript", "JavaScript", "C++", "Python", "PHP", "C#/.NET", "Bash"],
  },
  {
    group: "Frontend",
    color: "cyan",
    items: ["React", "Next.js", "Vue", "Electron.js", "HTML/CSS", "SCSS", "Tailwind", "Inertia.js"],
  },
  {
    group: "Backend",
    color: "green",
    items: ["Node.js", "Laravel", "CakePHP", "Yii", "CodeIgniter", "REST APIs", "WebSockets", ".NET Core"],
  },
  {
    group: "Desktop",
    color: "purple",
    items: ["Electron.js", "Win32 API", "Desktop App Dev", "N-API", "C++ STL", ".NET WinForms"],
  },
  {
    group: "Systems",
    color: "orange",
    items: ["N-API Native Addons", "Win32 API", "Process Tracking", "Memory Management"],
  },
  {
    group: "Databases",
    color: "cyan",
    items: ["PostgreSQL", "MongoDB", "MySQL", "SQLite"],
  },
  {
    group: "Tooling",
    color: "accent",
    items: ["Git", "Vim/Neovim", "npm", "Webpack", "Linux", "WSL"],
  },
  {
    group: "Practices",
    color: "green",
    items: ["Design Patterns", "Clean Code", "TDD", "Code Review", "OSS"],
  },
];

const colorMap: Record<string, string> = {
  accent: "text-accent",
  cyan:   "text-cyan",
  green:  "text-green",
  purple: "text-purple",
  orange: "text-orange",
};

const timeline = [
  {
    year: "2024-25",
    title: "Launched BuildEcom",
    desc: "Built and shipped a no-code WooCommerce mobile app builder. Converts stores into native iOS and Android apps through a drag-and-drop interface.",
    tag: "Product",
    color: "green",
  },
  {
    year: "2023-24",
    title: "Launched TimoDesk",
    desc: "Designed and shipped a full workforce management SaaS. Automatic time tracking, activity monitoring, and productivity analytics for distributed teams.",
    tag: "Product",
    color: "green",
  },
  {
    year: "2022",
    title: "Deep dive into Desktop + Systems",
    desc: "Explored Electron.js for cross-platform desktop apps, Win32 API for native Windows programming, and N-API for building C++ addons for Node.js.",
    tag: "Systems",
    color: "orange",
  },
  {
    year: "2021",
    title: "Full-stack web development",
    desc: "Expanded into Laravel, React, and TypeScript. Built REST APIs, SPAs, and full-stack applications with modern tooling.",
    tag: "Web",
    color: "accent",
  },
  {
    year: "2020",
    title: "Started with C++ and low-level programming",
    desc: "Moved beyond scripting into systems programming. Explored memory management, data structures, and Win32 APIs.",
    tag: "Systems",
    color: "orange",
  },
  {
    year: "2018",
    title: "First lines of code",
    desc: "Started with PHP and JavaScript. Built first web projects and fell in love with the craft of software engineering.",
    tag: "Origins",
    color: "purple",
  },
];

const tagColor: Record<string, string> = {
  Product: "bg-green/10 border-green/20 text-green",
  Systems: "bg-orange/10 border-orange/20 text-orange",
  Web:     "bg-accent/10 border-accent/20 text-accent",
  Origins: "bg-purple/10 border-purple/20 text-purple",
};

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
            <Link
              href="/Monir_Saikat.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-purple hover:text-accent transition-colors justify-center md:justify-start mt-1"
            >
              <Download size={11} /> Download CV
            </Link>
          </div>
        </div>

        <div className="flex-1 space-y-5 text-text leading-relaxed">
          <p>
            I&apos;m a software engineer who enjoys going deep. Whether it&apos;s building a native
            Node.js addon in C++, designing clean APIs, or tracing through a tricky TypeScript
            type error, I am most engaged when the problem is genuinely hard.
          </p>
          <p>
            My work spans the full stack: web apps with Laravel and React, desktop applications
            with Electron.js and Win32, systems tools with C++ and N-API, and shipped SaaS products
            that real people use every day. I like understanding how things actually work, not just
            how to use them.
          </p>
          <p>
            With over <strong className="text-bright">169 public repositories</strong> on GitHub,
            I&apos;ve explored everything from design patterns in Python to native Windows
            programming in C++. Curiosity has always been my most-used tool.
          </p>
          <p>
            I&apos;ve shipped two live products: <Link href="https://timodesk.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-cyan transition-colors">TimoDesk</Link> (workforce time tracking SaaS)
            and <Link href="https://buildecom.app" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-cyan transition-colors">BuildEcom</Link> (no-code WooCommerce app builder).
            I write about what I learn here on the blog.
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
          <p className="text-muted pl-4"><span className="text-accent">&quot;skills&quot;</span>: <span className="text-cyan">[&quot;TypeScript&quot;, &quot;C++&quot;, &quot;Electron&quot;, &quot;.NET&quot;, &quot;PHP&quot;]</span>,</p>
          <p className="text-muted pl-4"><span className="text-accent">&quot;products&quot;</span>: <span className="text-cyan">[&quot;TimoDesk&quot;, &quot;BuildEcom&quot;]</span>,</p>
          <p className="text-muted pl-4"><span className="text-accent">&quot;repos&quot;</span>: <span className="text-orange">169</span>,</p>
          <p className="text-muted pl-4"><span className="text-accent">&quot;open_to_work&quot;</span>: <span className="text-green">true</span></p>
          <p className="text-muted">{"}"}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
        {[
          { num: "169+", label: "Public Repos" },
          { num: "15+", label: "Languages" },
          { num: "7+", label: "Years Coding" },
          { num: "2", label: "Shipped Products" },
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
          {skills.map(({ group, items, color }) => (
            <div
              key={group}
              className="rounded-lg border border-border bg-surface p-5 hover:border-muted transition-colors"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className={`font-mono text-xs tracking-widest uppercase ${colorMap[color]}`}>
                  {group}
                </span>
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

      {/* Timeline */}
      <div className="mb-20">
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2">// journey</p>
        <h2 className="text-2xl font-bold text-bright tracking-tight mb-10">My Story</h2>

        <div className="relative">
          <div className="absolute left-22 top-0 bottom-0 w-px bg-border hidden sm:block" />
          <div className="flex flex-col gap-8">
            {timeline.map(({ year, title, desc, tag, color }) => (
              <div key={year} className="flex flex-col sm:flex-row gap-4 sm:gap-8 group">
                <div className="shrink-0 sm:w-20 sm:text-right">
                  <span className="font-mono text-xs text-muted">{year}</span>
                </div>
                <div className="relative sm:pl-8 flex-1">
                  <div className="absolute -left-1 top-1.5 w-2 h-2 rounded-full bg-border group-hover:bg-accent transition-colors hidden sm:block" />
                  <div className="rounded-lg border border-border bg-surface p-5 hover:border-muted transition-colors">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className={`font-mono text-xs px-2 py-0.5 rounded-sm border ${tagColor[tag]}`}>
                        {tag}
                      </span>
                      <h3 className="font-semibold text-bright text-sm">{title}</h3>
                    </div>
                    <p className="text-dim text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-xl border border-border bg-surface p-8 text-center">
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">// connect</p>
        <h2 className="text-xl font-bold text-bright mb-3">Interested in working together?</h2>
        <p className="text-text mb-6 max-w-md mx-auto">
          Open to new opportunities, collaborations, and interesting conversations.
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
          <Link
            href="/Monir_Saikat.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-text font-mono text-sm hover:border-purple hover:text-purple transition-all"
          >
            <Download size={14} /> Download CV
          </Link>
        </div>
      </div>
    </div>
  );
}
