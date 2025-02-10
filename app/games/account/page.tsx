"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LogOut, Upload } from 'lucide-react'
import { favoriteGames, games } from "@/lib/data"

export default function AccountPage() {

  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-8 text-center text-2xl font-bold uppercase tracking-wider">
        User Settings
      </h1>

      {/* Avatar Section */}
      <div className="mb-8 flex flex-col items-center space-y-4">
        <div className="relative">
          <Avatar className="h-32 w-32">
            <AvatarImage src={'/logo.png'} alt="User avatar" />
            <AvatarFallback>UN</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Form Section */}
      <Card className="mb-8 p-6">
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              placeholder="Enter your username"
              defaultValue="Username"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              defaultValue="user@example.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              defaultValue="********"
            />
          </div>
        </form>
      </Card>

      {/* Favorite Games Section */}
      <Card className="mb-8 p-6">
        <h2 className="mb-4 text-center text-xl font-semibold uppercase tracking-wider">
          Favorite Games
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {games.slice(0, 3).map((game) => (
            <a key={game.id} href={`/games/${game.id}`} className="aspect-square overflow-hidden rounded-lg cursor-pointer">
              <Image
                src={game.imageUrl || "/placeholder.svg"}
                alt={game.name}
                width={200}
                height={200}
                className="h-full w-full object-cover transition-transform hover:scale-110"
              />
            </a>
          ))}
        </div>
      </Card>

      {/* Logout Button */}
      <div className="flex justify-end">
        <Button variant="destructive" className="flex items-center gap-2">
          <LogOut className="h-4 w-4" />
          Log Out
        </Button>
      </div>
    </div>
  )
}
