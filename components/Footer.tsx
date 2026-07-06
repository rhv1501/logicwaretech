import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white py-24 px-6 relative overflow-hidden border-t border-slate-100">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pastel-blue blur-[150px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2 opacity-50" />
      
      <div className="mx-auto max-w-[1200px] flex flex-col gap-16 md:flex-row md:justify-between relative z-10">
        <div className="flex flex-col gap-8 max-w-sm">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image src="/logo.png" alt="LogicWare Tech" width={180} height={180} className="w-28 md:w-36 h-auto object-contain" />
          </Link>
          <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-sm mt-6">
            Pioneering the future of business operations through custom AI integrations, ERP modules, and enterprise web applications.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-12 md:gap-24">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Platform</span>
            <Link href="/" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">Home</Link>
            <Link href="/about" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">About Us</Link>
            <Link href="/services" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">Services</Link>
            <Link href="/contact" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">Contact Us</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Legal</span>
            <Link href="#" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1200px] mt-24 flex flex-col md:flex-row items-center justify-between border-t border-slate-100 pt-8 text-xs font-bold uppercase tracking-widest text-slate-400 gap-4">
        <p>© {new Date().getFullYear()} LogicWare Technology.</p>
        <p>Intelligent Automation.</p>
      </div>
    </footer>
  );
}
