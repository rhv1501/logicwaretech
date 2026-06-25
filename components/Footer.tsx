import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#141624] py-24 px-6 text-white border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />
      
      <div className="mx-auto max-w-[1400px] flex flex-col gap-20 md:flex-row md:justify-between relative z-10">
        <div className="flex flex-col gap-8 max-w-sm">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image src="/logo.png" alt="LogicWare Tech" width={180} height={180} className="w-28 md:w-36 h-auto object-contain brightness-0 invert" />
          </Link>
          <p className="text-white/50 text-lg leading-relaxed mt-4">
            Pioneering the future of business operations through AI-driven automation, ERP modules, and bespoke digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 md:gap-24">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-white/40">Platform</span>
            <Link href="/" className="text-base font-medium hover:text-primary text-white/80 transition-colors">Home</Link>
            <Link href="/about" className="text-base font-medium hover:text-primary text-white/80 transition-colors">About Us</Link>
            <Link href="/services" className="text-base font-medium hover:text-primary text-white/80 transition-colors">Services</Link>
            <Link href="/contact" className="text-base font-medium hover:text-primary text-white/80 transition-colors">Contact Us</Link>
          </div>
          <div className="flex flex-col gap-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-white/40">Legal</span>
            <Link href="#" className="text-base font-medium hover:text-primary text-white/80 transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-base font-medium hover:text-primary text-white/80 transition-colors">Terms of Service</Link>
          </div>
          <div className="flex flex-col gap-6 col-span-2 sm:col-span-1">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-white/40">Connect</span>
            <a href="#" className="group flex w-max items-center gap-4 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold tracking-widest uppercase transition-all hover:bg-primary hover:border-primary">
              LinkedIn
              <ArrowUpRight className="text-white/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" weight="bold" />
            </a>
            <a href="#" className="group flex w-max items-center gap-4 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold tracking-widest uppercase transition-all hover:bg-[#a855f7] hover:border-[#a855f7]">
              Twitter
              <ArrowUpRight className="text-white/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" weight="bold" />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1400px] mt-32 flex items-center justify-between border-t border-white/10 pt-8 text-sm font-mono text-white/40 relative z-10">
        <p>© {new Date().getFullYear()} LogicWare Technology.</p>
        <p>Zero friction architecture.</p>
      </div>
    </footer>
  );
}
