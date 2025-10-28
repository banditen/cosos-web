# Push Landing Page to GitHub

## Quick Steps

### 1. Create GitHub Repository

Go to [github.com/new](https://github.com/new) and create a new repository:
- **Name**: `cosos-landing`
- **Description**: "Marketing landing page for COSOS - Your AI Chief of Staff"
- **Visibility**: Private (or Public if you prefer)
- **DO NOT** initialize with README, .gitignore, or license (we already have these)

### 2. Push to GitHub

```bash
cd /Users/rasmusklarck/Desktop/Kinkaj/Code/Private\ projects/cosos-landing

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/cosos-landing.git

# Push to GitHub
git push -u origin main
```

If you get an error about `main` vs `master`, use:
```bash
git branch -M main
git push -u origin main
```

### 3. Verify

Visit your GitHub repository to confirm all files are there.

---

## Next: Deploy to Vercel

Once pushed to GitHub:

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import `cosos-landing` repository
4. Configure:
   - Framework: Next.js
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Environment Variable: `NEXT_PUBLIC_APP_URL=https://app.cosos.xyz`
5. Deploy!
6. Add custom domain `cosos.xyz` in project settings

---

**That's it!** Your landing page will be live at `cosos.xyz` 🎉
