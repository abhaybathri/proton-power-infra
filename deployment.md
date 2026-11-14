# Proton Power Infra — Production Deployment Guide

This guide will walk you through deploying the **Proton Power Infra** website to **Vercel** in the simplest, most beginner-friendly way.

---

## ⚡ The Big Question: Do I need to host a backend?

### 👉 **NO! You do NOT need to host a backend.**

* **Why?** This website is built with **React + Vite + Tailwind CSS** as a modern, high-performance **Single-Page Application (SPA)**.
* **How it works:** All pages, interactive calculators, filters, mobile menus, and photo galleries run directly inside the visitor's web browser.
* **Cost:** Hosting this site on Vercel is **100% Free** (with unlimited automatic SSL certificates, global CDN, and automated deployments).
* **Forms & Inquiries:** The forms on the website are designed to work immediately with direct email and WhatsApp triggers, or you can connect them to free serverless form providers (like Web3Forms or Formspree) in under 2 minutes without maintaining any database or server.

---

## 🛠️ What has been configured to make this site "Production-Ready"

Before deploying, we have already set up all necessary production files:

1. **`vercel.json`**: Configured with SPA rewrite rules. This prevents `404 Not Found` errors when users refresh or directly visit pages like `/about`, `/power-transformers`, or `/solar-epc-services`.
2. **`.gitignore`**: Updated to protect sensitive files (`.env`, `.env.local`, `.vercel`, `node_modules`, `dist`).
3. **`.env.example`**: Created as a safe template for any future API keys or analytics tags.
4. **`public/favicon.svg`**: Custom branded energy vector icon matching Proton Power Infra colors.
5. **Production Build Verified**: Fully compiled with `npm run build` with zero errors.

---

## 🚀 Choose Your Deployment Method

You can deploy using any of the 3 methods below. **Method 1 is strongly recommended** because any future updates you make will auto-deploy automatically!

---

### Method 1 (Recommended): Deploy via GitHub & Vercel Dashboard

This is the standard industry method. It takes less than 3 minutes and gives you automatic deployments whenever you update your code.

#### Step 1: Push your code to GitHub

Open PowerShell or your terminal in this project folder:
```powershell
# 1. Stage all files
git add .

# 2. Commit the files
git commit -m "Initial production release of Proton Power Infra website"
```

Now, go to [GitHub.com](https://github.com):
1. Click the **`+`** icon in the top right corner and select **New repository**.
2. Name it: `proton-power-infra` (you can choose Public or Private).
3. Leave "Initialize with README" unchecked, and click **Create repository**.
4. Copy the repository URL (e.g., `https://github.com/your-username/proton-power-infra.git`).

In your terminal, link and push:
```powershell
git remote add origin https://github.com/your-username/proton-power-infra.git
git push -u origin main
```

#### Step 2: Import into Vercel

1. Go to [vercel.com](https://vercel.com) and log in (or sign up for free using your GitHub account).
2. On your Vercel Dashboard, click **Add New...** → **Project**.
3. Under **Import Git Repository**, find `proton-power-infra` and click **Import**.
4. In the configuration screen:
   * **Framework Preset**: Vite (Vercel detects this automatically).
   * **Root Directory**: `./` (leave default).
   * **Build Command**: `npm run build` (leave default).
   * **Output Directory**: `dist` (leave default).
5. Click **Deploy**!

In ~30 seconds, Vercel will build your website and give you a live production URL like:
👉 `https://proton-power-infra.vercel.app`

---

### Method 2: Deploy using Vercel CLI (Super Fast, Terminal Only)

If you don't want to use GitHub right now, you can deploy directly from your computer in 60 seconds using the Vercel CLI.

1. Open PowerShell in the project directory:
   ```powershell
   cd C:\Users\abhay\.gemini\antigravity\scratch\proton-power-infra
   ```
2. Run the deployment command:
   ```powershell
   npx vercel
   ```
3. Follow the simple prompts:
   * **Set up and deploy?** Press `y` and Enter.
   * **Which scope?** Press Enter (your personal account).
   * **Link to existing project?** Type `n` and Enter.
   * **What's your project's name?** Press Enter (accepts `proton-power-infra`).
   * **In which directory is your code located?** Press Enter (`./`).
   * **Want to modify settings?** Type `n` and Enter.
4. To publish to production, run:
   ```powershell
   npx vercel --prod
   ```
5. Done! You will immediately get your live URL.

---

### Method 3: Drag & Drop (Zero Git Required)

1. Open your terminal in this folder and build the site:
   ```powershell
   npm run build
   ```
2. This creates a folder named `dist` inside `proton-power-infra`.
3. Go to [vercel.com/new](https://vercel.com/new) in your browser.
4. Drag and drop the `dist` folder directly onto the Vercel upload box.
5. Your site is live instantly!

---

## 🌐 Connecting Your Custom Domain (e.g., `protonpowerinfra.com`)

Once your site is deployed on Vercel:

1. Open your project on the [Vercel Dashboard](https://vercel.com).
2. Go to **Settings** → **Domains**.
3. Enter your domain name (e.g. `protonpowerinfra.com` or `www.protonpowerinfra.com`) and click **Add**.
4. Vercel will show you the exact DNS records to add at your domain registrar (GoDaddy, Namecheap, Hostinger, etc.):
   * **Type**: `A` | **Name**: `@` | **Value**: `76.76.21.21`
   * **Type**: `CNAME` | **Name**: `www` | **Value**: `cname.vercel-dns.com`
5. Once added, Vercel automatically generates a free, auto-renewing SSL certificate (HTTPS) within a few minutes.

---

## 🔒 Managing Environment Variables (Optional)

If you ever want to connect a form submission service (such as Web3Forms or Formspree) or Google Analytics:

1. Open your project on Vercel.
2. Go to **Settings** → **Environment Variables**.
3. Add your key and value (e.g., Key: `VITE_GA_MEASUREMENT_ID`, Value: `G-XXXXXXXXXX`).
4. Click **Save**.
5. Trigger a new deployment or push a commit to apply the changes.

---

## 📋 Quick Checklist Before Sharing with Clients

* [x] Official logo active in Header & Footer.
* [x] Real project photography loaded across Hero, Solutions, Substation, and Featured Projects.
* [x] Power Transformers dedicated page (`/power-transformers`) live.
* [x] Solar EPC Services turnkey page (`/solar-epc-services`) live.
* [x] Careers page contains direct leadership talent connect (all vacancies removed).
* [x] Customer reviews & feedback completely eliminated.
* [x] `vercel.json` SPA rewrite configured (no 404 on page reload).
* [x] Production build passes with 0 errors (`npm run build`).
