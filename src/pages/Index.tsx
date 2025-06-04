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
      company: "Siyaratech Innovations, Pune",
      role: "Founding Engineer",
      period: "November 2024 – Present",
      munnaQuote: "Start-up ki duniya mein kadaam rakhte hi, humne socha—React aur Spring Boot ki jodi bajao!",
      broQuote: "Startup life hit different when you're shipping React + Spring Boot like it's your morning coffee ☕",
      highlights: [
        "Development + UX ki lead: Do bade platforms ke liye poori zimmedari uthai—design se leke code tak, sab dekhte hue 'Boss, chinta mat karo!'",
        "Consortium MVP: Influencer-based e-commerce platform aur admin portal React + Spring Boot me banaya—'Influencer ke products, bas click karo, dikha do!'",
        "TechDiveHub AI: Ek AI-driven education platform design kiya—Next.js + React + LLMs ka jadoo lagaya. Clean UI/UX patterns, full responsive—'Teacher ji bhi bole, waah bhai waah!'",
        "Full-stack me dhamaal: UX design se leke design systems, phir frontend aur backend development tak—'Ek hi haath me design brush, doosre me code ki chaku!'",
        "Team ko desi tadka: Frontend team ko lead kiya, mentor kiya—'Bhai, components kaise likhte hain?' sab sikhaya, collaboration ka maza laaye.",
        "Rapid iterations with feedback: Designers aur developers ke saath Figma me brainstorming—'Yeh thoda fast karo, yeh thoda slow karo'—phir user feedback pe seedha action liya.",
      ],
      broHighlights: [
        "Wore multiple hats: Led dev + UX for two major platforms from concept to deployment—basically became the 'go-to guy' for everything frontend and backend 🎯",
        "Built Consortium MVP: Full influencer e-commerce platform with admin portal using React + Spring Boot—think 'Instagram shopping but actually functional' 🛒",
        "Designed TechDiveHub AI: AI-powered education platform with Next.js + React + LLMs. Clean UI patterns, fully responsive—even teachers said 'this actually makes sense!' 🤓",
        "Full-stack wizard mode: From UX sketches to design systems to frontend/backend code—one person, entire product pipeline 🧙‍♂️",
        "Team lead & mentor: Guided frontend team, taught component patterns—'How do we build this?' became my favorite question to answer 👨‍🏫",
        "Agile iterations on steroids: Daily Figma sessions with designers/devs—'make this faster, slow that down'—then immediate user feedback implementation 🔄",
      ],
      professionalHighlights: [
        "Led end-to-end development and UX for two major platforms, handling design through code implementation",
        "Built Consortium MVP: Influencer-based e-commerce platform with admin portal using React + Spring Boot",
        "Designed TechDiveHub AI: AI-driven education platform with Next.js + React + LLMs integration, featuring clean UI/UX patterns and full responsiveness",
        "Managed full-stack development from UX design to design systems, frontend and backend development with modern design principles",
        "Led and mentored frontend team, fostering collaboration and knowledge sharing",
        "Executed rapid iterations with continuous feedback loops between designers, developers, and users",
      ],

    },
    {
      company: "ParentPay Group, Pune",
      role: "Product Designer",
      period: "November 2021 – March 2024",
      munnaQuote: "School life simple banao, tension kam karo!",
      broQuote: "Making school admin less painful, one UI at a time 🏫",
      highlights: [
        "User Research ka dhamaka: UK school staff se interview liye, unki roz ki problems samjhe—'Teacher bhai, fire register kab karein?' poocha, solutions dhoonde.",
        "Wireframes banaye Fire & Take Register ke liye: Low-fidelity se high-fidelity tak—sketches se mockups, Figma me prototyping—sab dikhaya kaise 'Woosh!' ho ke design ready hota hai.",
        "Feedback pe jadoo: Pilot schools se mili feedback se design ko improvise kiya—aur kya, user adoption 25% se upar chala gaya! Sab kehte, 'Bhai, design mast hai!'",
        "School staff khush hua: New design ki tareef school staff ne ki—'Shaandar interface hai, samajh aa gaya sab kuch!'",
      ],
      broHighlights: [
        "Deep user research: Interviewed UK school staff, learned their daily struggles—'When do we do fire drills?' became my research goldmine 🔍",
        "Wireframe master: Built Fire & Take Register features from rough sketches to polished Figma prototypes—watched ideas come alive in real-time ✨",
        "Feedback-driven design: Iterated based on pilot school feedback—boosted user adoption by 25%+. Schools literally said 'this design slaps!' 📈",
        "Happy users = happy me: School staff praised the intuitive interface—'Finally, something that makes sense!' was the common feedback 😊",
      ],
      professionalHighlights: [
        "Conducted comprehensive user research with UK school staff, identifying daily operational challenges and designing targeted solutions",
        "Created wireframes for Fire & Take Register features, progressing from low-fidelity sketches to high-fidelity mockups and interactive Figma prototypes",
        "Improved user adoption by 25%+ through iterative design based on pilot school feedback",
        "Received positive feedback from school staff for intuitive interface design and improved user experience",
      ],
      link: "/parentpay"
    },
    {
      company: "Big Market, Pune",
      role: "Full Stack Developer (Freelance)",
      period: "Feb 2021 – Apr 2021",
      munnaQuote: "Local grocery startup ko bana diya online superstar!",
      broQuote: "Turned a local grocery idea into a digital shopping experience 🛒",
      highlights: [
        "Customer ki baat pe dhyan: User research kiya, interviews liye—'Bhai, kya chahiye customers ko?' samjha, unke needs note kiye.",
        "Wireframes & Prototypes: Pen–paper se wireframe, phir Figma pe prototype banaya—kisi ko confuse nahi hone diya.",
        "End-to-End Web App: React + Node.js + PostgreSQL ka combo—'Ek hi haath se sab kuch banaya'—UI se leke backend database tak, sab handle kiya.",
      ],
      broHighlights: [
        "Customer-first approach: Did user research and interviews—'What do customers actually want?'—took notes, made it happen 📝",
        "Wireframe to reality: Started with pen-paper sketches, evolved to Figma prototypes—no confusion, just clear user flows 🎨",
        "Full-stack solo mission: React + Node.js + PostgreSQL stack—built everything from UI to database, one-person army style 💪",
      ],
      professionalHighlights: [
        "Conducted user research and interviews to understand customer needs and requirements",
        "Created wireframes and prototypes from pen-paper sketches to Figma prototypes for clear user experience",
        "Developed end-to-end web application using React + Node.js + PostgreSQL stack, handling UI through backend database",
      ],
      link: "/big-market"

    },
    {
      company: "Volante Technologies, Pune",
      role: "Software Engineer",
      period: "March 2019 – November 2021",
      munnaQuote: "Jab Volpay ne bola automate karne ka, humne bola 'Kar denge, Boss!'",
      broQuote: "When Volpay said 'automate this,' we said 'bet, let's do it!' 🚀",
      highlights: [
        "Team of 3 ka jadoo: Hum teen log the—design se leke development tak, Volpay ke multiple versions mein automation tools ko integrate kiya.",
        "User Research ka nasha: UK school staff jaise nahi, par Volpay ke end users se baat ki, unki problems samjhe, nayi features ka design banaya—sab milke, team mein.",
        "Frontend–Backend ka tadka: Ek haath se AngularJS (HTML, CSS) me UI banaya, doosre haath se Java me backend likha. Dono haath chalate hi chal gaye!",
        "Testers ki zindagi aasan bani: Automation configuration ko itna tez kiya ki testers ka 40% time bach gaya—woh khush, hum khush!",
        "Product Managers & QA ka pyaar: PMs, BAs aur QA teams ke saath collaborate karke quality rock-solid rakhi—'Bhai, bugs ka toh naam-o-nishaan nahin' wala level.",
      ],
      broHighlights: [
        "Squad of 3 magic: Our small team handled everything—design to development across multiple Volpay versions, integration ninjas at work 🥷",
        "User research mode: Talked to Volpay end users, understood their pain points, designed new features collaboratively—teamwork made the dream work 🤝",
        "Full-stack hustle: Built AngularJS (HTML, CSS) frontends with one hand, wrote Java backends with the other—ambidextrous coding FTW 🙌",
        "Tester happiness level: Optimized automation config so hard that testers saved 40% of their time—they were happy, we were happy, everyone wins! 🎉",
        "Quality squad love: Collaborated with PMs, BAs, and QA teams to maintain rock-solid quality—bugs didn't stand a chance 🐛💀",
      ],
      professionalHighlights: [
        "Collaborated in a team of 3 to integrate automation tools across multiple versions of Volpay, handling design through development",
        "Conducted user research with Volpay end users, understanding pain points and designing new features collaboratively",
        "Developed full-stack solutions using AngularJS (HTML, CSS) for frontend and Java for backend development",
        "Improved automation configuration efficiency, reducing testing time by 40% and enhancing team productivity",
        "Collaborated with Product Managers, Business Analysts, and QA teams to maintain rock-solid quality standards",
      ],
      link: "/volpay-testsuite"

    },
  ]

  const deliveredProjects = [
    {
      title: "Influencer Commerce MVP",
      subtitle: "React + Spring Boot professional hustle",
      broSubtitle: "Built an actual e-commerce platform that influencers use to make money 💰",
      description:
        "Complete e-commerce platform for influencers built at Siyaratech Innovations. Features payment integration, inventory management, admin dashboard, user auth. Currently being used by creators to sell products.",
      broDescription:
        "Full-stack e-commerce platform where influencers can actually sell their stuff. Built with React + Spring Boot, includes payments, inventory tracking, admin panels, user auth—the whole nine yards. Real creators are using it to make real money right now.",
      tech: ["React", "Spring Boot", "JWT", "PostgreSQL", "Payment Gateway"],
      challenge:
        "Real client pressure + tight deadlines. Had to deliver scalable, production-ready code. No room for experiments - had to work perfectly!",
      broChallenge:
        "Client breathing down my neck + impossible deadlines = stress level 100. Had to ship bulletproof code that actually works in production. No 'it works on my machine' excuses here!",
      status: "🚀 Live & Earning",
      confidential: true,
      link: "NA",
    },
    {
      title: "TechDiveHub Landing Page",
      subtitle: "Client ka vision, mera execution",
      broSubtitle: "Client's vision + my execution = conversion machine",
      description:
        "Professional landing page for tech consulting company built at Siyaratech Innovations. Responsive design, contact forms, service showcases. Client wanted modern, clean look with fast loading.",
      broDescription:
        "Sleek landing page for a tech consulting company. Responsive design, smooth contact forms, service showcases that actually convert. Client wanted that 'modern startup' vibe with lightning-fast loading speeds.",
      tech: ["Next.js", "Tailwind", "TypeScript", "Contact APIs"],
      challenge:
        "Client revisions, design iterations, pixel-perfect implementation. Had to match exact mockups while keeping performance smooth.",
      broChallenge:
        "Client changes every day, design iterations from hell, pixel-perfect perfectionism. Had to nail the exact mockups while keeping everything buttery smooth.",
      status: "🎯 Delivered",
      link: "https://techdivehub.siyaratechin.com/",
    },
    {
      title: "SiyaraTech Landing Page",
      subtitle: "Another happy client, another delivery",
      broSubtitle: "Happy client #2, mission accomplished",
      description:
        "Corporate website for tech startup built at Siyaratech Innovations. Multi-section layout, team profiles, service breakdown, mobile-first approach. Built to convert visitors to leads.",
      broDescription:
        "Corporate website for a tech startup that actually converts. Multi-section layout, team profiles that don't look like stock photos, service breakdowns that make sense. Mobile-first because that's where the traffic is.",
      tech: ["Next.js", "Tailwind", "Responsive Design", "SEO"],
      challenge:
        "Brand guidelines compliance, cross-browser testing, lighthouse performance optimization. Client wanted 90+ scores everywhere.",
      broChallenge:
        "Brand police breathing down my neck, testing across every browser known to humanity, Lighthouse scores better than 90+ or bust. No compromises.",
      status: "✅ Deployed",
      link: "https://siyaratechin.com/",
    },
  ]

  const personalProjects = [
    {
      title: "EduTrack - Smart MIS",
      subtitle: "School system ka experiment",
      broSubtitle: "My playground for learning full-stack patterns",
      description:
        "Personal project for educational institutions. Features student management, attendance tracking, grade calculation, parent communication portal. Built to learn full-stack patterns.",
      broDescription:
        "Educational management system I built to level up my skills. Student management, attendance tracking, grade calculations, parent portals—basically everything a school needs. Pure learning playground where I could break things and fix them.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "AI Integration"],
      challenge:
        "This was my learning playground. Tried new patterns, experimented with AI features, built complex state management. No client pressure, pure learning!",
      broChallenge:
        "No pressure, just pure experimentation. Tried every new pattern I could think of, threw in some AI features, built complex state management systems. Learning lab where failure was just feedback.",
      link: "https://github.com/ShubhamGagare/EduTrack",
    },
    {
      title: "HandCraftUI",
      subtitle: "Shadcn ka desi version",
      broSubtitle: "Shadcn but make it fun and sketchy",
      description:
        "Personal UI library experiment with hand-drawn aesthetic. Custom components with sketchy borders, speech bubbles, comic-style elements. Built because regular components looked too boring!",
      broDescription:
        "UI component library with personality. Hand-drawn vibes, sketchy borders, speech bubbles, comic-style elements—because regular components are boring AF. Built it when I got tired of everything looking the same.",
      tech: ["React", "TypeScript", "Tailwind", "Storybook"],
      challenge:
        "How to make professional components look fun yet usable? Spent nights getting the hand-drawn CSS animations right. Pure passion project!",
      broChallenge:
        "How do you make components look fun without making them unusable? Spent way too many late nights perfecting hand-drawn CSS animations. Classic passion project that kept me up at night.",
      link: "https://www.npmjs.com/package/handcraft-ui",
    },
  ]

  const skills = [
    {
      category: "Client Delivery Skills",
      items: ["Production Ready Apps", "Client Communication", "Deadline Management", "Code Reviews"],
      munnaExplanation:
        "Client ka kaam matlab - deadline pe delivery, bug-free code, aur clear communication. Siyaratech mein 3 successful deliveries ke saath seekha hai ki professionalism and quality dono zaroori hai!",
      broExplanation:
        "Client work means shipping on time, bug-free code, and clear communication. Delivered 3 successful projects at Siyaratech—learned that professionalism and quality aren't optional!",
    },
    {
      category: "Modern Frontend",
      items: ["React (Hooks, Context)", "Next.js (SSR, API)", "TypeScript", "Tailwind CSS"],
      munnaExplanation:
        "Frontend mein latest patterns use karta hoon. Siyaratech projects mein React 18, Next.js 14, TypeScript strict mode - sab modern stack pe deliver kiya hai!",
      broExplanation:
        "I use the latest frontend patterns that actually matter. Delivered Siyaratech projects with React 18, Next.js 14, TypeScript strict mode—modern stack that performs!",
    },
    {
      category: "Backend Strength",
      items: ["Spring Boot (Production)", "Node.js (APIs)", "Database Design", "Payment Integration", "Authentication"],
      munnaExplanation:
        "Backend ka matlab - jo user nahi dekhta but kaam karta hai. Real payment gateways integrate kiye, production databases design kiye, server deploy kiya. Sab live and working!",
      broExplanation:
        "Backend = the stuff users don't see but absolutely need to work. I've integrated real payment gateways, designed production databases, deployed servers. All live, all working!",
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
      {/* Header */}
      <header className="border-b-4 border-dashed border-orange-400 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center transform rotate-3">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div>
              <h1 className="font-bold text-xl text-gray-800">Shubham Gagare</h1>
              <p className="text-sm text-gray-600">Full Stack Developer & Product Shipper</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant={mode === "bro" ? "default" : "outline"} onClick={() => setMode("bro")} className="text-sm">
              Bro Mode
            </Button>
            <Button
              variant={mode === "munna" ? "default" : "outline"}
              onClick={() => setMode("munna")}
              className="text-sm"
            >
              Munna Mode
            </Button>
            <Button
              variant={mode === "professional" ? "default" : "outline"}
              onClick={() => setMode("professional")}
              className="text-sm"
            >
              Professional Mode
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-200 rounded-full opacity-50 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200 rounded-full opacity-30 animate-pulse delay-1000"></div>

            <div className="relative bg-white p-8 rounded-3xl shadow-2xl border-4 border-dashed border-orange-300 transform -rotate-1">
              <div className="transform rotate-1">
                {/* Profile Picture */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <img
                      src={getProfilePicture() || "/placeholder.svg"}
                      alt="Shubham Gagare Profile"
                      className="w-32 h-32 rounded-full border-4  bg-yellow-100 border-dashed border-orange-400 object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  </div>
                </div>

                {mode === "munna" ? (
                  <>
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Namaste! Main Shubham</h2>
                    <div className="bg-orange-100 p-6 rounded-2xl border-3 border-orange-300 mb-6">
                      <p className="text-xl text-gray-700 leading-relaxed">
                        <span className="text-2xl">"</span>
                        Bhai, main software engineer hoon. 6+ saal se code likhta hoon.3 products successfully
                        deliver kiye hain at Siyaratech Innovations, 2 personal products banaye hain. AI ka help leta
                        hoon smartly.Jo kaam kiya hai, sab yahan dikhaya hai.
                        <span className="text-2xl">"</span>
                      </p>
                      <p className="text-sm text-gray-500 mt-3 italic">
                        Translation: I'm a software engineer with 6+ years experience, recently delivered 3 products
                        successfully at Siyaratech, built many personal projects, use AI smartly, and this portfolio is my
                        work showcase.
                      </p>
                    </div>
                  </>
                ) : mode === "bro" ? (
                  <>
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Hey! I'm Shubham 👋</h2>
                    <div className="bg-blue-100 p-6 rounded-2xl border-3 border-blue-300 mb-6">
                      <p className="text-xl text-gray-700 leading-relaxed">
                        <span className="text-2xl">"</span>
                        Full-stack dev with 6+ years of turning coffee into code ☕. Recently successfully shipped 3
                        products at Siyaratech Innovations, built many personal projects for fun. I use AI like a smart
                        assistant (not a crutch). Let's skip the small talk and see what I've built! 🚀<span className="text-2xl">"</span>
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Hello, I'm Shubham</h2>
                    <div className="bg-blue-100 p-6 rounded-2xl border-3 border-blue-300 mb-6">
                      <p className="text-xl text-gray-700 leading-relaxed">
                        Full-stack developer with 6+ years of experience.Recently I've successfully delivered 3  products
                        at Siyaratech Innovations and built many personal projects using modern tech stacks. I leverage AI
                        tools efficiently and believe in shipping quality solutions.
                      </p>
                    </div>
                  </>
                )}

                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    onClick={scrollToRecentWork}
                    className="bg-orange-500 hover:bg-orange-600 text-white transform hover:scale-105 transition-all duration-200"
                  >
                    <Rocket className="w-4 h-4 mr-2" />
                    {mode === "munna"
                      ? "Delivered Projects Dekho"
                      : mode === "bro"
                        ? "Check Out My Work"
                        : "Check Out My Work"}
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-blue-400 text-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-200"
                    onClick={scrollToContact}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    {mode === "munna" ? "Baat Karte Hain" : mode === "bro" ? "Let's Chat" : "Let's Connect"}
                  </Button>
                </div>
              </div>
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
                ? "6+ saal ka safar - har company mein kuch naya seekha, kuch naya banaya!"
                : mode === "bro"
                  ? "6+ years of professional growth - learned something new and built something cool at every stop 🎢"
                  : "6+ years of professional growth across product design and full-stack development."}
            </p>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {workExperience.map((job, index) => (
              <Card
                key={index}
                className="border-4 border-dashed border-indigo-300 hover:border-indigo-500 transition-all duration-300 transform hover:scale-102"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <h4 className="text-2xl font-bold text-gray-800 mb-1">{job.company}</h4>
                          <div className="flex items-center gap-3 mb-2">
                            <Badge className="bg-indigo-100 text-indigo-800 border border-indigo-300">{job.role}</Badge>
                            <div className="flex items-center text-gray-600">
                              <Calendar className="w-4 h-4 mr-1" />
                              <span className="text-sm">{job.period}</span>
                            </div>
                          </div>

                        </div>
                      </div>

                      <div className="flex flex-col gap-3 md:w-32">
                        {job.link && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-2 border-green-400 text-green-600"
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
                        className={`p-4 rounded-lg border-2 border-dashed ${mode === "munna" ? "bg-indigo-50 border-indigo-300" : "bg-blue-50 border-blue-300"}`}
                      >
                        <p className={`font-semibold italic ${mode === "munna" ? "text-indigo-700" : "text-blue-700"}`}>
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
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700 leading-relaxed">{highlight}</p>
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
      <section className="bg-white/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {mode === "munna"
                ? "Gyaan Ki Dukaan"
                : mode === "bro"
                  ? "Skills That Actually Matter"
                  : "Technical Expertise"}
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {mode === "munna"
                ? "Jo kuch seekha hai aur client work mein use kiya hai, honest way mein bata raha hoon!"
                : mode === "bro"
                  ? "Skills I've actually used in production (not just tutorial projects) 💪"
                  : "Skills proven through successful client deliveries and personal project development."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skills.map((skillGroup, index) => (
              <Card
                key={index}
                className="border-4 border-dashed border-gray-300 hover:border-orange-400 transition-all duration-300 transform hover:scale-105 hover:-rotate-1"
              >
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-orange-500" />
                    {skillGroup.category}
                  </h4>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {skillGroup.items.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-orange-100 text-orange-800 border border-orange-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {mode !== "professional" && (
                    <div className="bg-yellow-50 p-4 rounded-lg border-2 border-dashed border-yellow-300">
                      <p className="text-sm text-gray-700 italic">
                        "{mode === "munna" ? skillGroup.munnaExplanation : skillGroup.broExplanation}"
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
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
                className="border-4 border-dashed border-green-300 hover:border-green-500 transition-all duration-300 transform hover:scale-102"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-2xl font-bold text-gray-800">{project.title}</h4>
                        <Badge className="bg-green-100 text-green-800 border border-green-300">{project.status}</Badge>
                      </div>
                      {mode !== "professional" && (
                        <p className="text-green-600 font-semibold mb-3">
                          {mode === "munna" ? project.subtitle : project.broSubtitle}
                        </p>
                      )}
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {mode === "bro" ? project.broDescription : project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <Badge key={i} className="bg-green-100 text-green-800 border border-green-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {mode !== "professional" && (
                        <div className="bg-green-50 p-4 rounded-lg border-2 border-dashed border-green-300">
                          <p className="text-sm text-gray-700">
                            <strong>{mode === "munna" ? "Real Challenge:" : "The Real Challenge:"}</strong>{" "}
                            {mode === "bro" ? project.broChallenge : project.challenge}
                          </p>
                        </div>
                      )}

                      {project.confidential && (
                        <div className="mt-4 bg-yellow-50 p-3 rounded-lg border-2 border-dashed border-yellow-300">
                          <p className="text-sm text-yellow-800">
                            <strong>Note:</strong> Live link cannot be shared due to confidentiality agreements.
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col gap-3 md:w-32">
                      {!project.confidential && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-2 border-green-400 text-green-600"
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
                className="border-4 border-dashed border-purple-300 hover:border-purple-500 transition-all duration-300 transform hover:scale-102"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-2xl font-bold text-gray-800">{project.title}</h4>
                        <Badge className="bg-purple-100 text-purple-800 border border-purple-300">
                          {mode === "bro" ? "🧪 Experiment" : "💡 Learning"}
                        </Badge>
                      </div>
                      {mode !== "professional" && (
                        <p className="text-purple-600 font-semibold mb-3">
                          {mode === "munna" ? project.subtitle : project.broSubtitle}
                        </p>
                      )}
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {mode === "bro" ? project.broDescription : project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <Badge key={i} className="bg-purple-100 text-purple-800 border border-purple-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {mode !== "professional" && (
                        <div className="bg-purple-50 p-4 rounded-lg border-2 border-dashed border-purple-300">
                          <p className="text-sm text-gray-700">
                            <strong>{mode === "munna" ? "Learning Experience:" : "What I Learned:"}</strong>{" "}
                            {mode === "bro" ? project.broChallenge : project.challenge}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col gap-3 md:w-32">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-2 border-purple-400 text-purple-600"
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

      {/* Honesty Section */}
      <section className="bg-gradient-to-r from-orange-100 to-yellow-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              {mode === "munna" ? "Sach Bolta Hoon" : mode === "bro" ? "Keeping It 100% Real" : "Complete Transparency"}
            </h3>

            <Card className="border-4 border-dashed border-orange-400 bg-white transform -rotate-1">
              <CardContent className="p-8 transform rotate-1">
                <div className="space-y-6 text-left">
                  {mode === "munna" ? (
                    <>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        <strong>3 Client Projects Successfully Delivered at Siyaratech Innovations.</strong> Real
                        deadlines, real pressure, real money involved. TechDiveHub, SiyaraTech, aur Influencer Commerce
                        - sab live hain aur kaam kar rahe hain.
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        <strong>AI use karta hoon? Bilkul!</strong> But copy-paste nahi. Code samajhta hoon, test karta
                        hoon, client requirements ke hisaab se customize karta hoon. AI mere liye assistant hai,
                        replacement nahi.
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        <strong>Personal projects vs Client work.</strong> EduTrack aur HandCraftUI experiment hain -
                        learning ke liye. Client work professional hai - delivery guarantee ke saath at Siyaratech.
                      </p>
                      <div className="text-sm text-gray-500 italic mt-6 p-4 bg-gray-50 rounded-lg">
                        <p>
                          <strong>Translation:</strong> Recently I've successfully delivered3 products at Siyaratech
                          Innovations with real deadlines and business impact. I use AI as an assistant, not
                          replacement, and I'm transparent about what's client work vs personal experiments.
                        </p>
                      </div>
                    </>
                  ) : mode === "bro" ? (
                    <>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        <strong>Real Talk:3 products Delivered at Siyaratech Innovations.</strong> These weren't
                        side projects or tutorials—real deadlines, real pressure, real business outcomes. TechDiveHub,
                        SiyaraTech, and Influencer Commerce are all live and doing their thing! 🎯
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        <strong>Do I use AI? Absolutely!</strong> But I'm not copy-pasting blindly. I understand the
                        code, test everything, and customize it for client needs. AI is my assistant, not my
                        replacement—big difference! 🤖
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        <strong>Client work vs Personal experiments.</strong> EduTrack and HandCraftUI are my learning
                        playground—no pressure, just experimentation. Client work is where I deliver with guarantees and
                        professionalism at Siyaratech. Know the difference! 💼
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        <strong>Proven Client Delivery Record:</strong> Successfully delivered 3 production applications
                        for real clients at Siyaratech Innovations with measurable business outcomes.
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        <strong>Transparent AI Usage:</strong> I leverage AI tools for faster development and code
                        scaffolding, but every line is reviewed, tested, and customized for specific requirements.
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        <strong>Clear Project Classification:</strong> I distinguish between client deliverables
                        (production-ready) and personal learning projects (experimental).
                      </p>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className=" py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            {mode === "munna"
              ? "Client Chahiye Ya Developer?"
              : mode === "bro"
                ? "Ready to Build Something Cool?"
                : "Ready for Your Next Project"}
          </h3>

          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-600 mb-8">
              {mode === "munna"
                ? "Agar delivery guarantee chahiye aur working products dekhne hain, to baat karte hain!"
                : mode === "bro"
                  ? "If you need someone who ships quality code and has real client work to show for it, let's connect! 🚀"
                  : "If you need proven delivery capabilities and want to see live client work, let's connect!"}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 transition-all duration-200" onClick={() => { window.location.href = "mailto:shubhamgagare1997@gmail.com"; }}>
                <Mail className="w-4 h-4 mr-2" />
                Email Me
              </Button>
              <Button
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-200"
                onClick={() => { window.open("https://www.linkedin.com/in/shubham-gagare-543a05160/", "_blank"); }}
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                className="border-2 border-gray-600 text-gray-600 hover:bg-gray-50 transform hover:scale-105 transition-all duration-200"
                onClick={() => { window.open("https://github.com/ShubhamGagare", "_blank"); }}

              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
              <p className="text-sm text-gray-600">
                {mode === "munna"
                  ? "PDF resume bhi hai, but yeh site hi asli story hai - delivered products ke saath! 😊"
                  : mode === "bro"
                    ? "Traditional resume available too, but this portfolio tells the real story with actual examples! 😊"
                    : "Traditional resume available, but this portfolio tells the complete story with live examples. 😊"}
              </p>
              <Button variant="link" className="text-blue-600 mt-2" onClick={() => { window.open("/Shubham_Gagare_Resume.pdf", "_blank"); }}>
                <Code2 className="w-4 h-4 mr-2" />
                Download PDF Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            {mode === "munna"
              ? "Made with ❤️ by Shubham"
              : mode === "bro"
                ? "Made with ❤️ and lots of coffee ☕ by Shubham "
                : "Made with ❤️ by Shubham "}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Index
