# Athukorala Group — Ceylon Tea & Spices Digital Catalog

A multilingual, interactive product catalog for **Athukorala Group's** premium Ceylon tea and spice collection. Built as a modern single-page application with smooth animations, dynamic routing, and full internationalization support across 7 languages.

---

## Features

- **Multilingual Support** — Fully translated UI in 7 languages: English, Spanish, Russian, Italian, French, Japanese, and Chinese, switchable at runtime with no page reload.
- **Product Catalog** — 40+ premium Ceylon tea products displayed in an interactive snap-scroll catalog with individual detail pages.
- **Spice Collection** — Dedicated section for Ceylon spices with individual detail views.
- **Product Search** — Header search bar that filters products by name in both English and the active language simultaneously.
- **QR Code Generator** — Admin page (`/admin/qr`) to generate and download QR codes for individual product pages.
- **Animated UI** — Scroll-triggered fade-in animations via Framer Motion throughout every section.
- **Responsive Design** — Mobile-first layout with a collapsing header, mobile menu, and fluid typography using `clamp()`.
- **Scroll Progress Bar** — Visual scroll progress indicator in the header.
- **Scroll-to-Top Button** — Floating button that appears after scrolling past 400px.

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS 3 |
| Routing | React Router DOM v7 |
| Animation | Framer Motion |
| 3D Rendering | React Three Fiber + Drei |
| Icons | Lucide React |
| QR Codes | qrcode.react |

---

## Project Structure

```
src/
├── assets/             # Static image assets
├── components/
│   ├── ui/             # Reusable UI primitives (Button, SnapScroll)
│   ├── Header.tsx      # Navigation, search, language selector
│   ├── Footer.tsx
│   ├── HomePage.tsx    # Landing page (hero, featured, heritage, spice CTA)
│   ├── HeroSection.tsx
│   ├── IngredientsSection.tsx
│   ├── BenefitsSection.tsx
│   ├── BrewingSection.tsx
│   ├── PriceSection.tsx
│   ├── ProcessSection.tsx
│   ├── ProductDetails.tsx
│   ├── SpicesPage.tsx
│   ├── SpiceDetails.tsx
│   ├── QRMaker.tsx
│   └── NotFound.tsx
├── context/
│   └── LanguageContext.tsx   # Global language state via React Context
├── data/
│   ├── products.json         # All tea product records
│   ├── spices.json           # All spice product records
│   ├── translations.ts       # UI strings in all 7 languages
│   ├── productTranslations.ts
│   └── ingredientTranslations.ts
└── App.tsx                   # Router setup and layout shell
```

---

## Routes

| Path | Page |
|---|---|
| `/` | Home page (landing, featured teas, heritage, spice teaser) |
| `/catalog` | Full tea catalog (snap-scroll) |
| `/home` | Alternate home with hero sections |
| `/product/:id` | Individual tea product detail |
| `/spices` | Spice collection overview |
| `/spice/:id` | Individual spice detail |
| `/admin/qr` | QR code generator for products |
| `*` | 404 Not Found |

---

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm 9 or later

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd Catelog

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

The app runs at `http://localhost:5173` by default.

### Build for Production

```bash
npm run build
```

Output is placed in the `dist/` folder and ready for static hosting.

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Internationalization

Language selection is managed globally via `LanguageContext`. The supported language codes are:

| Code | Language |
|---|---|
| `en` | English |
| `es` | Spanish |
| `ru` | Russian |
| `it` | Italian |
| `fr` | French |
| `ja` | Japanese |
| `zh` | Chinese |

All UI strings, product names, ingredient descriptions, and brewing instructions are available in every language through the translation data files in `src/data/`.

---

## Product Data

Products are defined in `src/data/products.json`. Each entry includes:

- `id` — Unique identifier (e.g. `tea-002`)
- `name` — English product name
- `description` — English description
- `price` — Display price
- `weight` — Package weight
- `image` — Path to product image
- `ingredients` — List of ingredients with descriptions
- `benefits` — Health/wellness benefit entries

Localized overrides for each product live in `src/data/productTranslations.ts`.

---

## License

This project is proprietary software belonging to **Athukorala Group**. All rights reserved.

