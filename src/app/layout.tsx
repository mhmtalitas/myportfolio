import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import dynamic from "next/dynamic";

const SEO = dynamic(() => import('@/components/SEO'), { ssr: true });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mehmet Alitaş | Trabzon Web & Mobil Yazılım Geliştirme ve SEO Hizmetleri",
  description: "Trabzon'da profesyonel web tasarım, mobil uygulama geliştirme ve SEO hizmetleri. Tüm Türkiye'ye hizmet veren yazılım uzmanı.",
  keywords: "web tasarım Trabzon, mobil uygulama geliştirme, SEO, web sitesi, yazılım, Trabzon yazılım, e-ticaret, dijital pazarlama, Karadeniz bölgesi, Türkiye geneli, özel yazılım çözümleri",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  authors: [{ name: "Mehmet Alitaş" }],
  creator: "Mehmet Alitaş",
  publisher: "Mehmet Alitaş",
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
    title: "Mehmet Alitaş",
    statusBarStyle: "black-translucent",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.mehmetalitas.com",
    title: "Mehmet Alitaş | Trabzon Web & Mobil Yazılım Geliştirme ve SEO Hizmetleri",
    description: "Trabzon'da profesyonel web tasarım, mobil uygulama geliştirme ve SEO hizmetleri. Tüm Türkiye'ye hizmet veren yazılım uzmanı.",
    siteName: "Mehmet Alitaş",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mehmet Alitaş - Web & Yazılım Hizmetleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehmet Alitaş | Trabzon Web & Mobil Yazılım Geliştirme",
    description: "Trabzon'da profesyonel web tasarım, mobil uygulama geliştirme ve SEO hizmetleri.",
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
