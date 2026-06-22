import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Moniruzzaman Saikat — Software Engineer",
    template: "%s | Moniruzzaman Saikat",
  },
  description:
    "Software Engineer from Dhaka, Bangladesh. Building systems, tools, and ideas. Portfolio, blog, and open source work.",
  keywords: [
    "Moniruzzaman Saikat",
    "software engineer",
    "web developer",
    "Dhaka",
    "Bangladesh",
    "TypeScript",
    "C++",
    "JavaScript",
    "portfolio",
  ],
  authors: [{ name: "Moniruzzaman Saikat", url: "https://monirsaikat.github.io" }],
  openGraph: {
    type: "website",
    url: "https://monirsaikat.github.io",
    title: "Moniruzzaman Saikat — Software Engineer",
    description: "Software Engineer from Dhaka, Bangladesh. Building systems, tools, and ideas.",
    images: [{ url: "https://github.com/monirsaikat.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moniruzzaman Saikat — Software Engineer",
    description: "Software Engineer from Dhaka, Bangladesh.",
    images: ["https://github.com/monirsaikat.png"],
  },
  alternates: {
    canonical: "https://monirsaikat.github.io",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="grid-bg">
      <body className="min-h-screen antialiased">
        <Nav />
        <main className="pt-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
