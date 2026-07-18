"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowDown, Robot, Database, Desktop, CheckCircle, Users, ChartLineUp, ChartBar, XCircle, ShoppingCart, Factory, Heartbeat, Bank, Storefront, Timer, DeviceMobile, Code, CaretDown, ShieldCheck, Stack, ArrowsMerge, LockKey, Envelope, Phone } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import MermaidChart from "../components/MermaidChart";

const MANUFACTURING_MERMAID_CODE = `
flowchart TD
    subgraph Phase1 ["📝 1. Sales & Planning"]
        direction TB
        CRM(("🤝 Sales / CRM")) -->|"Quote Approved"| ERP["📊 ERP System"]
        ERP -->|"BOM Generated"| INV["📦 Inventory Mgmt"]
    end

    subgraph Phase2 ["⚙️ 2. Production & Fulfillment"]
        direction TB
        INV -->|"Material Allocated"| PROD["🏭 Production Floor"]
        PROD -->|"Quality Passed"| WH["🛒 Warehouse"]
        WH -->|"Label Created"| SHIP{"🚀 Shipping"}
    end

    subgraph Phase3 ["🏦 3. Accounting & Support"]
        direction TB
        SHIP -->|"Dispatched"| CUST(("👤 Customer Portal"))
        SHIP -->|"Fulfilled"| ACC["🧾 Accounting Ledger"]
    end

    Phase1 -.->|"Automated Handoff"| Phase2
    Phase2 -.->|"Zero-touch Sync"| Phase3

    %% Node Styling
    classDef default font-family:inherit, font-size:14px, font-weight:600
    classDef roundNode fill:#ffffff,stroke:#84b5fd,stroke-width:2px,color:#0a2540,rx:12,ry:12
    classDef circleNode fill:#0a2540,stroke:#84b5fd,stroke-width:2px,color:#ffffff
    classDef diamondNode fill:#e7f9f6,stroke:#84b5fd,stroke-width:2px,color:#0a2540

    class CRM,CUST circleNode
    class ERP,INV,PROD,WH,ACC roundNode
    class SHIP diamondNode

    %% Subgraph Styling
    style Phase1 fill:#f8fafc,stroke:#cbd5e1,stroke-width:2px,stroke-dasharray: 5 5,rx:16,ry:16
    style Phase2 fill:#f8fafc,stroke:#cbd5e1,stroke-width:2px,stroke-dasharray: 5 5,rx:16,ry:16
    style Phase3 fill:#f8fafc,stroke:#cbd5e1,stroke-width:2px,stroke-dasharray: 5 5,rx:16,ry:16
`;

const BPA_MERMAID_CODE = `
flowchart LR
    subgraph Step1 ["1. Information Arrives"]
        direction TB
        EMAIL["<div style='display:flex;flex-direction:column;align-items:center;padding:10px;'><img src='https://raw.githubusercontent.com/phosphor-icons/core/main/assets/regular/envelope-simple.svg' width='48' height='48' style='margin-bottom:8px;'/><span style='font-size:16px;'>Customer emails<br/>a request</span></div>"]
        FORM["<div style='display:flex;flex-direction:column;align-items:center;padding:10px;'><img src='https://raw.githubusercontent.com/phosphor-icons/core/main/assets/regular/browser.svg' width='48' height='48' style='margin-bottom:8px;'/><span style='font-size:16px;'>Someone fills<br/>out a form</span></div>"]
    end

    ENGINE{{"<div style='display:flex;flex-direction:column;align-items:center;padding:16px;'><img src='https://raw.githubusercontent.com/phosphor-icons/core/main/assets/regular/robot.svg' width='64' height='64' style='margin-bottom:12px;'/><span style='font-size:18px;'><b>Our Robot Brain</b><br/><br/>Reads it, understands it,<br/>and decides what to do</span></div>"}}

    subgraph Step2 ["2. Work Gets Done Automatically"]
        direction TB
        CRM["<div style='display:flex;flex-direction:column;align-items:center;padding:10px;'><img src='https://raw.githubusercontent.com/phosphor-icons/core/main/assets/regular/database.svg' width='48' height='48' style='margin-bottom:8px;'/><span style='font-size:16px;'>Saves info to<br/>your database</span></div>"]
        INV["<div style='display:flex;flex-direction:column;align-items:center;padding:10px;'><img src='https://raw.githubusercontent.com/phosphor-icons/core/main/assets/regular/receipt.svg' width='48' height='48' style='margin-bottom:8px;'/><span style='font-size:16px;'>Creates and sends<br/>an invoice</span></div>"]
        MSG["<div style='display:flex;flex-direction:column;align-items:center;padding:10px;'><img src='https://raw.githubusercontent.com/phosphor-icons/core/main/assets/regular/chat-circle.svg' width='48' height='48' style='margin-bottom:8px;'/><span style='font-size:16px;'>Sends your team<br/>a notification</span></div>"]
    end

    EMAIL -->|"Sends to"| ENGINE
    FORM -->|"Sends to"| ENGINE

    ENGINE -->|"Robot acts"| CRM
    ENGINE -->|"Robot acts"| INV
    ENGINE -->|"Robot acts"| MSG

    %% Node Styling
    classDef default font-family:inherit, font-weight:600, color:#0a2540
    classDef actionNode fill:#ffffff,stroke:#84b5fd,stroke-width:2px,rx:16,ry:16
    classDef sourceNode fill:#e0e7ff,stroke:#84b5fd,stroke-width:2px,rx:16,ry:16
    classDef engineNode fill:#f8fafc,stroke:#84b5fd,stroke-width:4px,rx:24,ry:24

    class EMAIL,FORM sourceNode
    class CRM,INV,MSG actionNode
    class ENGINE engineNode

    %% Subgraph Styling
    style Step1 fill:transparent,stroke:#cbd5e1,stroke-width:2px,stroke-dasharray: 5 5,rx:16,ry:16
    style Step2 fill:transparent,stroke:#cbd5e1,stroke-width:2px,stroke-dasharray: 5 5,rx:16,ry:16
`;

const ARCHITECTURES = [
  {
    id: "dt",
    title: "Business Process Automations",
    desc: "Modernization, automation, and process optimization to streamline your business operations.",
    icon: <ArrowsMerge weight="fill" size={28} />,
  },
  {
    id: "es",
    title: "Enterprise Solutions",
    desc: "Custom ERP, CRM, HRMS platforms, portals, mobile apps, and custom software tailored to your needs.",
    icon: <Database weight="fill" size={28} />,
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    desc: "AI integrations, intelligent automation, and custom LLM routing designed for 24/7 autonomous operations.",
    icon: <Robot weight="fill" size={28} />,
  },
  {
    id: "is",
    title: "Information Security",
    desc: "ISO 27001 consulting and ISMS implementation built with a secure-by-design philosophy.",
    icon: <ShieldCheck weight="fill" size={28} />,
  },
  {
    id: "comp",
    title: "Compliance",
    desc: "End-to-end DPDPA implementation, consent management, and data privacy governance.",
    icon: <Stack weight="fill" size={28} />,
  },
  {
    id: "gr",
    title: "Governance & Risk",
    desc: "Comprehensive risk assessments and governance frameworks for enterprise assurance.",
    icon: <Bank weight="fill" size={28} />,
  },
  {
    id: "web",
    title: "Web Applications",
    desc: "Fast, beautiful, and highly-optimized websites. We use modern frameworks to deliver sub-second load times.",
    icon: <Desktop weight="fill" size={28} />,
  },
  {
    id: "mobile",
    title: "Mobile Applications",
    desc: "Build your own branded mobile app for a premium experience right on their phones. Native performance with elegant UI.",
    icon: <DeviceMobile weight="fill" size={28} />,
  },
  {
    id: "custom",
    title: "Custom Software",
    desc: "Exact solutions for unique business needs. No cookie-cutter software. From logic algorithms to supply chain tools.",
    icon: <Code weight="fill" size={28} />,
  }
];

const FAQS = [
  {
    id: "faq1",
    question: "Do we retain ownership of the source code?",
    answer: "Absolutely. Once the project is finished and fully paid for, you retain 100% intellectual property ownership of the software and custom tools."
  },
  {
    id: "faq2",
    question: "Can you interface with legacy systems?",
    answer: "Yes. We frequently build custom API wrappers and secure data bridges to extract and sync data from older, on-premise systems into modern cloud infrastructure."
  },
  {
    id: "faq3",
    question: "How is the timeline structured?",
    answer: "Following the discovery phase, we work in strict two-week sprints. Simple architecture might take 4-8 weeks, while enterprise AI systems usually require 3-6 months."
  },
  {
    id: "faq4",
    question: "Do you provide SLAs after launch?",
    answer: "Yes. We offer retainer-based service level agreements (SLAs) for continuous monitoring, zero-downtime deployments, and infrastructure scaling."
  }
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <div className="flex flex-col w-full overflow-x-hidden bg-[#f8fafc] text-[#0a2540]">
      
      {/* 1. HERO SECTION (Startup Vidhan Layout) */}
      <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 max-w-[1400px] mx-auto">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.04] pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Column (Text & CTAs) - 50% */}
          <div className="lg:col-span-6 flex flex-col items-start text-left relative z-20">
            <div className="inline-flex items-center gap-2 mb-6 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#84b5fd] bg-[#84b5fd]/10 px-4 py-1.5 rounded-full border border-[#84b5fd]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#84b5fd] animate-pulse" />
              India's Premier Enterprise Software Partner
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0a2540] leading-[1.05] mb-6">
              Save Time. Grow Faster. <br className="hidden md:block"/>
              <span className="italic text-[#84b5fd] relative whitespace-nowrap">
                Scale Easier.
                {/* Custom SVG underline for emphasis */}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#84b5fd]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-8 max-w-xl">
              From automated AI workflows to custom mobile applications — one trusted engineering partner for ambitious companies.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-6">
              <Link href="/contact" className="w-full sm:w-auto bg-[#84b5fd] hover:bg-blue-700 text-white px-8 py-4 rounded-full text-base transition-all flex items-center justify-center gap-2 font-semibold shadow-[0_8px_20px_-6px_rgba(132,181,253,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(132,181,253,0.5)] hover:-translate-y-0.5">
                Start your project <ArrowRight weight="bold" />
              </Link>
              <Link href="/services" className="w-full sm:w-auto bg-white hover:bg-slate-50 text-[#0a2540] border border-slate-200 px-8 py-4 rounded-full text-base transition-all flex items-center justify-center gap-2 font-semibold shadow-sm hover:border-blue-300">
                Explore services
              </Link>
            </div>
            
            {/* Metadata Dots */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-2"><CheckCircle weight="fill" className="text-[#84b5fd]" /> AI Systems</span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="flex items-center gap-2"><CheckCircle weight="fill" className="text-[#84b5fd]" /> ERP & CRM</span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="flex items-center gap-2"><CheckCircle weight="fill" className="text-[#84b5fd]" /> Web & Mobile</span>
            </div>
          </div>

          {/* Right Column (Faded Visual) - 50% */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 w-full h-[400px] sm:h-[500px] lg:h-[700px] mt-12 lg:mt-0 relative"
          >
            {/* Glow backing */}
            <div className="absolute inset-0 bg-[#84b5fd]/20 rounded-full blur-[100px] opacity-60 translate-x-1/4 pointer-events-none" />
            
            {/* The faded image container */}
            <div 
              className="absolute inset-0 lg:right-[-20%] pointer-events-none"
              style={{
                maskImage: 'linear-gradient(to left, black 50%, transparent)',
                WebkitMaskImage: 'linear-gradient(to left, black 50%, transparent)'
              }}
            >
              <Image 
                src="/images/hero_team_v2.png" 
                alt="Logicware Engineering Team" 
                fill
                className="object-cover object-[80%_center] rounded-l-[3rem]"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. UNDER-HERO BANNER (Marquee) */}
      <div className="w-full border-y border-slate-200/60 bg-white/40 backdrop-blur-md overflow-hidden py-8 flex flex-col items-center gap-6 group">
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 35s linear infinite;
          }
          .group:hover .animate-marquee {
            animation-play-state: paused;
          }
        `}</style>
        
        {/* Centered Title Label */}
        <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest text-center px-4">
          Trusted Across Enterprise Sectors
        </span>

        {/* Masked Marquee Container */}
        <div 
          className="w-full relative flex overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
          }}
        >
          {/* Marquee Track */}
          <div className="flex w-max animate-marquee gap-8 sm:gap-16 items-center">
            {[...Array(4)].map((_, arrayIndex) => (
               <div key={arrayIndex} className="flex items-center gap-8 sm:gap-16 shrink-0">
                 {["Manufacturing", "Healthcare", "Finance & Fintech", "Retail & E-Commerce", "Logistics", "Energy", "Education"].map((sector, i) => (
                   <div key={i} className="flex items-center gap-8 sm:gap-16 shrink-0">
                     <span className="text-sm sm:text-base font-semibold text-slate-600 hover:text-[#0a2540] transition-colors cursor-default">{sector}</span>
                     <span className="text-slate-300 font-bold text-lg leading-none">•</span>
                   </div>
                 ))}
               </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. SERVICE PORTFOLIO (Bento Grid) */}
      <section className="w-full py-20 md:py-32 px-4 sm:px-6 max-w-[1400px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#84b5fd] mb-3">Service Portfolio</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0a2540] tracking-tight">End-to-end <span className="italic text-[#84b5fd]">digital capabilities.</span></h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {ARCHITECTURES.map((arch) => (
            <Link 
              href={`/services/${arch.id}`}
              key={arch.id} 
              className="group bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 p-4 shadow-sm hover:shadow-[0_8px_30px_-8px_rgba(132,181,253,0.2)] hover:border-[#84b5fd]/30 hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4"
            >
              <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden bg-slate-50 relative border border-slate-100">
                <Image src={`/images/services/${arch.id}.png`} alt={arch.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex flex-col flex-1 h-full py-0.5">
                <h4 className="text-base font-bold text-[#0a2540] tracking-tight mb-1 group-hover:text-[#84b5fd] transition-colors">{arch.title}</h4>
                <p className="text-sm text-slate-500 font-medium leading-snug line-clamp-2 mb-3">{arch.desc}</p>
                <div className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider group-hover:text-[#84b5fd] transition-colors mt-auto">
                  Explore <ArrowRight weight="bold" size={12} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3.5 USER TYPES & ROLE ARCHITECTURE */}
      <section className="w-full py-20 px-4 sm:px-6 max-w-[1400px] mx-auto border-t border-slate-200/50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#84b5fd] mb-3">Business Process Automation</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-[#0a2540] tracking-tight">Automate workflows, <span className="italic text-[#84b5fd]">eliminate manual tasks.</span></h3>
          <p className="mt-6 text-lg text-slate-600 font-medium">We design custom automation engines and intelligent routing logic to streamline your entire business operation.</p>
        </div>

        <div className="relative w-full rounded-[2.5rem] bg-[#0a2540] p-8 md:p-12 lg:p-16 overflow-hidden shadow-2xl">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#84b5fd]/20 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03] pointer-events-none invert" />

          {/* Visual Image */}
          <div className="relative z-10 w-full max-w-5xl mx-auto mb-16">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-3 border border-white/10 shadow-[0_20px_50px_-15px_rgba(132,181,253,0.3)] overflow-hidden">
              <Image 
                src="/hero.jpeg" 
                alt="Business Process Automation Architecture" 
                width={1200}
                height={800}
                className="w-full h-auto rounded-[1.5rem] object-cover"
              />
            </div>
          </div>

          {/* Layman Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {/* Feature 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6 border border-blue-500/30">
                <Database weight="fill" size={24} />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">No More Copy & Paste</h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">We catch information as soon as it arrives in your inbox or website and automatically read it for you.</p>
              <div className="flex flex-col gap-2">
                <div className="text-xs font-bold text-blue-300 bg-blue-500/10 px-3 py-1.5 rounded-lg border border-blue-500/20 w-fit">Runs 24/7</div>
                <div className="text-xs font-bold text-white bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 w-fit">Never sleeps</div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 lg:translate-y-8">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6 border border-blue-500/30">
                <ArrowsMerge weight="fill" size={24} />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Instant Decisions</h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">Our software acts like a smart manager, looking at the data and instantly knowing who should handle it.</p>
              <div className="flex flex-col gap-2">
                <div className="text-xs font-bold text-blue-300 bg-blue-500/10 px-3 py-1.5 rounded-lg border border-blue-500/20 w-fit">Smart Logic</div>
                <div className="text-xs font-bold text-white bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 w-fit">Zero delays</div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 lg:translate-y-8">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6 border border-blue-500/30">
                <Storefront weight="fill" size={24} />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Apps Talking Together</h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">We make your different software tools "talk" to each other so information flows magically in the background.</p>
              <div className="flex flex-col gap-2">
                <div className="text-xs font-bold text-blue-300 bg-blue-500/10 px-3 py-1.5 rounded-lg border border-blue-500/20 w-fit">Perfect Sync</div>
                <div className="text-xs font-bold text-white bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 w-fit">No typos</div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6 border border-blue-500/30">
                <ChartBar weight="fill" size={24} />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Always Aware</h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">You get a beautiful dashboard to watch the robot work, and text alerts if something needs your attention.</p>
              <div className="flex flex-col gap-2">
                <div className="text-xs font-bold text-blue-300 bg-blue-500/10 px-3 py-1.5 rounded-lg border border-blue-500/20 w-fit">Full visibility</div>
                <div className="text-xs font-bold text-white bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 w-fit">Instant alerts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ENGAGEMENT METHODOLOGY (Green Panel) */}
      <section className="w-full py-20 px-4 sm:px-6">
        <div className="max-w-[1400px] mx-auto bg-blue-50 border border-blue-100 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-[0.05] pointer-events-none" />
          
          <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#84b5fd] mb-3">Engagement Methodology</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0a2540] tracking-tight">Structured <span className="italic text-[#84b5fd]">lifecycle loop.</span></h3>
            <p className="mt-6 text-lg text-slate-600 font-medium max-w-2xl mx-auto">From discovering your business needs to continuous optimization, we follow a precise methodology for scalable transformations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-y-16 relative z-10">
            {[
              { num: "01", title: "Discover", desc: "Mapping business needs, domain logic, and identifying data silos." },
              { num: "02", title: "Design", desc: "Architecting the optimal technical solution and solution blueprint." },
              { num: "03", title: "Develop & Integrate", desc: "Rigorous test-driven development and system integrations." },
              { num: "04", title: "Deploy", desc: "Seamless launch, real-time monitoring, and smooth rollouts." },
              { num: "05", title: "Optimize", desc: "SLA-backed infrastructure scaling and performance tuning." },
              { num: "06", title: "Improve", desc: "Continuous feedback loop for ongoing feature enhancement." }
            ].map((step, i) => (
              <div key={i} className="flex flex-col relative group">
                <div className="w-16 h-16 rounded-2xl bg-white border-2 border-blue-200 text-[#84b5fd] flex items-center justify-center text-xl font-bold shadow-sm mb-4 group-hover:bg-[#84b5fd] group-hover:text-white transition-colors duration-300">
                  {step.num}
                </div>
                <h4 className="text-xl font-bold text-[#0a2540] mb-2">{step.title}</h4>
                <p className="text-base text-slate-600 font-medium leading-relaxed">{step.desc}</p>
                {/* Horizontal line connector for desktop */}
                {i % 3 !== 2 && (
                  <div className="hidden md:block absolute top-8 left-[80px] w-[calc(100%-80px)] h-[2px] bg-blue-200 -z-10" />
                )}
                {/* Vertical line connector for row wrap on desktop */}
                {i === 2 && (
                  <div className="hidden md:block absolute top-[64px] left-[31px] w-[2px] h-[calc(100%+32px)] bg-blue-200 -z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BUILT FOR INDIA (Overlapping Layout / Paradigm Shift) */}
      <section className="w-full py-20 md:py-32 px-4 sm:px-6 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#84b5fd] mb-3">The Paradigm Shift</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0a2540] tracking-tight mb-6">Built for scale. <br/> <span className="italic text-[#84b5fd]">Engineered for reliability.</span></h3>
            <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
              The old way relies on disconnected tools and manual data entry. We connect everything—from your CRM to your warehouse—into a single automated loop powered by custom software and AI agents.
            </p>
            
            <ul className="flex flex-col gap-4">
              {[
                "Eliminate manual data entry instantly.",
                "Real-time sync between sales and operations.",
                "Custom APIs to integrate legacy systems."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-base font-bold text-[#0a2540]">
                  <CheckCircle weight="fill" size={24} className="text-[#84b5fd] shrink-0" /> 
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Right Visual (Overlapping Cards) */}
          <div className="relative w-full h-[500px]">
             {/* Base Image Card */}
             <div className="absolute top-0 right-0 w-4/5 h-4/5 bg-slate-200 rounded-3xl overflow-hidden shadow-lg border border-slate-300">
               <Image src="/hero-light.png" alt="Engineering" layout="fill" objectFit="cover" className="opacity-80" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/80 to-transparent flex items-end p-8">
                 <p className="text-white font-bold text-xl">Enterprise Architecture</p>
               </div>
             </div>
             
             {/* Overlapping Floating Card */}
             <div className="absolute bottom-0 left-0 w-2/3 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-[0_20px_50px_-15px_rgba(132,181,253,0.3)] border border-blue-100 flex flex-col gap-4">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#84b5fd]">
                   <ArrowsMerge weight="bold" size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-[#0a2540]">Everything Connected</h4>
                   <p className="text-xs font-semibold text-blue-600">Zero manual syncs</p>
                 </div>
               </div>
               <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                 <div className="w-[85%] h-full bg-[#84b5fd] rounded-full" />
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5.1 THE COMPLETE LIFECYCLE WORKFLOW */}
      <section className="w-full py-20 md:py-32 px-4 sm:px-6 max-w-[1400px] mx-auto border-t border-slate-200/50">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#84b5fd] mb-3">The Complete Lifecycle</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0a2540] tracking-tight">One continuous <span className="italic text-[#84b5fd]">automated loop.</span></h3>
          <p className="mt-6 text-lg text-slate-600 font-medium">See how a single customer journey flows through acquisition, fulfillment, and support without human bottlenecks.</p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
           {/* Timeline Line */}
           <div className="absolute top-8 bottom-8 left-[28px] md:left-1/2 w-1 bg-blue-100 rounded-full transform md:-translate-x-1/2 z-0" />
           
           <div className="flex flex-col gap-16 relative z-10">
             
             {/* Phase 1 */}
             <div className="flex flex-col md:flex-row items-center gap-8 w-full group">
                <div className="w-full md:w-1/2 flex md:justify-end pl-16 md:pl-0 md:pr-12 relative">
                   <div className="absolute top-1/2 -translate-y-1/2 left-0 md:left-auto md:-right-[26px] w-14 h-14 bg-white rounded-full border-4 border-blue-50 flex items-center justify-center text-[#84b5fd] z-10 shadow-sm group-hover:bg-[#84b5fd] group-hover:text-white transition-all duration-300">
                     <Users weight="fill" size={24} />
                   </div>
                   <div className="bg-white/95 p-8 rounded-3xl border border-slate-200/75 shadow-[0_4px_24px_-4px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_44px_-12px_rgba(132,181,253,0.15)] hover:-translate-y-1.5 transition-all duration-300 w-full text-left md:text-right">
                     <div className="bg-blue-50 text-[#84b5fd] px-3 py-1.5 rounded-lg font-bold text-xs mb-4 inline-block uppercase tracking-widest border border-blue-100">Phase 1: Acquisition</div>
                     <h4 className="text-2xl font-bold text-[#0a2540] mb-3 tracking-tight">Lead to Close</h4>
                     <p className="text-base text-slate-600 font-medium mb-6">Instantly qualify leads and book meetings.</p>
                     <div className="flex flex-col gap-3">
                       <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-sm font-bold text-slate-700 flex justify-between md:flex-row-reverse items-center"><span className="text-slate-400">Step 1</span> <span>Website Form</span></div>
                       <div className="bg-blue-50 p-3 rounded-xl border border-blue-100 text-sm font-bold text-[#84b5fd] flex justify-between md:flex-row-reverse items-center"><span className="text-blue-400">Step 2</span> <span>AI Lead Scoring</span></div>
                       <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-sm font-bold text-slate-700 flex justify-between md:flex-row-reverse items-center"><span className="text-slate-400">Step 3</span> <span>Auto-Calendar Link</span></div>
                     </div>
                   </div>
                </div>
                <div className="hidden md:block w-1/2" />
             </div>

             {/* Phase 2 */}
             <div className="flex flex-col md:flex-row items-center gap-8 w-full group">
                <div className="hidden md:block w-1/2" />
                <div className="w-full md:w-1/2 flex md:justify-start pl-16 md:pl-12 relative">
                   <div className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-[26px] w-14 h-14 bg-white rounded-full border-4 border-blue-50 flex items-center justify-center text-[#84b5fd] z-10 shadow-sm group-hover:bg-[#84b5fd] group-hover:text-white transition-all duration-300">
                     <ShoppingCart weight="fill" size={24} />
                   </div>
                   <div className="bg-white/95 p-8 rounded-3xl border border-slate-200/75 shadow-[0_4px_24px_-4px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_44px_-12px_rgba(132,181,253,0.15)] hover:-translate-y-1.5 transition-all duration-300 w-full text-left">
                     <div className="bg-blue-50 text-[#84b5fd] px-3 py-1.5 rounded-lg font-bold text-xs mb-4 inline-block uppercase tracking-widest border border-blue-100">Phase 2: Operations</div>
                     <h4 className="text-2xl font-bold text-[#0a2540] mb-3 tracking-tight">Fulfillment</h4>
                     <p className="text-base text-slate-600 font-medium mb-6">Connect storefront to warehouse and ship.</p>
                     <div className="flex flex-col gap-3">
                       <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-sm font-bold text-slate-700 flex justify-between items-center"><span className="text-slate-400">Step 4</span> <span>New Order</span></div>
                       <div className="bg-blue-50 p-3 rounded-xl border border-blue-100 text-sm font-bold text-[#84b5fd] flex justify-between items-center"><span className="text-blue-400">Step 5</span> <span>ERP Sync</span></div>
                       <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-sm font-bold text-slate-700 flex justify-between items-center"><span className="text-slate-400">Step 6</span> <span>Shipping Label</span></div>
                     </div>
                   </div>
                </div>
             </div>

             {/* Phase 3 */}
             <div className="flex flex-col md:flex-row items-center gap-8 w-full group">
                <div className="w-full md:w-1/2 flex md:justify-end pl-16 md:pl-0 md:pr-12 relative">
                   <div className="absolute top-1/2 -translate-y-1/2 left-0 md:left-auto md:-right-[26px] w-14 h-14 bg-white rounded-full border-4 border-blue-50 flex items-center justify-center text-[#84b5fd] z-10 shadow-sm group-hover:bg-[#84b5fd] group-hover:text-white transition-all duration-300">
                     <Heartbeat weight="fill" size={24} />
                   </div>
                   <div className="bg-white/95 p-8 rounded-3xl border border-slate-200/75 shadow-[0_4px_24px_-4px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_44px_-12px_rgba(132,181,253,0.15)] hover:-translate-y-1.5 transition-all duration-300 w-full text-left md:text-right">
                     <div className="bg-blue-50 text-[#84b5fd] px-3 py-1.5 rounded-lg font-bold text-xs mb-4 inline-block uppercase tracking-widest border border-blue-100">Phase 3: Retention</div>
                     <h4 className="text-2xl font-bold text-[#0a2540] mb-3 tracking-tight">Support Routing</h4>
                     <p className="text-base text-slate-600 font-medium mb-6">AI reads and categorizes emails instantly.</p>
                     <div className="flex flex-col gap-3">
                       <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-sm font-bold text-slate-700 flex justify-between md:flex-row-reverse items-center"><span className="text-slate-400">Step 7</span> <span>Customer Email</span></div>
                       <div className="bg-blue-50 p-3 rounded-xl border border-blue-100 text-sm font-bold text-[#84b5fd] flex justify-between md:flex-row-reverse items-center"><span className="text-blue-400">Step 8</span> <span>AI Categorization</span></div>
                       <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-sm font-bold text-slate-700 flex justify-between md:flex-row-reverse items-center"><span className="text-slate-400">Step 9</span> <span>Assign to Agent</span></div>
                     </div>
                   </div>
                </div>
                <div className="hidden md:block w-1/2" />
             </div>

           </div>
        </div>
      </section>

      {/* 5.2 ENTERPRISE MANUFACTURING WORKFLOW */}
      <section className="w-full py-20 md:py-32 px-4 sm:px-6 max-w-[1400px] mx-auto border-t border-slate-200/50">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#84b5fd] mb-3">Enterprise Case Study</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0a2540] tracking-tight">End-to-End <span className="italic text-[#84b5fd]">Manufacturing Flow.</span></h3>
          <p className="mt-6 text-lg text-slate-600 font-medium">See how we connect every department—from the first sales email to the final accounting ledger—into one seamless, automated loop.</p>
        </div>

        <div className="relative w-full bg-blue-50/50 rounded-[3rem] p-8 sm:p-16 border border-blue-100 shadow-sm overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-[100px] opacity-60 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f8fafc] rounded-full blur-[100px] opacity-60 translate-y-1/2 -translate-x-1/2 pointer-events-none" />
           
           <div className="relative z-10 w-full bg-white/95 backdrop-blur-sm rounded-3xl p-3 border border-white/10 shadow-[0_20px_50px_-15px_rgba(132,181,253,0.3)] overflow-hidden">
             <Image 
               src="/manu.jpeg" 
               alt="Enterprise Manufacturing Workflow" 
               width={1600}
               height={900}
               className="w-full h-auto rounded-[1.5rem] object-cover"
             />
           </div>
        </div>
      </section>

      {/* 6. BY THE NUMBERS (Dark Gradient Stats Section) */}
      <section className="w-full py-24 px-4 sm:px-6 bg-gradient-to-br from-[#1e3a8a] to-[#172554] my-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-blue-300 mb-3">By The Numbers</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">The impact of real engineering.</h3>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center divide-x-0 lg:divide-x divide-blue-800/50">
            {[
              { stat: "99.9%", label: "System Uptime Guaranteed" },
              { stat: "10x", label: "Faster Workflow Execution" },
              { stat: "100%", label: "IP Ownership For Clients" },
              { stat: "24/7", label: "Autonomous AI Operations" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-4xl md:text-6xl font-bold text-white mb-2">{item.stat}</span>
                <span className="text-sm md:text-base font-medium text-blue-100">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.1 DPDPA & ISO 27001 WORKFLOWS */}
      <section className="w-full py-20 md:py-32 px-4 sm:px-6 max-w-[1400px] mx-auto border-t border-slate-200/50">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#84b5fd] mb-3">Security & Compliance</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0a2540] tracking-tight">Security <span className="italic text-[#84b5fd]">by Design.</span></h3>
          <p className="mt-6 text-lg text-slate-600 font-medium">End-to-end data privacy governance and ISO 27001 implementation, deeply integrated into your digital architecture.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ISO 27001 Lifecycle */}
          <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200/75 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.06)] relative overflow-hidden group hover:-translate-y-1 transition-transform">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-[80px] opacity-40 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
             <div className="flex items-center gap-4 mb-8 relative z-10">
               <div className="w-14 h-14 bg-[#f8fafc] border border-slate-100 text-[#84b5fd] rounded-2xl flex items-center justify-center">
                 <ShieldCheck weight="fill" size={28} />
               </div>
               <div>
                 <h4 className="font-bold text-[#0a2540] text-xl">ISO 27001 Lifecycle</h4>
                 <p className="text-xs font-bold text-[#84b5fd] uppercase tracking-widest">Continuous Certification</p>
               </div>
             </div>
             
             <div className="relative z-10 flex flex-col gap-4">
               {[
                 { title: "Assessment & Gap Analysis", icon: <ChartLineUp weight="bold" /> },
                 { title: "Policy Development", icon: <Code weight="bold" /> },
                 { title: "Internal Audit & Review", icon: <CheckCircle weight="bold" /> },
                 { title: "Certification & Monitoring", icon: <Stack weight="bold" /> },
               ].map((step, i) => (
                 <div key={i} className="flex items-center gap-4 bg-[#f8fafc] p-4 rounded-xl border border-slate-100 group-hover:border-blue-100 transition-colors">
                   <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#84b5fd] shadow-sm">
                     {step.icon}
                   </div>
                   <span className="font-semibold text-[#0a2540]">{step.title}</span>
                 </div>
               ))}
             </div>
          </div>

          {/* DPDPA Compliance */}
          <div className="bg-[#0a2540] rounded-[2.5rem] p-10 shadow-[0_20px_50px_-15px_rgba(10,37,64,0.3)] relative overflow-hidden group hover:-translate-y-1 transition-transform">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#84b5fd] rounded-full blur-[80px] opacity-20 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
             <div className="flex items-center gap-4 mb-8 relative z-10">
               <div className="w-14 h-14 bg-white/10 text-white border border-white/10 rounded-2xl flex items-center justify-center">
                 <LockKey weight="fill" size={28} />
               </div>
               <div>
                 <h4 className="font-bold text-white text-xl">DPDPA Compliance</h4>
                 <p className="text-xs font-bold text-blue-400 uppercase tracking-widest">Data Privacy Framework</p>
               </div>
             </div>
             
             <div className="relative z-10">
                <div className="flex flex-col gap-2 relative">
                  {/* Vertical connector */}
                  <div className="absolute top-8 bottom-8 left-[23px] w-0.5 bg-white/10" />
                  
                  {[
                    { label: "Governance", detail: "Policies, Mapping, DPIA", color: "bg-blue-500" },
                    { label: "Consent Management", detail: "Collection & User Rights", color: "bg-blue-500" },
                    { label: "Security", detail: "Encryption & Breach Response", color: "bg-blue-500" },
                    { label: "Reporting", detail: "Employee Training & Audits", color: "bg-orange-500" }
                  ].map((node, i) => (
                    <div key={i} className="flex items-start gap-4 relative">
                      <div className={`w-12 h-12 rounded-full ${node.color} flex items-center justify-center text-white font-bold text-lg shadow-lg relative z-10 ring-4 ring-[#0a2540]`}>
                        {i + 1}
                      </div>
                      <div className="pt-1.5 pb-6">
                        <h5 className="text-white font-bold text-lg">{node.label}</h5>
                        <p className="text-slate-400 text-sm font-medium">{node.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 6.2 WHY LOGICWARE VS TRADITIONAL */}
      <section className="w-full py-20 md:py-32 px-4 sm:px-6 max-w-[1400px] mx-auto border-t border-slate-200/50">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#84b5fd] mb-3">Why Logicware?</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-[#0a2540] tracking-tight">Stop settling for <span className="italic text-[#84b5fd]">legacy agencies.</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Traditional Vendors */}
          <div className="bg-rose-50/50 border border-rose-100 rounded-3xl p-8 lg:p-12">
            <div className="flex items-center gap-3 mb-8">
              <XCircle weight="fill" size={32} className="text-rose-500" />
              <h4 className="text-2xl font-bold text-slate-800">Traditional Vendors</h4>
            </div>
            <ul className="flex flex-col gap-6">
              {[
                { title: "Limited Solutions", desc: "Disjointed tools patched together." },
                { title: "Slow Implementation", desc: "Months of planning with no visible code." },
                { title: "Reactive Support", desc: "Fixing things only after they break." },
                { title: "Fragmented Reviews", desc: "No unified oversight or continuous audits." }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-rose-400 shrink-0" />
                  <div>
                    <h5 className="font-bold text-slate-800">{item.title}</h5>
                    <p className="text-sm text-slate-600 font-medium">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Logicware */}
          <div className="bg-blue-50 border-2 border-[#84b5fd] rounded-3xl p-8 lg:p-12 relative shadow-[0_20px_40px_-15px_rgba(132,181,253,0.2)] transform md:scale-105 z-10">
            <div className="absolute top-0 right-0 bg-[#84b5fd] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-xl rounded-tr-[1.3rem]">
              The Logicware Edge
            </div>
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle weight="fill" size={32} className="text-[#84b5fd]" />
              <h4 className="text-2xl font-bold text-[#0a2540]">Logicware</h4>
            </div>
            <ul className="flex flex-col gap-6">
              {[
                { title: "End-to-End Innovation", desc: "Complete custom architecture under one roof." },
                { title: "Agile Delivery", desc: "Test-driven sprints. See progress instantly." },
                { title: "Proactive Partnership", desc: "Real-time monitoring and autonomous scaling." },
                { title: "Continuous Monitoring", desc: "ISO 27001 embedded into the engineering lifecycle." }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-[#84b5fd] shrink-0" />
                  <div>
                    <h5 className="font-bold text-[#0a2540]">{item.title}</h5>
                    <p className="text-sm text-slate-600 font-medium">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7. FAQ / SECTORS (White Cards Grid) */}
      <section className="w-full py-20 md:py-32 px-4 sm:px-6 max-w-[800px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#84b5fd] mb-3">Common Inquiries</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-[#0a2540] tracking-tight">Everything you need to know.</h3>
        </div>
        
        <div className="flex flex-col gap-4">
          {FAQS.map((faq) => (
            <div 
              key={faq.id} 
              onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
              className="bg-white/95 border border-slate-200/75 rounded-2xl cursor-pointer shadow-[0_2px_12px_-4px_rgba(15,23,42,0.04)] hover:shadow-md hover:border-blue-200 transition-all duration-300"
            >
              <div className="p-6 md:p-8 flex items-start justify-between gap-4">
                <h4 className="text-lg md:text-xl font-bold text-[#0a2540]">{faq.question}</h4>
                <motion.div
                  animate={{ rotate: openFaq === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 text-slate-500"
                >
                  <CaretDown weight="bold" size={20} />
                </motion.div>
              </div>
              
              <AnimatePresence>
                {openFaq === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-8 pt-0">
                      <p className="text-base text-slate-600 font-medium leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FINAL CTA (Panel Box) */}
      <section className="w-full py-10 px-4 sm:px-6 mb-20">
        <div className="max-w-[1400px] mx-auto bg-[#0a2540] rounded-[3rem] p-10 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#84b5fd] rounded-full blur-[150px] opacity-20 pointer-events-none translate-x-1/2 -translate-y-1/2" />
          
          <div className="relative z-10 max-w-xl text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Ready to engineer your <span className="italic text-blue-400">next move?</span>
            </h2>
            <p className="text-lg text-slate-300 font-medium mb-10">
              Partner with our engineering team to architect and build scalable, intelligent software for your organization.
            </p>
            <Link href="/contact" className="inline-flex bg-[#84b5fd] hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg transition-all items-center justify-center gap-2 font-bold shadow-[0_8px_20px_-6px_rgba(132,181,253,0.4)]">
              Schedule Consultation <ArrowRight weight="bold" />
            </Link>
          </div>

          <div className="relative z-10 w-full md:w-auto bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl shrink-0">
             <h4 className="text-white font-bold text-xl mb-6">Direct Contact</h4>
             <div className="flex flex-col gap-4 text-slate-300 font-medium">
               <a href="mailto:info@logicwaretech.com" className="flex items-center gap-4 hover:text-white transition-colors">
                 <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0"><Envelope weight="fill" /></div>
                 <span>info@logicwaretech.com</span>
               </a>
               <a href="tel:+919940644543" className="flex items-center gap-4 hover:text-white transition-colors">
                 <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0"><Phone weight="fill" /></div>
                 <span>+91 99406 44543</span>
               </a>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}
