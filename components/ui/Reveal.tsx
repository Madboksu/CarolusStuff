"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number; // detik
};

export default function Reveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // sekali saja
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ "--reveal-delay": `${delay}s` } as React.CSSProperties}
      className={`reveal-item reveal-${direction} ${
        visible ? "is-visible" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}