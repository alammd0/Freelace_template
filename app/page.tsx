"use client"

import Appbar from "@/components/Appbar";
import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import LogoWrapper from "@/components/home/LogoWrapper";
import Portfolio from "@/components/home/Portfolio";
import Testimonials from "@/components/home/Testimonial";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#171717] overflow-hidden">
      <Appbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <main className={`min-h-screen ${menuOpen ? 'blur-sm' : ''}`}>
            <Hero />
            <LogoWrapper />
            <About />
            <Portfolio />
            <Testimonials />
        </main>
    </div>
  );
}
