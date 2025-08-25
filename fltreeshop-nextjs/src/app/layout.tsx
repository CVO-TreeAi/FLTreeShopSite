import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { ConvexProvider } from "@/providers/ConvexProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Tree Shop - Professional Forestry Mulching & Land Clearing Services",
  description: "Professional forestry mulching and land clearing services in Florida. Get instant pricing for your land clearing project.",
  keywords: "forestry mulching, land clearing, tree services, Florida, land development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome for icons */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
        />
        {/* Bootstrap Icons */}
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" 
        />
        {/* Google Tag Manager */}
        <script 
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TCMZ2CL');`
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TCMZ2CL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
