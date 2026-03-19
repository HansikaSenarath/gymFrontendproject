# PowerFit Gym — Frontend

> A modern, fully responsive gym landing page built with React 18 and TypeScript.

🔗 **Live Demo:** [gym-frontendproject.vercel.app](https://gym-frontendproject.vercel.app)

---

## Overview

PowerFit Gym is a single-page application for a fitness centre. It showcases the gym's services, trainers, and values, and includes a contact inquiry form that submits to a backend API.

---

## Features

- Animated hero section with key stats (500+ members, 50+ trainers, 24/7 access)
- About section with scroll-triggered animations
- Services section with category filtering (Strength, Cardio, Yoga, Group Classes)
- Contact form with real-time validation and API submission
- Toast feedback for form success/error states
- Fully responsive across mobile, tablet, and desktop
- Dark/light theme support via CSS custom properties

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS 4 |
| Animations | Motion (Framer Motion) |
| UI Primitives | Radix UI + shadcn/ui |
| Icons | Lucide React |
| HTTP Client | Axios |
| Notifications | Sonner |
| Deployment | Vercel |

---

## Project Structure

```
src/
├── app/components/
│   ├── figma/          # ImageWithFallback and Figma-generated components
│   └── ui/             # shadcn/ui component library
├── assets/             # Static assets and logo
├── components/
│   ├── layout/         # Navbar, Footer
│   └── ui/             # Shared components: Button, Card, Input, SectionTitle
├── data/               # Static data: servicesData, trainersData
├── hooks/              # Custom hooks (useInquiry)
├── pages/              # Page components (Home)
├── sections/home/      # Page sections: Hero, About, Services, Contact
├── services/           # apiClient (Axios) + inquiryService
├── styles/             # Global CSS, Tailwind config, theme tokens
└── utils/              # Helper functions
```

---

## Getting Started

### Prerequisites

- Node.js >= 18
- npm or pnpm

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
# Backend API base URL
VITE_API_URL=https://your-backend-url.railway.app
```

> If `VITE_API_URL` is left empty, the API client falls back to `http://localhost:5000`.

### Run Locally

```bash
npm run dev
```

App runs at `http://localhost:5173`.

### Production Build

```bash
npm run build
```

Output is generated in the `dist/` folder, ready for deployment.

---

## Deployment

The frontend is deployed on **Vercel**. Any push to the main branch triggers an automatic deployment.


