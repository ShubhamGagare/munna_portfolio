import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check, Database, FileText, Network, MessageSquare, ShieldCheck, UserCheck } from "lucide-react";
import { aiCaseStudies } from "@/data/aiCaseStudies";
import { copy } from "@/data/portfolio";
import type { PortfolioMode } from "@/hooks/use-portfolio-mode";
import ConstructionFeature from "@/components/ConstructionFeature";
import TechDiveFeature from "@/components/TechDiveFeature";

export default function SelectedWork({ mode }: { mode: PortfolioMode }) {
  const text = copy[mode];
  return (
    <section id="recent-work-section" className="page-width section-space" aria-labelledby="selected-work-heading">
      <div className="section-heading"><p className="eyebrow">01 / SELECTED WORK</p><h2 id="selected-work-heading" className="section-title">{text.work}</h2><p className="section-description">{text.workIntro}</p></div>
      <ConstructionFeature mode={mode} />
      <TechDiveFeature mode={mode} />
      <div className="selected-grid">
        {aiCaseStudies.map((project, index) => (
          <article className="selected-card" key={project.slug}>
            <div className={`project-visual visual-${index}`} aria-label="Conceptual workflow illustration">
              <span className="visual-label">{index === 0 ? "KNOWLEDGE → CLARITY" : "CONVERSATION → ACTION"}</span>
              {index === 0 ? <div className="knowledge-drawing"><div className="diagram-node"><Database size={24} /><span>Knowledge</span></div><span className="diagram-connector" aria-hidden="true">→</span><div className="diagram-node main-node"><Network size={30} /><span>AI workspace</span></div><span className="diagram-connector" aria-hidden="true">→</span><div className="diagram-node"><ShieldCheck size={24} /><span>Evidence</span></div><span className="diagram-note handwritten">Answers with context.</span></div> : <div className="benefits-drawing"><div className="message-note"><MessageSquare size={20} /><span>Receipt submitted</span><Check size={17} /></div><div className="benefits-path"><div><FileText size={23} /><span>Understand</span></div><ArrowRight size={18} /><div><ShieldCheck size={23} /><span>Validate</span></div><ArrowRight size={18} /><div><UserCheck size={23} /><span>Review</span></div></div><span className="handwritten">A clear next step.</span></div>}
            </div>
            <div className="selected-card-copy"><p className="project-topline">Kforce <span>Enterprise AI</span></p><h3><Link to={`/work/${project.slug}`}>{project.title}</Link></h3><p>{mode === "munna" ? index === 0 ? "Documents, knowledge aur agents ek jagah. Har answer ke saath context, taaki review aasaan ho." : "Message aur receipt se benefit workflow tak. Jahan zaroorat ho, human review ka clear raasta." : mode === "bro" ? index === 0 ? "A shared home for documents, agents, and answers people can actually inspect." : "Connecting messages, receipts, and benefit rules — with a clear place for human review." : project.summary}</p><div className="tag-list">{project.tags.slice(0, 3).map(tag => <span key={tag}>{tag}</span>)}</div><Link to={`/work/${project.slug}`} className="text-link">{text.caseStudy}<ArrowUpRight size={17} /></Link></div>
          </article>
        ))}
        <article className="selected-small"><div className="selected-small-icon construction-icon"><CodeIcon /></div><div><p className="project-topline">Siyaratech · Product portfolio</p><h3>Learning, commerce & automation</h3><p>{mode === "munna" ? "Ek project nahi, alag-alag teams aur products ka safar." : mode === "bro" ? "Different products, different teams. Involved from the client conversation to delivery." : "Multi-project delivery across learning, commerce, and automation."}</p><a href="#siyaratech-projects" className="text-link">{mode === "munna" ? "Aur kaam dekho" : "Explore Siyaratech work"}<ArrowRight size={16} /></a></div></article>
        <article className="selected-small"><div className="selected-small-icon school-icon"><BookIcon /></div><div><p className="project-topline">ParentPay · Product Designer</p><h3>SIMS Next Gen</h3><p>{mode === "munna" ? "School staff ka roz ka kaam, thoda aasaan." : mode === "bro" ? "Better school days start with better workflows." : "Research and product design for UK schools."}</p><Link to="/parentpay" className="text-link">{text.caseStudy}<ArrowRight size={16} /></Link></div></article>
      </div>
    </section>
  );
}

function CodeIcon() { return <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M5 32h30M9 31V14l11-7 11 7v17M16 31V21h8v10M15 15h2m6 0h2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>; }
function BookIcon() { return <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M20 11c-5-4-10-4-15-2v23c5-2 10-2 15 2 5-4 10-4 15-2V9c-5-2-10-2-15 2Zm0 0v23M10 15l5 1m-5 6 5 1m10-7 5-1m-5 8 5-1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>; }
