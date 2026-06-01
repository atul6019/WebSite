import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Product, Service } from "@/types/content";

export function ProductCard({ product }: { product: Product }) {
  return <Link href={`/products/${product.slug}`} className="tech-card group block"><Image src={product.image} alt={product.name} width={600} height={400} loading="lazy" className="mb-5 h-52 w-full rounded-2xl object-cover"/><h3 className="text-xl font-bold text-slate-950">{product.name}</h3><p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{product.description}</p><div className="mt-5 flex flex-wrap gap-2">{product.features.slice(0,3).map((f)=><span key={f} className="rounded-full bg-cyan-100/80 px-3 py-1 text-xs text-cyan-800">{f}</span>)}</div><span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-accent">View details <ArrowRight size={16} className="transition group-hover:translate-x-1"/></span></Link>;
}

export function ServiceCard({ service }: { service: Service }) {
  return <Link href={`/services/${service.slug}`} className="tech-card group block"><Image src={service.image} alt={service.title} width={600} height={400} loading="lazy" className="mb-5 h-48 w-full rounded-2xl object-cover"/><h3 className="text-xl font-bold text-slate-950">{service.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p><ul className="mt-5 space-y-2">{service.benefits.slice(0,2).map((b)=><li className="flex gap-2 text-sm text-slate-700" key={b}><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent"/>{b}</li>)}</ul></Link>;
}
