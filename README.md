# Fitness Sport Centre — Gym Frontend

A modern, responsive gym landing page built with React, TypeScript, and Tailwind CSS. Features smooth animations, a contact inquiry form, and a clean component-driven architecture.

---

## Tech Stack

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 6](https://vitejs.dev/) — build tool & dev server
- [Tailwind CSS 4](https://tailwindcss.com/) — utility-first styling
- [Motion (Framer Motion)](https://motion.dev/) — animations
- [Radix UI](https://www.radix-ui.com/) — accessible UI primitives
- [MUI (Material UI)](https://mui.com/) — additional UI components
- [Lucide React](https://lucide.dev/) — icons
- [Sonner](https://sonner.emilkowal.ski/) — toast notifications
- [Axios](https://axios-http.com/) — HTTP client
- [React Hook Form](https://react-hook-form.com/) — form handling

---

## Project Structure

```
src/
├── app/
│   └── components/
│       ├── figma/          # Figma-generated components (e.g. ImageWithFallback)
│       └── ui/             # shadcn/ui component library
├── assets/                 # Static assets (images, logo)
├── components/
│   ├── layout/             # Navbar, Footer
│   └── ui/                 # Shared UI components (Button, Card, Input, SectionTitle)
├── data/                   # Static data (services, trainers)
├── hooks/                  # Custom React hooks (useInquiry)
├── pages/                  # Page-level components (Home)
├── sections/
│   └── home/               # Page sections (Hero, About, Services, Contact)
├── services/               # API client & inquiry service
├── styles/                 # Global styles, Tailwind config, theme tokens
└── utils/                  # Helper utilities
```

---

## Getting Started

### Prerequisites

- Node.js >= 18
- npm or pnpm

### Installation

```bash
npm install
# or
pnpm install
```

### Environment Variables

Create a `.env` file in the root (or copy the existing one):

```env
# Backend API base URL — leave empty to use simulated/mock requests
VITE_API_URL=your-backend-url-here
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Production Build

```bash
npm run build
```

Output is generated in the `dist/` folder.

---

## Features

- Hero section with animated stats and call-to-action
- About section highlighting gym values and experience
- Services section showcasing available programs
- Contact form with inquiry submission to backend API
- Responsive design across all screen sizes
- Smooth scroll-triggered animations via Motion
- Toast notifications for form feedback

---

## API Integration

The contact form submits inquiries via `src/services/inquiryService.ts` using Axios. Set `VITE_API_URL` in `.env` to point to your backend. If left empty, requests are simulated locally.

---

## License

This project is private. All rights reserved.
