import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import FeaturedWork from "@/components/sections/FeaturedWork";
import About from "@/components/sections/About";
import Capabilities from "@/components/sections/Capabilities";
import Tools from "@/components/sections/Tools";
import Experience from "@/components/sections/Experience";
import Statement from "@/components/sections/Statement";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <FeaturedWork />
        <About />
        <Capabilities />
        <Tools />
        <Experience />
        <Statement />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
