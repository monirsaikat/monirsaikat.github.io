import type { Metadata } from "next";
import {
  Braces,
  Code2,
  Database,
  FileText,
  GitBranch,
  MonitorCog,
  Package,
  Rocket,
  Terminal,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Developer Tools & Technology Stack",
  description:
    "The developer tools and technology stack Moniruzzaman Saikat uses for SaaS, Laravel, TypeScript, Electron, C++, web, desktop, and systems projects.",
  alternates: { canonical: "/uses/" },
};

const categories = [
  {
    title: "Editor & terminal",
    description: "Where most of the work happens.",
    icon: Terminal,
    color: "accent",
    items: [
      {
        name: "Vim / Neovim",
        detail: "My terminal-first editor setup, backed by personal dotfiles.",
      },
      {
        name: "Windows + WSL",
        detail: "Windows for native and desktop work; WSL and Linux tooling for the rest.",
      },
      {
        name: "Bash",
        detail: "Shell scripts, repeatable commands, and small workflow automations.",
      },
    ],
  },
  {
    title: "Languages",
    description: "The languages I reach for most often.",
    icon: Code2,
    color: "cyan",
    items: [
      {
        name: "TypeScript & JavaScript",
        detail: "My default for web applications, Node.js services, and Electron apps.",
      },
      {
        name: "C++",
        detail: "Native Windows utilities, systems work, and Node-API addons.",
      },
      {
        name: "PHP",
        detail: "Backend applications with Laravel, Yii, CakePHP, and CodeIgniter.",
      },
      {
        name: "C# / .NET",
        detail: "Windows applications, WinForms, and .NET backend work.",
      },
      {
        name: "Python",
        detail: "Scripting, experiments, and clear examples for software design patterns.",
      },
    ],
  },
  {
    title: "Web stack",
    description: "The core of my full-stack application work.",
    icon: Braces,
    color: "purple",
    items: [
      {
        name: "React & Next.js",
        detail: "Component-driven interfaces and production web applications.",
      },
      {
        name: "Node.js",
        detail: "APIs, tooling, automation, and the backend side of desktop apps.",
      },
      {
        name: "Laravel",
        detail: "Structured PHP backends, REST APIs, and full-stack products.",
      },
      {
        name: "Tailwind CSS & SCSS",
        detail: "Fast UI implementation with maintainable styling systems.",
      },
    ],
  },
  {
    title: "Desktop & systems",
    description: "Tools for reaching beyond the browser.",
    icon: MonitorCog,
    color: "orange",
    items: [
      {
        name: "Electron.js",
        detail: "Cross-platform desktop products built with web technology.",
      },
      {
        name: "Win32 API",
        detail: "Native Windows integration, process tracking, and system utilities.",
      },
      {
        name: "Node-API / N-API",
        detail: "Bridging high-level JavaScript applications with native C++.",
      },
      {
        name: ".NET WinForms",
        detail: "Native Windows interfaces when a web runtime is unnecessary.",
      },
    ],
  },
  {
    title: "Data",
    description: "Storage choices depend on the product.",
    icon: Database,
    color: "green",
    items: [
      {
        name: "PostgreSQL",
        detail: "My primary relational database for structured application data.",
      },
      {
        name: "MongoDB",
        detail: "Flexible document storage for suitable application workloads.",
      },
      {
        name: "MySQL",
        detail: "A practical fit for PHP, Laravel, and WooCommerce ecosystems.",
      },
      {
        name: "SQLite",
        detail: "Simple local persistence for desktop tools and smaller applications.",
      },
    ],
  },
  {
    title: "Workflow",
    description: "The tools that take code from idea to release.",
    icon: Wrench,
    color: "accent",
    items: [
      {
        name: "Git & GitHub",
        detail: "Version control, open-source work, collaboration, and releases.",
      },
      {
        name: "npm",
        detail: "Package management and project scripts across the JavaScript stack.",
      },
      {
        name: "Webpack",
        detail: "Bundling and build configuration when projects need direct control.",
      },
      {
        name: "Zettlr",
        detail: "Markdown-first technical notes and long-form writing.",
      },
    ],
  },
];

const colorMap: Record<string, string> = {
  accent: "text-accent border-accent/20 bg-accent/8",
  cyan: "text-cyan border-cyan/20 bg-cyan/8",
  purple: "text-purple border-purple/20 bg-purple/8",
  orange: "text-orange border-orange/20 bg-orange/8",
  green: "text-green border-green/20 bg-green/8",
};

const quickFacts = [
  { icon: GitBranch, value: "Git", label: "version control" },
  { icon: Package, value: "npm", label: "package manager" },
  { icon: FileText, value: "Markdown", label: "notes & writing" },
  { icon: Rocket, value: "GitHub Pages", label: "this site" },
];

export default function Uses() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <header className="mb-14">
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2">
          {"// tools of the trade"}
        </p>
        <h1 className="text-4xl font-bold text-bright tracking-tight mb-3">Uses</h1>
        <p className="text-text max-w-2xl leading-relaxed">
          The software, technologies, and workflow I use to design, build, and
          ship web applications, desktop products, and systems tools.
        </p>
        <div className="w-10 h-0.5 bg-linear-to-r from-accent to-transparent mt-5" />
      </header>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-16">
        {quickFacts.map(({ icon: Icon, value, label }) => (
          <div
            key={label}
            className="rounded-lg border border-border bg-surface p-4 flex items-center gap-3"
          >
            <Icon size={16} className="text-accent shrink-0" />
            <div className="min-w-0">
              <p className="font-mono text-sm text-bright truncate">{value}</p>
              <p className="font-mono text-[10px] text-muted">{label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {categories.map(
          ({ title, description, icon: Icon, color, items }) => (
            <section
              key={title}
              className="card-glow rounded-xl border border-border bg-surface p-6"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-2.5 rounded-lg border ${colorMap[color]}`}>
                  <Icon size={19} />
                </div>
                <div>
                  <h2 className="font-semibold text-bright">{title}</h2>
                  <p className="text-dim text-xs mt-1">{description}</p>
                </div>
              </div>

              <ul className="space-y-4">
                {items.map(({ name, detail }) => (
                  <li key={name} className="relative pl-4">
                    <span className="absolute left-0 top-2 w-1 h-1 rounded-full bg-accent" />
                    <h3 className="font-mono text-sm text-bright">{name}</h3>
                    <p className="text-dim text-xs leading-relaxed mt-1">
                      {detail}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          ),
        )}
      </div>

      <p className="font-mono text-xs text-muted text-center mt-14">
        This list changes as the work changes. Last updated June 2026.
      </p>
    </div>
  );
}
