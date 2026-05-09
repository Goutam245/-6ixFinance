import { Link } from "react-router-dom";
import { Award, Users, Target, ShieldCheck, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

const team = [
  { name: "Ankit Sharma, CPA, CA", role: "Founder & Managing Partner", bio: "15+ years across Big Four audit and public company CFO roles. Has signed NI 52-109 certifications across multiple TSX-V issuers.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80" },
  { name: "Priya Mehta, CPA", role: "Director, Public Company Practice", bio: "Former senior controller at a CSE-listed tech company. SEDAR+ filing specialist.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80" },
  { name: "Daniel Reyes", role: "Head of Reporting & Analytics", bio: "Power BI architect. Builds the dashboards our boards rely on. Microsoft Certified Data Analyst.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80" },
  { name: "Joanna Liu, CPA", role: "Senior Manager, Controllership", bio: "Multi-entity consolidation expert. IFRS / ASPE / US GAAP cross-trained.", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80" },
];

const reasons = [
  { icon: Target, t: "100% Public Company Focus", b: "We don't dabble. Every engagement is a public issuer. The standards, the deadlines, the controls — that's all we do." },
  { icon: ShieldCheck, t: "Audit-Grade Controls", b: "We build and document controls to the standard your auditors expect. PBC schedules ready before they ask." },
  { icon: Award, t: "Regulator-Tested", b: "Our team has responded to TSX-V, CSE, NEO, and securities commission inquiries. We know what they look for." },
  { icon: Users, t: "Embedded, Not Outsourced", b: "We sit on your Slack, attend your board meetings, and represent your company. We're part of your team." },
];

const credentials = [
  "CPA Designated Team",
  "SEDAR+ Certified",
  "NI 52-109 Experience",
  "TSX-V / CSE / NEO Exchange Experience",
  "IFRS, ASPE, US GAAP Cross-Trained",
  "Power BI Microsoft Certified",
];

const AboutPage = () => {
  return (
    <SiteLayout>
      <PageHero
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=85"
        eyebrow="About 6ixFinance"
        title={<>The Public Company <span className="text-gradient-teal">Finance Specialists</span></>}
        subtitle="Built by CPAs who've held the seat — for issuers who need it done right."
      />

      {/* Our Story */}
      <section className="bg-bg-light py-24">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="label-eyebrow text-teal">Our Story</p>
            <h2 className="mt-3 font-display font-bold text-[#0D1829] text-[32px] sm:text-[40px]" style={{ letterSpacing: "-1px" }}>
              Why We Built 6ixFinance
            </h2>
            <div className="mt-7 space-y-5 text-[#4A5568] text-[17px] leading-[1.85]">
              <p>6ixFinance was built by CPAs who spent years inside public companies and Big Four firms watching small-cap issuers struggle with the same challenges — compliance overload, inadequate reporting infrastructure, and the impossible choice between a $200K+ CFO salary and doing it themselves.</p>
              <p>We built 6ixFinance to solve that problem — delivering institutional-grade financial leadership to public companies that need it most.</p>
              <p>Today, we serve issuers across the TSX-V, CSE, and NEO exchanges. Every client gets the same standard of care: a senior CPA accountable to the same outcomes as a full-time CFO, supported by a team that does this every day.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Specialization */}
      <section className="bg-background py-24 relative overflow-hidden">
        <div className="orb orb-1" style={{ opacity: 0.05 }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="label-eyebrow text-teal">Our Specialization</p>
            <h2 className="mt-3 font-display font-bold text-white text-[32px] sm:text-[40px] lg:text-[44px]" style={{ letterSpacing: "-1px" }}>
              Why We Focus <span className="text-gradient-teal">Exclusively</span> on Public Companies
            </h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {reasons.map((r, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="bg-gradient-card rounded-2xl p-7 border border-white/5 card-hover flex gap-5 items-start h-full">
                  <div className="w-12 h-12 rounded-xl bg-teal/15 border border-teal/30 flex items-center justify-center text-teal shrink-0">
                    <r.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white text-[20px]">{r.t}</h3>
                    <p className="mt-2 text-muted-foreground text-[15px] leading-[1.7]">{r.b}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-bg-light py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="label-eyebrow text-teal">Credentials</p>
            <h2 className="mt-3 font-display font-bold text-[#0D1829] text-[32px] sm:text-[40px]" style={{ letterSpacing: "-1px" }}>
              The Standards We Hold
            </h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {credentials.map((c, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="bg-white rounded-xl p-5 border-l-4 border-teal shadow-sm flex items-center gap-3">
                  <Award className="w-5 h-5 text-teal" />
                  <span className="font-display font-semibold text-[#0D1829] text-[15px]">{c}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-bg-secondary py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="label-eyebrow text-teal">Our Team</p>
            <h2 className="mt-3 font-display font-bold text-white text-[32px] sm:text-[40px]" style={{ letterSpacing: "-1px" }}>
              Senior CPAs. Public Company Pedigree.
            </h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="bg-gradient-card rounded-2xl overflow-hidden border border-white/5 card-hover h-full">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={m.img} alt={m.name} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-semibold text-white text-[16px] leading-tight">{m.name}</h3>
                    <p className="text-teal text-[12px] font-mono uppercase tracking-wider mt-1">{m.role}</p>
                    <p className="mt-3 text-muted-foreground text-[13px] leading-[1.6]">{m.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-teal py-20 text-center text-white">
        <div className="max-w-[900px] mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-bold text-[32px] sm:text-[40px]" style={{ letterSpacing: "-1px" }}>
              Want to See if We're the Right Fit?
            </h2>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#0D1829] font-display font-bold transition-all hover:-translate-y-0.5">
              Book a Discovery Call <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
};

export default AboutPage;
