# 🚀 Bitcoin Treasury Solutions - Corporate Website

<div align="center">

**A modern, professional corporate website built with Next.js 15, Tailwind CSS v4, and TypeScript**

[![Next.js](https://img.shields.io/badge/Next.js-15.4.6-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-19.1.0-61dafb?style=flat-square&logo=react)](https://react.dev/)

</div>

---

## 📖 About This Project

This is a production-ready corporate website for **Bitcoin Treasury Solutions (BTS)**, a Melbourne-based company providing structured Bitcoin education and consulting services for Australia's professionals. The site showcases modern web development practices, accessibility-first design, and features specifically tailored for Bitcoin-related businesses.

### 🏢 About Bitcoin Treasury Solutions

Bitcoin Treasury Solutions empowers investors aged 35 and over to explore Bitcoin as part of a diversified investment strategy. Founded by Carri and Chris in Melbourne, BTS offers:

- 🎓 **Training Programs** - Tailored Bitcoin education for SMEs, public companies, and community groups
- 💼 **Consulting Services** - One-on-one coaching for personalised Bitcoin integration strategies
- 📅 **Public Events** - Small-group workshops in Melbourne for curious investors

We believe in building trust through face-to-face connections and providing honest, clear education without hype or false promises.

---

## ✨ Key Features

### 🎯 Core Website Features

- **📱 Fully Responsive Design** - Mobile-first approach with perfect viewport handling
- **♿ WCAG 2.1 AA Compliant** - Accessibility built-in from the ground up
- **🎨 Professional Design System** - Custom color palette, typography, and component library
- **⚡ Performance Optimized** - Next.js 15 with App Router, image optimization, and font loading
- **🔍 SEO Ready** - Comprehensive metadata, sitemap, and structured data
- **📧 Contact Forms** - Integrated with Mailjet for reliable email delivery
- **📰 Newsletter Integration** - Mailjet-powered subscription system
- **🎥 Video Integration** - YouTube video modal with privacy-enhanced embeds

### 💎 Extractable Features

#### 🧮 Bitcoin CAGR Calculator

A comprehensive calculator suite perfect for Bitcoin-related websites:

- **Historic CAGR Calculator** - Calculate Bitcoin's historical compound annual growth rate
- **Future Projection Calculator** - Project future Bitcoin values based on different CAGR scenarios
- **Tax Scenario Analysis** - Australian tax calculations for Bitcoin investments
- **Asset Comparison** - Compare Bitcoin performance against traditional assets
- **Interactive Charts** - Beautiful Recharts visualizations
- **PDF Export** - Generate and download calculation reports

**Location:** `src/app/calculator/` and `src/components/calculator/`

**Key Files:**
- `HistoricCAGRCalculator.tsx` - Historical performance analysis
- `FutureProjectionCalculator.tsx` - Future value projections
- `TaxScenarioPanel.tsx` - Australian tax calculations
- `PriceChart.tsx` - Interactive price charts

#### 💝 Bitcoin Through Values

An innovative feature that helps users understand Bitcoin through their personal values:

- **Value Selection Interface** - Interactive card-based value selection
- **Personalised Guide Generation** - Creates custom Bitcoin explanations based on selected values
- **Email Integration** - Send personalised guides via email
- **Beautiful UI** - Thoughtfully designed interface with smooth animations

**Location:** `src/app/values/` and `src/components/values/`

**Key Files:**
- `ValueCard.tsx` - Individual value selection cards
- `GuideDisplay.tsx` - Generated guide presentation
- `EmailForm.tsx` - Email delivery integration
- `values-data.ts` - Value definitions and content

---

## 🛠️ Tech Stack

### Core Technologies

- **[Next.js 15.4.6](https://nextjs.org/)** - React framework with App Router
- **[React 19.1.0](https://react.dev/)** - Latest React with server components
- **[TypeScript 5.0](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS 4.0](https://tailwindcss.com/)** - Utility-first CSS with `@theme inline`
- **[shadcn/ui](https://ui.shadcn.com/)** - High-quality component library

### Key Libraries

- **📊 [Recharts](https://recharts.org/)** - Charting library for calculator visualizations
- **📝 [React Hook Form](https://react-hook-form.com/)** - Performant form handling
- **✅ [Zod](https://zod.dev/)** - Schema validation
- **🎨 [Lucide React](https://lucide.dev/)** - Beautiful icon library
- **📄 [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)** - MDX content rendering
- **📧 [Mailjet](https://www.mailjet.com/)** - Email service integration

### Development Tools

- **ESLint** - Code linting with Next.js config
- **Prettier** - Code formatting
- **TypeScript** - Type checking
- **Turbopack** - Fast development builds

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20.x or higher
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

```bash
# Clone the repository
git clone https://github.com/avunculargroup/bts-website-v2.git

# Navigate to the project directory
cd bts-website-v2

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Mailjet API (for contact forms and newsletter)
MAILJET_API_KEY=your_mailjet_api_key
MAILJET_SECRET_KEY=your_mailjet_secret_key
MAILJET_LIST_ID=your_mailjet_list_id

# CoinGecko API (optional, for Bitcoin price data)
COINGECKO_API_KEY=your_coingecko_api_key
```

### Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
bts-website-v2/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── calculator/         # 🧮 Bitcoin Calculator feature
│   │   ├── values/             # 💝 Bitcoin Through Values feature
│   │   ├── about/              # About page
│   │   ├── contact/            # Contact page
│   │   ├── resources/          # Resources page
│   │   ├── events/             # Events page
│   │   └── api/                # API routes
│   ├── components/             # React components
│   │   ├── calculator/         # Calculator components
│   │   ├── values/             # Values feature components
│   │   └── ui/                 # shadcn/ui components
│   └── lib/                    # Utility functions and data
│       ├── calculator/         # Calculator logic (CAGR, tax, etc.)
│       └── bitcoin-price-api.ts # Bitcoin price API integration
├── public/                     # Static assets
├── STYLING.md                  # 📚 Comprehensive design system documentation
└── README.md                   # This file
```

---

## 🎨 Design System

This project includes a comprehensive design system perfect for corporate Bitcoin websites:

### Color Palette

- **Primary (Navy)** - `#102a43` to `#f0f4f8` - Professional, trustworthy
- **Secondary (Gold)** - `#f59e0b` to `#fffbf0` - Warm, premium
- **Accent (Orange)** - `#f97316` to `#fff7ed` - Bitcoin-inspired, energetic

### Typography

- **Display Font** - Source Sans 3 (headings, UI)
- **Body Font** - Neuton (content, paragraphs)

See [`STYLING.md`](./STYLING.md) for complete design system documentation.

---

## 🔧 Extracting Features

### Extracting the Calculator

The Bitcoin CAGR Calculator is fully self-contained and can be extracted to any Next.js project:

1. **Copy Calculator Components:**
   ```bash
   # Copy calculator components
   cp -r src/components/calculator/ your-project/src/components/
   cp -r src/app/calculator/ your-project/src/app/
   ```

2. **Copy Calculator Logic:**
   ```bash
   # Copy calculator utilities
   cp -r src/lib/calculator/ your-project/src/lib/
   cp src/lib/bitcoin-price-api.ts your-project/src/lib/
   ```

3. **Install Dependencies:**
   ```bash
   npm install recharts html2canvas jspdf
   ```

4. **Update Routes:**
   - Add calculator route to your app router
   - Update API routes if needed

### Extracting Bitcoin Through Values

The Values feature is also fully extractable:

1. **Copy Values Components:**
   ```bash
   cp -r src/components/values/ your-project/src/components/
   cp -r src/app/values/ your-project/src/app/
   cp src/lib/values-data.ts your-project/src/lib/
   ```

2. **Update Content:**
   - Customize `values-data.ts` with your own values and content
   - Update email templates in `EmailForm.tsx`

---

## 📚 Documentation

- **[STYLING.md](./STYLING.md)** - Complete design system documentation
- **[STYLING_QUICK_REFERENCE.md](./STYLING_QUICK_REFERENCE.md)** - Quick styling reference
- **[CALCULATOR.md](./CALCULATOR.md)** - Calculator feature documentation
- **[FEATURE_VALUES_PLAN.md](./FEATURE_VALUES_PLAN.md)** - Values feature documentation

---

## 🤝 Contributing

This is a private corporate project, but we welcome feedback and suggestions! If you're building a similar Bitcoin-related corporate website and have questions, feel free to reach out.

---

## 📞 Contact & Support

### Bitcoin Treasury Solutions

- **🌐 Website:** [bitcointreasurysolutions.com.au](https://bitcointreasurysolutions.com.au)
- **📧 Email:** [enquiry@btreasury.com.au](mailto:enquiry@btreasury.com.au)
- **📅 Book a Session:** [Calendly](https://calendly.com/carri27/30min)
- **🐦 Twitter:** [@btreasuryau](https://x.com/btreasuryau)
- **💼 LinkedIn:** [Bitcoin Treasury Solutions](https://www.linkedin.com/company/btreasury/)
- **📺 YouTube:** [Bitcoin Treasury Solutions Channel](https://www.youtube.com/channel/UCfl6Ad-fNMLXRAN7rAGuTlQ)

### Development Inquiries

For questions about the codebase, architecture, or extracting features:

- **📧 Email:** [enquiry@btreasury.com.au](mailto:enquiry@btreasury.com.au)
- **💬 Subject:** "Development Inquiry - BTS Website"

---

## 📄 License

This project is licensed under the **MIT License**.

Copyright (c) 2025 Avuncular Group Pty Ltd

See the [LICENSE](./LICENSE) file for details.

---

## 🙏 Acknowledgments

Built with ❤️ in Melbourne, Australia by the Bitcoin Treasury Solutions team.

**Special Thanks:**
- Next.js team for an amazing framework
- shadcn for beautiful components
- Tailwind CSS for the utility-first approach
- The Bitcoin community for inspiration

---

<div align="center">

**Made with ⚡ Next.js, 🎨 Tailwind CSS, and 💎 TypeScript**

[Website](https://bitcointreasurysolutions.com.au) • [Contact](mailto:enquiry@btreasury.com.au) • [Book a Session](https://calendly.com/carri27/30min)

</div>
