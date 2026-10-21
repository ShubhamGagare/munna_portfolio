import { useEffect, useState } from "react";

export type PortfolioMode = "bro" | "munna" | "professional";
export function usePortfolioMode() {
  const [mode, setMode] = useState<PortfolioMode>(() => {
    try {
      const saved = localStorage.getItem("portfolio-tone");
      return saved === "munna" || saved === "professional" ? saved : "bro";
    } catch { return "bro"; }
  });
  useEffect(() => {
    document.documentElement.dataset.portfolioMode = mode;
    try { localStorage.setItem("portfolio-tone", mode); } catch { /* The page also works without storage. */ }
  }, [mode]);
  return [mode, setMode] as const;
}
