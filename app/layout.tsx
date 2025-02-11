import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react" 
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Sneaky Games - Play Awesome Games Online",
  description: "Play the best online games for free on Sneaky Games",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

