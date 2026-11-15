import Image from "next/image";
import { Reveal } from "@/components/motion";
import { ArrowLink } from "@/components/ui/arrow-link";

/** Trust section mirrors the original credibility block with the local source image. */
export function AboutSection() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <Reveal className="about-copy">
          <p className="eyebrow eyebrow-light">TRAMCO SINCE 1979</p>
          <h2>Consistency.<br /><em>Expertise.</em><br />Longevity.</h2>
          <p>Those three words are used by our clients to describe Texas Realty and Management Company. In continuous business since 1979, TRAMCO is a trusted Houston advisor for real estate and property management.</p>
          <p>We believe the best service is personal, responsive, and built to last. Our commitment is simple: communicate clearly, protect what matters, and help every client move forward with confidence.</p>
          <ArrowLink href="#contact" className="button button-light">Talk with our team</ArrowLink>
        </Reveal>
        <Reveal className="about-image" delay={0.12}>
          <Image src="/images/enhanced/lara-brook-front-of-house.jpg" alt="A Houston home managed by TRAMCO" fill sizes="(max-width: 860px) 100vw, 50vw" />
        </Reveal>
      </div>
    </section>
  );
}
