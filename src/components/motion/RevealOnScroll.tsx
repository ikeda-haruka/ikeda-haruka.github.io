import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "fade" | "zoom";
  delay?: number; // ms
  duration?: number; // ms
  className?: string;
  threshold?: number;
}

export default function RevealOnScroll({
  children,
  direction = "up",
  delay = 0,
  duration = 700,
  className = "",
  threshold = 0.12,
}: RevealOnScrollProps) {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible) return;

    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, isVisible]);

  const getTransformStyle = () => {
    if (isVisible) {
      return "translate3d(0, 0, 0) scale(1)";
    }

    switch (direction) {
      case "up":
        return "translate3d(0, 32px, 0) scale(1)";
      case "down":
        return "translate3d(0, -32px, 0) scale(1)";
      case "left":
        return "translate3d(32px, 0, 0) scale(1)";
      case "right":
        return "translate3d(-32px, 0, 0) scale(1)";
      case "zoom":
        return "translate3d(0, 20px, 0) scale(0.95)";
      case "fade":
      default:
        return "translate3d(0, 0, 0) scale(1)";
    }
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransformStyle(),
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)", // smooth ease-out
        transitionDelay: `${delay}ms`,
        willChange: isVisible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
