# Cafe Brit Website Clone (https://cafebrit.lk)

A faithful, full clone of the **[Cafe Brit](https://cafebrit.lk/)** website — an elevated café experience in Colombo 07 (Ward Place), Sri Lanka.

## ✨ Features & Pages

- **Home Page (`/` and `/home`)**:
  - Hero section with bold typography, animated green leaves, custom text gradient, and high-priority espresso visual.
  - "Where everyday moments feel elevated" overview section with rating badge, customer count, and 5-item interior & craft photography grid with noise overlay.
- **About Page (`/about`)**:
  - Story & heritage of Cafe Brit.
  - Key statistics ("1,000+ Cups Served", "500+ Satisfied Guests", "30+ Handcrafted Menu Items").
  - "The Story Behind Cafe Brit" and "Why Choose Cafe Brit" with feature bullet highlights.
  - "OUR PROMISE" quote banner and team signature.
- **Menu Page (`/menu`)**:
  - Mosaic photography header ("Fresh From Brit").
  - Tabbed interactive menu shell switching between **Food Menu**, **Drinks Menu**, and **Coffee Menu**.
  - Interactive high-res menu artwork viewer with an accessible modal zoom dialog (100% to 220% zoom controls).
  - Bottom showcase featuring barista tamping and iced latte artwork.
- **Contact Page (`/contact`)**:
  - Direct contact details (0112 444 222, director@cafebrit.lk).
  - Open hours (`Everyday: 07:00am – 12:00am`).
  - Embedded Google Maps location for No. 71, Ward Place, Colombo 07.
  - Parallax floating leaf accents.
- **Global Components**:
  - Transparent-to-blur navigation bar with active route indicators and mobile drawer menu.
  - Rich footer with brand story, social media links (Instagram, Facebook, WhatsApp), quick navigation, touchpoints, and newsletter subscription form.
  - Full SEO and schema.org JSON-LD `CafeOrCoffeeShop` metadata.
  - Smooth page transitions and automatic scroll-to-top on route changes.

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Routing**: React Router DOM v6
- **Animations**: GSAP (GreenSock) + ScrollTrigger + SplitType
- **Styling**: Tailwind CSS + Custom CSS Variables & Design System
- **Fonts**: Modern Negra (custom local font), Mona Sans, DM Serif Text

## 🚀 Getting Started

### Development Server
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```
