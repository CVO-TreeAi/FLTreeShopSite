# Google APIs Configuration for TreeShop Website

## 🔑 **Current API Key**
```
GOOGLE-API-KEY=AIzaSyCfpqXu-EQV5MWIFBodDFB1K3VZtz1kF5A
```

## 📋 **Required Google APIs for TreeShop Website**

### **🗺️ Core Functionality APIs**

#### **1. Maps JavaScript API** ⭐ **CRITICAL**
- **Purpose**: Address autocomplete, property location validation, distance calculation
- **Used in**: `/estimate` page for project address and transportation pricing
- **Features needed**:
  - Places Autocomplete
  - Geocoding for address validation  
  - Distance Matrix for transport cost calculation
- **Libraries**: `places,geometry,drawing`

#### **2. Places API** ⭐ **CRITICAL**
- **Purpose**: Address autocomplete dropdown, address validation
- **Used in**: `/estimate` contact form
- **Features needed**:
  - Place Autocomplete (Address forms)
  - Place Details (Validation)
  - Place Photos (Property images - optional)

#### **3. Geocoding API** ⭐ **CRITICAL**
- **Purpose**: Convert addresses to coordinates for distance calculation
- **Used in**: Transportation cost calculation from New Smyrna Beach base
- **Features needed**:
  - Address to coordinates conversion
  - Reverse geocoding for validation

#### **4. Distance Matrix API** ⭐ **CRITICAL**
- **Purpose**: Calculate travel time/distance for transportation pricing
- **Used in**: Estimate calculator for $350/hour transport cost
- **Features needed**:
  - Driving time calculation
  - Distance calculation
  - Real-time traffic data

---

### **📊 Analytics & Tracking APIs**

#### **5. Google Analytics 4 (GA4)** ⭐ **ESSENTIAL**
- **Current ID**: `G-SGQG1JY4BJ` ✅ (already configured)
- **Purpose**: Website traffic, conversion tracking, user behavior
- **Events to track**:
  - Estimate started
  - Service selected  
  - Proposal generated
  - PDF downloaded
  - Phone calls clicked

#### **6. Google Tag Manager** ⭐ **ESSENTIAL**  
- **Current ID**: `GTM-TCMZ2CL` ✅ (already configured)
- **Purpose**: Event tracking, conversion pixels, remarketing
- **Events to configure**:
  - Lead capture
  - Estimate completion
  - PDF downloads
  - Phone clicks

---

### **🎯 Marketing & Advertising APIs**

#### **7. Google Ads API** 💰 **IMPORTANT**
- **Purpose**: Track conversions, optimize ad spend, lead scoring
- **Conversions to track**:
  - Estimate requests (`estimate_started`)
  - Proposal completions (`proposal_generated`) 
  - Phone calls (`phone_clicked`)
  - PDF downloads (`pdf_downloaded`)

#### **8. Google Ads Conversion Tracking**
- **Purpose**: Measure ROI from Google Ads campaigns
- **Implementation**: JavaScript pixel + server-side API
- **Conversion values**: Use estimate total as conversion value

---

### **📧 Business Integration APIs**

#### **9. Gmail API** 📧 **IMPORTANT**
- **Purpose**: Send automated emails, lead notifications
- **Used for**:
  - Customer proposal emails
  - Internal lead notifications
  - Follow-up sequences
- **Scopes needed**: `gmail.send`, `gmail.compose`

#### **10. Google Calendar API** 📅 **USEFUL**
- **Purpose**: Schedule site visits, project coordination
- **Features**:
  - Automatic calendar events for estimates
  - Site visit scheduling
  - Project timeline management

#### **11. Google Drive API** 📁 **USEFUL**
- **Purpose**: Store proposal PDFs, project documents
- **Features**:
  - PDF proposal storage
  - Customer document management
  - Project photo storage

---

### **🏢 Business Listing APIs**

#### **12. Google Business Profile API** ⭐ **ESSENTIAL**
- **Purpose**: Manage Google Business listings, reviews, posts
- **Features**:
  - Automatic review responses
  - Business post updates
  - Location management
  - Review monitoring

#### **13. My Business API (Legacy)**
- **Purpose**: Backup for Business Profile management
- **Note**: Being deprecated, use Business Profile API instead

---

### **🔍 SEO & Performance APIs**

#### **14. Google Search Console API** 📈 **IMPORTANT**
- **Purpose**: Monitor search performance, index status
- **Features**:
  - Keyword ranking tracking
  - Click-through rates
  - Index coverage monitoring
  - Site performance data

#### **15. PageSpeed Insights API** ⚡ **USEFUL**
- **Purpose**: Monitor website performance
- **Features**:
  - Core Web Vitals tracking
  - Performance recommendations
  - Mobile usability testing

---

## 🔧 **API Key Recommendations**

### **Option 1: Single Key (Current Setup)** ✅ **RECOMMENDED**
```
GOOGLE-API-KEY=AIzaSyCfpqXu-EQV5MWIFBodDFB1K3VZtz1kF5A
```
**Pros**: 
- Simpler management
- All APIs under one key
- Easier billing tracking

**Cons**:
- Higher security risk if compromised
- Harder to debug specific API issues

### **Option 2: Separate Keys** 🔒 **MORE SECURE**
```
GOOGLE_MAPS_API_KEY=AIzaSyCfpqXu-EQV5MWIFBodDFB1K3VZtz1kF5A
GOOGLE_ANALYTICS_API_KEY=[separate-key]
GOOGLE_ADS_API_KEY=[separate-key]
GMAIL_API_KEY=[separate-key]
```

## 📋 **APIs to Enable in Google Cloud Console**

### **CRITICAL (Enable First):**
1. ✅ Maps JavaScript API
2. ✅ Places API  
3. ✅ Geocoding API
4. ✅ Distance Matrix API

### **ANALYTICS (Enable Second):**
5. ✅ Google Analytics Data API
6. ✅ Google Analytics Reporting API

### **MARKETING (Enable Third):**
7. ✅ Google Ads API
8. ✅ Campaign Manager 360 API

### **BUSINESS (Enable Fourth):**
9. ✅ Gmail API
10. ✅ Google Calendar API
11. ✅ Google Drive API  
12. ✅ Business Profile Performance API

### **SEO (Enable Last):**
13. ✅ Search Console API
14. ✅ PageSpeed Insights API

---

## 🎯 **TreeShop Multi-Site Strategy**

### **API Usage Across Properties:**
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ fltreeshop.com  │    │  treeshop.app   │    │   treeai.app    │
│ - Maps API      │    │ - Same APIs     │    │ - All APIs      │
│ - Analytics     │───▶│ - Analytics     │───▶│ - CRM Dashboard │ 
│ - Lead Capture  │    │ - Lead Capture  │    │ - Reporting     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 ▼
                    ┌─────────────────────────┐
                    │     Google Cloud        │
                    │  - Unified Analytics    │
                    │  - Cross-site Tracking │
                    │  - Centralized APIs     │
                    └─────────────────────────┘
```

---

## 🚀 **Current Status**

✅ **Maps API integrated** with your key  
✅ **Analytics configured** (GA4 + GTM)  
✅ **Estimate system** ready for testing  
✅ **TreeShop blue theme** maintained  

**Next**: Enable the APIs above and test at **http://localhost:4321/estimate**

Would you prefer **one API key for everything** or **separate keys for security**?