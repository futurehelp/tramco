export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export type HeroSlide = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  href: string;
  cta: string;
};

export type Service = {
  number: string;
  title: string;
  description: string;
  image: string;
  href: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  detail: string;
  image: string;
};

export const navigation: NavItem[] = [
  {
    label: "Management",
    href: "#management",
    children: [
      { label: "Property Management", href: "#management" },
      { label: "Management Staff", href: "#management" },
    ],
  },
  {
    label: "Real Estate",
    href: "#real-estate",
    children: [
      { label: "Buyers", href: "#real-estate" },
      { label: "Sellers", href: "#real-estate" },
      { label: "Agents", href: "#real-estate" },
    ],
  },
  { label: "Tenant Services", href: "#tenant-services" },
  {
    label: "Contact",
    href: "#contact",
    children: [
      { label: "About Us", href: "#about" },
      { label: "Testimonials", href: "#testimonials" },
    ],
  },
  { label: "Apply to Rent", href: "#contact" },
];

export const heroSlides: HeroSlide[] = [
  {
    eyebrow: "PROPERTY MANAGEMENT",
    title: "Property Management",
    description: "Providing Top-Notch Service for Over 40 Years",
    image: "/images/enhanced/hero-modern-1.jpg",
    href: "#management",
    cta: "Explore management",
  },
  {
    eyebrow: "BUYING A HOME",
    title: "Buying a Home?",
    description: "Let TRAMCO Find Your Perfect Dream Home Today!",
    image: "/images/enhanced/hero-modern-2.jpg",
    href: "#real-estate",
    cta: "Start your search",
  },
  {
    eyebrow: "SELLING YOUR HOME",
    title: "Selling Your Home?",
    description: "You Are in Good Hands",
    image: "/images/enhanced/hero-modern-3.jpg",
    href: "#real-estate",
    cta: "Talk with an agent",
  },
  {
    eyebrow: "INDUSTRY EXPERTS",
    title: "Industry Experts",
    description: "Over 40 Years of Real Estate Experience",
    image: "/images/enhanced/hero-modern-4.jpg",
    href: "#about",
    cta: "Meet the team",
  },
];

export const services: Service[] = [
  {
    number: "01",
    title: "Property Management",
    description: "Top-notch personalized property management throughout Houston and surrounding areas. Our success is based on excellent service to owners and tenants alike.",
    image: "/images/enhanced/tramco-home-1.jpg",
    href: "#management",
  },
  {
    number: "02",
    title: "Buying a Home",
    description: "Let TRAMCO help you find the perfect home. Our licensed agents listen to your needs and help you find the ideal place to call home.",
    image: "/images/enhanced/tramco-home-2.jpg",
    href: "#real-estate",
  },
  {
    number: "03",
    title: "Selling Your Home",
    description: "Our skilled team can help put your home on the market for the best price possible while representing your best interests at every step.",
    image: "/images/enhanced/tramco-home-3.jpg",
    href: "#real-estate",
  },
  {
    number: "04",
    title: "Industry Experts",
    description: "Experienced agents with deep real estate knowledge and a long record of putting clients first.",
    image: "/images/enhanced/tramco-home-4.jpg",
    href: "#about",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "TRAMCO turned a rental property that was losing money into a profitable venture. Their communication, transparency, and expert guidance have taken the stress out of being a landlord.",
    author: "Jeff B.",
    detail: "4 year valued client",
    image: "/images/enhanced/testimonial-jeff.png",
  },
  {
    quote: "As a remote investor, I needed a company I could trust to manage my properties. TRAMCO lives up to that expectation every day with professional, courteous, and dependable service.",
    author: "John D.",
    detail: "30+ year valued client",
    image: "/images/enhanced/testimonial-john.png",
  },
  {
    quote: "The team handles every detail, from rental paperwork and payments to repairs and monthly statements. TRAMCO is the go-to property management company in Houston.",
    author: "The D. Family",
    detail: "1 year valued client",
    image: "/images/enhanced/testimonial-family.png",
  },
  {
    quote: "Our properties have been managed by TRAMCO for more than 30 years. The staff is courteous, efficient, and always ready with practical solutions.",
    author: "HBR & RMR",
    detail: "30+ year valued client",
    image: "/images/enhanced/testimonial-hbr-rmr.png",
  },
];
