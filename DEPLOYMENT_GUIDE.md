# Deployment & Domain Configuration Guide

## Quick Deployment Steps

### Option 1: Vercel Deployment (Recommended - Fastest)

**Step 1: Deploy to Vercel**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
cd turf-maintenance-site
vercel

# Follow prompts:
# - Project name: texas-turf-maintenance
# - Framework preset: Astro
# - Root directory: ./
```

**Step 2: Configure Custom Domain**
1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add domain: `texasturfmaintenance.com`
4. Add www redirect: `www.texasturfmaintenance.com` → `texasturfmaintenance.com`

**Step 3: Update DNS Records**
Point your domain's DNS to Vercel:
```
Type: A
Name: @
Value: 76.76.19.61

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

### Option 2: Netlify Deployment

**Step 1: Build and Deploy**
```bash
npm run build
# Upload dist/ folder to Netlify or connect GitHub repo
```

**Step 2: Configure Domain**
1. Go to Netlify dashboard
2. Site settings → Domain management
3. Add custom domain: `texasturfmaintenance.com`
4. Configure DNS with provided values

### Option 3: Traditional Web Hosting

**Step 1: Build Static Site**
```bash
npm run build
# This creates a dist/ folder with static files
```

**Step 2: Upload Files**
- Upload contents of `dist/` folder to your web hosting root directory
- Ensure SSL certificate is configured
- Set up 301 redirects for www to non-www

## DNS Configuration

### Required DNS Records
```
# Root domain
Type: A
Name: @
Value: [Your hosting IP or Vercel IP]

# WWW subdomain  
Type: CNAME
Name: www
Value: [Your hosting domain or cname.vercel-dns.com]

# Optional: Email if needed
Type: MX
Name: @
Value: [Your email provider's MX records]
```

## Post-Deployment Checklist

### ✅ Immediate Actions (Within 24 hours)
- [ ] Verify SSL certificate is active (https:// works)
- [ ] Test all pages load correctly
- [ ] Verify sitemap.xml is accessible: `https://texasturfmaintenance.com/sitemap.xml`  
- [ ] Check robots.txt: `https://texasturfmaintenance.com/robots.txt`
- [ ] Test contact forms (if implemented)
- [ ] Verify phone number links work on mobile
- [ ] Test page load speeds with PageSpeed Insights

### ✅ SEO Setup (Within 48 hours)
- [ ] Google Search Console verification
  - Add property: `https://texasturfmaintenance.com`
  - Use HTML meta tag verification method
  - Submit sitemap: `https://texasturfmaintenance.com/sitemap.xml`
- [ ] Google Analytics 4 setup
  - Update measurement ID in Analytics.astro
  - Verify tracking is working in real-time reports
- [ ] Bing Webmaster Tools
  - Add site and verify
  - Submit sitemap

### ✅ Local SEO (Within 1 week)
- [ ] Google My Business setup
  - Claim listing for main service area
  - Add accurate business information
  - Upload service photos
- [ ] Local directory submissions
  - Yelp Business
  - Better Business Bureau
  - Industry-specific directories

## Analytics Implementation

### Update Analytics Configuration
After deployment, update the Analytics component:

1. **Get your GA4 Measurement ID:**
   - Go to Google Analytics
   - Admin → Data Streams → Web Stream
   - Copy Measurement ID (G-XXXXXXXXXX)

2. **Update the component:**
```astro
// In /src/components/Analytics.astro
const GA4_MEASUREMENT_ID = 'G-YOUR-ACTUAL-ID' // Replace this
```

3. **Update Google Search Console verification:**
```html
<!-- Replace with your actual verification code -->
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
```

## Performance Optimization

### CDN Configuration (Vercel automatic, others manual)
- Enable gzip compression
- Set proper cache headers for static assets
- Configure image optimization if available

### Monitoring Setup
```bash
# Test page speeds after deployment
npm install -g lighthouse
lighthouse https://texasturfmaintenance.com --view
```

## Testing Your Deployment

### Functionality Tests
```bash
# Test all pages load (replace with your domain)
curl -I https://texasturfmaintenance.com
curl -I https://texasturfmaintenance.com/services
curl -I https://texasturfmaintenance.com/locations
curl -I https://texasturfmaintenance.com/contact
```

### SEO Tests
1. **Rich Results Test:**
   - Go to: https://search.google.com/test/rich-results
   - Test your homepage for structured data

2. **Mobile-Friendly Test:**
   - Go to: https://search.google.com/test/mobile-friendly
   - Test your main pages

3. **PageSpeed Insights:**
   - Go to: https://pagespeed.web.dev/
   - Test homepage and key service pages

## Immediate Indexing Actions

### Google Search Console URL Inspection
After verification, request indexing for these priority pages:
1. `https://texasturfmaintenance.com/` (Homepage)
2. `https://texasturfmaintenance.com/services`
3. `https://texasturfmaintenance.com/locations`
4. `https://texasturfmaintenance.com/gmax-testing-dallas`
5. `https://texasturfmaintenance.com/locations/dallas-artificial-turf-maintenance`
6. `https://texasturfmaintenance.com/locations/fort-worth-artificial-turf-maintenance`

### Search Engine Submissions
**Google:** Automatic via Search Console
**Bing:** Submit at https://www.bing.com/webmasters/
**Others:** Most use Google/Bing data

## Troubleshooting Common Issues

### SSL Certificate Issues
- Verify DNS propagation with: https://www.whatsmydns.net/
- Clear browser cache and test in incognito mode
- Contact hosting provider if SSL doesn't activate within 24 hours

### Analytics Not Tracking
- Check browser console for JavaScript errors
- Verify GA4 measurement ID is correct
- Test in GA4 real-time view while browsing site

### Search Console Verification Fails
- Ensure meta tag is in the `<head>` section of all pages
- Clear DNS cache and wait for propagation
- Try alternative verification methods (HTML file upload)

### Pages Not Loading
- Check for case sensitivity in file names
- Verify all internal links use correct paths
- Test different browsers and devices

## Success Metrics Timeline

### Week 1:
- Site fully operational with SSL
- Analytics tracking confirmed
- Search Console verified and sitemap submitted

### Week 2-3:
- First pages indexed by Google
- Local SEO listings active
- Basic keyword tracking established

### Month 1-2:
- Organic traffic beginning
- Local search visibility improving
- Lead generation from website starting

Remember: Domain propagation can take 24-48 hours, and SEO results typically take 2-3 months to fully develop. Focus on creating quality content and building local business relationships during the early stages.