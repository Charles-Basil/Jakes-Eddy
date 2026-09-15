const channels = [
  { label: "EMAIL",   href: "mailto:connectwithjakes@gmail.com" },
  { label: "WHATSAPP / PHONE", value: "Details coming soon" },
  { label: "LINKEDIN",   href: "https://www.linkedin.com/in/jacob-archibong-aa339b2b0", external: true },
  { label: "INSTAGRAM",  href: "https://www.instagram.com/jakesconnect", external: true },
  { label: "X",  href: "https://x.com/Jakesconnect", external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="dark-panel overflow-hidden py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-10">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-2">
            <span className="section-marker !text-[#9a9890]">05 — LET&apos;S TALK</span>
          </div>

          <div className="col-span-12 md:col-span-10">
            <div className="grid grid-cols-12 gap-6 items-start">
              <div className="col-span-12 md:col-span-7">
                <h2 className="display-serif text-[1.6rem] sm:text-[2.2rem] md:text-[3rem] lg:text-[4rem] xl:text-[4.8rem] leading-[0.95] tracking-[-0.04em] text-white">
                  <span className="block overflow-hidden">
                    <span className="reveal-clip block d1">Have a brand,</span>
                  </span>
                  <span className="block overflow-hidden">
                    <span className="reveal-clip block d2">business, or</span>
                  </span>
                  <span className="block overflow-hidden">
                    <span className="reveal-clip block d3">idea that</span>
                  </span>
                  <span className="block overflow-hidden">
                    <span className="reveal-clip block d4 text-[#d9d6cb]">needs structure?</span>
                  </span>
                </h2>
              </div>

              <div className="col-span-12 md:col-span-5 flex flex-col justify-between pt-2 md:pt-8">
                <p className="eyebrow !text-[#9a9890] mb-6 reveal d3">
                  Reach out. I respond personally.
                </p>

                <div className="flex flex-col">
                  {channels.map((c, i) => {
                    const content = (
                      <>
                        <div className="flex items-center gap-3">
                          <span className="eyebrow !text-[#6e6d66] group-hover:!text-[#9a9890] transition-colors duration-300">
                            {c.label}
                          </span>
                          <span className="text-sm uppercase tracking-[0.16em] text-white">
                            {c.value}
                          </span>
                        </div>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#5a5952] group-hover:text-white transition-colors duration-300">
                          <path d="M2 10L10 2M10 2H2M10 2V10" />
                        </svg>
                      </>
                    );

                    if (!c.href) {
                      return (
                        <div key={c.label} className={`group flex items-center justify-between py-4 border-t border-white/10 reveal d${4 + i}`}>
                          {content}
                        </div>
                      );
                    }

                    return (
                      <a
                        key={c.label}
                        href={c.href}
                        target={c.external ? "_blank" : undefined}
                        rel={c.external ? "noopener noreferrer" : undefined}
                        aria-label={`${c.label}: ${c.value}`}
                        className={`group flex items-center justify-between py-4 border-t border-white/10 hover:pl-2 transition-all duration-300 reveal d${4 + i}`}
                      >
                        {content}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}