# Complete Google APIs Setup for TreeShop

## 🔑 **OAuth Credentials Setup**
```
Client ID: [Your Google OAuth Client ID]
Client Secret: [Your Google OAuth Client Secret]  
API Key: [Your Google Maps API Key]
```

**Note**: Actual credentials are stored securely in `.env.local` file (not committed to git)

## 📋 **ALL Google APIs to Enable in Your Project**

### **🗺️ MAPS & LOCATION (Essential for Estimate System)**
1. ✅ **Maps JavaScript API** - Address autocomplete, map display
2. ✅ **Places API** - Address validation and autocomplete  
3. ✅ **Geocoding API** - Address to coordinates conversion
4. ✅ **Distance Matrix API** - Travel time/distance calculation
5. ⭐ **Directions API** - Route optimization (optional)
6. ⭐ **Roads API** - Snap to roads for accuracy (optional)

### **📊 ANALYTICS & TRACKING (Critical for Business Intelligence)**
7. ✅ **Google Analytics Data API** - Website analytics data
8. ✅ **Google Analytics Reporting API** - Custom reports
9. ✅ **Analytics Intelligence API** - AI-powered insights

### **🎯 ADVERTISING & MARKETING (Revenue Optimization)**
10. ✅ **Google Ads API** - Campaign management, conversion tracking
11. ✅ **Google Ads Conversion Tracking** - ROI measurement
12. ✅ **Campaign Manager 360 API** - Advanced attribution
13. ✅ **Display & Video 360 API** - Programmatic advertising

### **📧 BUSINESS COMMUNICATION (Customer Management)**
14. ✅ **Gmail API** - Send proposals, lead notifications
15. ✅ **Google Calendar API** - Site visit scheduling
16. ✅ **Google Contacts API** - Customer database sync
17. ✅ **Google Workspace Admin SDK** - Team coordination

### **🏢 BUSINESS LISTINGS (Local SEO)**
18. ✅ **Google Business Profile Performance API** - Reviews, posts, insights
19. ✅ **Google My Business API** - Location management (legacy)

### **🔍 SEO & PERFORMANCE (Website Optimization)**
20. ✅ **Search Console API** - Search performance data
21. ✅ **PageSpeed Insights API** - Site speed monitoring
22. ✅ **Web Risk API** - Security scanning

### **☁️ STORAGE & DOCUMENTS (File Management)**
23. ✅ **Google Drive API** - PDF storage, document management
24. ✅ **Google Sheets API** - Lead tracking, data exports
25. ✅ **Google Docs API** - Proposal templates
26. ✅ **Cloud Storage JSON API** - Media file storage

### **🤖 AI & MACHINE LEARNING (TreeAI Integration)**
27. ✅ **Cloud Natural Language API** - Review sentiment analysis
28. ✅ **Cloud Vision API** - Property photo analysis
29. ✅ **Cloud Translation API** - Multi-language support
30. ✅ **AutoML API** - Custom AI models

---

## 🎯 **Recommended Enable Order**

### **Phase 1: Essential (Enable Today)**
1. Maps JavaScript API ⭐
2. Places API ⭐
3. Geocoding API ⭐
4. Distance Matrix API ⭐
5. Google Analytics Data API ⭐

### **Phase 2: Business (Enable This Week)**
6. Gmail API 📧
7. Google Ads API 💰
8. Business Profile Performance API 🏢
9. Google Calendar API 📅

### **Phase 3: Advanced (Enable Later)**
10. All remaining APIs as needed

---

## 🔧 **Current Integration Status**

### **✅ Already Configured:**
- **API Key**: Integrated in estimate system
- **Analytics**: GA4 + GTM tracking configured
- **OAuth**: Client ID/Secret ready for authentication

### **✅ Ready to Test:**
- **Address autocomplete**: http://localhost:4321/estimate
- **Distance calculation**: Real-time transport pricing
- **4-step process**: Contact → Service → Details → Proposal

### **🚀 Next Steps:**
1. **Enable the Phase 1 APIs** in Google Cloud Console
2. **Test estimate system** with real addresses
3. **Deploy to production** with fltreeshop.com domain
4. **Add conversion tracking** for lead optimization

---

## 📱 **Multi-Site API Strategy**

### **Same APIs, Different Themes:**
- **fltreeshop.com** - TreeShop blue theme (this site)
- **treeshop.app** - Different theme, same pricing engine
- **treeai.app** - CRM dashboard with all API integrations

### **Shared OAuth App:**
Your `FLTreeShopAstro` OAuth app can serve all three sites by adding their domains to the authorized origins list when ready.

**Enable those Phase 1 APIs and let's test the Google Maps integration!** 🗺️