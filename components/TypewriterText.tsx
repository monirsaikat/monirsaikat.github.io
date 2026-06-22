"use client";

import { useEffect, useState } from "react";

const phrases = [
  "Software Engineer",
  "Systems Builder",
  "TypeScript Developer",
  "C++ Enthusiast",
  "Open Source Contributor",
  "Always Coding.",
];

export default function TypewriterText() {
  const [text, setText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = phrases[phraseIdx];
    const delay = deleting ? 45 : 80;

    const timer = setTimeout(() => {
      if (!deleting) {
        const next = charIdx + 1;
        setText(word.slice(0, next));
        if (next === word.length) {
          setTimeout(() => setDeleting(true), 1800);
        } else {
          setCharIdx(next);
        }
      } else {
        const next = charIdx - 1;
        setText(word.slice(0, next));
        setCharIdx(next);
        if (next === 0) {
          setDeleting(false);
          setPhraseIdx((i) => (i + 1) % phrases.length);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, phraseIdx, charIdx, deleting]);

  return (
    <span className="font-mono text-accent text-lg sm:text-xl">
      {text}
      <span className="cursor-blink" />
    </span>
  );
}
