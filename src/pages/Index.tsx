"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Code2, Zap, Rocket, User, Briefcase, Calendar } from "lucide-react"
import { useNavigate } from "react-router-dom"

const Index = () => {
  const [mode, setMode] = useState<"munna" | "professional" | "bro">("bro")
  const navigate = useNavigate()

  const scrollToRecentWork = () => {
    const element = document.getElementById("recent-work-section")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  const scrollToContact = () => {
    const element = document.getElementById("contact-section")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const workExperience = [
    {
      company: "Siyaratech Innovations",
      role: "Founding Engineer",
      period: "November 2024 – Present",
      munnaQuote: "Founding Engineer bhai! 0 se 1 tak product banaya. 8 logon ki team sambhali, design se code tak sab dekha. Startup ka asli mazaa!",
      broQuote: "Founding Engineer mode: ON. Shipped 0→1 products, led a squad of 8, owned the entire stack + design. Startup life is crazy but we shipping! 🚀",
      highlights: [
        "Product Ownership: Led architecture, frontend, backend, and UX for multiple 0→1 products (AI-Driven Learning, Enterprise Security, Construction Mgmt).",
        "Team Leadership: Led & mentored a cross-functional team of 8 (Frontend + AI engineers). Defined code quality & delivery standards.",
        "Rapid Execution: Built and shipped MVPs rapidly using React, Next.js, Java Spring Boot, and modern APIs.",
        "Design Systems: Designed and implemented design systems ensuring consistent UX across all platforms.",
        "Sales Impact: Improved proposal acceptance rates by 25% through structured communication strategies with founders/clients.",
        "Tech Stack: React, Next.js, Java, Spring Boot, AI/LLM integrations.",
      ],
      broHighlights: [
        "Zero to One: Architected & shipped multiple products from scratch. AI Learning, Security tools, Construction tech—we built it all.",
        "Squad Lead: Captained a team of 8. Mentorship, code reviews, setting the bar high. We move fast and break nothing.",
        "Speed Demon: Shipped MVPs at lightning speed using the modern stack (React, Next.js, Spring Boot).",
        "Design System Ops: Built the UI language so everything looks premium and consistent.",
        "Business Wins: Helped close 25% more deals by nailing the technical proposals. Tech + Business = 🤝",
      ],
      professionalHighlights: [
        "Led architecture, frontend, backend, and UX for multiple 0→1 products including AI-Driven Learning Platform and Enterprise Security tools",
        "Led and mentored a cross-functional team of 8 engineers, defining delivery standards and release processes",
        "Built and shipped MVPs rapidly using React, Next.js, Java Spring Boot, and modern APIs",
        "Designed and implemented design systems to ensure consistent UX across platforms",
        "Improved proposal acceptance rates by 25% through structured communication strategies with clients",
        "Owned deployment, monitoring, and scalability for production systems",
      ],
      link: "https://siyaratechin.com",
    },
    {
      company: "ParentPay Group",
      role: "Product Designer",
      period: "November 2021 – March 2024",
      munnaQuote: "UK ke schools ke liye kaam kiya. User research se pata chala kya chahiye. 25% adoption badhaya!",
      broQuote: "Built for UK schools. User research driven. Boosted adoption by 25%. Design that actually works.",
      highlights: [
        "User Research: Conducted interviews with UK school staff to understand pain points in daily operations.",
        "Design Designs: Created low-to-high fidelity workflows for critical modules like Fire Register and Attendance.",
        "Impact: Iterated based on pilot feedback, boosting user adoption by 25%.",
        "Collaboration: Worked closely with engineers, PMs, and stakeholders to ensure feasible and clear designs.",
        "Recognition: Won Best Team Award (2023) for high-impact product delivery.",
      ],
      broHighlights: [
        "Research First: Talked to real users (UK school staff) to figure out what they actually needed.",
        "Pixel Perfect: Designed everything from wireframes to high-fi prototypes for critical school systems.",
        "Big Numbers: Design improvements led to a 25% jump in user adoption. ROI 📈",
        "Team Player: Synced with devs and PMs to make sure the design was buildable and solid.",
        "Trophy Cabinet: Bagged the Best Team Award (2023). We don't miss. 🏆",
      ],
      professionalHighlights: [
        "Worked on SIMS Next Gen, a large-scale UK education platform",
        "Conducted user research and interviews with UK school administrators and staff",
        "Designed low- to high-fidelity workflows for critical modules such as Fire Register and Attendance",
        "Iterated designs based on pilot-school feedback, contributing to a 25% increase in user adoption",
        "Recognized with Best Team Award (2023) for high-impact product delivery",
      ],
      link: "/parentpay",
    },
    {
      company: "Volante Technologies",
      role: "Software Engineer",
      period: "March 2019 – November 2021",
      munnaQuote: "Automation ka jadoo! Testers ka 40% kaam kam kiya. Java aur AngularJS pe haath saaf kiya.",
      broQuote: "Automation wizardry. Slashed tester effort by 40%. Java + Angular = Enterprise scale wins.",
      highlights: [
        "Full Stack Dev: Built frontend with AngularJS and backend services in Java for enterprise payment platforms.",
        "Automation: Designed tools that reduced tester effort by ~40%. Efficiency level up!",
        "Collaboration: Worked with PMs, BAs, and QA teams across multiple releases of VolPay.",
        "Recognition: Received Best Team Award (2020) for Goldman Sachs engagement.",
      ],
      broHighlights: [
        "Enterprise Stack: AngularJS + Java. Built the heavy machinery for payment platforms.",
        "Efficiency Hack: Built automation tools that saved testers 40% of their time. Work smarter, not harder.",
        "Team Synergy: Crushed releases with the PM and QA squads.",
        "Gold Standard: Won Best Team Award (2020) for the Goldman Sachs project. 🥇",
      ],
      professionalHighlights: [
        "Developed frontend components using HTML, CSS, AngularJS and backend services in Java",
        "Designed automation tools that reduced tester effort by ~40%",
        "Collaborated with Product Managers, BAs, and QA teams across releases",
        "Contributed to multiple versions of VolPay, a large-scale financial product",
        "Received Best Team Award (2020) for product implementations (Goldman Sachs engagement)",
      ],
      link: "/volpay-testsuite",
    },
  ]

  const deliveredProjects = [
    {
      title: "TechDiveHub AI",
      subtitle: "AI ka Jalwa",
      broSubtitle: "AI Learning Platform that actually works",
      description:
        "An AI-driven learning platform built leveraging LLMs. Focused on accessibility, performance, and a clean UI/UX. Teachers love it!",
      broDescription:
        "AI-powered education platform leveraging LLMs using Next.js. Clean UI/UX, fully responsive, and performance-tuned. Teachers are literally saying 'This makes sense!'",
      tech: ["Next.js", "React", "LLMs", "Design Systems"],
      challenge:
        "Building a performant AI wrapper that is also accessible and easy to use for non-tech users.",
      broChallenge:
        "Making AI simple enough for my grandma to use, but powerful enough to actually teach something. UX challenge level: Expert.",
      status: "🚀 Live",
      confidential: false,
      link: "https://techdivehub.siyaratechin.com",
    },
    {
      title: "Consortium",
      subtitle: "Influencers ka Bazaar",
      broSubtitle: "Influencer-led E-commerce",
      description:
        "An influencer-based e-commerce platform where creators curate and sell products. Features seamless social integration and payouts.",
      broDescription:
        "Shopify for Influencers. Creators pick products, sell to fans, make bank. We handled the crazy traffic spikes when they posted! 💸",
      tech: ["React", "Node.js", "AWS", "Payments"],
      challenge:
        "Managing high concurrency and inventory sync during influencer product drops.",
      broChallenge:
        "When an influencer posts, traffic goes 0 to 100 in seconds. keeping the servers alive was the real game.",
      status: "�️ Live",
      confidential: false,
      link: "https://consortium.siyaratechin.com",
    },
    {
      title: "Construction Management System",
      subtitle: "Hisaab Kitaab",
      broSubtitle: "Building the Builders",
      description:
        "A system for real-time cost and project tracking in construction. Helps manage inventory, labor, and timelines.",
      broDescription:
        "Real-time tracking for construction projects. Costs, inventory, labor—tracking every brick and rupee.",
      tech: ["React", "Spring Boot", "Calculations"],
      challenge:
        "Complex data models and real-time updates were key. Needed to be robust for on-site usage.",
      broChallenge:
        "Complex math, real-time sync, and an interface that works on a dusty construction site tablet. Rugged coding.",
      status: "🏗️ In Use",
      confidential: true,
      link: "NA",
    },
    {
      title: "AI Marketing Agent",
      subtitle: "Abhi Bana Raha Hoon",
      broSubtitle: "Cooking: AI Marketing Genius",
      description:
        "Currently architecting an AI-based marketing application to automate content creation, ad targeting, and analytics.",
      broDescription:
        "Building the future right now. AI that runs your marketing campaigns while you sleep. Still in the lab, but it's gonna be huge. 👨‍🍳",
      tech: ["AI Agents", "LLMs", "Python", "Next.js"],
      challenge:
        "Orchestrating multi-agent workflows to handle complex marketing strategies autonomously.",
      broChallenge:
        "Getting AI agents to collaborate without fighting. It's like herding super-smart digital cats.",
      status: "🚧 Building",
      confidential: false,
      link: "#",
    },
  ]

  const personalProjects = [
    {
      title: "HandCraftUI",
      subtitle: "Shadcn ka desi version",
      broSubtitle: "Shadcn but make it fun and sketchy",
      description:
        "Personal UI library experiment with hand-drawn aesthetic. Custom components with sketchy borders, speech bubbles, comic-style elements.",
      broDescription:
        "UI component library with personality. Hand-drawn vibes, sketchy borders, speech bubbles. Built because regular components are boring AF.",
      tech: ["React", "TypeScript", "Tailwind", "Storybook"],
      challenge:
        "Creating a unique design language that is still usable as a library.",
      broChallenge:
        "Making components look hand-drawn without SVG bloating. Pure CSS magic.",
      link: "https://www.npmjs.com/package/handcraft-ui",
    },
    {
      title: "Students AI Assistant",
      subtitle: "Padhai me madad",
      broSubtitle: "Study buddy 2.0",
      description:
        "AI assistant designed to help students with their queries and study material. Leverages LLMs for accurate responses.",
      broDescription:
        "An AI chatbot that actually helps you study instead of distracting you. LLM powered, student verified.",
      tech: ["AI/LLM", "Next.js", "Python"],
      challenge: "Prompt engineering to ensure responses are educational and not just answers.",
      broChallenge: "Taming the AI to explain concepts like a teacher, not a robot.",
      link: "#",
    },
    {
      title: "MarathaMatrimony App",
      subtitle: "Rishta wahi, soch nayi",
      broSubtitle: "Matchmaking made modern",
      description:
        "A community-focused matrimony app designed for specific cultural needs. Features profile matching, chat, and secure verification.",
      broDescription:
        "Bringing modern tech to traditional matchmaking. Secure profiles, chat features, and zero spam.",
      tech: ["React Native", "Firebase", "Node.js"],
      challenge: "Building trust through verified profiles and secure data handling.",
      broChallenge: "Privacy is paramount. Making sure data stays safe while people find love.",
      link: "#",
    },
  ]

  const skills = [
    {
      category: "Technical Stack",
      items: ["React", "Next.js", "Node.js", "Java", "TypeScript", "PostgreSQL", "SQL"],
      munnaExplanation:
        "Frontend ho dhoondna ya backend jodna, sab aata hai bhai. React, Java, SQL - sab set hai.",
      broExplanation:
        "Full stack utility belt. React/Next.js for the shiny stuff, Node/Java for the heavy lifting.",
    },
    {
      category: "Design & Tools",
      items: ["Figma", "Sketch", "Wireframing", "Prototyping", "Design Systems"],
      munnaExplanation:
        "Design bhi khud karta hoon. Figma me wireframe bana ke client ko khush kar deta hoon.",
      broExplanation:
        "I don't just code, I design. Figma ninja. From wireframe to prototype, I own the pixel.",
    },
    {
      category: "Soft Skills",
      items: ["Problem Solving", "Debugging", "Team Leadership", "Client Comm"],
      munnaExplanation:
        "Badi badi problem solve kar lete hain. Team ko bhi sambhal lete hain.",
      broExplanation:
        "Bug hunter, team captain, client whisperer. I solve problems before they become problems.",
    },
  ]

  // Profile picture based on mode
  const getProfilePicture = () => {
    switch (mode) {
      case "munna":
        return "/shubham.png?height=200&width=200&text=Munna+Mode"
      case "bro":
        return "/shubham.png?height=200&width=200&text=Bro+Mode"
      case "professional":
        return "/shubham.png?height=200&width=200&text=Professional"
      default:
        return "/shubham.png?height=200&width=200&text=Profile"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Floating Header */}
      <header className="fixed top-4 left-0 right-0 z-50 px-4">
        <div className="max-w-6xl mx-auto backdrop-blur-md bg-white/80 border-2 border-dashed border-gray-300 rounded-full shadow-lg px-6 py-3 flex justify-between items-center transition-all duration-300 hover:border-orange-400 hover:shadow-xl">
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 border-2 border-white shadow-sm">
              <span className="text-white font-comic font-bold text-2xl mt-1">S</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-comic font-bold text-2xl text-gray-800 leading-none group-hover:text-orange-600 transition-colors">Shubham Gagare</h1>
              <p className="text-xs text-gray-500 font-hand">Product Designer & Dev</p>
            </div>
          </div>

          <div className="flex items-center bg-gray-100/50 rounded-full p-1 border border-gray-200">
            {["bro", "munna", "professional"].map((m) => (
              <button
                key={m}
                onClick={() => setMode(m as any)}
                className={`px-4 py-1.5 rounded-full text-sm font-hand transition-all duration-300 ${mode === m
                  ? "bg-white text-orange-600 shadow-md transform scale-105 border border-orange-100 font-bold"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-200/50"
                  }`}
              >
                {m.charAt(0).toUpperCase() + m.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20 relative overflow-hidden">
        {/* Decorative Floating Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-yellow-400/20 rounded-full blur-xl animate-float delay-100"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-400/20 rounded-full blur-xl animate-float delay-500"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 text-orange-300 animate-bounce delay-700 opacity-50"><Code2 /></div>
        <div className="absolute bottom-20 right-1/4 w-8 h-8 text-blue-300 animate-bounce delay-1000 opacity-50"><Zap /></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="relative inline-block group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative">
              <img
                src={getProfilePicture() || "/placeholder.svg"}
                alt="Shubham Gagare Profile"
                className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white shadow-xl object-cover transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2 mx-auto"
              />
              <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-2 rounded-full border-4 border-white shadow-lg animate-bounce">
                <Rocket className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-6">
            {mode === "munna" ? (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h2 className="text-5xl md:text-7xl font-comic font-bold text-gray-800 mb-2">Namaste! Main <span className="text-orange-500">Shubham</span></h2>
                <div className="speech-bubble mx-auto max-w-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300 shadow-lg">
                  <p className="text-xl md:text-2xl text-gray-700 font-hand leading-relaxed">
                    "Bhai, main software engineer hoon. <span className="font-bold text-orange-600">7+ saal</span> se code likhta hoon.
                    <span className="inline-block mx-1 transform -rotate-1 bg-yellow-200 px-1">3 products</span> deliver kiye hain at Siyaratech.
                    AI mera assistant hai, replacement nahi!"
                  </p>
                </div>
                <p className="text-sm text-gray-400 mt-4 italic font-sans max-w-lg mx-auto">
                  (Translation: I'm a software engineer with 7+ years exp. Delivered 3 products at Siyaratech. AI is my assistant, not replacement!)
                </p>
              </div>
            ) : mode === "bro" ? (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h2 className="text-5xl md:text-7xl font-comic font-bold text-gray-800 mb-2">Yo! I'm <span className="text-blue-500">Shubham</span> 👋</h2>
                <div className="speech-bubble mx-auto max-w-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-300 shadow-lg border-blue-400">
                  <p className="text-xl md:text-2xl text-gray-700 font-hand leading-relaxed">
                    "Full-stack dev turning ☕ into code for <span className="font-bold text-blue-600">7+ years</span>.
                    Shipped <span className="inline-block mx-1 transform rotate-2 bg-blue-100 px-1">3 real products</span> at Siyaratech.
                    Let's skip the corporate jargon and build something cool!"
                  </p>
                </div>
              </div>
            ) : (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 tracking-tight">Shubham Gagare</h2>
                <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Senior Full-Stack Engineer with <span className="font-semibold text-gray-900">7+ years</span> of experience.
                  Specializing in 0→1 product delivery, AI integration, and scalable architecture.
                </p>
              </div>
            )}

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button
                onClick={scrollToRecentWork}
                className={`h-12 px-8 text-lg font-hand rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg ${mode === 'munna' ? 'bg-orange-500 hover:bg-orange-600' :
                  mode === 'bro' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'
                  }`}
              >
                <Rocket className="w-5 h-5 mr-2" />
                {mode === "munna" ? "Kaam Dekho" : mode === "bro" ? "Check My Work" : "View Portfolio"}
              </Button>
              <Button
                variant="outline"
                className="h-12 px-8 text-lg font-hand rounded-full border-2 transform hover:scale-105 transition-all duration-300 hover:bg-gray-50 bg-white shadow-sm"
                onClick={scrollToContact}
              >
                <Mail className="w-5 h-5 mr-2" />
                {mode === "munna" ? "Baat Karein" : mode === "bro" ? "Let's Chat" : "Contact Me"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="bg-gradient-to-r from-indigo-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <Briefcase className="w-8 h-8 mr-3 text-indigo-600" />
              {mode === "munna"
                ? "Kaam Ki Duniya - Professional Journey"
                : mode === "bro"
                  ? "Work Journey - Where I've Been Coding"
                  : "Professional Experience"}
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {mode === "munna"
                ? "7+ saal ka safar - har company mein kuch naya seekha, kuch naya banaya!"
                : mode === "bro"
                  ? "7+ years of professional growth - learned something new and built something cool at every stop 🎢"
                  : "7+ years of professional growth across product design and full-stack development."}
            </p>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {workExperience.map((job, index) => (
              <Card
                key={index}
                className={`border-sketch transition-all duration-300 transform hover:scale-[1.02] hover:-rotate-1 shadow-lg bg-white/80 backdrop-blur-sm ${mode === 'bro' ? 'border-blue-400 hover:border-blue-600' : 'border-indigo-400 hover:border-indigo-600'
                  }`}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <h4 className="text-3xl font-comic font-bold text-gray-800 mb-1">{job.company}</h4>
                          <div className="flex items-center gap-3 mb-2">
                            <Badge className={`text-base px-3 py-1 ${mode === 'bro' ? 'bg-blue-100 text-blue-800' : 'bg-indigo-100 text-indigo-800'}`}>{job.role}</Badge>
                            <div className="flex items-center text-gray-600 font-hand text-lg">
                              <Calendar className="w-4 h-4 mr-1" />
                              <span className="text-base">{job.period}</span>
                            </div>
                          </div>

                        </div>
                      </div>

                      <div className="flex flex-col gap-3 md:w-32">
                        {job.link && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="btn-sketch border-2 border-green-400 text-green-600 font-hand text-lg"
                            onClick={() => navigate(job.link || "/")}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live
                          </Button>
                        )}
                      </div>
                    </div>
                    {(mode === "munna" || mode === "bro") && (
                      <div
                        className={`p-4 rounded-lg border-2 border-dashed transform rotate-1 ${mode === "munna" ? "bg-indigo-50 border-indigo-300" : "bg-blue-50 border-blue-300"}`}
                      >
                        <p className={`font-hand text-xl font-semibold italic ${mode === "munna" ? "text-indigo-700" : "text-blue-700"}`}>
                          "{mode === "munna" ? job.munnaQuote : job.broQuote}"
                        </p>
                      </div>
                    )}

                    <div className="space-y-3">
                      {(mode === "munna"
                        ? job.highlights
                        : mode === "bro"
                          ? job.broHighlights
                          : job.professionalHighlights
                      ).map((highlight, i) => (
                        <div key={i} className="flex items-start gap-3 group">
                          <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 transition-all duration-300 group-hover:scale-150 ${mode === 'bro' ? 'bg-blue-500' : 'bg-indigo-500'}`}></div>
                          <p className="text-gray-700 leading-relaxed font-sans text-lg">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {mode === "munna" && (
            <div className="text-center mt-12">
              <div className="bg-white p-6 rounded-lg border-4 border-dashed border-indigo-300 max-w-2xl mx-auto">
                <p className="text-lg text-gray-700 italic">
                  <span className="text-2xl">"</span>
                  Jab kaam sahi ho, bolne ki kya zaroorat?
                  <span className="text-2xl">"</span>
                </p>
                <p className="text-sm text-gray-500 mt-2">— Inspired by Munna Bhai</p>
              </div>
            </div>
          )}

          {mode === "bro" && (
            <div className="text-center mt-12">
              <div className="bg-white p-6 rounded-lg border-4 border-dashed border-blue-300 max-w-2xl mx-auto">
                <p className="text-lg text-gray-700 italic">
                  <span className="text-2xl">"</span>
                  When your work speaks for itself, don't interrupt 🤐<span className="text-2xl">"</span>
                </p>
                <p className="text-sm text-gray-500 mt-2">— Classic wisdom for developers</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-white/50 py-16 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-comic font-bold text-gray-800 mb-4 transform -rotate-1">
              {mode === "munna"
                ? "Gyaan Ki Dukaan"
                : mode === "bro"
                  ? "Skills That Actually Matter"
                  : "Technical Expertise"}
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-hand">
              {mode === "munna"
                ? "Jo kuch seekha hai aur client work mein use kiya hai, honest way mein bata raha hoon!"
                : mode === "bro"
                  ? "Skills I've actually used in production (not just tutorial projects) 💪"
                  : "Skills proven through successful client deliveries and personal project development."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className={`relative group ${index % 2 === 0 ? "rotate-1" : "-rotate-1"
                  } hover:rotate-0 transition-transform duration-300`}
              >
                <div className={`absolute inset-0 bg-gray-200 transform translate-y-2 translate-x-2 rounded-xl border-2 border-gray-400`}></div>
                <Card
                  className={`relative border-2 border-black h-full transform transition-transform duration-300 ${index === 0 ? "bg-orange-50" : index === 1 ? "bg-blue-50" : "bg-green-50"
                    }`}
                  style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}
                >
                  <CardContent className="p-6">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-yellow-200/50 rotate-1 shadow-sm"></div>
                    <h4 className="text-2xl font-comic font-bold text-gray-800 mb-6 flex items-center justify-center border-b-2 border-dashed border-gray-300 pb-2">
                      <Zap className={`w-5 h-5 mr-2 ${index === 0 ? "text-orange-500" : index === 1 ? "text-blue-500" : "text-green-500"
                        }`} />
                      {skillGroup.category}
                    </h4>

                    <div className="flex flex-wrap gap-2 mb-6 justify-center">
                      {skillGroup.items.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm font-hand font-bold shadow-sm transform hover:scale-110 transition-transform cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {mode !== "professional" && (
                      <div className="bg-white/60 p-4 rounded-lg border border-dashed border-gray-400">
                        <p className="text-lg text-gray-700 font-hand leading-tight">
                          "{mode === "munna" ? skillGroup.munnaExplanation : skillGroup.broExplanation}"
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Projects Section */}
      <section id="recent-work-section" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <Rocket className="w-8 h-8 mr-3 text-green-600" />
              {mode === "munna"
                ? "Recent Work - Delivered & Live (Siyaratech Innovations)"
                : mode === "bro"
                  ? " Delivered & Live (Siyaratech Innovations)"
                  : "Recent work Delivered at Siyaratech"}
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {mode === "munna"
                ? "Yeh real clients ke liye banaye gaye products hain at Siyaratech Innovations - live, working, aur earning!"
                : mode === "bro"
                  ? "Real projects for real clients at Siyaratech Innovations. Live, working, making money 💸"
                  : "Production applications built for real clients at Siyaratech Innovations with measurable business impact."}
            </p>
          </div>

          <div className="space-y-12 max-w-4xl mx-auto">
            {deliveredProjects.map((project, index) => (
              <Card
                key={index}
                className="border-sketch border-green-400 hover:border-green-600 transition-all duration-300 transform hover:scale-[1.02] hover:rotate-1 shadow-lg bg-white/90"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-3xl font-comic font-bold text-gray-800">{project.title}</h4>
                        <Badge className="bg-green-100 text-green-800 border border-green-300 font-hand text-lg transform -rotate-2">{project.status}</Badge>
                      </div>
                      {mode !== "professional" && (
                        <p className="text-green-600 font-semibold mb-3 font-hand text-xl">
                          {mode === "munna" ? project.subtitle : project.broSubtitle}
                        </p>
                      )}
                      <p className="text-gray-700 mb-4 leading-relaxed font-sans text-lg">
                        {mode === "bro" ? project.broDescription : project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <Badge key={i} className="bg-green-50 text-green-700 border border-green-200 hover:bg-green-100 transition-colors">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {mode !== "professional" && (
                        <div className="bg-green-50 p-4 rounded-lg border-2 border-dashed border-green-300 transform -rotate-1 hover:rotate-0 transition-transform">
                          <p className="text-base text-gray-700">
                            <strong>{mode === "munna" ? "Asli Challenge:" : "The Real Challenge:"}</strong>{" "}
                            {mode === "bro" ? project.broChallenge : project.challenge}
                          </p>
                        </div>
                      )}

                      {project.confidential && (
                        <div className="mt-4 bg-yellow-50 p-3 rounded-lg border-2 border-dashed border-yellow-300 flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></div>
                          <p className="text-sm text-yellow-800 font-medium">
                            Confidential Project (NDA Signed) 🤫
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col gap-3 md:w-32">
                      {!project.confidential && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="btn-sketch border-2 border-green-400 text-green-600 font-hand text-lg"
                          onClick={() => window.open(project.link, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Projects Section */}
      <section className="bg-gradient-to-r from-purple-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <User className="w-8 h-8 mr-3 text-purple-600" />
              {mode === "munna"
                ? "Personal Projects - Seekhne Ke Liye"
                : mode === "bro"
                  ? "Personal Projects - Learning Lab 🔬"
                  : "Personal Learning Projects"}
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {mode === "munna"
                ? "Yeh experiments hain - naye concepts try karne ke liye banaye!"
                : mode === "bro"
                  ? "Experimental projects where I break things and learn stuff 🧪"
                  : "Projects built for learning new technologies and exploring creative solutions."}
            </p>
          </div>

          <div className="space-y-12 max-w-4xl mx-auto">
            {personalProjects.map((project, index) => (
              <Card
                key={index}
                className="border-sketch border-purple-400 hover:border-purple-600 transition-all duration-300 transform hover:scale-[1.02] hover:-rotate-1 shadow-lg bg-white/90"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-3xl font-comic font-bold text-gray-800">{project.title}</h4>
                        <Badge className="bg-purple-100 text-purple-800 border border-purple-300 font-hand text-lg transform rotate-2">
                          {mode === "bro" ? "🧪 Experiment" : "💡 Learning"}
                        </Badge>
                      </div>
                      {mode !== "professional" && (
                        <p className="text-purple-600 font-semibold mb-3 font-hand text-xl">
                          {mode === "munna" ? project.subtitle : project.broSubtitle}
                        </p>
                      )}
                      <p className="text-gray-700 mb-4 leading-relaxed font-sans text-lg">
                        {mode === "bro" ? project.broDescription : project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <Badge key={i} className="bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {mode !== "professional" && (
                        <div className="bg-purple-50 p-4 rounded-lg border-2 border-dashed border-purple-300 transform rotate-1 hover:rotate-0 transition-transform">
                          <p className="text-base text-gray-700">
                            <strong>{mode === "munna" ? "Kya Seekha:" : "What I Learned:"}</strong>{" "}
                            {mode === "bro" ? project.broChallenge : project.challenge}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col gap-3 md:w-32">
                      <Button
                        variant="outline"
                        size="sm"
                        className="btn-sketch border-2 border-purple-400 text-purple-600 font-hand text-lg"
                        onClick={() => window.open(project.link, "_blank")}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Awards - NEW SECTION */}
      <section className="py-20 bg-gradient-to-l from-yellow-50/50 to-orange-50/50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-10 left-10 text-9xl opacity-5 transform -rotate-12 pointer-events-none">🎓</div>
        <div className="absolute bottom-10 right-10 text-9xl opacity-5 transform rotate-12 pointer-events-none">🏆</div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-comic font-bold text-gray-800 mb-4 text-shadow-sm">
              {mode === "munna" ? "Padhai & Inaam" : "Education & Awards"}
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Education */}
            <div className="relative group">
              <div className="absolute inset-0 bg-yellow-200 transform rotate-1 rounded-xl translate-y-2 translate-x-2"></div>
              <Card className="border-sketch border-yellow-500 bg-white relative transform group-hover:-translate-y-1 transition-transform duration-300">
                <CardContent className="p-8">
                  <h4 className="text-3xl font-comic font-bold text-gray-800 mb-6 flex items-center border-b-2 border-yellow-200 pb-2">
                    <span className="mr-3 text-4xl">🎓</span> Education
                  </h4>
                  <div className="space-y-6">
                    <div className="group/item">
                      <h5 className="font-bold text-xl text-gray-800 group-hover/item:text-yellow-600 transition-colors">CDAC ACTS, Pune</h5>
                      <p className="text-gray-600 font-hand text-lg">Post Graduation Diploma in Advanced Computing</p>
                      <p className="text-sm text-gray-400 font-sans">Aug 2018 - Feb 2019</p>
                    </div>
                    <div className="group/item">
                      <h5 className="font-bold text-xl text-gray-800 group-hover/item:text-yellow-600 transition-colors">Pune University</h5>
                      <p className="text-gray-600 font-hand text-lg">Bachelor of Engineering in Computer Engineering</p>
                      <p className="text-sm text-gray-400 font-sans">June 2015 - June 2018</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Awards */}
            <div className="relative group">
              <div className="absolute inset-0 bg-orange-200 transform -rotate-1 rounded-xl translate-y-2 translate-x-2"></div>
              <Card className="border-sketch border-orange-500 bg-white relative transform group-hover:-translate-y-1 transition-transform duration-300">
                <CardContent className="p-8">
                  <h4 className="text-3xl font-comic font-bold text-gray-800 mb-6 flex items-center border-b-2 border-orange-200 pb-2">
                    <span className="mr-3 text-4xl">🏆</span> Awards
                  </h4>
                  <div className="space-y-6">
                    <div className="flex items-start group/item">
                      <span className="text-yellow-500 mr-3 text-2xl transform group-hover/item:scale-125 transition-transform">★</span>
                      <div>
                        <h5 className="font-bold text-xl text-gray-800">Best Team Award, ParentPay (2023)</h5>
                        <p className="text-gray-600 font-hand text-lg">For Take Register module delivery</p>
                      </div>
                    </div>
                    <div className="flex items-start group/item">
                      <span className="text-yellow-500 mr-3 text-2xl transform group-hover/item:scale-125 transition-transform">★</span>
                      <div>
                        <h5 className="font-bold text-xl text-gray-800">Best Team Award, Goldman Sachs (2020)</h5>
                        <p className="text-gray-600 font-hand text-lg">For Product Implementations at Volante</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Honesty Section */}
      <section className="bg-gradient-to-r from-orange-100/50 to-yellow-100/50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-4xl md:text-5xl font-comic font-bold text-gray-800 mb-8">
              {mode === "munna" ? "Sach Bolta Hoon" : mode === "bro" ? "Keeping It 100% Real" : "Complete Transparency"}
            </h3>

            <Card className="border-sketch border-orange-400 bg-white transform -rotate-1 hover:rotate-0 transition-transform duration-500 shadow-xl relative overflow-hidden">
              {/* Paper texture feel */}
              <div className="absolute inset-0 bg-yellow-50/20 pointer-events-none"></div>

              <CardContent className="p-8 md:p-12 relative z-10">
                <div className="space-y-8 text-left">
                  {mode === "munna" ? (
                    <>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">📜</div>
                        <div>
                          <p className="text-xl font-bold text-gray-800 mb-2">3 Client Projects Successfully Delivered</p>
                          <p className="text-lg text-gray-600 font-hand leading-relaxed">
                            Real deadlines, real pressure, real money involved. TechDiveHub, SiyaraTech, aur Influencer Commerce - sab live hain aur kaam kar rahe hain.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">🤖</div>
                        <div>
                          <p className="text-xl font-bold text-gray-800 mb-2">AI use karta hoon? Bilkul!</p>
                          <p className="text-lg text-gray-600 font-hand leading-relaxed">
                            But copy-paste nahi. Code samajhta hoon, test karta hoon, client requirements ke hisaab se customize karta hoon. AI mere liye assistant hai, replacement nahi.
                          </p>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg border-2 border-dashed border-gray-300 mt-6">
                        <p className="text-base text-gray-500 italic">
                          <strong>Translation:</strong> I've successfully delivered 3 products with real deadlines. I use AI as a smart assistant, not a replacement. I understand every line of code I ship.
                        </p>
                      </div>
                    </>
                  ) : mode === "bro" ? (
                    <>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">💼</div>
                        <div>
                          <p className="text-xl font-bold text-gray-800 mb-2">Real Talk: 3 Products Delivered</p>
                          <p className="text-lg text-gray-600 font-hand leading-relaxed">
                            These weren't side projects or tutorials—real deadlines, real pressure, real business outcomes. TechDiveHub, SiyaraTech, and Influencer Commerce are all live and doing their thing! 🎯
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">🧠</div>
                        <div>
                          <p className="text-xl font-bold text-gray-800 mb-2">Do I use AI? Absolutely!</p>
                          <p className="text-lg text-gray-600 font-hand leading-relaxed">
                            But I'm not copy-pasting blindly. I understand the code, test everything, and customize it for client needs. AI is my assistant, not my replacement—big difference! 🤖
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-bold text-xl mb-2 text-gray-800">Proven Client Delivery Record</h4>
                          <p className="text-gray-600 text-lg">Successfully delivered 3 production applications for real clients at Siyaratech Innovations with measurable business outcomes.</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-xl mb-2 text-gray-800">Transparent AI Usage</h4>
                          <p className="text-gray-600 text-lg">I leverage AI tools for faster development and code scaffolding, but every line is reviewed, tested, and customized for specific requirements.</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-20 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-yellow-50/50 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl md:text-6xl font-comic font-bold text-gray-800 mb-8 animate-in slide-in-from-bottom-5">
            {mode === "munna"
              ? "Chalo, Kuch Solid Banate Hain!"
              : mode === "bro"
                ? "Ready to Build Something Cool?"
                : "Ready for Your Next Project"}
          </h3>

          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-gray-600 mb-10 font-hand">
              {mode === "munna"
                ? "Agar delivery guarantee chahiye aur working products dekhne hain, to baat karte hain!"
                : mode === "bro"
                  ? "If you need someone who ships quality code and has real client work to show for it, let's connect! 🚀"
                  : "If you need proven delivery capabilities and want to see live client work, let's connect!"}
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <Button
                onClick={() => { window.location.href = "mailto:shubhamgagare1997@gmail.com"; }}
                className="h-14 px-8 text-xl rounded-full bg-blue-600 hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-bold"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </Button>
              <Button
                variant="outline"
                className="h-14 px-8 text-xl rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-bold"
                onClick={() => { window.open("https://www.linkedin.com/in/shubham-gagare-543a05160/", "_blank"); }}
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                className="h-14 px-8 text-xl rounded-full border-2 border-gray-800 text-gray-800 hover:bg-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-bold"
                onClick={() => { window.open("https://github.com/ShubhamGagare", "_blank"); }}

              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
            </div>

            <div className="mt-12 p-8 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300 transform rotate-1 hover:rotate-0 transition-transform duration-300 mx-auto max-w-lg">
              <p className="text-base text-gray-600 font-hand text-lg mb-4">
                {mode === "munna"
                  ? "PDF resume bhi hai, but yeh site hi asli story hai - delivered products ke saath! 😊"
                  : mode === "bro"
                    ? "Traditional resume available too, but this portfolio tells the real story with actual examples! 😊"
                    : "Traditional resume available, but this portfolio tells the complete story with live examples. 😊"}
              </p>
              <Button variant="link" className="text-blue-600 text-lg font-bold hover:underline" onClick={() => { window.open("/Shubham_Gagare_Resume.pdf", "_blank"); }}>
                <Code2 className="w-5 h-5 mr-2" />
                Download PDF Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-4 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxMjAwIDYwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48cGF0aCBkPSJNMCAwYzAgMCAyMDAgNjAgNjAwIDYwczYwMC02MCA2MDAtNjB6IiBmaWxsPSIjZmZmIi8+PC9zdmc+')] rotate-180 transform -translate-y-1"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="font-hand text-xl text-gray-300">
            {mode === "munna"
              ? "Dil se banaya hai ❤️ by Shubham "
              : mode === "bro"
                ? "Built with ☕ and Code by Shubham"
                : "Designed & Developed by Shubham Gagare"}
          </p>
          <p className="text-gray-500 text-sm mt-2">© {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Index
