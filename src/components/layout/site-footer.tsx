import Image from "next/image";
import { navigation } from "@/lib/site-content";

/** Footer keeps the original address, regulatory links, and equal housing mark visible. */
export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-main">
        <div className="footer-brand">
          <Image src="/images/source/logo.png" width={381} height={188} alt="TRAMCO" />
          <p>Consistency. Expertise. Longevity.</p>
        </div>
        <div className="footer-column">
          <span>CONTACT</span>
          <p>16416 N. Eldridge Parkway<br />Tomball, TX 77377</p>
          <a href="tel:2818936777">281.893.6777</a>
        </div>
        <div className="footer-column">
          <span>EXPLORE</span>
          {navigation.slice(0, 4).map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
        </div>
        <div className="footer-column">
          <span>RESOURCES</span>
          <a href="https://tramcorealty.com/wp-content/uploads/2026/08/Tramco-IABS.pdf" target="_blank" rel="noreferrer">Brokerage services</a>
          <a href="https://tramcorealty.com/wp-content/uploads/2026/08/Tramco-IABS.pdf" target="_blank" rel="noreferrer">Consumer notice</a>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 TRAMCO</span>
        <Image src="/images/source/realtor-equal-housing.png" width={300} height={126} alt="REALTOR and equal housing opportunity" />
      </div>
    </footer>
  );
}
