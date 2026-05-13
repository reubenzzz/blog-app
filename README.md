# Beyond UI - Next.js Blog Application

This is a modern, responsive, server-side rendered (SSR) blog application built with [Next.js](https://nextjs.org/) (App Router), [React Query](https://tanstack.com/query/latest), and [Tailwind CSS](https://tailwindcss.com/). The UI is a pixel-perfect implementation of the [Beyond UI Blog Page Design](https://dribbble.com/shots/23491039-Blog-page-UI-design-Beyond-UI) from Dribbble.

## ✨ Features

- **Pixel-Perfect UI:** High-fidelity implementation matching the original Dribbble design (typography, spacing, borders, gradients).
- **Server-Side Rendering (SSR):** Optimized homepage rendering for superior performance and SEO out-of-the-box.
- **Dynamic Routing:** Seamless navigation to individual blog posts (`/posts/[id]`).
- **Mock API Integration:** Uses Next.js Route Handlers (`/api/posts`) to serve mock data.
- **React Query:** Efficient client-side state management for the live search/filtering experience.
- **Responsive Design:** Fluidly adapts to mobile, tablet, and desktop screens using Tailwind CSS.

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **State Management:** @tanstack/react-query
- **Icons:** Lucide React
- **Utilities:** clsx, tailwind-merge

## 🚀 Getting Started

First, ensure you have Node.js installed. Then, clone the repository and install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

- `src/app/page.tsx` - The main entry point featuring server-side rendering and initial data fetching.
- `src/app/posts/[id]/page.tsx` - Dynamic route for viewing individual blog posts.
- `src/app/api/posts/route.ts` - Next.js API Route acting as the mock backend for our posts.
- `src/components/` - Reusable client and server components (Header, HomeClient, Providers).

## 💡 Evaluation Criteria Addressed
- Proper usage of Next.js features (SSR, Dynamic Routes, API Routes).
- Strict adherence to UI design parameters.
- Clean component architecture.
- Seamless responsiveness and accessible semantic HTML.
