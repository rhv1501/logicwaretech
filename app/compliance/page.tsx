"use client";

import { motion } from "framer-motion";
import { ShieldCheck, LockKey, ChartBar, GlobeHemisphereWest, CheckCircle, CheckSquareOffset, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import Image from "next/image";

// Part 1: Pillars
const PILLARS = [
  {
    id: "core-credential",
    title: "PILLAR 01 — CORE CREDENTIAL",
    headline: "Audit-Ready. Enterprise-Approved. Win Global Trust.",
    desc: "End-to-end ISO/IEC 27001 implementation, gap assessment, and pre-certification auditing led by a certified Lead Auditor. Don't let compliance bottlenecks stall your sales cycle. We systematically design, implement, and audit your Information Security Management System (ISMS) from the ground up. Get zero-friction guidance through your Stage 1 and Stage 2 registrar audits and unlock enterprise-level revenue.",
    tags: ["Certified ISO 27001 Lead Auditor", "Gap Analysis", "Internal Audits", "Annex A Controls Optimization"],
    icon: <ShieldCheck weight="fill" size={24} />
  },
  {
    id: "data-privacy",
    title: "PILLAR 02 — DATA PRIVACY",
    headline: "Master DPDPA Compliance Without Operational Friction.",
    desc: "Bulletproof your data protection framework and shield your business from severe regulatory penalties. Compliance with the Digital Personal Data Protection Act (DPDPA) requires more than just updated privacy policies. We map your data flows, build robust consent architectures, conduct Data Protection Impact Assessments (DPIAs), and establish the mandatory technical measures to safeguard Principal rights seamlessly.",
    tags: ["DPDPA Framework Design", "Data Flow Mapping", "Data Fiduciary Advisory", "Privacy Impact Assessments"],
    icon: <LockKey weight="fill" size={24} />
  },
  {
    id: "operational-risk",
    title: "PILLAR 03 — OPERATIONAL RISK",
    headline: "Quantify Your IT Risk. Validate Your Controls.",
    desc: "Independent risk profiling and rigorous controls assurance testing built to protect your bottom line. Security is only as strong as your weakest operating control. We translate technical vulnerabilities into structured business risk registers, design ironclad remediation plans, and independently test the operational effectiveness (O&E) of your defenses so you can confidently assure stakeholders and external auditors.",
    tags: ["Design Effectiveness (D&E) Testing", "Operational Effectiveness (O&E)", "Vendor Risk Management", "Executive Risk Reporting"],
    icon: <ChartBar weight="fill" size={24} />
  },
  {
    id: "global-regulatory",
    title: "PILLAR 04 — GLOBAL REGULATORY",
    headline: "Frictionless Global Compliance for Scale-Ups.",
    desc: "Cross-border regulatory alignment spanning GDPR, HIPAA, NIST, PCI-DSS, and the Cloud Control Matrix (CCM). Expanding internationally shouldn't mean drowning in complex, fragmented legal frameworks. We build a unified, multi-framework compliance map that satisfies strict European privacy (GDPR), US healthcare requirements (HIPAA), federal security baselines (NIST), payment processing standards (PCI-DSS), and cloud governance matrices (CCM) simultaneously.",
    tags: ["Cross-Framework Mapping", "CSA Cloud Control Matrix", "Cross-Border Data Privacy", "Multi-Regulation Alignment"],
    icon: <GlobeHemisphereWest weight="fill" size={24} />
  }
];

// Part 2: Services
const SERVICES = [
  {
    id: "iso-27001",
    title: "ISO 27001 Readiness & Audit Support",
    desc: "Build a world-class Information Security Management System (ISMS) engineered for global trust.",
    icon: <ShieldCheck weight="duotone" size={48} />,
    color: "bg-pastel-blue",
    textColor: "text-[#4F46E5]",
    points: [
      { title: "Gap Assessment", text: "A comprehensive analysis of your existing security posture against the ISO/IEC 27001 standard." },
      { title: "ISMS Design & Implementation", text: "Hands-on assistance creating policies, procedures, and asset registers aligned with Annex A controls." },
      { title: "Internal Audit Execution", text: "Leveraging certified ISO 27001 Lead Auditor expertise to run rigorous, independent pre-assessment audits." },
      { title: "Certification Support", text: "On-site guidance through Stage 1 and Stage 2 registrar audits to guarantee clear, successful certification." }
    ]
  },
  {
    id: "dpdpa-compliance",
    title: "DPDPA Compliance & Data Privacy Architecture",
    desc: "Align your business with the Digital Personal Data Protection Act (DPDPA) mandates to safeguard privacy and avoid penalties.",
    icon: <LockKey weight="duotone" size={48} />,
    color: "bg-pastel-purple",
    textColor: "text-[#9333EA]",
    points: [
      { title: "Data Flow Mapping", text: "Full-scope discovery to identify exactly how personal data is collected, processed, and stored across your ecosystem." },
      { title: "Compliance Framework Design", text: "Implementation of technical and organizational measures to satisfy Data Fiduciary requirements." },
      { title: "Consent & Notice Architecture", text: "Strategic development of compliant data protection notices and workflow mechanisms for principal rights." },
      { title: "Data Protection Impact Assessments (DPIA)", text: "Objective risk evaluations for high-risk data operations to ensure proactive regulatory alignment." }
    ]
  },
  {
    id: "it-risk-management",
    title: "IT Risk Management & Governance",
    desc: "Transform chaotic vulnerabilities into structured, predictable corporate risk registers.",
    icon: <ChartBar weight="duotone" size={48} />,
    color: "bg-pastel-mint",
    textColor: "text-[#059669]",
    points: [
      { title: "Risk Identification & Profiling", text: "Deep dives into your technical stack, vendor dependencies, and human processes to flag hidden exposures." },
      { title: "Risk Quantitative Analysis", text: "Evaluating the business and financial impact of identified security risks to help leadership prioritize budgets effectively." },
      { title: "Risk Treatment Planning", text: "Designing realistic, business-centric remediation strategies (Accept, Mitigate, Transfer, or Avoid)." },
      { title: "Executive & Board Reporting", text: "Translating complex technical risk indicators into clear, business-fluent dashboards for stakeholders." }
    ]
  },
  {
    id: "controls-assurance",
    title: "Controls Assurance & Independent Verification",
    desc: "Validate the actual effectiveness of your defense layers and confidently assure your enterprise clients.",
    icon: <CheckSquareOffset weight="duotone" size={48} />,
    color: "bg-pastel-peach",
    textColor: "text-[#EA580C]",
    points: [
      { title: "Control Design Effectiveness (D&E)", text: "Ensuring your existing security policies and controls are robustly engineered to meet their intended goals." },
      { title: "Operating Effectiveness (O&E) Testing", text: "Rigorously validating that your controls perform reliably in real-world, day-to-day operations." },
      { title: "Third-Party Vendor Risk Assurance", text: "Standardizing and executing third-party risk assessments on critical SaaS and supply chain partners." },
      { title: "Client Security Questionnaire Support", text: "Helping you win enterprise deals by rapidly completing rigorous incoming security and assurance RFPs." }
    ]
  }
];

export default function CompliancePage() {
  return (
    <div className="flex flex-col w-full bg-white text-slate-800 overflow-hidden font-sans">
      
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
            Audit-Ready. Enterprise-Approved. <br/>
            <span className="text-gradient-corporate">Win Global Trust.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mt-4"
          >
            We systematically design, implement, and audit your Information Security Management System (ISMS) from the ground up, unblocking your sales cycles and ensuring regulatory alignment.
          </motion.p>
        </div>
      </section>

      {/* 2. PILLARS (HERO FRAMEWORKS) */}
      <section className="w-full py-24 bg-white relative border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Strategic Foundations</h2>
            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Multi-Pillar Security Framework</h3>
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
      <section className="w-full py-24 bg-slate-50 relative">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Core Services Breakdown</h2>
            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Engineered for Global Assurance</h3>
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
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Key Deliverables</h3>
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
      <section className="w-full py-24 bg-white text-center px-6 border-t border-slate-100">
        <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Ready for Certification?</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">Don't let compliance bottlenecks stall your growth. Schedule an architectural audit today.</p>
        <Link href="/contact" className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-transform hover:scale-105 flex mx-auto w-max items-center justify-center gap-2 shadow-pastel-soft">
          Start Your Assessment <ArrowRight weight="bold" />
        </Link>
      </section>

    </div>
  );
}
