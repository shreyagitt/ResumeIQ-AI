import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Stats from "../components/Stats";
import HowItWorks from "../components/HowItWorks";

function LandingPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      
      <CTA />
      <Footer />
    </div>
  );
}

export default LandingPage;