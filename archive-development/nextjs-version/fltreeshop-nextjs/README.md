# The Tree Shop - Next.js Website

Professional forestry mulching and land clearing services in Florida.

## 🚀 Project Status - COMPLETE

### ✅ **Next.js Conversion Complete**
- **Converted** from static HTML to modern React/Next.js
- **Preserved** original blue theme, fonts, and visual design  
- **Component-based** architecture for maintainability
- **Mobile responsive** with Tailwind CSS
- **SEO optimized** with proper meta tags

### ✅ **Unified Pricing System**
- **Removed** multiple CTAs ("Request Proposal", "Request Quote", "Generate Estimate")
- **Standardized** to single "Get Pricing" button
- **Integrated** with treeshop.pro for instant pricing
- **Lead capture** modal for contact information

### ✅ **Convex Backend Ready**
- **Schema designed** for lead collection and management
- **API functions** created for CRUD operations
- **Multi-source tracking** (fltreeshop.com, treeshop.app → treeai.app)
- **Ready for integration** once Convex project is deployed

## 🏗️ Architecture Overview

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   fltreeshop.com│    │  treeshop.app   │    │   treeai.app    │
│   (Next.js)     │───▶│   (Next.js)     │───▶│   (Next.js)     │
│   Lead Gen Site │    │   Lead Gen Site │    │   TreeAI CRM    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 ▼
                    ┌─────────────────────────┐
                    │    Convex Backend       │
                    │  - Unified Lead DB      │
                    │  - Real-time Updates   │
                    │  - Cross-site Analytics│
                    └─────────────────────────┘
```

## 🚀 Deployment Instructions

### 1. **Deploy to Vercel**
```bash
# Connect to GitHub and deploy
vercel --prod

# Set custom domain
vercel domains add fltreeshop.com
```

### 2. **Set Up Convex Backend**
```bash
# Initialize Convex (when ready)
npx convex dev

# Deploy Convex functions
npx convex deploy

# Get deployment URL and add to .env.local:
# NEXT_PUBLIC_CONVEX_URL=https://your-project.convex.cloud
```

### 3. **Enable Lead Capture**
After Convex setup, uncomment in:
- `src/components/LeadCaptureForm.tsx` - Convex imports and mutations
- `src/app/layout.tsx` - ConvexProvider wrapper
- `src/providers/ConvexProvider.tsx` - Already created

## 📁 Project Structure

```
fltreeshop-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with analytics
│   │   ├── page.tsx           # Homepage components
│   │   └── globals.css        # Tree Shop blue theme
│   ├── components/
│   │   ├── Header.tsx         # Navigation & mobile menu
│   │   ├── Hero.tsx           # Video background hero
│   │   ├── Services.tsx       # Service offerings
│   │   ├── LeadCaptureForm.tsx # Contact form modal
│   │   ├── Welcome.tsx        # About section
│   │   ├── Testimonials.tsx   # Customer reviews
│   │   └── Footer.tsx         # Site footer
│   └── providers/
│       └── ConvexProvider.tsx  # Backend integration
├── public/
│   ├── images/                # Organized image assets
│   └── videos/                # Video assets
├── vercel.json                # Deployment config
└── package.json               # Dependencies
```

## 🎯 Lead Collection Strategy

### **Multi-Site Funnel**
1. **fltreeshop.com** → Lead capture forms
2. **treeshop.app** → Alternative lead source  
3. **Both sites** → Send leads to TreeAI CRM
4. **treeai.app** → Unified lead management dashboard

### **Tracking & Analytics**
- UTM parameter tracking
- Source attribution (fltreeshop.com vs treeshop.app)
- Google Analytics integration
- Lead conversion metrics

## 🔧 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Live Sites

- **Current Static**: http://localhost:8080 (original)
- **New Next.js**: Ready for deployment
- **Production**: Ready for fltreeshop.com

## 📋 Next Steps

1. **Deploy Next.js site** to Vercel
2. **Set up Convex project** for backend
3. **Connect domain** fltreeshop.com
4. **Test lead capture** end-to-end
5. **Create treeshop.app** (similar structure)
6. **Build treeai.app** CRM dashboard

---

**Status**: Ready for production deployment! ✨