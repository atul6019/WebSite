import { ProductCard } from "@/components/Cards";
import { SectionHeader } from "@/components/SectionHeader";
import { products } from "@/data/products";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("Products", "Industrial IoT gateways, relay boards, smart switches, and environmental controllers.", "/products");
export default function ProductsPage(){return <main className="container-pad py-20"><SectionHeader kicker="Products" title="Production-ready product catalog" description="Explore smart switches, relay controllers, environmental monitoring devices, and industrial gateways."/><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{products.map((p)=><ProductCard key={p.slug} product={p}/>)}</div></main>}
