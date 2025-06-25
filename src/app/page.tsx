"use client"

import WhyToveTech from "@/components/section/WhyToveTech";
import Header from "@/components/section/Header";
import HeroSection from "@/components/section/HeroSection";
import Services from "@/components/section/Services";
import AboutSection from "@/components/section/AboutSection";
import Contact from "@/components/section/Contact";
import Footer from "@/components/section/Footer";

const Home = () => {


  // ... keep existing code (return statement with all JSX)
  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <Header />
        <HeroSection />
        <Services />
        <AboutSection />
        <WhyToveTech />
        <Contact />
        <Footer />
      </div>
  );
};

export default Home;
