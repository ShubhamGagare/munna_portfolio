import { Link } from "react-router-dom";
import { ArrowUpRight, BookOpen, Compass, Sparkles, RefreshCw } from "lucide-react";
import type { PortfolioMode } from "@/hooks/use-portfolio-mode";
import { techDiveCopy } from "@/data/techDiveHub";

export default function TechDiveFeature({ mode }: { mode: PortfolioMode }) {
  const text = techDiveCopy[mode];
  return <article className="erp-feature techdive-feature">
    <div className="erp-feature-copy">
      <p className="eyebrow">Siyaratech · 02 / Featured work · Personalised learning</p>
      <h3><Link to="/work/techdivehub">TechDiveHub</Link></h3>
      <p className="erp-feature-note handwritten">{text.motto}</p>
      <p>{text.summary}</p><p className="erp-ownership-line">{text.rag}</p>
      <div className="tag-list"><span>Adaptive roadmaps</span><span>RAG</span><span>Runtime generation</span><span>Playful UX</span></div>
      <Link className="text-link" to="/work/techdivehub">{text.cta}<ArrowUpRight size={18} /></Link>
    </div>
    <figure className="erp-system-drawing learning-drawing">
      <figcaption>UNDERSTAND → PERSONALISE → ADAPT</figcaption>
      <div className="erp-diagram-center"><Compass size={27} strokeWidth={1.5} /><span>Your background. Your goal. Your pace.</span></div>
      <div className="learning-path"><span><BookOpen size={22} />Know the basics</span><span><Sparkles size={22} />Learn your way</span><span><RefreshCw size={22} />Adjust the path</span></div>
      <p className="handwritten">{mode === "munna" ? "Atke? Saath mein samajhte hain!" : "Stuck? Let’s take a different route."}</p>
      <small>Technical docs + learner context → personal explanations</small>
    </figure>
  </article>;
}
