import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { HeroSection } from "@/components/sections/hero";
import { SearchSection } from "@/components/sections/search";
import { ServicesSection } from "@/components/sections/services";
import { TestimonialsSection } from "@/components/sections/testimonials";

/** Page composition keeps route code small while each section owns its content and behavior. */
export function SitePage() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <SearchSection />
      <TestimonialsSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
