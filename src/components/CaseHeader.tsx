import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ModeSwitch from "@/components/ModeSwitch";
import type { PortfolioMode } from "@/hooks/use-portfolio-mode";

export default function CaseHeader({ mode, setMode }: { mode: PortfolioMode; setMode: (mode: PortfolioMode) => void }) {
  return <header className="portfolio-header case-header"><div className="page-width header-inner"><Link to="/" className="case-back"><ArrowLeft size={16} />{mode === "munna" ? "Wapas portfolio pe" : mode === "bro" ? "Back to the portfolio" : "Back to portfolio"}</Link><ModeSwitch mode={mode} onChange={setMode} /></div></header>;
}
