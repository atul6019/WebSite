import { SectionHeader } from "@/components/SectionHeader";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("Blog", "Technical articles and engineering notes", "/blog");
const items = ['STM32', 'ESP32', 'IoT', 'Robotics', 'AI Vision', 'Industrial Automation'];
export default function Page(){return <main className="container-pad py-20"><SectionHeader kicker="Blog" title="Technical articles and engineering notes" description="Utkranti Yantra provides practical, production-oriented resources and systems for industrial teams."/><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{items.map((item,index)=><article className="tech-card" key={item}><span className="text-4xl font-black text-accent">{String(index+1).padStart(2,"0")}</span><h2 className="mt-5 text-2xl font-bold text-slate-950">{item}</h2><p className="mt-3 text-slate-600">Production-ready guidance, architecture, assets, and support for {item.toLowerCase()}.</p></article>)}</div></main>}
