"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./RouteProgress.module.css";

export default function RouteProgress() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const routeKey = `${pathname}?${searchParams.toString()}`;

  const [trackedKey, setTrackedKey] = useState(routeKey);
  const [phase, setPhase] = useState<"idle" | "loading" | "done">("idle");

  // Adjust state during render when the route actually changes, per
  // https://react.dev/reference/react/useState#storing-information-from-previous-renders
  if (routeKey !== trackedKey) {
    setTrackedKey(routeKey);
    setPhase((current) => (current === "loading" ? "done" : current));
  }

  useEffect(() => {
    function isInternalNav(target: EventTarget | null): boolean {
      const anchor = (target as HTMLElement)?.closest?.("a");
      if (!anchor) return false;
      if (anchor.hasAttribute("download")) return false;
      if (anchor.target && anchor.target !== "_self") return false;
      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#")) return false;
      if (/^(https?:)?\/\//i.test(href) && anchor.origin !== window.location.origin) {
        return false;
      }
      return true;
    }

    function handleClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (isInternalNav(e.target)) {
        setPhase("loading");
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    if (phase !== "done") return;
    const timeout = setTimeout(() => setPhase("idle"), 220);
    return () => clearTimeout(timeout);
  }, [phase]);

  return (
    <div className={styles.track} aria-hidden="true">
      <div className={`${styles.bar} ${styles[phase]}`} />
    </div>
  );
}
