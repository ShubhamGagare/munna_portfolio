import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { aiCaseStudies } from "@/data/aiCaseStudies";
import { usePortfolioMode } from "@/hooks/use-portfolio-mode";
import CaseHeader from "@/components/CaseHeader";
import NotFound from "@/pages/NotFound";

const labels = {
  bro: ["The problem", "The bigger picture", "Where I came in", "Working through it", "What came together", "Under the hood", "The outcome"],
  munna: ["Problem kya thi?", "Pehle context samjho", "Apun ka role", "Kaise suljhaya", "Kya banaya", "Tech ki baat", "Kaam ka nateeja"],
  professional: ["Problem", "Context", "My Role", "Approach", "Solution", "Technical Context", "Outcome"],
};

export default function AICaseStudy() {
  const { slug } = useParams();
  const [mode, setMode] = usePortfolioMode();
  const project = aiCaseStudies.find((study) => study.slug === slug);

  useEffect(() => {
    const previousTitle = document.title;
    if (project) document.title = `${project.title} | Shubham Gagare`;
    window.scrollTo(0, 0);
    return () => { document.title = previousTitle; };
  }, [project]);

  if (!project) return <NotFound />;
  const nextProject = aiCaseStudies.find((study) => study.slug !== project.slug)!;
  const isKnowledge = project.slug === "enterprise-ai-platform";
  const introduction = mode === "professional" ? project.subtitle : mode === "bro" ? isKnowledge ? "Bringing documents, agents, and trustworthy answers into one shared workspace." : "Helping a message and a receipt become a clear next step." : isKnowledge ? "Knowledge, documents aur AI agents — sab ek jagah, taaki har answer samajh aaye." : "Ek message, ek receipt, aur aage ka clear raasta. Member aur admin, dono ke liye.";

  return (
    <div className="portfolio-shell" data-tone={mode}>
      <a className="skip-link" href="#case-main">Skip to case study</a>
      <CaseHeader mode={mode} setMode={setMode} />
      <main id="case-main" className="page-width case-main">
        <div className="case-hero"><p className="eyebrow">Kforce · Enterprise AI · Case Study</p><h1>{project.title}</h1><p className="case-intro">{introduction}</p><p className="case-role">{project.role}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
        <figure className="case-workflow"><figcaption>{mode === "munna" ? "Workflow, ek nazar mein" : mode === "bro" ? "How the pieces connect" : "Workflow overview"}</figcaption><ol>{project.steps.map((step, index) => <li key={step}><span>0{index + 1}</span>{step}</li>)}</ol></figure>
        <div className="case-sections">{project.sections.map((section, index) => <section className="case-section" key={section.title}><h2><span>0{index + 1}</span>{labels[mode][index]}</h2><div>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{section.items && <ul>{section.items.map(item => <li key={item}>{item}</li>)}</ul>}</div></section>)}</div>
        <footer className="case-footer"><p>Project details are generalized to protect confidential information.</p><Link to={`/work/${nextProject.slug}`} className="text-link">{mode === "munna" ? "Agli kahaani" : mode === "bro" ? "Up next" : "Next case study"}: {nextProject.title}<ArrowRight size={17} className="shrink-0" /></Link></footer>
      </main>
    </div>
  );
}
