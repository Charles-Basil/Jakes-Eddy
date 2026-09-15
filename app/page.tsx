"use client";

import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Proof from "./components/Proof";
import Currently from "./components/Currently";
import HowIThink from "./components/HowIThink";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const REVEAL_SELECTORS = [
  ".reveal",
  ".reveal-up",
  ".reveal-clip",
  ".reveal-left",
  ".reveal-right",
];

function sweep() {
  let changed = false;
  REVEAL_SELECTORS.forEach((sel) => {
    document.querySelectorAll(sel).forEach((el) => {
      if (el.classList.contains("is-visible")) return;
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight + 100 && rect.bottom > -100;
      if (inView) {
        el.classList.add("is-visible");
        changed = true;
      }
    });
  });
  return changed;
}

export default function Home() {
  const sweepRef = useRef(sweep);

  useEffect(() => {
    // Initial sweep on mount + RAF
    sweepRef.current();
    requestAnimationFrame(sweepRef.current);

    // Continuous scroll/resize sweep
    const onScroll = () => sweepRef.current();
    const onResize = () => sweepRef.current();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    // Fallback interval for any stragglers (cleared on unmount)
    const id = setInterval(() => sweepRef.current(), 400);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      clearInterval(id);
    };
  }, []);

  return (
    <main className="flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Proof />
      <Currently />
      <HowIThink />
      <Contact />
      <Footer />
    </main>
  );
}