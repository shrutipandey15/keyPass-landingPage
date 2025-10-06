import { Hero } from "./components/Hero";
import { Features } from "./components/Features"; 
import { HowItWorks } from "./components/HowItWorks";
import { BetaProgram } from "./components/BetaProgram";
import { FreeBonus } from "./components/FreeBonus";
import { FutureFeatures } from "./components/FutureFeatures";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { SEOHead } from "./components/SEOHead";

export default function App() {
  return (
    <>
      <SEOHead />
      <div className="min-h-screen">
        <header>
          <Hero />
        </header>
        
        <main>
          <section aria-label="Product Features">
            <Features />
          </section>
          
          <section aria-label="How KeyPass Works">
            <HowItWorks />
          </section>
          
          <section aria-label="Beta Program">
            <BetaProgram />
          </section>
          
          <section aria-label="Free Bonuses">
            <FreeBonus />
          </section>
          
          <section aria-label="Future Features">
            <FutureFeatures />
          </section>
          
          <section aria-label="Frequently Asked Questions">
            <FAQ />
          </section>
          
          <section aria-label="Contact Us">
            <Contact />
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}