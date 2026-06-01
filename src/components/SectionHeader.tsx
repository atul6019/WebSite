export function SectionHeader({ kicker, title, description }: { kicker: string; title: string; description?: string }) {
  return <div className="mx-auto mb-12 max-w-3xl text-center"><span className="section-kicker">{kicker}</span><h2 className="section-title">{title}</h2>{description && <p className="mt-5 text-lg text-slate-300">{description}</p>}</div>;
}
