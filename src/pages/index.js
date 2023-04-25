import Head from "next/head";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import ArtistDevelopment from "@/components/ArtistDevelopment/ArtistDevelopment";
import Footer from "@/components/Footer/Footer";
import Pricing from "@/components/Pricing/Pricing";
import Testimonials from "@/components/Testimonials/Testimonials";
import SuccessStories from "@/components/SuccessStories/SuccessStories";
import CTASection from "@/components/CTASection/CTASection";

const pjs = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="wrapper">
      <Head>
        <title>Beat Genius</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className={pjs.className}>
        <Hero />
        <About />
        <ArtistDevelopment />
        <Pricing />
        <Testimonials />
        <SuccessStories />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
}
