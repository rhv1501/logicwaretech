import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { 
  ArrowRight, CheckCircle, Robot, Database, Desktop, DeviceMobile, 
  Code, ArrowsMerge, ShieldCheck, Stack, Bank, XCircle, ChartLineUp
} from "@phosphor-icons/react/dist/ssr";

const SERVICES_DATA = {
  dt: {
    title: "Business Process Automations",
    desc: "Modernization, automation, and process optimization to streamline your business operations.",
    icon: <ArrowsMerge weight="fill" size={32} />,
    color: "bg-blue-50",
    textColor: "text-blue-600",
    image: "/images/services/dt.png",
    problem: "Most businesses lose up to 30% of their operational bandwidth to manual data entry, disconnected legacy systems, and human error in repetitive tasks.",
    solution: "We engineer zero-touch automated workflows that connect your CRM, ERP, and support systems—allowing data to flow flawlessly in the background while your team focuses on growth.",
    deliverables: ["End-to-end Workflow Mapping", "Custom API Integrations", "Zapier/Make Replacements", "Zero-Touch Data Sync"],
    benefits: [
      { title: "Zero Manual Entry", desc: "Data syncs automatically across all platforms." },
      { title: "100% Accuracy", desc: "Eliminate human error from repetitive tasks." },
      { title: "Immediate ROI", desc: "Save thousands of hours within the first month." }
    ],
    methodology: [
      { step: "01", name: "Process Mapping", desc: "We document every manual touchpoint in your current operations." },
      { step: "02", name: "Logic Architecture", desc: "We design custom logic gates and API bridges between your tools." },
      { step: "03", name: "Silent Deployment", desc: "We deploy the automations with zero disruption to your daily operations." }
    ],
    workflowImage: "/images/workflows/dt.png"
  },
  es: {
    title: "Enterprise Solutions",
    desc: "Custom ERP, CRM, HRMS platforms, portals, mobile apps, and custom software tailored to your needs.",
    icon: <Database weight="fill" size={32} />,
    color: "bg-indigo-50",
    textColor: "text-indigo-600",
    image: "/images/services/es.png",
    problem: "Siloed departments and patchwork software limit your ability to scale, causing massive operational bottlenecks and fragmented data.",
    solution: "We architect bespoke ERP and CRM systems from the ground up, perfectly mapped to your unique supply chain and operational workflows.",
    deliverables: ["Custom ERP Development", "Tailored CRM Systems", "Internal Vendor Portals", "High-Availability Architecture"],
    benefits: [
      { title: "Unified Data Hub", desc: "One single source of truth for your entire company." },
      { title: "Infinite Scalability", desc: "Architecture built to handle massive data loads." },
      { title: "Custom Dashboards", desc: "Real-time analytics tailored to your KPIs." }
    ],
    methodology: [
      { step: "01", name: "Domain Analysis", desc: "We analyze your exact supply chain and departmental needs." },
      { step: "02", name: "Database Design", desc: "We architect a scalable, highly-relational database structure." },
      { step: "03", name: "Phased Rollout", desc: "We migrate data safely and train your team on the new system." }
    ],
    workflowImage: "/opt2.png"
  },
  ai: {
    title: "Artificial Intelligence",
    desc: "AI integrations, intelligent automation, and custom LLM routing designed for 24/7 autonomous operations.",
    icon: <Robot weight="fill" size={32} />,
    color: "bg-violet-50",
    textColor: "text-violet-600",
    image: "/images/services/ai.png",
    problem: "Off-the-shelf AI tools are generic, hallucinate often, and don't understand your proprietary business logic or private data.",
    solution: "We build custom LLM architectures and RAG pipelines that securely read your private data and execute multi-step reasoning tasks autonomously.",
    deliverables: ["Autonomous AI Agents", "Custom LLM Integrations", "RAG Document Search", "24/7 Automated Support"],
    benefits: [
      { title: "Context-Aware", desc: "AI that actually understands your business rules." },
      { title: "Data Privacy", desc: "Your proprietary data never trains public models." },
      { title: "24/7 Execution", desc: "Agents capable of doing human-level tasks overnight." }
    ],
    methodology: [
      { step: "01", name: "Data Indexing", desc: "We securely vector-index your company's knowledge base." },
      { step: "02", name: "Agent Prompting", desc: "We engineer strict system prompts and reasoning loops." },
      { step: "03", name: "Guardrail Testing", desc: "Rigorous testing to ensure accurate, hallucination-free outputs." }
    ],
    workflowImage: "/images/workflows/ai.png"
  },
  is: {
    title: "Information Security",
    desc: "ISO 27001 consulting and ISMS implementation built with a secure-by-design philosophy.",
    icon: <ShieldCheck weight="fill" size={32} />,
    color: "bg-emerald-50",
    textColor: "text-emerald-600",
    image: "/images/services/is.png",
    problem: "A single data breach can cripple a business, yet most companies rely on reactive patching rather than foundational security.",
    solution: "We implement rigorous ISO 27001 ISMS frameworks, embedding a 'secure-by-design' philosophy into every layer of your digital infrastructure.",
    deliverables: ["ISO 27001 Implementation", "Gap Analysis & Audit", "ISMS Policy Development", "Continuous Monitoring"],
    benefits: [
      { title: "Enterprise Trust", desc: "Win large enterprise contracts with certified security." },
      { title: "Proactive Defense", desc: "Identify vulnerabilities before they are exploited." },
      { title: "Regulatory Peace", desc: "Stay ahead of all global security compliances." }
    ],
    methodology: [
      { step: "01", name: "Gap Analysis", desc: "We audit your current infrastructure against ISO standards." },
      { step: "02", name: "Policy Creation", desc: "We write and implement strict Information Security policies." },
      { step: "03", name: "Certification Prep", desc: "We guide your team through the final external audit." }
    ],
    workflowImage: "/images/workflows/is.png"
  },
  comp: {
    title: "Compliance",
    desc: "End-to-end DPDPA implementation, consent management, and data privacy governance.",
    icon: <Stack weight="fill" size={32} />,
    color: "bg-amber-50",
    textColor: "text-amber-600",
    image: "/images/services/comp.png",
    problem: "Rapidly changing data privacy laws expose organizations to massive regulatory fines and critical loss of customer trust.",
    solution: "We engineer robust consent management and data governance systems that automatically keep you compliant without sacrificing user experience.",
    deliverables: ["DPDPA Frameworks", "Consent Management UI", "Data Privacy Mapping", "Regulatory Reporting Tools"],
    benefits: [
      { title: "Zero Liability", desc: "Eliminate the risk of massive regulatory fines." },
      { title: "Customer Trust", desc: "Show users exactly how their data is protected." },
      { title: "Automated Audits", desc: "Generate compliance reports with a single click." }
    ],
    methodology: [
      { step: "01", name: "Data Mapping", desc: "We trace exactly where user data flows in your systems." },
      { step: "02", name: "Consent UI", desc: "We build beautiful, frictionless consent popups." },
      { step: "03", name: "Data Deletion", desc: "We implement automated 'Right to be Forgotten' pipelines." }
    ],
    workflowImage: "/images/workflows/comp.png"
  },
  gr: {
    title: "Governance & Risk",
    desc: "Comprehensive risk assessments and governance frameworks for enterprise assurance.",
    icon: <Bank weight="fill" size={32} />,
    color: "bg-slate-100",
    textColor: "text-slate-700",
    image: "/images/services/gr.png",
    problem: "Unmanaged IT risks and poor governance structures leave enterprises entirely blind to impending systemic failures.",
    solution: "We conduct exhaustive risk assessments and establish bulletproof governance frameworks to ensure enterprise-grade assurance and continuity.",
    deliverables: ["IT Risk Assessments", "Governance Frameworks", "Business Continuity Plans", "Disaster Recovery"],
    benefits: [
      { title: "Risk Visibility", desc: "Complete dashboard of all potential IT risks." },
      { title: "Disaster Recovery", desc: "Guaranteed uptime and backup strategies." },
      { title: "Board Assurance", desc: "Provide stakeholders with certified risk reports." }
    ],
    methodology: [
      { step: "01", name: "Risk Profiling", desc: "We identify all critical assets and potential threats." },
      { step: "02", name: "Framework Setup", desc: "We establish strong internal controls and access management." },
      { step: "03", name: "Continuity Drills", desc: "We run simulated disaster recovery scenarios." }
    ],
    workflowImage: "/images/workflows/gr.png"
  },
  web: {
    title: "Web Applications",
    desc: "Fast, beautiful, and highly-optimized websites. We use modern frameworks to deliver sub-second load times.",
    icon: <Desktop weight="fill" size={32} />,
    color: "bg-cyan-50",
    textColor: "text-cyan-600",
    image: "/images/services/web.png",
    problem: "Slow, templated websites bleed conversions, frustrate users, and fail to represent the premium quality of your brand.",
    solution: "We engineer lightning-fast, highly interactive web applications using modern frameworks designed for sub-second loads and maximum conversion.",
    deliverables: ["High-Performance Web Apps", "E-Commerce Platforms", "SaaS Dashboards", "SEO Optimized Architecture"],
    benefits: [
      { title: "Sub-second Loads", desc: "Instant page transitions that keep users engaged." },
      { title: "High Conversion", desc: "UX designed specifically to drive action." },
      { title: "Flawless SEO", desc: "Server-side rendering for perfect Google rankings." }
    ],
    methodology: [
      { step: "01", name: "UX Wireframing", desc: "We design the user journey for maximum conversion." },
      { step: "02", name: "Frontend Dev", desc: "We build the UI using highly optimized React/Next.js." },
      { step: "03", name: "Performance Audit", desc: "We aggressively optimize images, fonts, and scripts." }
    ],
    workflowImage: "/images/workflows/web.png"
  },
  mobile: {
    title: "Mobile Applications",
    desc: "Build your own branded mobile app for a premium experience right on their phones. Native performance with elegant UI.",
    icon: <DeviceMobile weight="fill" size={32} />,
    color: "bg-rose-50",
    textColor: "text-rose-600",
    image: "/images/services/mobile.png",
    problem: "Clunky, slow mobile experiences frustrate users and damage brand perception in a strictly mobile-first world.",
    solution: "We develop native-grade, fluid mobile applications that put your brand directly in your customers' pockets with an elegant, frictionless UI.",
    deliverables: ["iOS Native Apps", "Android Native Apps", "Cross-Platform React Native", "App Store Deployment"],
    benefits: [
      { title: "Native Fluidity", desc: "60fps animations and instant touch response." },
      { title: "Push Notifications", desc: "Re-engage customers instantly via their lock screen." },
      { title: "Offline Mode", desc: "Apps that work perfectly even without internet." }
    ],
    methodology: [
      { step: "01", name: "Mobile UI/UX", desc: "We design thumb-friendly, gorgeous mobile interfaces." },
      { step: "02", name: "Native Code", desc: "We write highly performant mobile architectures." },
      { step: "03", name: "Store Launch", desc: "We handle the entire App Store and Play Store approval process." }
    ],
    workflowImage: "/images/workflows/web.png"
  },
  custom: {
    title: "Custom Software",
    desc: "Exact solutions for unique business needs. No cookie-cutter software. From logic algorithms to supply chain tools.",
    icon: <Code weight="fill" size={32} />,
    color: "bg-fuchsia-50",
    textColor: "text-fuchsia-600",
    image: "/images/services/custom.png",
    problem: "Off-the-shelf SaaS forces your business to change its operations to fit the software, killing your unique competitive advantage.",
    solution: "We write bespoke logic algorithms and proprietary software from scratch, engineered specifically to accelerate your unique business model.",
    deliverables: ["Bespoke Logic Algorithms", "Supply Chain Tools", "Legacy System Modernization", "Proprietary IP Creation"],
    benefits: [
      { title: "100% IP Ownership", desc: "You own the source code, giving your business incredible valuation." },
      { title: "Perfect Fit", desc: "Software that adapts to you, not the other way around." },
      { title: "No Subscription Fees", desc: "Stop paying massive monthly SaaS licenses." }
    ],
    methodology: [
      { step: "01", name: "Deep Discovery", desc: "We learn the intricate details of your proprietary business logic." },
      { step: "02", name: "Architecture", desc: "We design a scalable, bespoke technical foundation." },
      { step: "03", name: "Agile Sprints", desc: "We build and ship features in rapid 2-week intervals." }
    ],
    workflowImage: "/images/workflows/ai.png"
  }
};

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const service = SERVICES_DATA[id as keyof typeof SERVICES_DATA];

  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: `${service.title} | LogicWare Tech`,
    description: service.desc,
    openGraph: {
      title: `${service.title} | LogicWare Tech`,
      description: service.desc,
      url: `https://logicwaretech.com/services/${id}`,
      images: [
        {
          url: service.image,
          width: 800,
          height: 600,
          alt: service.title,
        }
      ]
    },
  };
}

export default async function ServiceLandingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = SERVICES_DATA[id as keyof typeof SERVICES_DATA];

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full bg-[#f8fafc] text-slate-900 overflow-hidden font-sans">
      
      {/* 1. EXTENDED HERO */}
      <section className="relative w-full pt-40 pb-32 px-4 sm:px-6 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Dynamic Backgrounds */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03] pointer-events-none" />
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] ${service.color.replace('bg-', 'bg-')} blur-[120px] rounded-full opacity-60 pointer-events-none -translate-y-1/3`} />
        
        <div className="max-w-5xl mx-auto w-full flex flex-col gap-6 relative z-10 items-center">
          <div className={`px-4 py-1.5 rounded-full border bg-white shadow-sm inline-flex items-center gap-2 mb-4 hover:shadow-md transition-shadow`}>
            <div className={`w-2 h-2 rounded-full ${service.textColor.replace('text-', 'bg-')} animate-pulse`} />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-600">Enterprise Capability</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#0a2540] leading-[1.1] max-w-4xl">
            {service.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto mt-4 font-medium">
            {service.desc}
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <Link href="/contact" className={`bg-[#0a2540] hover:bg-slate-800 text-white px-8 py-4 rounded-full text-lg transition-all items-center justify-center gap-2 font-bold shadow-xl hover:-translate-y-1 inline-flex`}>
              Schedule Architecture Call <ArrowRight weight="bold" />
            </Link>
            <Link href="#overview" className="px-8 py-4 rounded-full text-lg font-bold text-slate-600 hover:text-[#0a2540] transition-colors">
              Read the methodology ↓
            </Link>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM VS SOLUTION */}
      <section id="overview" className="w-full py-24 px-4 sm:px-6 bg-white border-y border-slate-200/60 relative">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Problem */}
          <div className="bg-rose-50/50 border border-rose-100 rounded-3xl p-10 lg:p-12 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <XCircle weight="fill" size={32} className="text-rose-500" />
              <h3 className="text-2xl font-bold text-slate-800">The Cost of Inefficiency</h3>
            </div>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              {service.problem}
            </p>
          </div>

          {/* Solution */}
          <div className={`${service.color} border border-white rounded-3xl p-10 lg:p-12 relative overflow-hidden shadow-[0_20px_50px_-15px_rgba(15,23,42,0.06)] transform md:scale-110 z-10`}>
            <div className="absolute top-0 right-0 bg-white/50 text-[#0a2540] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-xl rounded-tr-[1.3rem]">
              The Logicware Solution
            </div>
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle weight="fill" size={32} className={service.textColor} />
              <h3 className="text-2xl font-bold text-[#0a2540]">Engineering Excellence</h3>
            </div>
            <p className="text-lg text-slate-700 font-medium leading-relaxed">
              {service.solution}
            </p>
          </div>

        </div>
      </section>

      {/* 3. VISUAL OVERVIEW & DELIVERABLES (Bento) */}
      <section className="w-full py-24 bg-[#f8fafc] relative">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3">Core Deliverables</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#0a2540] tracking-tight">Everything you need to scale.</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Main Visual Card */}
            <div className="lg:col-span-8 bg-white rounded-[2.5rem] border border-slate-200/60 shadow-sm overflow-hidden flex flex-col sm:flex-row relative group">
              <div className="w-full sm:w-1/2 min-h-[300px] bg-slate-50 relative overflow-hidden">
                <Image 
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="w-full sm:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className={`w-14 h-14 rounded-2xl ${service.color} ${service.textColor} flex items-center justify-center mb-6 border border-slate-100`}>
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold text-[#0a2540] mb-6">Included Features</h4>
                <div className="flex flex-col gap-4">
                  {service.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle weight="fill" className={`${service.textColor} shrink-0`} size={20} />
                      <span className="text-slate-700 font-bold text-sm md:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Benefits Stack */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="bg-white rounded-[2rem] border border-slate-200/60 p-8 shadow-sm flex-1 flex flex-col justify-center hover:-translate-y-1 transition-transform">
                  <h5 className={`text-lg font-bold ${service.textColor} mb-2`}>{benefit.title}</h5>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
      
      {/* 3.5 OPTIONAL: WORKFLOW / ARCHITECTURE IMAGE */}
      {/* @ts-ignore - workflowImage is optional on the service object */}
      {service.workflowImage && (
        <section className="w-full py-24 bg-white border-t border-slate-200/60">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3">System Architecture</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[#0a2540] tracking-tight">Example Workflow & Integrations</h3>
            </div>
            
            <div className="w-full bg-slate-50 rounded-[2.5rem] border border-slate-200/60 p-4 md:p-8 shadow-sm">
              <div className="w-full relative rounded-[2rem] overflow-hidden bg-white border border-slate-100 shadow-[0_10px_40px_-10px_rgba(15,23,42,0.08)] flex items-center justify-center min-h-[400px] md:min-h-[600px]">
                <Image 
                  // @ts-ignore
                  src={service.workflowImage}
                  alt={`${service.title} Workflow Architecture`}
                  fill
                  className="object-contain p-4 md:p-8"
                />
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* 4. IMPLEMENTATION METHODOLOGY */}
      <section className="w-full py-24 bg-white border-y border-slate-200/60">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3">Implementation</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#0a2540] tracking-tight">Structured for success.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-[40px] right-[40px] h-0.5 bg-slate-100 z-0" />
            
            {service.methodology.map((step, i) => (
              <div key={i} className="relative z-10 bg-white flex flex-col group pt-4">
                <div className={`w-16 h-16 rounded-full bg-white border-4 border-slate-50 shadow-sm flex items-center justify-center text-xl font-bold ${service.textColor} mb-6 group-hover:scale-110 transition-transform`}>
                  {step.step}
                </div>
                <h4 className="text-xl font-bold text-[#0a2540] mb-3">{step.name}</h4>
                <p className="text-slate-500 font-medium leading-relaxed pr-4">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY LOGICWARE (Global Trust Marker) */}
      <section className="w-full py-24 bg-[#0a2540] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-3">The Logicware Advantage</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Not just an agency.<br/>An engineering partner.</h3>
            <p className="text-lg text-slate-300 font-medium leading-relaxed mb-8">
              We don't just patch together off-the-shelf tools. Logicware operates as a high-end engineering firm, embedding security, scalability, and robust architecture directly into your enterprise from day one.
            </p>
            <ul className="flex flex-col gap-4">
              {["100% IP Ownership Guarantee", "ISO 27001 Secure-by-Design Process", "SLA-Backed Performance", "Test-Driven Agile Delivery"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle weight="fill" className="text-blue-400" size={24} />
                  <span className="font-semibold text-slate-100">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 shadow-2xl flex flex-col gap-8">
               <div className="flex items-center gap-6">
                 <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                   <ChartLineUp size={32} />
                 </div>
                 <div>
                   <h4 className="text-2xl font-bold text-white mb-1">99.9% Uptime</h4>
                   <p className="text-sm font-medium text-slate-400">Enterprise-grade reliability.</p>
                 </div>
               </div>
               <div className="w-full h-px bg-white/10" />
               <div className="flex items-center gap-6">
                 <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                   <Code size={32} />
                 </div>
                 <div>
                   <h4 className="text-2xl font-bold text-white mb-1">Zero Tech Debt</h4>
                   <p className="text-sm font-medium text-slate-400">Clean architecture built for scale.</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="w-full py-32 bg-[#f8fafc] text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0a2540] mb-6 tracking-tight">Ready to architect your solution?</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 font-medium">Schedule a technical discovery call with our engineering leadership to scope out your requirements.</p>
        <Link href="/contact" className="bg-[#84b5fd] hover:bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-lg transition-transform hover:-translate-y-1 flex mx-auto w-max items-center justify-center gap-3 shadow-[0_10px_25px_-5px_rgba(132,181,253,0.4)]">
          Schedule Discovery Call <ArrowRight weight="bold" />
        </Link>
      </section>

    </div>
  );
}
