import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const siteUrl = "https://monirsaikat.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/saikat.jpg",
    apple: "/saikat.jpg",
  },
  title: {
    default: "Moniruzzaman Saikat | Senior Software Engineer",
    template: "%s | Moniruzzaman Saikat",
  },
  description:
    "Moniruzzaman Saikat is a senior software engineer in Dhaka building production-ready SaaS, automation tools, desktop apps, and internal systems with Laravel, TypeScript, Electron, and C++.",
  keywords: [
    "Moniruzzaman Saikat",
    "Monir Saikat",
    "Moniruzzaman Saikat software engineer",
    "Moniruzzaman Saikat portfolio",
    "senior software engineer Bangladesh",
    "software engineer Dhaka",
    "full stack developer Bangladesh",
    "Laravel developer Bangladesh",
    "TypeScript developer Bangladesh",
    "Electron developer",
    "desktop application developer",
    "SaaS developer",
    "automation tools developer",
    "Laravel",
    "TypeScript",
    "Electron.js",
    "C++",
    "Node.js",
    "React",
    "Next.js",
    "Win32 API",
    "Node-API",
    "TimoDesk",
    "BuildEcom",
  ],
  authors: [{ name: "Moniruzzaman Saikat", url: siteUrl }],
  creator: "Moniruzzaman Saikat",
  publisher: "Moniruzzaman Saikat",
  category: "technology",
  applicationName: "Moniruzzaman Saikat Portfolio",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Moniruzzaman Saikat",
    locale: "en_US",
    title: "Moniruzzaman Saikat | Senior Software Engineer",
    description:
      "Senior software engineer from Dhaka building production-ready SaaS, automation tools, desktop apps, and internal systems.",
    images: [
      {
        url: "https://github.com/monirsaikat.png",
        width: 460,
        height: 460,
        alt: "Moniruzzaman Saikat, Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moniruzzaman Saikat | Senior Software Engineer",
    description:
      "Building production-ready SaaS, automation tools, desktop apps, and internal systems.",
    images: ["https://github.com/monirsaikat.png"],
  },
  alternates: {
    canonical: "/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Moniruzzaman Saikat",
      alternateName: "Monir Saikat",
      url: siteUrl,
      image: "https://github.com/monirsaikat.png",
      jobTitle: "Senior Software Engineer",
      description:
        "Senior software engineer building SaaS products, automation tools, desktop applications, and internal systems.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dhaka",
        addressCountry: "BD",
      },
      sameAs: ["https://github.com/monirsaikat"],
      knowsAbout: [
        "Software Engineering",
        "SaaS Development",
        "Laravel",
        "TypeScript",
        "Electron",
        "C++",
        "Node.js",
        "React",
        "Next.js",
        "Desktop Application Development",
        "Automation Tools",
        "Win32 API",
        "Node-API",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Moniruzzaman Saikat",
      description:
        "Portfolio, projects, and engineering articles by Moniruzzaman Saikat.",
      inLanguage: "en",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="grid-bg">
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <Nav />
        <main className="pt-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
