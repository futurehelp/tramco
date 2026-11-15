import { Reveal } from "@/components/motion";
import { ArrowLink } from "@/components/ui/arrow-link";

/** Property search call to action uses the original background asset and external HAR search. */
export function SearchSection() {
  return (
    <section className="search-section" id="tenant-services">
      <div className="search-overlay" />
      <Reveal className="container search-content">
        <p className="eyebrow eyebrow-light">HOUSTON REAL ESTATE</p>
        <h2>Find your dream<br /><em>home.</em></h2>
        <ArrowLink href="https://search.har.com/idx/dosearch.cfm?sitetype=cws&cid=1171&allmls=n" className="button button-accent" external>Search properties</ArrowLink>
      </Reveal>
    </section>
  );
}
