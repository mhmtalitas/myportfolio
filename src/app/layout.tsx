import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import dynamic from "next/dynamic";

const SEO = dynamic(() => import('@/components/SEO'), { ssr: true });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web & Mobil Yazılım Çözümleri | Profesyonel Geliştirme Hizmetleri",
  description: "Profesyonel web geliştirme, özel yazılım çözümleri ve mobil uygulama hizmetleri. SEO odaklı ve kullanıcı dostu web siteleri ile dijital varlığınızı güçlendirin.",
  keywords: "web tasarım, yazılım geliştirme, mobil uygulama, SEO, özel yazılım, e-ticaret, web sitesi, dijital çözümler",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  authors: [{ name: "MAT Yazılım" }],
  creator: "MAT Yazılım",
  publisher: "MAT Yazılım",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' }
    ],
    shortcut: '/favicon.png',
    apple: { url: '/app-icon.png', sizes: '180x180', type: 'image/png' },
  },
  appleWebApp: {
    capable: true,
    title: "MAT Yazılım",
    statusBarStyle: "black-translucent",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.matyazilim.com",
    title: "Web & Mobil Yazılım Çözümleri | MAT Yazılım",
    description: "Profesyonel web geliştirme, özel yazılım çözümleri ve mobil uygulama hizmetleri.",
    siteName: "MAT Yazılım",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MAT Yazılım",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web & Mobil Yazılım Çözümleri | MAT Yazılım",
    description: "Profesyonel web geliştirme, özel yazılım çözümleri ve mobil uygulama hizmetleri.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <LanguageProvider>
          <SEO />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
