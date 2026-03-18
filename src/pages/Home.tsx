import { HeroSection } from "../sections/home/HeroSection";
import { AboutSection } from "../sections/home/AboutSection";
import { ServicesSection } from "../sections/home/ServicesSection";
import { ContactSection } from "../sections/home/ContactSection";

export function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}
