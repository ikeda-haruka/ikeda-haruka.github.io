import { useEffect, useState } from "react";

interface TextRotatorProps {
  words: string[];
  interval?: number; // ms
  className?: string;
}

export default function TextRotator({
  words,
  interval = 3000,
  className = "",
}: TextRotatorProps) {
  const [index, setIndex] = useState(0);
  const [fadeState, setFadeState] = useState<"in" | "out">("in");

  useEffect(() => {
    if (words.length <= 1) return;

    const timer = setInterval(() => {
      setFadeState("out");
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setFadeState("in");
      }, 350);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span
      className={`inline-block transition-all duration-350 ease-out ${
        fadeState === "in"
          ? "opacity-100 translate-y-0 filter-none"
          : "opacity-0 -translate-y-2 blur-[2px]"
      } ${className}`}
    >
      {words[index]}
    </span>
  );
}
