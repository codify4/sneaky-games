import type React from "react" 
import Sidebar from "@/components/sidebar"
import { Suspense } from "react"

export const metadata = {
  title: "Sneaky Games | Games List",
  description: "Play the best online games for free on Sneaky Games",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <Suspense fallback={<div className="w-64 border-r bg-gray-50 p-4">Loading sidebar...</div>}>
        <Sidebar />
      </Suspense>
      <main className="w-full">{children}</main>
    </div>
  )
}

