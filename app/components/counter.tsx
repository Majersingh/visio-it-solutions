"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

type CounterProps = {
  value: number;
  suffix?: string;
  format?: "int" | "decimal";
  duration?: number;
};

export function Counter({
  value,
  suffix = "",
  format = "int",
  duration = 1.6,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    stiffness: 90,
    damping: 22,
    mass: 0.9,
    duration,
  });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    const unsub = spring.on("change", (latest) => {
      setDisplay(
        format === "decimal"
          ? latest.toFixed(2)
          : Math.round(latest).toString(),
      );
    });
    return () => unsub();
  }, [spring, format]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}
