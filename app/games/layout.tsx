import type React from "react" 
import Sidebar from "@/components/sidebar"

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
      <Sidebar />
      <main className="w-full">{children}</main>
    </div>
  )
}

