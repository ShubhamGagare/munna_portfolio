import { Link } from "react-router-dom";
import { ArrowUpRight, Building2, Calculator, Package, Receipt, Users, ClipboardCheck, Truck } from "lucide-react";
import { constructionCopy } from "@/data/constructionERP";
import type { PortfolioMode } from "@/hooks/use-portfolio-mode";

export default function ConstructionFeature({ mode }: { mode: PortfolioMode }) {
  const text = constructionCopy[mode];
  return (
    <article className="erp-feature">
      <div className="erp-feature-copy">
        <p className="eyebrow">{text.eyebrow}</p>
        <h3><Link to="/work/construction-erp">Construction & Real Estate ERP</Link></h3>
        <p className="erp-feature-note handwritten">{text.featured}</p>
        <p>{text.summary}</p>
        <p className="erp-ownership-line">{mode === "munna" ? "Client ke office se code tak: planning, quotations, communication aur alag-alag teams ki zimmedari." : mode === "bro" ? "In the client's office and in the code: planning, quotations, conversations, and teams across projects." : "Client-site collaboration, planning, quotations, stakeholder communication, and coordination across project teams."}</p>
        <div className="tag-list"><span>Full-stack engineering</span><span>Client-facing delivery</span><span>Team leadership</span><span>Frappe workflows</span></div>
        <Link className="text-link" to="/work/construction-erp">{text.cta}<ArrowUpRight size={18} /></Link>
      </div>
      <figure className="erp-system-drawing">
        <figcaption>ESTIMATE → EXECUTE → RECONCILE</figcaption>
        <div className="erp-diagram-center"><Building2 size={27} strokeWidth={1.5} /><span>Connected construction operations</span></div>
        <div className="erp-diagram-modules">{[
          { label: "Cost & budgets", Icon: Calculator }, { label: "Materials", Icon: Package },
          { label: "Billing", Icon: Receipt }, { label: "Workforce", Icon: Users },
          { label: "Assets", Icon: Truck }, { label: "Quality", Icon: ClipboardCheck },
        ].map(({ label, Icon }) => <div key={label}><Icon size={22} strokeWidth={1.5} /><span>{label}</span></div>)}</div>
        <p className="handwritten">{mode === "munna" ? "Har module ka rishta, bhai." : "Every module has a neighbour."}</p>
      </figure>
    </article>
  );
}
