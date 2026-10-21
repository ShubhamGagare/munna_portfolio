import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, ArrowUpRight, Award, BookOpen, Check, Code2, Download, Github, Heart, Linkedin, Mail, PenTool, Sparkles } from "lucide-react";
import { Button } from "@/components/handcraft/button";
import { Card } from "@/components/handcraft/card";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import ModeSwitch from "@/components/ModeSwitch";
import SelectedWork from "@/components/SelectedWork";
import { usePortfolioMode } from "@/hooks/use-portfolio-mode";
import { certification, copy, engineeringProjects, experience, skillGroups } from "@/data/portfolio";

export default function Index() {
  const [mode, setMode] = usePortfolioMode();
  const [liked, setLiked] = useState(false);
  const text = copy[mode];

  return (
    <div className="portfolio-shell" data-tone={mode}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="portfolio-header">
        <div className="page-width header-inner">
          <a className="wordmark" href="#" aria-label="Shubham Gagare, back to top"><span className="monogram">sg.</span><span className="wordmark-name">Shubham Gagare<span>Engineer & product builder</span></span></a>
          <nav className="desktop-nav" aria-label="Main navigation"><a href="#recent-work-section">Work</a><a href="#experience">Experience</a><a href="#certification">Credentials</a><a href="#contact-section">Say hello <ArrowUpRight size={14} /></a></nav>
          <ModeSwitch mode={mode} onChange={setMode} />
        </div>
      </header>

      <main id="main-content">
        <section className="hero page-width" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <p className="eyebrow"><span className="small-dot" /> ENGINEERING · DESIGN · APPLIED AI</p>
            <p className="hero-greeting">{text.hello}</p>
            <h1 id="hero-heading">{text.hero}<br /><span className="ink-underline">{text.heroAccent}</span></h1>
            <p className="hero-intro">{text.intro}</p>
            <div className="hero-actions"><Button asChild className="sketch-action primary-action" size="lg"><a href="#recent-work-section">{text.workCta}<ArrowDown size={17} /></a></Button><a className="text-link" href="#contact-section">{text.contactCta}<ArrowUpRight size={17} /></a></div>
            <p className="hero-meta"><strong>7+ years</strong><span aria-hidden="true">/</span> Full-Stack Engineer & Product Builder</p>
          </div>
          <div className="hero-portrait">
            <span className="portrait-tape" aria-hidden="true" />
            <figure className="portrait-frame">
              <img src="/images/shubham-portrait.jpeg" width="931" height="1153" loading="eager" alt="Shubham Gagare wearing glasses and a navy blazer" />
              <figcaption>{text.note}<Heart size={15} aria-hidden="true" /></figcaption>
            </figure>
            <span className="portrait-note">{mode === "munna" ? "Apun, bina filter ke." : mode === "bro" ? "Yep, that's me." : "Design meets engineering."}<svg viewBox="0 0 70 60" fill="none" aria-hidden="true"><path d="M5 5C55 1 64 20 45 50m-2-17 2 18 18-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
          </div>
        </section>

        <div className="page-width"><a href="#certification" className="credential-ribbon"><Award size={24} /><span><strong>Microsoft Certified</strong><span>Azure AI Apps and Agents Developer Associate</span></span><span className="ribbon-link">View credential <ArrowUpRight size={16} /></span></a></div>

        <SelectedWork mode={mode} />

        <section className="library-section section-space" id="handcraft-ui" aria-labelledby="library-heading">
          <div className="page-width library-grid">
            <div>
              <p className="eyebrow"><PenTool size={15} /> {text.libraryEyebrow}</p>
              <h2 className="section-title" id="library-heading">HandCraftUI<span className="handwritten library-note">a little less ordinary</span></h2>
              <h3 className="library-subtitle">{text.libraryTitle}</h3>
              <p className="section-description">{text.libraryIntro}</p>
              <div className="tag-list"><span>React</span><span>TypeScript</span><span>Reusable components</span><span>Made by me</span></div>
              <a className="text-link" href="https://www.npmjs.com/package/handcraft-ui" target="_blank" rel="noopener noreferrer">Explore HandCraftUI on npm <ArrowUpRight size={17} /></a>
            </div>
            <div className="library-demo">
              <span className="demo-annotation handwritten">{mode === "munna" ? "Bhai, yeh interactive hai ↓" : mode === "bro" ? "Go on, try it ↓" : "Live component example ↓"}</span>
              <Card className="demo-card">
                <div className="demo-card-top"><span className="demo-badge">HANDCRAFTUI</span><Sparkles size={22} /></div>
                <h3>{text.demoTitle}</h3><p>{text.demoText}</p>
                <Button className={`sketch-action demo-button ${liked ? "is-liked" : ""}`} onClick={() => setLiked(!liked)} aria-pressed={liked}><Heart size={17} fill={liked ? "currentColor" : "none"} />{text.demoButton}</Button>
                <p className="demo-feedback" role="status">{liked ? text.demoDone : "React components. Hand-drawn character."}</p>
              </Card>
              <div className="demo-code"><Code2 size={16} /><code>{'<Card> A little personality. </Card>'}</code></div>
            </div>
          </div>
        </section>

        <section id="experience" className="page-width section-space" aria-labelledby="experience-heading">
          <div className="section-heading"><p className="eyebrow">02 / THE JOURNEY</p><h2 id="experience-heading" className="section-title">{text.experience}</h2><p className="section-description">{text.experienceIntro}</p></div>
          <div className="experience-list">{experience.map((job, index) => (
            <article className={`experience-row ${job.company === "Siyaratech Innovations" ? "experience-featured" : ""}`} key={job.company}>
              <div className={`company-mark company-${index}`} aria-hidden="true">{job.initials}</div>
              <div className="experience-body"><div className="experience-heading"><div><h3>{job.company}</h3><p className="job-role">{job.role}</p></div><p className="job-period">{job.period}</p></div><p className="job-summary">{job.summary[mode]}</p>
                <details className="contribution-details" open={job.company === "Siyaratech Innovations"}><summary>{text.details}<span aria-hidden="true">+</span></summary><ul>{job.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>{job.link.startsWith("#") ? <a className="text-link" href={job.link}>Explore work <ArrowRight size={16} /></a> : <Link className="text-link" to={job.link}>{text.caseStudy}<ArrowRight size={16} /></Link>}</details>
              </div>
            </article>
          ))}</div>
        </section>

        <section id="siyaratech-projects" className="page-width section-space section-divider" aria-labelledby="engineering-heading">
          <div className="section-heading"><p className="eyebrow">03 / BUILT AT SIYARATECH</p><h2 id="engineering-heading" className="section-title">{text.more}</h2><p className="section-description">{text.moreIntro}</p></div>
          <div className="engineering-grid">{engineeringProjects.map((project, index) => (
            <article className="engineering-card" id={index === 0 ? "construction-erp" : undefined} key={project.title}>
              <div className="project-topline"><span>{project.category}</span><span className="status-label">{project.status}</span></div>
              <h3>{project.title}</h3><p>{mode === "bro" ? project.bro : mode === "munna" ? project.munna : project.description}</p><p className="project-tech">{project.tech}</p>
              {project.link && (project.link.startsWith("/") ? <Link className="text-link" to={project.link}>{text.caseStudy}<ArrowRight size={16} /></Link> : <a className="text-link" href={project.link} target="_blank" rel="noopener noreferrer">Visit product <ArrowUpRight size={16} /></a>)}
            </article>
          ))}</div>
          <details className="personal-work"><summary>{mode === "munna" ? "Aur apne kuch projects" : mode === "bro" ? "A couple more personal builds" : "Additional personal projects"}<span aria-hidden="true">+</span></summary><div className="personal-grid"><article><h3>Students AI Assistant</h3><p>An AI study assistant focused on explaining concepts and helping students work through learning material.</p><span>Next.js · Python · LLMs</span></article><article><h3>MarathaMatrimony</h3><p>A community-focused matrimony application with profile matching, chat, and verification workflows.</p><span>React Native · Firebase · Node.js</span></article></div></details>
        </section>

        <section className="skills-section section-space" aria-labelledby="skills-heading"><div className="page-width"><div className="section-heading"><p className="eyebrow">04 / THE TOOLKIT</p><h2 id="skills-heading" className="section-title">{text.skills}</h2></div><div className="skills-grid">{skillGroups.map((group, index) => <div className="skill-group" key={group.title}><span className="skill-number">0{index + 1}</span><h3>{group.title}</h3><p>{group.caption}</p><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}</div></div></section>

        <section id="certification" className="page-width section-space" aria-labelledby="credentials-heading">
          <div className="section-heading"><p className="eyebrow">05 / CREDENTIALS</p><h2 id="credentials-heading" className="section-title">{text.learning}</h2></div>
          <Card className="certification-card">
            <div className="cert-icon"><Award size={40} strokeWidth={1.4} /><span>MICROSOFT<br />CERTIFIED</span></div>
            <div className="cert-copy"><p className="eyebrow">MICROSOFT CERTIFICATION</p><h3>Azure AI Apps and Agents<br className="desktop-break" /> Developer Associate</h3><p>{text.certNote}</p><dl className="cert-dates"><div><dt>Earned</dt><dd>{certification.earned}</dd></div><div><dt>Expires</dt><dd>{certification.expires}</dd></div></dl><p className="credential-id">Credential ID: {certification.credentialId}</p></div>
            <div className="cert-actions"><Button asChild className="sketch-action primary-action"><a href={certification.url} target="_blank" rel="noopener noreferrer">Verify on Microsoft Learn <ArrowUpRight size={16} /></a></Button><a href={certification.pdf} download className="text-link"><Download size={16} /> Download certificate</a></div>
          </Card>
          <div className="education-grid"><article><h3><BookOpen size={19} /> Education</h3><div><h4>CDAC ACTS, Pune</h4><p>Post Graduate Diploma in Advanced Computing</p><span>August 2018 – February 2019</span></div><div><h4>Pune University</h4><p>BE, Computer Engineering</p><span>June 2015 – June 2018</span></div></article><article><h3><Award size={19} /> Recognition</h3><div><h4>Best Team Award · ParentPay</h4><p>Take Register module delivery</p><span>2023</span></div><div><h4>Best Team Award · Goldman Sachs engagement</h4><p>Product implementation at Volante</p><span>2020</span></div></article></div>
        </section>

        <section className="world-section page-width section-space section-divider" aria-labelledby="world-heading"><div className="section-heading"><p className="eyebrow">06 / BEYOND THE CODE</p><h2 id="world-heading" className="section-title">{text.world}</h2><p className="section-description">{text.worldText}</p></div>
          <Dialog><DialogTrigger asChild><button className="world-image-button" aria-label="Enlarge illustrated portrait of Shubham's interests"><img src="/images/shubham-world.png" width="2056" height="765" loading="lazy" alt="Illustrated workspace connecting Shubham's interests in product design, software engineering, AI, learning, and life outside work" /><span>Explore the illustration <ArrowUpRight size={16} /></span></button></DialogTrigger><DialogContent className="illustration-dialog"><DialogTitle>A little window into my world</DialogTitle><DialogDescription>Engineering, product design, learning, and life outside work. Scroll to explore the illustration on smaller screens.</DialogDescription><div className="illustration-scroll"><img src="/images/shubham-world.png" width="2056" height="765" alt="Full illustration of Shubham's workspace and personal interests" /></div></DialogContent></Dialog>
          <p className="world-caption handwritten">{mode === "munna" ? "Build. Design. Seekho. Phir se." : "Build. Design. Ship. Learn. Repeat."}</p>
        </section>

        <section id="contact-section" className="contact-section section-space"><div className="page-width contact-inner"><div><p className="eyebrow">NEXT / SOMETHING WE BUILD TOGETHER</p><h2>{text.contact}</h2><p>{text.contactText}</p><Button asChild className="sketch-action primary-action" size="lg"><a href="mailto:shubhamgagare1997@gmail.com"><Mail size={18} />{text.contactCta}<ArrowUpRight size={17} /></a></Button></div><div className="contact-links"><a href="https://www.linkedin.com/in/shubham-gagare-543a05160/" target="_blank" rel="noopener noreferrer"><Linkedin size={18} /> LinkedIn <ArrowUpRight size={16} /></a><a href="https://github.com/ShubhamGagare" target="_blank" rel="noopener noreferrer"><Github size={18} /> GitHub <ArrowUpRight size={16} /></a><a href="/Shubham_Gagare_SeniorEngineer.pdf" target="_blank" rel="noopener noreferrer"><Download size={18} /> PDF résumé <ArrowUpRight size={16} /></a></div></div></section>
      </main>
      <footer className="portfolio-footer page-width"><p>{text.footer}<span>© {new Date().getFullYear()} Shubham Gagare</span></p><a href="#handcraft-ui"><Check size={14} /> HandCraftUI components, made by me.</a><a href="#" className="back-top">Back to top ↑</a></footer>
    </div>
  );
}
