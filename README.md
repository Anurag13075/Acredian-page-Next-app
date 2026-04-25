# Accredian Enterprise Page Clone

This project is a high-fidelity recreation of the [Accredian Enterprise](https://enterprise.accredian.com/) landing page. It was built as an assignment for the Full Stack Developer Intern role, utilizing the modern **Next.js App Router** architecture, **Tailwind CSS**, and **TypeScript**.

## 🚀 Setup & Installation Instructions

Follow these steps to clone, set up, and run the project on your local machine.

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) and [Git](https://git-scm.com/) installed on your machine. We use `pnpm` in this project, but `npm` or `yarn` works as well.

### 2. Clone the Repository
```bash
git clone https://github.com/Anuragsharma15-dell/Acredian-page-Next-app.git
cd Acredian-page-Next-app
cd my-app
```

### 3. Install Dependencies
Install all required node modules:
```bash
npm install
# or
pnpm install
```

### 4. Run the Development Server
Start the local development server:
```bash
npm run dev
# or
pnpm run dev
```

### 5. View the App
Open your browser and navigate to:
[http://localhost:3000](http://localhost:3000)

---

## 📁 Folder Structure & Architecture

The application is built using the **Next.js App Router** pattern. We used a modular, component-driven approach to ensure maintainability and separation of concerns.

```text
my-app/
├── app/                        # Next.js App Router Core
│   ├── api/leads/route.ts      # API Endpoint for Lead Capture form submissions
│   ├── favicon.ico             # Official Accredian Brand Favicon
│   ├── globals.css             # Global Tailwind Styles & Custom CSS Keyframes (Marquee)
│   ├── layout.tsx              # Root Layout, Global Providers, and SEO Metadata
│   └── page.tsx                # Main Landing Page (Assembles all sections)
├── components/                 # Reusable React Components
│   ├── layout/                 # Structural Components
│   │   ├── Navbar.tsx          # Sticky Navbar with scroll-tracking active states
│   │   └── Footer.tsx          # Comprehensive Footer with inline SVG icons
│   ├── providers/              # Global React Contexts
│   │   └── ModalProvider.tsx   # Context managing the global Lead Capture Modal state
│   ├── sections/               # Individual Page Blocks
│   │   ├── AccredianEdge.tsx   # Custom horizontal timeline process flow
│   │   ├── Clients.tsx         # Animated marquee of partner logos
│   │   ├── CourseSegmentation.tsx # Grid of course offerings
│   │   ├── CTA.tsx             # Contact Us banner
│   │   ├── DeliveryApproach.tsx# 3-step numbered workflow
│   │   ├── DomainExpertise.tsx # Grid for specialized programs
│   │   ├── FAQ.tsx             # Interactive Accordion FAQs
│   │   ├── Hero.tsx            # High-impact top banner
│   │   ├── Stats.tsx           # Company statistics block
│   │   ├── Testimonials.tsx    # Client feedback carousel
│   │   └── WhoShouldJoin.tsx   # Target demographic section
│   └── ui/                     # Shared UI Components
│       ├── AnimateOnScroll.tsx # IntersectionObserver wrapper for smooth fade-ins
│       └── LeadFormModal.tsx   # The actual Lead Capture form overlay
├── public/                     # Static Assets
│   └── assets/                 # Optimized images and screenshots
├── lib/                        # Utility Functions & Types
│   ├── constants.ts            # Hardcoded static data
│   └── types.ts                # TypeScript interfaces
├── next.config.ts              # Next.js Configuration
├── tailwind.config.ts          # Tailwind CSS Configuration
└── package.json                # Project Dependencies
```

---

## 📝 Assignment Answers

### 1. Explain your component structure and approach
My approach was heavily focused on **Modularity, Reusability, and Separation of Concerns**. I utilized the **Next.js App Router** to build a highly structured, component-driven architecture.

Rather than writing a monolithic `page.tsx`, I broke the landing page down into independent, bite-sized components located in `components/sections/`. This ensures the codebase is easy to maintain, test, and scale. Every visual block from the reference design was isolated (e.g., `Hero.tsx`, `FAQ.tsx`). Global layout elements like the sticky `Navbar` were placed in `components/layout/`. I used **Tailwind CSS** for utility-first styling to rapidly implement the exact brand color palette and typography directly within the markup.

### 2. What challenges did you face during this assignment?
- **Complex Layout Translation:** Translating the static design screenshots into a pixel-perfect, responsive web application was challenging. Specifically, engineering the "Accredian Edge" timeline—with its alternating layout and precise spacing—required complex absolute CSS positioning that still needed to gracefully collapse on mobile devices.
- **Performance vs. Animations:** I wanted to implement modern scroll-triggered animations (fade-ins, slide-ups, and an infinite logo marquee) without bloating the application with heavy third-party animation libraries. To keep the Next.js bundle size minimal, I manually built an `<AnimateOnScroll />` wrapper using the native `IntersectionObserver` API and custom CSS keyframes.
- **Dependency Updates:** During development, I encountered an unexpected build error because the latest version of `lucide-react` deprecated and removed social media brand icons. I had to quickly pivot and replace the missing library components with raw, optimized inline SVGs in the Footer to resolve the build failure without sacrificing UI fidelity.

### 3. What did you modify or improve manually (beyond AI output)?
While I utilized AI to rapidly scaffold boilerplate React components and generate Tailwind classes, I manually intervened in several critical areas to ensure a production-ready result:
- **Architecture & Routing:** I manually defined the Next.js App Router structure and the component hierarchy to ensure modularity.
- **Environment Configuration:** I manually debugged and resolved Next.js specific build warnings, including configuring `next.config.ts` and resolving `next/image` aspect ratio warnings to ensure optimal Core Web Vitals.
- **Asset Management & UI/UX Polish:** I meticulously processed and aligned the images into the `public/assets` directory, configured Next.js `<Image />` properties, and orchestrated the logic for the sticky Navbar. I verified the AI's generated CSS against the reference screenshots to ensure brand colors, border radii, and drop-shadows were a pixel-perfect match.

### 4. Did you implement any of the following?
**Yes, I implemented all of the listed features:**
- **Lead Capture Form:** Built a global, reusable `<LeadFormModal />` component. Rather than cluttering the page layout, the form elegantly pops up as a centralized modal whenever the user clicks any "Enquire Now" or "Contact Us" button.
- **API Integration:** The lead form is fully wired up to communicate with a Next.js API Route (`app/api/leads/route.ts`). It handles the asynchronous `fetch` POST request and smoothly manages localized state for `loading` (spinner), `success` (thank you screen), and `error` outputs.
- **Performance Optimization:** Strictly utilized the Next.js `<Image />` component with `priority` tags on above-the-fold content for optimized LCP. I also used `next/font` for zero-layout-shift font loading.
- **SEO Improvements:** Completely overhauled the Next.js `Metadata` object in `app/layout.tsx`. Implemented rich SEO data including descriptive titles, meta descriptions, highly relevant keywords, and full `openGraph` metadata.
- **Animations / Advanced UI:** Developed a custom `<AnimateOnScroll />` wrapper utilizing the `IntersectionObserver` API to wrap every major section, creating a smooth fade-in transition as the user scrolls. Additionally, added an infinite CSS marquee animation for the Client logos.

### 5. If given 1 more day, what improvements would you make?
- **Persistent Database Integration:** I would replace the current Next.js mock API route with a real database (like Supabase or PostgreSQL via Prisma) to securely persist all submitted lead captures.
- **Automated Email Notifications:** I would integrate an email service (like Resend) into the API route to automatically send an immediate confirmation email to the user, and an alert to the internal sales team the moment a new lead is captured.
- **Automated Testing:** I would set up end-to-end (E2E) testing using Cypress or Playwright to ensure the core conversion flow (filling out and submitting the Lead Capture Modal) remains perfectly stable during future updates.
