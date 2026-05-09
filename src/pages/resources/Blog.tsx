import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "lucide-react";

const articles = [
  { cat: "Compliance", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=85", title: "NI 52-109: A Plain-Language Guide for Small-Cap CEOs and CFOs", excerpt: "NI 52-109 requires your CEO and CFO to personally certify your quarterly and annual financial filings. Here's exactly what that means and how to comply without losing sleep.", date: "Mar 12, 2026", read: "8 min" },
  { cat: "SEDAR+", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=85", title: "SEDAR+ vs SEDAR: What Changed and What Public Companies Must Do Now", excerpt: "The transition from SEDAR to SEDAR+ introduced significant changes to how Canadian public companies file their continuous disclosure documents.", date: "Feb 28, 2026", read: "6 min" },
  { cat: "CFO Insights", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=85", title: "How Much Does a Fractional CFO Cost for a TSX-V Listed Company?", excerpt: "The cost of fractional CFO services for public companies ranges widely. Here's a transparent breakdown of what you should expect to pay.", date: "Feb 14, 2026", read: "5 min" },
  { cat: "Accounting Migration", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=85", title: "Accounting System Migration for Public Companies: A Risk Management Guide", excerpt: "Migrating your accounting platform while listed carries unique risks. This guide walks through our proven methodology for zero-disruption migration.", date: "Jan 30, 2026", read: "10 min" },
  { cat: "FP&A", img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=85", title: "Power BI for Public Company Board Reporting: A Complete Setup Guide", excerpt: "How to build institutional-grade board dashboards in Power BI — connected to your live accounting data.", date: "Jan 18, 2026", read: "12 min" },
  { cat: "Compliance", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=85", title: "The Public Company Finance Checklist: From Listing Day to First Annual Filing", excerpt: "Everything your finance team needs to handle in your first 12 months as a listed company — including deadlines, filing requirements, and internal controls.", date: "Jan 5, 2026", read: "9 min" },
];

const tabs = ["All", "Compliance", "CFO Insights", "SEDAR+", "Accounting Migration", "FP&A"];

const Blog = () => {
  const [tab, setTab] = useState("All");
  const filtered = tab === "All" ? articles : articles.filter((a) => a.cat === tab);
  return (
    <SiteLayout>
      <PageHero
        image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1400&q=85"
        badge={{ label: "Blog & Insights" }}
        title={<>Blog & Insights for <span className="text-gradient-teal">Public Company Finance</span></>}
        subtitle="Plain-language explainers, compliance deep-dives, and CFO-level perspective on Canadian capital markets."
      />
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 -mt-16 relative z-10">
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Resources", to: "/resources" }, { label: "Blog" }]} />
      </div>

      <section className="py-20" style={{ background: "hsl(var(--bg-secondary))" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap gap-2 mb-12">
            {tabs.map((t) => (
              <button key={t} onClick={() => setTab(t)} className={`px-5 py-2.5 rounded-full text-[13px] font-medium transition-all ${tab === t ? "bg-teal text-background" : "bg-white/5 border border-white/10 text-white/80 hover:border-teal/40"}`}>{t}</button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.06}>
                <article className="bg-card border border-white/8 rounded-2xl overflow-hidden hover:border-teal/40 hover:-translate-y-1 transition-all h-full flex flex-col">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={a.img} alt={a.title} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="self-start px-3 py-1 rounded-full text-[11px] font-semibold mb-3" style={{ background: "hsl(var(--teal) / 0.15)", color: "hsl(var(--teal-bright))" }}>{a.cat}</span>
                    <h3 className="font-display font-bold text-white text-[18px] leading-[1.3] mb-3">{a.title}</h3>
                    <p className="text-white/65 text-[14px] leading-relaxed mb-4 flex-1">{a.excerpt}</p>
                    <div className="flex items-center justify-between text-[12px] text-white/50 pt-4 border-t border-white/5">
                      <span>6ixFinance Team · {a.date}</span>
                      <span>{a.read}</span>
                    </div>
                    <a href="#" className="mt-4 inline-flex items-center gap-2 text-teal-bright font-semibold text-[14px] group">
                      Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-[800px] mx-auto px-6 lg:px-10 text-center">
          <Reveal>
            <h2 className="font-display font-bold text-white text-[32px] sm:text-[38px]" style={{ letterSpacing: "-1px" }}>Get Finance Insights in Your Inbox</h2>
            <p className="mt-3 text-white/70">One thoughtful piece per month. No spam.</p>
            <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input type="email" required placeholder="you@company.com" className="flex-1 px-5 py-3.5 rounded-full bg-white/5 border border-white/15 text-white placeholder:text-white/40 focus:outline-none focus:border-teal" />
              <button className="px-6 py-3.5 rounded-full bg-gradient-teal text-white font-semibold flex items-center justify-center gap-2">Subscribe <ArrowRight className="w-4 h-4" /></button>
            </form>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Blog;
