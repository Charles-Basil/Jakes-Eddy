const principles = [
  {
    num: "01",
    title: "See it clearly first",
    body: "Every project starts with diagnosis, not decoration.",
  },
  {
    num: "02",
    title: "Structure before style",
    body: "Systems and sequencing come before visuals.",
  },
  {
    num: "03",
    title: "Execution proves the value",
    body: "Design is where the thinking becomes visible — never the whole story.",
  },
];

export default function HowIThink() {
  return (
    <section id="how-i-think" className="paper-panel py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-10">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-2">
            <span className="section-marker">04 — HOW I THINK</span>
          </div>

          <div className="col-span-12 md:col-span-10">
            <div className="grid grid-cols-12 gap-5 items-end mb-8 md:mb-12">
              <div className="col-span-12 md:col-span-8">
                <p className="eyebrow max-w-md leading-relaxed reveal d1">
                  The operating philosophy behind the work. Three principles, one approach.
                </p>
              </div>
              <div className="col-span-12 md:col-span-4 flex justify-end">
                <span className="eyebrow reveal d2">Manifesto</span>
              </div>
            </div>

            <div className="flex flex-col">
              {principles.map((p, index) => (
                <div
                  key={p.num}
                  className="group border-t border-line py-6 md:py-9 hover:bg-paper-2 transition-colors duration-500"
                >
                  <div className="grid grid-cols-12 gap-4 items-stretch">
                    <div className="col-span-2">
                      <span className="num text-2xl md:text-3xl text-[#c9c5b8] group-hover:text-ink transition-colors duration-500">
                        {p.num}
                      </span>
                    </div>

                    <div className="col-span-10 flex flex-col">
                      <div className="overflow-hidden mb-3">
                        <h3 className="display-serif text-[1.6rem] sm:text-[2rem] md:text-[2.6rem] lg:text-[3.4rem] xl:text-[4rem] leading-[0.95] tracking-[-0.04em]">
                          <span className="inline-block reveal-clip d2 transition-transform duration-500 group-hover:-translate-y-0.5">
                            {p.title}
                          </span>
                        </h3>
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-base leading-relaxed text-muted max-w-2xl">
                          <span className="reveal-clip inline-block d3">
                            {p.body}
                          </span>
                        </p>
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