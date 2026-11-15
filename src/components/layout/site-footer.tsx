import Image from "next/image";
import { navigation } from "@/lib/site-content";

/** Footer keeps the original address, regulatory links, and equal housing mark visible. */
export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-main">
        <div className="footer-intro">
          <p className="eyebrow eyebrow-light">HOUSTON SINCE 1979</p>
          <h2>Real estate<br /><em>with staying power.</em></h2>
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
      <div className="footer-white">
        <Image className="footer-lockup" src="/images/source/logo-modern.png" width={1200} height={349} alt="TRAMCO Texas Realty and Management Company" />
        <div className="footer-legal">
          <span>© 2026 TRAMCO</span>
          <Image src="/images/source/regulatory-mark.png" width={1600} height={606} alt="REALTOR, MLS, and equal housing opportunity" />
        </div>
      </div>
    </footer>
  );
}
