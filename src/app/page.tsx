import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
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
        <Work />
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