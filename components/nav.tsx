"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export function Nav() {

  return (
    <header className="z-50 fixed top-0 w-full border-b bg-white">
      <nav className="container flex h-16 items-center">
        <div className="mr-8">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Sneaky Games Logo"
              width={60}
              height={30}
            />
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-between">
          <ul className="flex items-center space-x-6">
            <Link href="/games" className="text-sm font-medium">
              Games
            </Link>
            <Link href="/about" className="text-sm font-medium">
              About Us
            </Link>
            <Link href="/suggestions" className="text-sm font-medium">
              Suggest
            </Link>
          </ul>
          <div className="flex items-center space-x-4 ml-3">
            <Link href="/signin">
              <Button className="bg-neon hover:bg-neon/70 text-black lg:px-10 rounded-lg">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

