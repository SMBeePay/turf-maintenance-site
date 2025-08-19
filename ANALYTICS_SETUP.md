# Analytics & Search Console Setup Guide

## Google Analytics 4 (GA4) Setup

### Step 1: Create GA4 Property
1. Go to [Google Analytics](https://analytics.google.com)
2. Click "Create" → "Property"
3. Enter property details:
   - Property name: "Texas Turf Maintenance"
   - Reporting time zone: "United States - Central Time"
   - Currency: "US Dollar"
4. Complete the "About your business" section:
   - Industry category: "Professional Services"
   - Business size: "Small (1-9 employees)" 
   - Business objectives: "Generate leads"

### Step 2: Set up Data Stream
1. Choose "Web" as your platform
2. Enter website details:
   - Website URL: `https://texasturfmaintenance.com`
   - Stream name: "Texas Turf Maintenance Website"
3. Copy the Measurement ID (format: G-XXXXXXXXXX)

### Step 3: Update Analytics Component
1. Open `/src/components/Analytics.astro`
2. Replace `GA4_MEASUREMENT_ID` with your actual measurement ID
3. Add the Analytics component to your pages by including:
   ```astro
   ---
   import Analytics from '../components/Analytics.astro';
   ---
   
   <head>
     <!-- other head content -->
     <Analytics />
   </head>
   ```

## Google Search Console Setup

### Step 1: Add Property
1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Click "Add Property"
3. Choose "URL prefix" method
4. Enter: `https://texasturfmaintenance.com`

### Step 2: Verify Ownership
Choose one of these verification methods:

#### Method 1: HTML meta tag (Recommended)
1. Copy the verification meta tag from Search Console
2. Update the Analytics component:
   ```html
   <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
   ```

#### Method 2: HTML file upload
1. Download the verification HTML file from Search Console
2. Upload it to `/public/` directory
3. Verify it's accessible at `https://texasturfmaintenance.com/googleXXXXXXXX.html`

### Step 3: Submit Sitemap
1. After verification, go to "Sitemaps" in the left menu
2. Add new sitemap: `https://texasturfmaintenance.com/sitemap.xml`
3. Submit the sitemap

## Additional Search Engine Setup

### Bing Webmaster Tools
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters/)
2. Add your site: `https://texasturfmaintenance.com`
3. Verify using meta tag method
4. Submit sitemap: `https://texasturfmaintenance.com/sitemap.xml`

### Yahoo (Powered by Bing)
Yahoo search results are powered by Bing, so Bing Webmaster Tools covers both.

## Conversion Tracking Setup

### Key Conversions to Track
1. **Phone Calls** - Clicks on phone numbers
2. **Form Submissions** - Contact form completions  
3. **Emergency Contacts** - Emergency hotline clicks
4. **Service Page Engagement** - Time spent on service pages
5. **Location Page Views** - Local search engagement

### Setting up GA4 Conversions
1. In GA4, go to "Configure" → "Conversions"
2. Create new conversion events:
   - `phone_call_click`
   - `form_submit`
   - `emergency_contact`
   - `engaged_time` (for sessions > 2 minutes)

## Local SEO Tracking

### Google My Business Integration
1. Claim your Google My Business listing
2. Link it to your GA4 property
3. Monitor local search performance

### Local Keywords to Monitor
- "artificial turf maintenance [city]"
- "sports field maintenance [city]" 
- "GMAX testing [city]"
- "turf cleaning [city]"
- "football field maintenance [city]"

## Advanced Analytics Features

### Enhanced Ecommerce (for Service Quotes)
If you plan to add online quoting, set up Enhanced Ecommerce:
1. Enable Enhanced Ecommerce in GA4
2. Track service quote requests as transactions
3. Set up funnel analysis for the quote process

### Cross-Domain Tracking (if needed)
If you have multiple domains or subdomains:
1. Configure cross-domain tracking in GA4
2. Update the gtag configuration with additional domains

## Data Analysis & Reporting

### Key Metrics to Monitor
1. **Local Search Performance**
   - Organic traffic from location-specific keywords
   - Location page engagement rates
   - Local conversion rates

2. **Service Page Performance** 
   - Time on page for service pages
   - Bounce rate by service type
   - Path analysis from service pages to contact

3. **Lead Generation Metrics**
   - Phone call conversion rate
   - Form submission rate
   - Emergency contact engagement
   - Cost per lead (if running ads)

### Custom Reports to Create
1. **Local Search Dashboard**
   - City-specific traffic and conversions
   - Local keyword performance
   - Geographic user distribution

2. **Service Performance Report**
   - Traffic and engagement by service type
   - Conversion paths from service discovery to contact
   - Seasonal trends in service demand

3. **Mobile vs Desktop Analysis**
   - Device-specific conversion rates
   - Mobile user behavior patterns
   - Page speed impact on conversions

## Implementation Checklist

- [ ] GA4 property created and configured
- [ ] Measurement ID added to Analytics.astro
- [ ] Google Search Console property verified  
- [ ] Sitemap submitted to Search Console
- [ ] Bing Webmaster Tools setup completed
- [ ] Analytics component added to all pages
- [ ] Conversion events configured in GA4
- [ ] Phone call tracking implemented
- [ ] Form submission tracking setup
- [ ] Local business schema markup added
- [ ] Test all tracking with GA4 Debug View
- [ ] Set up automated reporting dashboards

## Testing Your Setup

### GA4 Real-Time Testing
1. Open GA4 and go to "Reports" → "Realtime"
2. Visit your website in another browser/incognito
3. Verify you see your visit in real-time
4. Test phone number clicks and form submissions

### Search Console Testing
1. Use "URL Inspection" tool to test individual pages
2. Request indexing for new pages
3. Monitor for crawl errors or issues

### Debug Mode
Enable GA4 debug mode to see detailed event tracking:
```javascript
gtag('config', 'YOUR_GA4_ID', {
  debug_mode: true
});
```

## Maintenance & Monitoring

### Regular Tasks
- **Weekly**: Check Search Console for new issues
- **Monthly**: Review GA4 conversion data and adjust tracking
- **Quarterly**: Analyze local search performance and update strategy
- **Annually**: Review and update conversion goals

### Key Reports to Monitor
1. Search Console Performance Report (weekly)
2. GA4 Acquisition Reports (weekly)  
3. Local search ranking positions (monthly)
4. Conversion funnel analysis (monthly)

## Troubleshooting

### Common Issues
1. **GA4 not tracking**: Check measurement ID and script placement
2. **Search Console verification fails**: Ensure meta tag is in `<head>` section
3. **Sitemap errors**: Verify XML syntax and URL accessibility
4. **Conversion tracking not working**: Test with GA4 Debug View

### Support Resources
- [GA4 Help Center](https://support.google.com/analytics/)
- [Search Console Help](https://support.google.com/webmasters/)
- [Local SEO Guide](https://developers.google.com/search/docs/advanced/guidelines/local-business)