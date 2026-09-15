export default function Currently() {
  return (
    <section id="currently" className="dark-panel overflow-hidden py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-10">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-2">
            <span className="section-marker !text-[#9a9890]">03 — CURRENTLY</span>
          </div>

          <div className="col-span-12 md:col-span-10">
            <div className="grid grid-cols-12 gap-5 items-end mb-8 md:mb-12">
              <div className="col-span-12 md:col-span-6">
                <p className="eyebrow !text-[#c4c1b6] max-w-md leading-relaxed reveal d1">
                  Where the work is happening now. Two active fronts.
                </p>
              </div>
              <div className="col-span-12 md:col-span-6 flex justify-end">
                <span className="eyebrow !text-[#6e6d66] reveal d2">Live signals</span>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-px bg-white/10">
              <article className="bg-ink p-6 sm:p-8 col-span-12 md:col-span-6 reveal d3">
                <div className="flex items-center gap-3 mb-6">
                  <span className="eyebrow !text-[#9a9890]">Venture</span>
                  <span className="w-8 h-px bg-white/15" />
                  <span className="num text-xs text-[#5a5952]">01</span>
                </div>

                <h2 className="display-serif text-[1.6rem] sm:text-[2rem] md:text-[2.6rem] lg:text-[3.4rem] text-white leading-[0.95] tracking-[-0.04em] mb-5">
                  The Revelation
                  <span className="block">Institute</span>
                </h2>

                <div className="flex items-center gap-3 mb-5">
                  <span className="eyebrow !text-[#9a9890]">Role</span>
                  <span className="w-8 h-px bg-white/15" />
                  <span className="text-[11px] uppercase tracking-[0.18em] text-white">
                    MANAGEMENT LEAD
                  </span>
                </div>

                <p className="text-base leading-relaxed text-[#b5b2a6] max-w-md">
                  Currently serving as Management Lead at The Revelation Institute, a
                  practical skills-based education venture — overseeing operations and
                  structure as it grows.
                </p>
              </article>

              <article className="bg-ink p-6 sm:p-8 col-span-12 md:col-span-6 reveal d4">
                <div className="flex items-center gap-3 mb-6">
                  <span className="eyebrow !text-[#9a9890]">Practice</span>
                  <span className="w-8 h-px bg-white/15" />
                  <span className="num text-xs text-[#5a5952]">02</span>
                </div>

                <h2 className="display-serif text-[1.6rem] sm:text-[2rem] md:text-[2.6rem] lg:text-[3.4rem] text-white leading-[0.95] tracking-[-0.04em] mb-5">
                  Fame Forge
                </h2>

                <div className="flex items-center gap-3 mb-5">
                  <span className="eyebrow !text-[#9a9890]">Role</span>
                  <span className="w-8 h-px bg-white/15" />
                  <span className="text-[11px] uppercase tracking-[0.18em] text-white">
                    CREATIVE DIRECTOR
                  </span>
                </div>

                <p className="text-base leading-relaxed text-[#b5b2a6] max-w-md">
                  Currently leading creative direction on Fame Forge, a
                  purpose-driven reality format in active development. More on this
                  soon.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}