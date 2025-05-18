// 'app/layout.js' fayli
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

// Font sozlamasi - display va preload kiritildi
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata = {
  title: "Smart post - Zamonaviy Pochta Xizmatlari",
  description: "Jo'natmalarni kuzatish, xalqaro pochta xizmatlari va onlayn to'lovlar - barchasi bir platformada",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body className={inter.className} suppressHydrationWarning={true}>
        {/* suppressHydrationWarning - React'ga mismatch bo‘lsa ham ogohlantirishsizlikka ruxsat beradi */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
