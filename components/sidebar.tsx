'use client'

import { useEffect, useState } from "react"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import Link from "next/link"
import { CircleUser, GamepadIcon, Menu, ShieldAlert } from 'lucide-react'
import { categories, games } from "@/lib/data"
import data from "@/lib/games.json"
import { slugify } from "./game-card"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "./ui/button"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "F12"){
        e.preventDefault();
        router.push("https://classroom.google.com/");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  const handleCategoryClick = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('category', category);
    router.push(`/games?${params.toString()}`);
  };

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button className="flex lg:hidden items-center space-x-2 rounded-lg px-3 py-2 hover:bg-gray-100">
            <Menu className="h-5 w-5" />
          </button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetTitle>Menu</SheetTitle>
          <nav className="space-y-2">
            <Link
              href="https://classroom.google.com/"
              className="flex items-center space-x-2 px-3 py-2 mt-2 bg-green-500 rounded-full text-white animate-ping"
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
                  <Button
                    variant={'ghost'}
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className="flex items-start justify-start space-x-2 rounded-lg px-3 py-2 text-sm w-full text-left"
                  >
                    <li className="flex flex-row items-start space-x-2">
                      <GamepadIcon className="h-4 w-4" />
                      <span>{category}</span>
                    </li>
                  </Button>
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
          className="flex items-center space-x-2 px-3 py-2 bg-green-500 rounded-full text-white animate-ping"
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
        {/* MARK: ILSENI */}
        {/* Popular Games Section */}
        <div className="py-4">
          <h4 className="mb-2 px-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
            Popular Games
          </h4>
          {data.slice(9, 15).map((game, index) => (
            <Link
              key={index}
              href={`/games/${slugify(game.title)}`} 
              className="flex items-center space-x-2 rounded-lg px-3 py-2 text-sm hover:bg-gray-100"
            >
              <GamepadIcon className="h-4 w-4" />
              <span>{game.title}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
}
export default Sidebar