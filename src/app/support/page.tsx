import { SectionHeader } from "@/components/SectionHeader";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("Support", "Product support and service workflows", "/support");
const items = ['Ticket System UI', 'FAQ', 'Product Support', 'Firmware Downloads'];
export default function Page(){return <main className="container-pad py-20"><SectionHeader kicker="Support" title="Product support and service workflows" description="Utkranti Yantra provides practical, production-oriented resources and systems for industrial teams."/><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{items.map((item,index)=><article className="tech-card" key={item}><span className="text-4xl font-black text-accent">{String(index+1).padStart(2,"0")}</span><h2 className="mt-5 text-2xl font-bold text-slate-950">{item}</h2><p className="mt-3 text-slate-600">Production-ready guidance, architecture, assets, and support for {item.toLowerCase()}.</p></article>)}</div></main>}
