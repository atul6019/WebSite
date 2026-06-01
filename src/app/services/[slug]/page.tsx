import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/seo";
export function generateStaticParams(){return services.map((s)=>({slug:s.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params; const s=services.find((x)=>x.slug===slug); return pageMetadata(s?.title??"Service", s?.description, `/services/${slug}`);}
export default async function ServiceDetail({params}:{params:Promise<{slug:string}>}){const {slug}=await params; const s=services.find((x)=>x.slug===slug); if(!s) notFound(); return <main className="container-pad py-20"><div className="grid gap-10 lg:grid-cols-2"><Image src={s.image} alt={s.title} width={1200} height={800} priority className="rounded-[2rem] border border-cyan-700/20 shadow-glow"/><div><span className="section-kicker">Service</span><h1 className="text-4xl font-black text-slate-950 sm:text-6xl">{s.title}</h1><p className="mt-5 text-lg leading-8 text-slate-700">{s.description}</p><h2 className="mt-8 text-2xl font-bold">Technology stack</h2><div className="mt-4 flex flex-wrap gap-2">{s.stack.map((x)=><span className="rounded-full bg-cyan-100/80 px-4 py-2 text-cyan-800" key={x}>{x}</span>)}</div><h2 className="mt-8 text-2xl font-bold">Benefits</h2><ul className="mt-4 space-y-3">{s.benefits.map((b)=><li className="flex gap-3 text-slate-700" key={b}><CheckCircle2 className="text-accent"/>{b}</li>)}</ul></div></div><section className="mt-16"><InquiryForm interest={s.title}/></section></main>}
