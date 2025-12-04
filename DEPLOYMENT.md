# Deployment Guide - Vercel

This portfolio has been optimized for deployment on Vercel. Follow these steps to deploy your portfolio.

## What We've Optimized

### 🖼️ Image Optimization (93-94% size reduction!)
- **certificate.webp**: 1.1MB → 42KB
- **hbnb.webp**: 3.4MB → 91KB
- **healthcare.webp**: → 54KB
- **flora.webp**: → 94KB
- **hero.webp**: → 195KB

All images converted to WebP format for maximum performance.

### ⚡ Performance Improvements
- Removed GitHub Pages workarounds (basePath, static export)
- Enabled Next.js automatic image optimization
- Added lazy loading for all below-the-fold images
- Configured optimal caching headers
- Enabled AVIF and WebP formats

### 🔧 Configuration Changes
- **next.config.mjs**: Removed `output: 'export'`, `basePath`, and `unoptimized` settings
- **vercel.json**: Added security headers and caching policies
- **lib/utils-image.ts**: Simplified image path handling

## Deploying to Vercel

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Login to Vercel**
   ```bash
   vercel login
   ```

2. **Deploy to preview**
   ```bash
   pnpm preview
   # or
   vercel
   ```

3. **Deploy to production**
   ```bash
   pnpm deploy
   # or
   vercel --prod
   ```

### Option 2: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

### Option 3: Deploy via GitHub Integration (Best for continuous deployment)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your GitHub repository: `xl-c111/xiaoling-cui-portfolio`
4. Configure project:
   - **Framework Preset**: Next.js
   - **Build Command**: `pnpm build` (auto-detected)
   - **Install Command**: `pnpm install` (auto-detected)
   - **Root Directory**: `./` (default)
5. Click "Deploy"

**Benefits of GitHub integration:**
- Automatic deployments on every `git push`
- Preview deployments for pull requests
- Instant rollbacks
- Zero configuration

## Post-Deployment

### Custom Domain (Optional)
1. In Vercel dashboard, go to your project
2. Settings → Domains
3. Add your custom domain
4. Update DNS records as instructed

### Environment Variables (If needed)
1. In Vercel dashboard, go to your project
2. Settings → Environment Variables
3. Add any required variables

### Analytics
Your portfolio already includes `@vercel/analytics` - it will automatically start collecting data once deployed.

## Expected Performance

After deploying to Vercel, you should see:
- **Load time**: < 1 second (from edge locations)
- **Lighthouse score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## Useful Commands

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server locally
pnpm start

# Optimize images (if you add new ones)
pnpm optimize-images

# Deploy preview
pnpm preview

# Deploy to production
pnpm deploy
```

## Troubleshooting

### Build fails on Vercel
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify TypeScript types are correct: `pnpm build` locally

### Images not loading
- Verify image files exist in `public/` directory
- Check browser console for errors
- Ensure WebP format is supported (all modern browsers support it)

### Slow performance
- Check Vercel Analytics for insights
- Verify images are WebP format
- Check Network tab in DevTools

## Comparison: GitHub Pages vs Vercel

| Feature | GitHub Pages | Vercel |
|---------|--------------|--------|
| Image optimization | ❌ Manual | ✅ Automatic |
| CDN | ✅ Basic | ✅ 275+ edge locations |
| Build time | ~2 min | ~30 sec |
| Cold start | N/A | None (static) |
| Custom domains | ✅ | ✅ |
| HTTPS | ✅ | ✅ |
| Preview deployments | ❌ | ✅ |
| Analytics | ❌ | ✅ Built-in |
| ISR/SSR | ❌ | ✅ |
| Cost | Free | Free (Hobby plan) |

## Next Steps

1. Deploy to Vercel using one of the methods above
2. Test your portfolio on the preview URL
3. Share your portfolio with interviewers! 🎉
4. (Optional) Add a custom domain for extra professionalism

---

**Your portfolio is now production-ready and optimized for maximum performance!** 🚀
