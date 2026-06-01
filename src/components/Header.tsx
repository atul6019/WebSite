"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Cpu } from "lucide-react";
import { navigation, site } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-cyan-700/10 bg-white/90 backdrop-blur-xl">
      <nav className="container-pad flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 font-bold tracking-tight text-slate-950">
          <span className="grid size-11 place-items-center rounded-2xl bg-cyan-100 text-accent ring-1 ring-cyan-300/30"><Cpu /></span>
          <span><span className="block text-lg">{site.name}</span><span className="block text-xs font-medium uppercase tracking-[0.22em] text-cyan-700/70">Industrial Tech</span></span>
        </Link>
        <button aria-label="Toggle menu" className="rounded-xl border border-cyan-700/20 p-2 text-cyan-800 xl:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        <div className="hidden items-center gap-1 xl:flex">
          {navigation.map((item) => <Link key={item.href} href={item.href} className="rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-cyan-100/80 hover:text-slate-950">{item.label}</Link>)}
        </div>
      </nav>
      {open && <div className="container-pad grid gap-2 pb-6 xl:hidden">{navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl border border-cyan-700/10 bg-white/85 px-4 py-3 text-slate-800">{item.label}</Link>)}</div>}
    </header>
  );
}
