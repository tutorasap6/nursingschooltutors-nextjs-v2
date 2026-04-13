# NursingSchoolTutors.com — Next.js Website

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Pure CSS (no Tailwind) with CSS custom properties
- **CMS:** File-based markdown (content/blog/) + Tina CMS compatible
- **Deployment:** Netlify
- **Repo:** GitHub (tutorasap6/hugo_web → replace with new repo)

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Copy env file
cp .env.example .env.local
# Edit .env.local with your SMTP credentials

# 3. Run development server
npm run dev

# 4. Open http://localhost:3000
```

## Project Structure

```
nursingschooltutors/
├── content/
│   └── blog/           ← Markdown blog posts (.md files)
├── public/
│   └── images/         ← Logo, favicon, images
├── scripts/
│   └── scrape-blog.js  ← Blog migration script
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← Root layout (Header + Footer)
│   │   ├── page.tsx            ← Homepage
│   │   ├── globals.css         ← Global styles / design tokens
│   │   ├── blog/
│   │   │   ├── page.tsx        ← Blog listing with pagination
│   │   │   └── [slug]/page.tsx ← Individual blog post
│   │   ├── contact/page.tsx    ← Contact + free quote form
│   │   ├── order/page.tsx      ← Order Now page
│   │   ├── about/page.tsx
│   │   ├── faq/page.tsx
│   │   ├── api/contact/route.ts ← Form email handler
│   │   └── services/
│   │       ├── online-proctored-exam-help/
│   │       ├── pay-someone-to-do-my-online-class/
│   │       ├── take-my-class-for-me/
│   │       └── ai-free-nursing-writing-assignment-help/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx      ← Sticky header + mega menu
│   │   │   └── Footer.tsx      ← Full 4-column footer
│   │   └── ui/
│   │       └── QuickChat.tsx   ← Floating WhatsApp widget
│   ├── data/
│   │   └── navigation.ts       ← All service subpage slugs
│   └── lib/
│       └── blog.ts             ← Blog utility (read markdown files)
├── netlify.toml
├── next.config.js
├── package.json
└── tsconfig.json
```

## Migrating Your Blog Posts

Your site has ~750 blog posts across 125 pages. To migrate them:

```bash
# Install scraper dependencies
npm install node-fetch cheerio

# Run the scraper
node scripts/scrape-blog.js
```

This will create `.md` files in `content/blog/` for each post.

## Deploying to Netlify (Step-by-Step)

### Step 1: Create a new GitHub repository
```bash
# In this project folder
git init
git add .
git commit -m "Initial commit — NursingSchoolTutors Next.js rebuild"
git remote add origin https://github.com/YOUR_USERNAME/nursingschooltutors-nextjs.git
git push -u origin main
```

### Step 2: Connect to Netlify
1. Go to [netlify.com](https://netlify.com) → New Site → Import from GitHub
2. Select your new repo
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Add environment variables from `.env.example`
6. Click Deploy

### Step 3: Set up custom domain
1. Netlify dashboard → Domain settings
2. Add custom domain: `nursingschooltutors.com`
3. Update DNS records at your domain registrar to point to Netlify

### Step 4: Add Netlify Next.js plugin (auto-installed via netlify.toml)
The `@netlify/plugin-nextjs` is already configured in `netlify.toml`.

## Contact Form Setup

### Option A: Netlify Forms (easiest, free)
Add `data-netlify="true"` to the `<form>` tag in `ContactForm.tsx`.
Netlify will capture submissions automatically.

### Option B: SMTP Email (via .env.local)
Set `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` in `.env.local`.
The `/api/contact` route will email submissions to `CONTACT_EMAIL`.

## Tina CMS Integration (for blog editing)
Tina CMS works with markdown files — fully compatible with this setup.
```bash
npx @tinacms/cli@latest init
```
Then configure it to point to `content/blog/` for managing blog posts.

## Brand Colors
- Deep Jungle Green: `#004B49`
- Gold Accent: `#C9A84C`
- Contact: WhatsApp +1(765)470-9090 | instanthelp24hr@gmail.com
