# Accredian Enterprise Page Clone

This project is a recreation of the [Accredian Enterprise](https://enterprise.accredian.com/) landing page, built as an assignment for the Full Stack Developer Intern role.

## 🚀 Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Approach Taken

- **Component-Driven Architecture**: The application is divided into highly reusable components inside `components/layout`, `components/sections`, and `components/ui`.
- **Responsive Design**: Used Tailwind CSS utility classes to ensure a seamless experience across mobile, tablet, and desktop views.
- **Modern UI/UX**: Implemented modern web design patterns such as glassmorphism in the testimonials, smooth count-up animations for statistics, marquee effects for partner logos, and sticky headers.
- **Form Handling & API**: Created a lead capture form (`LeadForm.tsx`) that posts data to a Next.js App Router API route (`/api/leads/route.ts`), including validation and success/error state management.

## 🤖 AI Usage Explanation

During the development of this project, I utilized **Antigravity (Google DeepMind's Agentic AI Assistant)**.

- **Where AI helped me**: 
  - Rapidly scaffolding the file and directory structure (`components/sections/*`, etc.).
  - Generating standard boilerplate for Next.js App Router API routes.
  - Generating initial React component structures and basic Tailwind CSS utility classes based on my structural prompts.
- **What I modified/improved manually**: 
  - Carefully designed the layout and visual hierarchy, selecting specific color palettes (e.g., custom blue gradients, slate grays).
  - Implemented the custom hooks for intersection observers and smooth count-up animations in the Stats section.
  - Refined the responsive breakpoints to ensure the design remains flawless on mobile devices.
  - Handled the internal state logic for the interactive Navbar (scrolling effects, mobile menu toggle) and the Lead Capture form.

## 🔮 Improvements with More Time

1. **Database Integration**: Connect the Next.js API route to a real database (like PostgreSQL via Supabase or Prisma) instead of using an in-memory array for leads.
2. **Advanced Animations**: Add Framer Motion for more sophisticated entry animations when sections scroll into view.
3. **Authentication/Admin Panel**: Build a protected `/admin` route to view and manage captured leads.
4. **Enhanced Performance**: Optimize image loading by converting static logos into WebP/AVIF formats and utilizing Next.js `<Image />` component with proper sizing configurations everywhere.
5. **Form Validation**: Add a robust validation library like Zod or Yup for the lead capture form.
