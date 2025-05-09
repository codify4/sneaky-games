'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LogOut } from 'lucide-react'
import data from "@/lib/games.json"
import { GameCard } from "@/components/game-card"

function AccountForm() {
  return (
    <>
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
          <Button type="submit" className="text-black hover:bg-neon/70">Save</Button>
        </form>
      </Card>
    </>
  )
}

// Server component (the main page)
export default function AccountPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
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

      <AccountForm />
      
      {/* MARK: ILSENI */}
      {/* Favorite Games Section */}
      <Card className="mb-8 p-6">
        <h2 className="mb-4 text-center text-xl font-semibold uppercase tracking-wider">
          Favorite Games
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {data.slice(69, 72).map((game, index) => (
            <GameCard
              key={index}
              title={game.title}
              description={game.description}
              imageUrl={game.image}
              embedUrl={game.embed}
            />
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
