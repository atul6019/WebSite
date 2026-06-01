import { ServiceCard } from "@/components/Cards";
import { SectionHeader } from "@/components/SectionHeader";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("Services", "IoT product development, embedded firmware, PCB design, robotics, AI vision, CNC, automation, and manufacturing support.", "/services");
export default function ServicesPage(){return <main className="container-pad py-20"><SectionHeader kicker="Services" title="Engineering services from idea to manufacturing"/><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{services.map((s)=><ServiceCard key={s.slug} service={s}/>)}</div></main>}
