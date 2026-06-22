export interface Project {
  slug: string;
  name: string;
  description: string;
  longDesc: string;
  language: string;
  langColor: string;
  icon: string;
  tags: string[];
  url: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "timodesk",
    name: "TimoDesk",
    description: "Time tracking & workforce analytics SaaS for distributed teams",
    longDesc:
      "A full-featured workforce management platform with automatic time tracking, real-time activity monitoring, screenshot capture, and detailed productivity reports. Built for remote teams, freelancers, and managers. $1/user/month.",
    language: "TypeScript",
    langColor: "#2b7489",
    icon: "⏱",
    tags: ["SaaS", "TypeScript", "Productivity", "Analytics", "Remote Work"],
    url: "https://timodesk.com",
    featured: true,
  },
  {
    slug: "buildecom",
    name: "BuildEcom",
    description: "No-code WooCommerce mobile app builder",
    longDesc:
      "A drag-and-drop platform that turns WooCommerce stores into native iOS & Android apps in minutes. Features pre-built templates, push notifications, real-time store sync, and custom branding — no coding required.",
    language: "TypeScript",
    langColor: "#2b7489",
    icon: "🛒",
    tags: ["SaaS", "No-Code", "WooCommerce", "Mobile", "E-commerce"],
    url: "https://buildecom.app",
    featured: true,
  },
  {
    slug: "win-track",
    name: "win-track",
    description: "Active Window & URL Tracker for Windows",
    longDesc:
      "A native C++ application that tracks which windows and browser URLs are active on Windows. Useful for productivity monitoring, time tracking, and activity logging. Uses Win32 API for deep system access.",
    language: "C++",
    langColor: "#f34b7d",
    icon: "🪟",
    tags: ["C++", "Win32 API", "Systems", "Productivity"],
    url: "https://github.com/monirsaikat/win-track",
    featured: true,
  },
  {
    slug: "napi",
    name: "napi",
    description: "Native Node.js addon experiments via NAPI",
    longDesc:
      "Exploration of the Node.js Native API (N-API) for building high-performance C++ addons that interop seamlessly with JavaScript. Bridges the gap between systems-level C++ and the Node.js ecosystem.",
    language: "C++",
    langColor: "#f34b7d",
    icon: "⚡",
    tags: ["C++", "Node.js", "N-API", "Native Addons"],
    url: "https://github.com/monirsaikat/napi",
    featured: true,
  },
  {
    slug: "design-patterns",
    name: "design-patterns",
    description: "Thoughts & code on design patterns",
    longDesc:
      "A practical reference for software design patterns implemented in Python. Covers creational, structural, and behavioral patterns with real-world examples and commentary on when and why to use each.",
    language: "Python",
    langColor: "#3572a5",
    icon: "🧩",
    tags: ["Python", "Design Patterns", "Architecture", "OOP"],
    url: "https://github.com/monirsaikat/design-patterns",
    featured: true,
  },
  {
    slug: "speedo-meter",
    name: "speedo-meter",
    description: "TypeScript benchmarking and speed measurement",
    longDesc:
      "Performance instrumentation utilities for JavaScript and TypeScript projects. Measures and reports execution time with precision — useful for profiling hot code paths.",
    language: "TypeScript",
    langColor: "#2b7489",
    icon: "📡",
    tags: ["TypeScript", "Performance", "Benchmarking"],
    url: "https://github.com/monirsaikat/speedo-meter",
    featured: false,
  },
  {
    slug: "rewrite-scss",
    name: "rewrite-scss",
    description: "Scalable SCSS architecture and utilities",
    longDesc:
      "A collection of reusable SCSS utilities, mixins, and patterns for building maintainable stylesheet architectures in large projects. Covers variables, grid systems, and component patterns.",
    language: "SCSS",
    langColor: "#c6538c",
    icon: "🎨",
    tags: ["SCSS", "CSS", "Frontend", "Design Systems"],
    url: "https://github.com/monirsaikat/rewrite-scss",
    featured: false,
  },
  {
    slug: "scripting",
    name: "scripting",
    description: "Scripts, docs, and automation notes",
    longDesc:
      "A documentation and scripting reference covering useful scripts across multiple domains. A living notebook of automation patterns, CLI tricks, and developer utilities.",
    language: "PHP",
    langColor: "#4f5d95",
    icon: "📚",
    tags: ["PHP", "Scripting", "Automation", "Docs"],
    url: "https://github.com/monirsaikat/scripting",
    featured: false,
  },
  {
    slug: "laravel-inertia",
    name: "laravel-inertia-tailwind",
    description: "Full-stack Laravel + Inertia.js + Tailwind boilerplate",
    longDesc:
      "A starter template combining Laravel on the backend, Inertia.js for SPA-like navigation without a separate API, and Tailwind CSS for styling. A modern full-stack PHP approach.",
    language: "PHP",
    langColor: "#4f5d95",
    icon: "🛠",
    tags: ["Laravel", "Inertia.js", "Tailwind", "PHP", "Full-stack"],
    url: "https://github.com/monirsaikat/laravel-inertia-taliwind",
    featured: false,
  },
  {
    slug: "devlife",
    name: "devlife",
    description: "Vim/Neovim config and developer environment",
    longDesc:
      "Personal Vim and Neovim configuration files, plugins, and developer environment setup. A curated dotfiles collection reflecting years of terminal-first development.",
    language: "Vim Script",
    langColor: "#199f4b",
    icon: "🖥",
    tags: ["Vim", "Neovim", "Dotfiles", "Terminal"],
    url: "https://github.com/monirsaikat/devlife",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
