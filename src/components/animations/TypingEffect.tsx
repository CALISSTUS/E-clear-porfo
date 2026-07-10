"use client";

import { useEffect, useState } from "react";

interface TypingEffectProps {
  words: string[];
  className?: string;
}

export function TypingEffect({ words, className }: TypingEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      setDisplayText(words.join(" • "));
      return;
    }

    const currentWord = words[wordIndex];
    const typeSpeed = isDeleting ? 40 : 80;
    const pauseTime = isDeleting ? 500 : 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
        if (displayText.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words]);

  return (
    <span className={className} aria-live="polite">
      {displayText}
      <span className="animate-pulse text-pink-neon" aria-hidden>
        |
      </span>
    </span>
  );
}
