import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Smart post - Zamonaviy Pochta Xizmatlari",
  description: "Jo'natmalarni kuzatish, xalqaro pochta xizmatlari va onlayn to'lovlar - barchasi bir platformada",
}

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
