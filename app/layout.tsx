import { Inter } from "next/font/google"
import "./globals.css"
import { Nav } from "@/components/nav"
import type React from "react" // Added import for React

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
        <Nav />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  )
}

