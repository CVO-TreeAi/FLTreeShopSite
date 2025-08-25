# The Tree Shop - Astro Website

Professional forestry mulching and land clearing services in Florida.

## 🚀 **Astro-Powered TreeShop Website**

This repository contains the complete TreeShop website built with Astro, featuring the TreeShopBlueWhite design system and integrated Google Maps pricing calculator.

### **🌐 Live Development:**
- **Homepage**: http://localhost:4321
- **Estimate System**: http://localhost:4321/estimate
- **Maps Testing**: http://localhost:4321/maps-test-improved

### **📁 Repository Structure:**
```
FLTreeShopSite/
├── src/
│   ├── layouts/Layout.astro          # Main layout with TreeShop theme
│   ├── pages/
│   │   ├── index.astro              # Homepage with video hero
│   │   ├── estimate.astro           # 4-step pricing system
│   │   └── maps-test.astro          # Google Maps API testing
│   └── components/                   # Reusable Astro components
├── public/
│   ├── images/                      # Organized media assets
│   ├── videos/                      # Video backgrounds
│   ├── assets/                      # CSS, JS, fonts
│   └── TreeShopDesignSystem/        # Complete brand guidelines
├── archive-development/             # Previous versions (static, Next.js)
├── astro.config.mjs                # Astro configuration
└── package.json                     # Astro dependencies
```

## 🎨 **TreeShopBlueWhite Design System**

Complete brand identity system featuring:
- **Professional blue color palette** (#2563eb primary)
- **Typography scale** with Inter font family
- **Component library** for buttons, cards, forms
- **Animation system** for smooth interactions
- **Responsive breakpoints** for all devices

**View Examples**: `/public/TreeShopDesignSystem/`

## 💰 **Estimate System Features**

### **4-Step Pricing Process:**
1. **Contact & Address** - Google Maps autocomplete validation
2. **Service Selection** - Forestry Mulching vs Land Clearing
3. **Project Details** - Acreage and package selection
4. **Final Proposal** - PDF generation and next steps

### **Pricing Structure:**
- **Forestry Mulching**: $2,125-$4,250/acre (4 packages)
- **Land Clearing**: $3,000-$10,000/acre (5 packages)
- **Transportation**: $350/hour from New Smyrna Beach base
- **10% project cushion** included in all estimates

## 🔧 **Development**

### **Setup:**
```bash
npm install
npm run dev    # Start development server
npm run build  # Build for production
```

### **Environment Variables:**
Copy `.env.example` to `.env.local` and add:
- Google Maps API Key
- OAuth credentials (if using advanced features)

## 🚀 **Deployment**

**Ready for Vercel deployment:**
```bash
vercel --prod
```

**Domain**: fltreeshop.com (production)

## 🎯 **Multi-Site Strategy**

This Astro site serves as the foundation for:
- **fltreeshop.com** - TreeShop blue theme (this repo)
- **treeshop.app** - Different theme, same pricing engine
- **treeai.app** - CRM dashboard for unified lead management

## 📊 **Google APIs Integration**

**Configured APIs:**
- Maps JavaScript API (address autocomplete)
- Places API (address validation)
- Distance Matrix API (transport calculation)
- Geocoding API (coordinate conversion)
- Analytics (GA4 + GTM tracking)

**OAuth App**: FLTreeShopAstro
- Supports development and production domains
- Ready for advanced Google integrations

## 🌲 **TreeShop Business Features**

- **Professional branding** with forestry industry focus
- **Lead capture system** ready for TreeAI CRM integration
- **Real-time pricing** with accurate transport costs
- **Mobile-first design** for field accessibility
- **SEO optimized** for Florida land clearing searches

---

**Built by The Tree Shop** | **Powered by Astro** | **Ready for Production** ✨