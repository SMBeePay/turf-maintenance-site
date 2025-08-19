#!/bin/bash

# Texas Turf Maintenance - Quick Deployment Script
# This script helps deploy the site and setup analytics

echo "🚀 Texas Turf Maintenance - Deployment Script"
echo "=============================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Run this script from the project root directory"
    exit 1
fi

echo "📦 Building the site..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix errors and try again."
    exit 1
fi

echo "✅ Build successful!"
echo ""
echo "🔧 Deployment Options:"
echo "1. Vercel (Recommended)"
echo "2. Netlify" 
echo "3. Manual Upload"
echo ""

read -p "Choose deployment option (1-3): " choice

case $choice in
    1)
        echo "🚀 Deploying to Vercel..."
        if command -v vercel &> /dev/null; then
            vercel --prod
        else
            echo "📦 Installing Vercel CLI..."
            npm install -g vercel
            vercel --prod
        fi
        ;;
    2)
        echo "🚀 Preparing for Netlify..."
        echo "📁 Upload the 'dist' folder to Netlify manually or connect your GitHub repo"
        echo "🌐 Don't forget to configure custom domain: texasturfmaintenance.com"
        ;;
    3)
        echo "📁 Manual upload ready!"
        echo "Upload contents of 'dist' folder to your web server"
        echo "Make sure to:"
        echo "  - Point domain to hosting"
        echo "  - Enable SSL certificate"
        echo "  - Configure 301 redirects (www to non-www)"
        ;;
    *)
        echo "❌ Invalid option selected"
        exit 1
        ;;
esac

echo ""
echo "✅ Post-Deployment Checklist:"
echo "==============================="
echo "1. ✅ GA4 Tracking: G-PYKPC1JTFZ (Already configured)"
echo "2. 🔄 Verify site loads: https://texasturfmaintenance.com"
echo "3. 🔍 Google Search Console:"
echo "   - Add property: https://texasturfmaintenance.com"
echo "   - Verify ownership with meta tag"
echo "   - Submit sitemap: https://texasturfmaintenance.com/sitemap.xml"
echo "4. 📊 Test GA4 tracking in real-time reports"
echo "5. 🗺️ Bing Webmaster Tools setup"
echo "6. 🏢 Google My Business listings for each city"
echo ""

echo "📋 Quick Tests to Run:"
echo "======================"
echo "curl -I https://texasturfmaintenance.com"
echo "curl -I https://texasturfmaintenance.com/sitemap.xml"
echo "curl -I https://texasturfmaintenance.com/robots.txt"
echo ""

echo "🎯 Priority Pages for Indexing:"
echo "================================"
echo "https://texasturfmaintenance.com/"
echo "https://texasturfmaintenance.com/services"
echo "https://texasturfmaintenance.com/locations"  
echo "https://texasturfmaintenance.com/gmax-testing-dallas"
echo "https://texasturfmaintenance.com/locations/dallas-artificial-turf-maintenance"
echo "https://texasturfmaintenance.com/locations/fort-worth-artificial-turf-maintenance"
echo ""

echo "🎉 Deployment preparation complete!"
echo "📖 See DEPLOYMENT_GUIDE.md for detailed instructions"
echo "📖 See ANALYTICS_SETUP.md for GA4 and Search Console setup"
echo "📖 See indexing-checklist.md for SEO strategy"