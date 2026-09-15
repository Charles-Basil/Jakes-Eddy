import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="dark-panel overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-10">
        <div className="grid grid-cols-12 gap-5">
          {/* <div className="col-span-12 md:col-span-2 flex items-start pt-1">
            <span className="section-marker !text-[#9a9890]">00 — HERO</span>
          </div> */}

          <div className="col-span-12 md:col-span-10">
            <div className="grid grid-cols-12 gap-8 items-start">
              <div className="col-span-12 md:col-span-7">
                <p className="eyebrow mt-3 mb-5 reveal d1 md:mt-10">Strategic &amp; Creative Developer</p>

                <h1 className="leading-none tracking-[-0.05em]">
                  <div className="overflow-hidden">
                    <span
                      className="reveal-clip block display-serif text-[2.4rem] sm:text-[3.4rem] md:text-[5rem] lg:text-[6.5rem] xl:text-[7.5rem] text-white d2"
                      style={{ willChange: "clip-path, opacity" }}
                    >
                      JAKES
                    </span>
                  </div>
                  <div className="overflow-hidden">
                    <span
                      className="reveal-clip block display-serif text-[2.4rem] sm:text-[3.4rem] md:text-[5rem] lg:text-[6.5rem] xl:text-[7.5rem] text-[#d9d6cb] d3"
                      style={{ willChange: "clip-path, opacity" }}
                    >
                      EDDY
                    </span>
                  </div>
                </h1>
              </div>

              <div className="col-span-12 md:col-span-5">
                <figure className="relative aspect-[4/5] max-h-[27rem] overflow-hidden border border-white/15 bg-[#252525] shadow-[0_24px_80px_rgba(0,0,0,0.28)] reveal d4">
                  <Image
                    src="/img/jakes.jpeg"
                    alt="Jakes Eddy"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 35vw"
                    className="object-cover object-top grayscale-[12%] contrast-105"
          />
        </figure>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-12 gap-8 border-t border-white/10 pt-10">
              <div className="col-span-12 md:col-span-4 reveal d5">
                <p className="display-serif-light text-2xl sm:text-3xl md:text-4xl text-white leading-[0.9]">
                  One<span className="text-[#9a9890]">.</span><br />
                  Many<span className="text-[#9a9890]">.</span>
                </p>
                <p className="eyebrow mt-5 !text-[#9a9890]">fields.</p>
              </div>

              <div className="col-span-12 md:col-span-5 reveal d6">
                <p className="text-sm leading-relaxed text-[#c4c1b6]">
                  I structure ideas, build the systems behind them, and communicate them with clarity.
                </p>
                <p className="text-sm leading-relaxed text-[#8a887e] mt-5">
                  Strategy, branding and venture-building for people and businesses who need more than surface-level design.
                </p>
              </div>

              <div className="col-span-12 md:col-span-3 md:text-right reveal d7">
                <span className="eyebrow !text-[#9a9890]">Method</span>
                <div className="mt-4 flex flex-nowrap items-center gap-x-5">
                  <span className="text-sm uppercase tracking-[0.18em] text-white">THINK</span>
                  <span className="text-[#5a5952]">→</span>
                  <span className="text-sm uppercase tracking-[0.18em] text-white">BUILD</span>
                  <span className="text-[#5a5952]">→</span>
                  <span className="text-sm uppercase tracking-[0.18em] text-white">COMMUNICATE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-12 md:mt-16 overflow-hidden">
        <div className="marquee py-3 text-[0.68rem] uppercase tracking-[0.26em] text-[#9a9890]">
          <div className="marquee-track">
            <span>Strategic &amp; Creative Developer</span>
            <span className="mx-6 text-[#5a5952]">✦</span>
            <span>Diagnose · Structure · Communicate</span>
            <span className="mx-6 text-[#5a5952]">✦</span>
            <span>Nigeria</span>
            <span className="mx-6 text-[#5a5952]">✦</span>
            <span>Cross River State</span>
            <span className="mx-6 text-[#5a5952]">✦</span>
            <span>Calabar Carnival</span>
            <span className="mx-6 text-[#5a5952]">✦</span>
            <span>Strategic &amp; Creative Developer</span>
            <span className="mx-6 text-[#5a5952]">✦</span>
            <span>Diagnose · Structure · Communicate</span>
            <span className="mx-6 text-[#5a5952]">✦</span>
            <span>Nigeria</span>
            <span className="mx-6 text-[#5a5952]">✦</span>
            <span>Cross River State</span>
            <span className="mx-6 text-[#5a5952]">✦</span>
            <span>Calabar Carnival</span>
          </div>
        </div>
      </div>
    </section>
  );
}