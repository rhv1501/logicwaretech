"use client";

import { motion } from "framer-motion";
import { ShieldCheck, LockKey, ChartBar, GlobeHemisphereWest, CheckCircle, CheckSquareOffset, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import Image from "next/image";

// Part 1: Pillars
const PILLARS = [
  {
    id: "core-credential",
    title: "Global Security Standards",
    headline: "Protect Your Business & Win Bigger Clients.",
    desc: "We help you get certified in ISO 27001 and secure your company's data, so you can easily pass security checks and close deals faster without the stress.",
    tags: ["ISO 27001 Certification", "Security Audits", "Data Protection"],
    icon: <ShieldCheck weight="fill" size={24} />
  },
  {
    id: "data-privacy",
    title: "Complete Data Privacy",
    headline: "Follow Privacy Laws Without the Headache.",
    desc: "We make sure you collect and store customer data safely, following all modern privacy laws so you can avoid heavy fines and keep your customers' trust.",
    tags: ["Privacy Policies", "Customer Consent", "Data Safety"],
    icon: <LockKey weight="fill" size={24} />
  },
  {
    id: "operational-risk",
    title: "Business Protection",
    headline: "Find and Fix Security Weaknesses.",
    desc: "We act like ethical hackers to find weaknesses in your software and operations before real hackers do, providing you with a clear plan to fix them.",
    tags: ["Security Testing", "Risk Assessments", "Vendor Checks"],
    icon: <ChartBar weight="fill" size={24} />
  },
  {
    id: "global-regulatory",
    title: "Global Compliance",
    headline: "Grow Internationally with Confidence.",
    desc: "If you want to sell in Europe or handle sensitive health and payment data, we'll build a simple roadmap so you meet all the strict rules seamlessly.",
    tags: ["GDPR (Europe)", "HIPAA (Health)", "Secure Payments"],
    icon: <GlobeHemisphereWest weight="fill" size={24} />
  }
];

// Part 2: Services
const SERVICES = [
  {
    id: "iso-27001",
    title: "ISO 27001 Certification Help",
    desc: "We guide you step-by-step to achieve global security certification.",
    icon: <ShieldCheck weight="duotone" size={48} />,
    color: "bg-pastel-blue",
    textColor: "text-[#4F46E5]",
    points: [
      { title: "Security Checkup", text: "We look at your current setup to see exactly what you need to meet the standard." },
      { title: "Building Your Plan", text: "We help write your security policies and organize your data safely." },
      { title: "Practice Audits", text: "We run practice tests to ensure you're fully prepared for the real thing." },
      { title: "Final Certification", text: "We stand by you during the official review to guarantee success." }
    ]
  },
  {
    id: "dpdpa-compliance",
    title: "Data Privacy Setup",
    desc: "Ensure you handle customer data legally and safely without slowing down your business.",
    icon: <LockKey weight="duotone" size={48} />,
    color: "bg-pastel-purple",
    textColor: "text-[#9333EA]",
    points: [
      { title: "Finding Your Data", text: "We track exactly where your customer information goes." },
      { title: "Setting Up Rules", text: "We put systems in place to keep that data private and secure." },
      { title: "Clear Privacy Policies", text: "We write clear rules so your customers know their data is safe." },
      { title: "Risk Checks", text: "We regularly check for new risks to keep you ahead of the curve." }
    ]
  },
  {
    id: "it-risk-management",
    title: "Risk Management",
    desc: "Turn security worries into clear, manageable action plans for your team.",
    icon: <ChartBar weight="duotone" size={48} />,
    color: "bg-pastel-mint",
    textColor: "text-[#059669]",
    points: [
      { title: "Finding Weak Spots", text: "We look deep into your technology to find hidden dangers." },
      { title: "Measuring Impact", text: "We figure out exactly how much a risk could cost your business." },
      { title: "Fixing the Problems", text: "We design realistic, affordable plans to fix or avoid those risks." },
      { title: "Clear Reports", text: "We give your leadership team clear, easy-to-read updates on your safety." }
    ]
  },
  {
    id: "controls-assurance",
    title: "Security Testing",
    desc: "Prove to your clients that your software and business are truly secure.",
    icon: <CheckSquareOffset weight="duotone" size={48} />,
    color: "bg-pastel-peach",
    textColor: "text-[#EA580C]",
    points: [
      { title: "Checking the Plan", text: "We make sure your security rules actually make sense and work." },
      { title: "Testing the Reality", text: "We test if those rules are actually being followed day-to-day." },
      { title: "Checking Partners", text: "We make sure the other companies you work with are also secure." },
      { title: "Winning Deals", text: "We help you quickly fill out security questionnaires to win big contracts." }
    ]
  }
];

export default function CompliancePage() {
  return (
    <div className="flex flex-col w-full bg-transparent text-slate-800 overflow-hidden font-sans">
      
      {/* 1. HERO */}
      <section className="relative w-full pt-40 pb-24 px-6 flex flex-col items-center justify-center text-center border-b border-slate-100 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-100 blur-[120px] rounded-full opacity-50 pointer-events-none" />
        
        <div className="max-w-[1000px] mx-auto w-full flex flex-col gap-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="px-4 py-1.5 bg-white rounded-full border border-slate-200 inline-flex mx-auto items-center gap-2 mb-4 shadow-sm"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Security & Compliance</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]"
          >
            Protect Your Business. <br/>
            <span className="text-gradient-corporate">Win Bigger Clients.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mt-4"
          >
            We help you get certified in ISO 27001, protect your customer data, and prove your security to big clients—without the technical headaches.
          </motion.p>
        </div>
      </section>

      {/* 2. PILLARS (HERO FRAMEWORKS) */}
      <section className="w-full py-24 bg-transparent relative border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Our Core Pillars</h2>
            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">How We Keep You Safe</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PILLARS.map((pillar, idx) => (
              <motion.div 
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-50 border border-slate-100 p-8 md:p-10 rounded-3xl flex flex-col hover:border-slate-300 transition-colors shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-slate-400">
                    {pillar.icon}
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">{pillar.title}</h4>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-4">{pillar.headline}</h3>
                <p className="text-slate-600 leading-relaxed mb-8 flex-1">{pillar.desc}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-200">
                  {pillar.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-semibold text-slate-700 shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES BREAKDOWN (GRID) */}
      <section className="w-full py-24 bg-transparent relative">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">What We Do For You</h2>
            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Security Made Simple</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-sm hover:shadow-pastel-float transition-shadow duration-500 flex flex-col"
              >
                <div className={`w-20 h-20 rounded-[1.5rem] ${service.color} ${service.textColor} flex items-center justify-center mb-8`}>
                  {service.icon}
                </div>
                <h2 className="text-3xl font-bold text-slate-900 leading-tight mb-4">{service.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">{service.desc}</p>
                
                <div className="w-full pt-6 border-t border-slate-100 mt-auto">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">What You Get</h3>
                  <div className="flex flex-col gap-5">
                    {service.points.map((point, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <CheckCircle weight="fill" className={`${service.textColor} shrink-0 mt-1`} size={20} />
                        <div>
                          <strong className="text-slate-900 block mb-1">{point.title}</strong>
                          <span className="text-slate-600 text-sm leading-relaxed">{point.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="w-full py-24 bg-transparent text-center px-6 border-t border-slate-100">
        <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Ready to Secure Your Business?</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">Don't let security checks slow down your sales. Let's get you certified and protected.</p>
        <Link href="/contact" className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-transform hover:scale-105 flex mx-auto w-max items-center justify-center gap-2 shadow-pastel-soft">
          Get a Free Security Check <ArrowRight weight="bold" />
        </Link>
      </section>

    </div>
  );
}
