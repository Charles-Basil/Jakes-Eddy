const projects = [
  {
    num: "01",
    year: "2023 — 2025",
    title: "Calabar Carnival and Festival",
    role: "CREATIVE DIRECTOR",
    desc: "Led creative direction across two editions of one of Nigeria's most recognized cultural events — shaping the visual identity, campaign direction, and on-ground creative execution for a festival operating at state and national visibility.",
  },
  {
    num: "02",
    year: "Cross River State",
    title: "Digital Economy Project",
    role: "PROJECT COORDINATOR & PROJECT LEAD",
    desc: "Coordinated and led execution on a state-level digital economy initiative — managing project structure, stakeholders, and delivery on an initiative aimed at strengthening Cross River State's digital economic footprint.",
  },
  {
    num: "03",
    year: "BVU",
    title: "Business Visual Upgrade",
    role: "FOUNDER & LEAD CONSULTANT",
    desc: "Built a full branding and visual strategy consultancy from the ground up — service tiers, a client acquisition system, a production team, and an AI-integrated workflow. Active, ongoing consultancy practice.",
  },
];

export default function Proof() {
  return (
    <section id="proof" className="paper-panel py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-10">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-2">
            <span className="section-marker">02 — PROOF</span>
          </div>

          <div className="col-span-12 md:col-span-10">
            <div className="grid grid-cols-12 gap-5 items-end mb-8 md:mb-12">
              <div className="col-span-12 md:col-span-8">
                <p className="eyebrow max-w-2xl leading-relaxed reveal d1">
                  Three projects, three different scales of problem, one way of working.
                </p>
              </div>
              <div className="col-span-12 md:col-span-4 flex justify-end">
                <span className="eyebrow reveal d2">03 case studies</span>
              </div>
            </div>

            <div className="flex flex-col">
              {projects.map((p, index) => (
                <div
                  key={p.num}
                  className="group border-t border-line py-6 md:py-9 transition-colors duration-500 hover:bg-paper-2"
                >
                  <div className="grid grid-cols-12 gap-4 items-stretch">
                    <div className="col-span-2 flex items-start pt-1">
                      <span className="num text-2xl md:text-3xl text-[#c9c5b8] group-hover:text-ink transition-colors duration-500">
                        {p.num}
                      </span>
                    </div>

                    <div className="col-span-10 flex flex-col">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3 mb-4">
                        <div className="overflow-hidden">
                          <h3 className="display-serif text-[1.6rem] sm:text-[2rem] md:text-[2.6rem] lg:text-[3.4rem] xl:text-[4rem] leading-[0.95] tracking-[-0.04em]">
                            <span className="inline-block reveal-clip d2 transition-transform duration-500 group-hover:-translate-y-0.5">
                              {p.title}
                            </span>
                          </h3>
                        </div>
                        <span className="eyebrow !text-[#8a887e] sm:ml-2 mt-1 sm:mt-0">
                          {p.year}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="eyebrow !text-[#8a887e]">Role</span>
                        <span className="w-8 h-px bg-line" />
                        <span className="text-[11px] uppercase tracking-[0.18em] text-ink">
                          {p.role}
                        </span>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex-1 overflow-hidden">
                          <p className="text-base leading-relaxed text-muted max-w-2xl">
                            {p.desc}
                          </p>
                        </div>
                        <div className="hidden sm:flex flex-col items-end gap-2 pt-1">
                          <span className="eyebrow !text-[#8a887e]">Read more</span>
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#c9c5b8] group-hover:text-ink transition-colors duration-500">
                            <path d="M2 12L12 2M12 2H2M12 2V12" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}