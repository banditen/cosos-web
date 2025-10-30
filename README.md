# COSOS Landing Page

Official marketing website for **COSOS** - Your AI Chief of Staff for founders and solopreneurs.

🌐 **Live Site**: [cosos.xyz](https://cosos.xyz)  
📱 **App**: [app.cosos.xyz](https://app.cosos.xyz)

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit [http://localhost:3001](http://localhost:3001)

---

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)

---

## 🧩 UI Toolkit (shadcn/ui)

This project is pre-configured with [shadcn/ui](https://ui.shadcn.com) components for consistent, accessible primitives.

- CLI configuration lives in `components.json` and targets the `src` directory (`@/components`, `@/lib/utils`).
- Base utilities such as the `cn` helper (`src/lib/utils.ts`) and primitives (`Button`, `Badge`, `Card`, `Separator`, `Sheet`) are available under `src/components/ui`.
- Tailwind is configured with shadcn token layers and the `tailwindcss-animate` plugin while preserving the existing primary palette.

### Adding additional components

```bash
npx shadcn@latest add component-name
```

The command will respect the repository aliases and Tailwind setup. Prefer reusing existing primitives when possible to keep the dependency footprint minimal.

After installing new components, run `npm run lint` and `npm run build` to ensure the UI toolkit stays compatible with the deployment pipeline.

---

## 🌐 Environment Variables

Create a `.env.local` file:

```env
# App URL (where users sign in)
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**Production:**
```env
NEXT_PUBLIC_APP_URL=https://app.cosos.xyz
```

---

## 📁 Project Structure

```
cosos-landing/
├── src/
│   ├── app/
│   │   ├── page.tsx       # Landing page
│   │   ├── layout.tsx     # Root layout
│   │   └── globals.css    # Global styles
│   ├── components/
│   │   └── ui/            # shadcn/ui primitives
│   └── lib/
│       └── utils.ts       # Shared utilities (cn helper)
├── public/                # Static assets
├── components.json        # shadcn/ui CLI config
├── package.json
├── next.config.js
├── tailwind.config.ts
└── README.md
```

---

## 🎨 Features

- ✅ Hero section with value proposition
- ✅ Features showcase (Daily Briefs, Smart Prioritization, Project Management)
- ✅ "How It Works" 4-step guide
- ✅ Call-to-action sections
- ✅ Footer with navigation
- ✅ Fully responsive design
- ✅ Optimized for SEO
- ✅ Fast page loads

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/cosos-landing.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your `cosos-landing` repository
   - Configure:
     - **Framework**: Next.js
     - **Build Command**: `npm run build`
     - **Output Directory**: `.next`

3. **Set Environment Variable**
   ```env
   NEXT_PUBLIC_APP_URL=https://app.cosos.xyz
   ```

4. **Add Custom Domain**
   - In Vercel project settings → Domains
   - Add `cosos.xyz` and `www.cosos.xyz`
   - Follow DNS instructions

### Deploy to Netlify

Similar process - import repo, set build command, add environment variables.

---

## 🔧 Development

### Available Scripts

```bash
npm run dev      # Start development server (port 3001)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

### Making Changes

1. Edit `src/app/page.tsx` for content changes
2. Edit `src/app/globals.css` for styling
3. Edit `tailwind.config.ts` for theme customization

---

## 🎯 SEO Optimization

The landing page is optimized for search engines:

- Semantic HTML structure
- Meta tags configured in `layout.tsx`
- Fast loading times
- Mobile-responsive
- Accessible design

To customize SEO:
- Edit metadata in `src/app/layout.tsx`
- Add `robots.txt` in `public/`
- Add `sitemap.xml` in `public/`

---

## 🔗 Related Repositories

- **Main App**: [cosos-ai](https://github.com/yourusername/cosos-ai) - Dashboard application and backend

---

## 📝 License

Proprietary - All rights reserved

---

## �� Contributing

This is a private repository. For questions or suggestions, contact the team.

---

## 📧 Contact

- **Website**: [cosos.xyz](https://cosos.xyz)
- **App**: [app.cosos.xyz](https://app.cosos.xyz)

---

Built with ❤️ for founders who want to focus on what matters.
