import type { PortfolioMode } from "@/hooks/use-portfolio-mode";

export default function ModeSwitch({ mode, onChange }: { mode: PortfolioMode; onChange: (mode: PortfolioMode) => void }) {
  return (
    <div className="tone-switch" role="group" aria-label="Portfolio tone">
      {(["bro", "munna", "professional"] as const).map((value) => (
        <button key={value} type="button" aria-pressed={mode === value} onClick={() => onChange(value)} title={value === "munna" ? "Munna mode — a little Munnabhai warmth" : `${value} mode`}>
          {value === "bro" ? "Bro" : value === "munna" ? "Munna" : "Professional"}
        </button>
      ))}
    </div>
  );
}
