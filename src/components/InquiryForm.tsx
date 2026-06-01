"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({ name: z.string().min(2), company: z.string().optional(), email: z.string().email(), phone: z.string().min(7), country: z.string().min(2), productInterest: z.string().min(2), requirement: z.string().min(10), budget: z.string().min(2), timeline: z.string().min(2) });
type FormValues = z.infer<typeof schema>;
const fields: Array<[keyof FormValues, string, string]> = [["name","Name","text"],["company","Company","text"],["email","Email","email"],["phone","Phone","tel"],["country","Country","text"],["productInterest","Product Interest","text"],["budget","Budget Range","text"],["timeline","Timeline","text"]];

export function InquiryForm({ interest = "Custom project" }: { interest?: string }) {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: { productInterest: interest } });
  async function onSubmit(data: FormValues) { const res = await fetch("/api/contact", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(data) }); if (!res.ok) throw new Error("Unable to submit inquiry"); reset({ productInterest: interest } as Partial<FormValues>); }
  return <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-3xl p-6"><div className="grid gap-4 sm:grid-cols-2">{fields.map(([name,label,type])=><label key={name} className="text-sm text-slate-700">{label}<input type={type} {...register(name)} className="mt-2 w-full rounded-2xl border-cyan-700/10 bg-cyan-50/70 text-slate-950 focus:border-primary focus:ring-primary" />{errors[name] && <span className="text-xs text-red-300">Required valid value</span>}</label>)}</div><label className="mt-4 block text-sm text-slate-700">Project Requirement<textarea {...register("requirement")} rows={5} className="mt-2 w-full rounded-2xl border-cyan-700/10 bg-cyan-50/70 text-slate-950 focus:border-primary focus:ring-primary" />{errors.requirement && <span className="text-xs text-red-300">Tell us at least 10 characters.</span>}</label><button disabled={isSubmitting} className="mt-5 rounded-full bg-primary px-7 py-3 font-bold text-slate-950 transition hover:bg-accent disabled:opacity-60">{isSubmitting ? "Sending..." : "Send Inquiry"}</button>{isSubmitSuccessful && <p className="mt-3 text-sm text-emerald-300">Inquiry received. Our team will contact you shortly.</p>}</form>;
}
