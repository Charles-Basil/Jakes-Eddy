export default function About() {
  return (
    <section id="about" className="paper-panel py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-10">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-2 flex items-start pt-1">
            <span className="section-marker">01 — ABOUT</span>
          </div>

          <div className="col-span-12 md:col-span-10">
            <div className="grid grid-cols-12 gap-6 items-start">
              <div className="col-span-12 md:col-span-4 flex flex-col items-start gap-8 pt-1">
                <p className="eyebrow max-w-xs leading-loose reveal d1">
                  A seasoned authority in strategy development, branding, and visual communication.
                </p>
                
              </div>

              <div className="col-span-12 md:col-span-8 flex flex-col gap-6">
                <h2 className="display-serif text-[1.2rem] sm:text-[1.6rem] md:text-[2.2rem] lg:text-[3rem] xl:text-[3.4rem] leading-[0.95] tracking-[-0.025em] text-right">
                  <span className="reveal-clip inline-block d2">Diagnose</span>{" "}
                  <span className="reveal-clip inline-block d3">what&apos;s</span>{" "}
                  <span className="reveal-clip inline-block d4">actually</span>{" "}
                  <span className="reveal-clip inline-block d5 text-[#8a887e]">needed.</span>
                </h2>
              </div>
            </div>

            <div className="mt-12 md:mt-16 grid grid-cols-12 gap-6 items-stretch">
              <div className="col-span-12 md:col-span-5">
                <p className="text-base leading-relaxed text-ink-soft reveal d3">
                  Jakes Eddy is a Strategic &amp; Creative Developer and Certified Business Development Officer. His work sits at the intersection of business strategy and creative execution — across large-scale cultural events, state-level digital economy initiatives, and his own consultancy practice.
                </p>
              </div>

              <div className="col-span-12 md:col-span-2 flex items-center justify-center">
                <span className="rule-v bg-line h-24 hidden md:block" />
              </div>

              <div className="col-span-12 md:col-span-5">
                <p className="text-base leading-relaxed text-ink-soft reveal d4">
                  The throughline across every project: diagnose what&apos;s actually needed, structure how it gets built, then communicate it in a way people trust and act on.
                </p>
              </div>
            </div>

            <div className="mt-10 md:mt-14 flex flex-wrap items-center gap-5 reveal d6">
              <span className="eyebrow !text-[#8a887e]">Throughline</span>
              <span className="w-14 h-px bg-ink" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-ink">
                DIAGNOSE → STRUCTURE → COMMUNICATE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}