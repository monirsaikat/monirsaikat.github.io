import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-56px)] text-center px-6">
      <p className="font-mono text-6xl font-bold text-border mb-4">404</p>
      <h1 className="text-2xl font-bold text-bright mb-3">Page not found</h1>
      <p className="text-dim font-mono text-sm mb-8">
        // this path doesn&apos;t exist
      </p>
      <Link
        href="/"
        className="font-mono text-sm text-accent hover:text-cyan transition-colors border border-border px-5 py-2.5 rounded-lg hover:border-accent"
      >
        ← go home
      </Link>
    </div>
  );
}
