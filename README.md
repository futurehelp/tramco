# TRAMCO Native Next.js Modernization

A clean, responsive homepage modernization for Texas Realty and Management Company. The implementation keeps the original TRAMCO visual identity and content structure while replacing the legacy WordPress runtime with a native Next.js application.

## What is included

- Native Next.js 16 App Router with a `src/` project layout
- Original TRAMCO logo, service images, background, and footer assets stored locally
- Modern hero photography and four distinct representative testimonial portraits in `public/images/enhanced`
- Responsive navigation with Framer Motion dropdowns and a mobile menu
- Motion-enabled hero carousel with autoplay, pagination, and directional controls
- Interactive service cards, testimonial carousel, and contact form state
- Responsive layouts for phones, tablets, and desktop screens
- No iframe and no dependency on the WordPress frontend at runtime
- Metadata, Open Graph defaults, local favicon, and semantic landmarks

The testimonial portraits are representative visual placeholders created for the modernization. Replace them with client-approved photography before a production launch.

## Architecture

```mermaid
flowchart TD
  Route[App Router page] --> Composition[SitePage]
  Composition --> Header[SiteHeader]
  Composition --> Hero[HeroSection]
  Composition --> Services[ServicesSection]
  Composition --> About[AboutSection]
  Composition --> Search[SearchSection]
  Composition --> Testimonials[TestimonialsSection]
  Composition --> Contact[ContactSection]
  Composition --> Footer[SiteFooter]
  Content[site-content.ts] --> Header
  Content --> Hero
  Content --> Services
  Content --> Testimonials
  SourceAssets[public/images/source] --> Services
  SourceAssets --> About
  SourceAssets --> Footer
  EnhancedAssets[public/images/enhanced] --> Hero
  EnhancedAssets --> Testimonials
```

## Interaction model

```mermaid
sequenceDiagram
  participant Visitor
  participant Header
  participant Hero
  participant Sections

  Visitor->>Header: Hover or tap a nav group
  Header-->>Visitor: Animate dropdown or mobile drawer
  Visitor->>Hero: Select a slide control
  Hero-->>Visitor: Crossfade image and copy
  Visitor->>Sections: Hover a service card or submit inquiry
  Sections-->>Visitor: Lift card, animate affordance, or show ready state
```

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint across the project |
| `npm run typecheck` | Run TypeScript without emitting files |

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to review the homepage.

## Deployment

The project is configured for Vercel deployment and can be published with:

```bash
npx vercel --prod
```

The repository is designed so all visible page assets are served from the project itself. The external HAR property search and regulatory PDF links remain intentional outbound links.
