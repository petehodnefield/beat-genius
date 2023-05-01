import Head from "next/head";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import ArtistDevelopment from "@/components/ArtistDevelopment/ArtistDevelopment";
import Footer from "@/components/Footer/Footer";
import Pricing from "@/components/Pricing/Pricing";
import Testimonials from "@/components/Testimonials/Testimonials";
import SuccessStories from "@/components/SuccessStories/SuccessStories";
import CTASection from "@/components/CTASection/CTASection";
import HamburgerMenu from "@/components/Header/Hamburger/HamburgerMenu";
import { useState } from "react";

export default function Home() {
  const [hamOpen, setHamOpen] = useState(false);

  return (
    <div className="wrapper">
      <HamburgerMenu hamOpen={hamOpen} setHamOpen={setHamOpen} />
      <Header hamOpen={hamOpen} setHamOpen={setHamOpen} />

      <main onClick={() => setHamOpen(false)}>
        <Hero />
        <About />
        <ArtistDevelopment />
        <Pricing />
        <Testimonials />
        <SuccessStories />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
