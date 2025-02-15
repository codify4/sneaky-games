'use client'

import { useState } from "react"
import { Sheet, SheetTrigger, SheetContent, SheetHeader } from "@/components/ui/sheet"
import Link from "next/link"
import { CircleUser, GamepadIcon, Menu, ShieldAlert } from 'lucide-react'
import { categories, games } from "@/lib/data"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button className="flex lg:hidden items-center space-x-2 rounded-lg px-3 py-2 hover:bg-gray-100">
            <Menu className="h-5 w-5" />
          </button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <h2 className="text-sm font-semibold">Menu</h2>
          </SheetHeader>
          <nav className="space-y-2">
            <Link
              href="https://classroom.google.com/"
              className="flex items-center space-x-2 px-3 py-2 mt-2 bg-destructive rounded-full text-white animate-ping"
            >
              <ShieldAlert className="h-5 w-5" />
              <span>Panic Button</span>
            </Link>
            <Link
              href="/games/account"
              className="flex items-center space-x-2 rounded-lg px-3 py-2 hover:bg-gray-100"
            >
              <CircleUser className="h-5 w-5" />
              <span>Account</span>
            </Link>
            {/* Categories Section */}
            <div className="py-4">
              <h4 className="mb-2 px-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
                Categories
              </h4>
              <ol>
                {categories.map((category) => (
                  <Link
                    key={category}
                    href={"/games"}
                    className="flex items-center space-x-2 rounded-lg px-3 py-2 text-sm hover:bg-gray-100"
                  >
                    <li className="flex flex-row items-center space-x-2">
                      <GamepadIcon className="h-4 w-4" />
                      <span>{category}</span>
                    </li>
                  </Link>
                ))}
              </ol>
            </div>
            {/* Popular Games Section */}
            <div className="py-4">
              <h4 className="mb-2 px-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
                Popular Games
              </h4>
              {games.slice(0, 5).map((game) => (
                <Link
                  key={game.id}
                  href={`/games/${game.id}`}
                  className="flex items-center space-x-2 rounded-lg px-3 py-2 text-sm hover:bg-gray-100"
                >
                  <GamepadIcon className="h-4 w-4" />
                  <span>{game.name}</span>
                </Link>
              ))}
            </div>
          </nav>
        </SheetContent>
      </Sheet>

      <nav className="hidden lg:block w-64 border-r bg-gray-50 p-4 space-y-2">
        <Link
          href="https://classroom.google.com/"
          className="flex items-center space-x-2 px-3 py-2 bg-destructive rounded-full text-white animate-ping"
        >
          <ShieldAlert className="h-5 w-5" />
          <span>Panic Button</span>
        </Link>
        <Link
          href="/games/account"
          className="flex items-center space-x-2 rounded-lg px-3 py-2 hover:bg-gray-100"
        >
          <CircleUser className="h-5 w-5" />
          <span>Account</span>
        </Link>
        {/* Categories Section */}
        <div className="py-4">
          <h4 className="mb-2 px-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
            Categories
          </h4>
          <ol>
            {categories.map((category) => (
              <Link
                key={category}
                href={`/games?category=${category}`}
                className="flex items-center space-x-2 rounded-lg px-3 py-2 text-sm hover:bg-gray-100"
              >
                <li className="flex flex-row items-center space-x-2">
                  <GamepadIcon className="h-4 w-4" />
                  <span>{category}</span>
                </li>
              </Link>
            ))}
          </ol>
        </div>
        {/* Popular Games Section */}
        <div className="py-4">
          <h4 className="mb-2 px-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
            Popular Games
          </h4>
          {games.slice(0, 5).map((game) => (
            <Link
              key={game.id}
              href={`/games/${game.id}`}
              className="flex items-center space-x-2 rounded-lg px-3 py-2 text-sm hover:bg-gray-100"
            >
              <GamepadIcon className="h-4 w-4" />
              <span>{game.name}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
}
export default Sidebar