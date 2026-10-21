import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import CaseHeader from "@/components/CaseHeader";
import { usePortfolioMode } from "@/hooks/use-portfolio-mode";
import { constructionCopy, erpModules, erpDecisions } from "@/data/constructionERP";

const sectionLabels = {
  bro: ["The problem", "The bigger picture", "From client office to code", "Making the pieces work together", "What I built", "Under the hood", "What the work made possible"],
  munna: ["Problem kya thi?", "Pehle site ki baat samjho", "Circuit se Munnabhai tak", "Sabko saath kaise joda", "Apun ne kya banaya", "Tech ki baat", "Kaam ka nateeja"],
  professional: ["Problem", "Context", "My Role", "Approach", "Solution", "Technical Context", "Outcome"],
};

export default function ConstructionERP() {
  const [mode, setMode] = usePortfolioMode();
  const text = constructionCopy[mode];
  const labels = sectionLabels[mode];
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Construction & Real Estate ERP | Shubham Gagare";
    window.scrollTo(0, 0);
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <div className="portfolio-shell" data-tone={mode}>
      <a className="skip-link" href="#case-main">Skip to case study</a>
      <CaseHeader mode={mode} setMode={setMode} />
      <main id="case-main" className="page-width case-main erp-case">
        <div className="case-hero">
          <p className="eyebrow">{text.eyebrow}</p>
          <h1>Construction & Real Estate ERP</h1>
          <p className="case-intro">{text.intro}</p>
          <p className="case-role">Planning & quotations · Client-facing delivery · Full-stack engineering · Multi-team coordination</p>
          <div className="tag-list"><span>Frappe workflows</span><span>Web frontend</span><span>Device integrations</span><span>Design systems</span></div>
        </div>
        <figure className="case-workflow"><figcaption>{mode === "munna" ? "Pehli meeting se site ke workflow tak" : mode === "bro" ? "From the first conversation to the working system" : "End-to-end delivery scope"}</figcaption><ol>{["Understand site needs", "Plan & quote", "Coordinate teams", "Build & integrate", "Deliver & refine"].map((step, i) => <li key={step}><span>0{i + 1}</span>{step}</li>)}</ol></figure>

        <div className="case-sections">
          <section className="case-section"><h2><span>01</span>{labels[0]}</h2><div><p>Construction operations depend on connected information: estimates shape budgets, site requests drive procurement, resource usage affects costs, and completed work feeds billing. When these workflows disagree, teams have to reconcile quantities, rates, stock, and records manually.</p><p>The engineering challenge was to make those relationships work across the ERP while keeping daily tasks understandable for site staff, procurement teams, HR, and project stakeholders.</p></div></section>
          <section className="case-section"><h2><span>02</span>{labels[1]}</h2><div><p>As Siyaratech's first engineering hire, I owned architecture and delivery across four concurrent products and led a team of eight engineers and interns. The construction ERP was a major part of that work, spanning planning, cost management, procurement, inventory, contracts, workforce operations, and quality.</p><p>The engineering highlights below include work delivered during June–July 2026, from a cost-model restructure to attendance-device integration and interface consistency.</p></div></section>
          <section className="case-section"><h2><span>03</span>{labels[2]}</h2><div>
            <p>{mode === "munna" ? "Kabhi Circuit ki tarah details sambhali, kabhi Munnabhai ki tarah sabko saath leke chala. Client ke office mein baithkar requirements samjhi; planning, quotations, communication, teams aur code — har stage mein haath tha, bhai." : mode === "bro" ? "Some days I was in the client's office working through requirements and quotations. Other days I was deep in cost calculations, device sync, or a frontend release. I stayed involved across the whole delivery, coordinating teams on different projects along the way." : "As Founding Engineer, I worked from the client's office to understand requirements, handled planning and quotations, maintained client communication, and coordinated multiple teams across projects while contributing directly to frontend, backend, and integration work."}</p>
            <ul><li><strong>Discovery and planning:</strong> worked directly with the client to understand operational needs and shape the work to be delivered.</li><li><strong>Commercial and delivery coordination:</strong> prepared quotations, managed client communication, and coordinated work across teams and projects.</li><li><strong>Hands-on implementation:</strong> developed business rules, synchronization flows, web interfaces, and device integrations.</li><li><strong>Team leadership:</strong> led and mentored engineers, aligned related changes, and remained involved through delivery and refinement.</li></ul>
          </div></section>
          <section className="case-section"><h2><span>04</span>{labels[3]}</h2><div><p>I followed the workflow across module boundaries: what a user enters, how the backend interprets it, what another module consumes, and how the result appears in the interface. Changes to costing, procurement, HR, and quality often required coordinated updates across several applications.</p><p>Working close to the client helped connect those engineering decisions to actual site operations. Planning and client communication ran alongside implementation, with frontend and backend changes delivered together.</p></div></section>
        </div>

        <section className="erp-solution" aria-labelledby="erp-solution-heading">
          <p className="eyebrow">05 / {labels[4]}</p><h2 className="section-title" id="erp-solution-heading">{text.scope}</h2><p className="section-description">{text.scopeIntro}</p>
          <nav className="erp-module-nav" aria-label="ERP engineering areas">{erpModules.map(module => <a key={module.id} href={`#${module.id}`}>{module.label}<ArrowRight size={12} /></a>)}</nav>
          <div className="erp-module-grid">{erpModules.map((module, i) => <article className="erp-module-card" id={module.id} key={module.id}><p className="eyebrow">0{i + 1} / {module.label}</p><h3>{module.title}</h3><p>{module.summary}</p><ul>{module.contributions.map(item => <li key={item}>{item}</li>)}</ul><p className="erp-module-result">{module.result}</p></article>)}</div>
        </section>

        <section className="erp-decisions" aria-labelledby="erp-decisions-heading"><h2 id="erp-decisions-heading" className="section-title">{text.decisions}</h2><div>{erpDecisions.map(decision => <article key={decision.title}><h3>{decision.title}</h3><p>{decision.before}</p><p><strong>Decision:</strong> {decision.decision}</p><p><strong>Result:</strong> {decision.effect}</p></article>)}</div></section>
        <div className="case-sections">
          <section className="case-section"><h2><span>06</span>{labels[5]}</h2><div><p>The work spans Frappe-backed documents and business workflows, a web frontend, and an attendance-device synchronization service. Implementation included document lifecycle rules, rate and quantity calculations, cross-module synchronization, polling-based device communication, migrations, and shared interface tokens.</p><p>The core engineering work was maintaining consistent behavior across those layers: preserving manual rate decisions, handling units correctly, coordinating rental transfers, and keeping device state visible in HR interfaces.</p></div></section>
          <section className="case-section"><h2><span>07</span>{labels[6]}</h2><div><p>Delivered connected operational capabilities across costing, material movement, billing, attendance, assets, and quality, backed by coordinated frontend and backend updates.</p><ul><li>Rate refreshes preserve manually entered internal rates.</li><li>Material shortages connect to purchasing, and stock issue follows FIFO with brand constraints.</li><li>Rental costs move with an asset's project assignment.</li><li>Billing accounts for remaining quantities and unit differences.</li><li>HR workflows support enrollment and synchronization across devices.</li><li>Shared design tokens bring greater consistency to the ERP interface.</li></ul><p>This work reflects the breadth of my Siyaratech role: understanding the client's operations, planning and quoting the work, coordinating teams, and building the software that supports it.</p></div></section>
        </div>
        <footer className="case-footer"><p>Client and internal implementation names are generalized.</p><Link to="/work/techdivehub" className="text-link">{mode === "munna" ? "Agli kahaani" : mode === "bro" ? "Up next" : "Next case study"}: TechDiveHub<ArrowRight size={17} /></Link></footer>
      </main>
    </div>
  );
}
