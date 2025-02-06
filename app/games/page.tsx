import Link from "next/link"
import { CircleUser, GamepadIcon, HomeIcon, Search, Settings } from 'lucide-react'
import { GameCard } from '@/components/game-card'
import { Input } from "@/components/ui/input"

// Sample game data with more variety
export const games = [
  {
    id: "minecraft-classic",
    name: "Minecraft Classic",
    creator: "Mojang",
    imageUrl: "https://images.unsplash.com/photo-1627856014754-2907e2355d54?w=800&h=400&q=80",
    category: "Adventure"
  },
  {
    id: "among-us",
    name: "Among Us",
    creator: "InnerSloth",
    imageUrl: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=800&h=400&q=80",
    category: "Party"
  },
  {
    id: "fortnite",
    name: "Fortnite",
    creator: "Epic Games",
    imageUrl: "https://images.unsplash.com/photo-1589241062272-c0a000072dfa?w=800&h=400&q=80",
    category: "Battle Royale"
  },
  {
    id: "rocket-league",
    name: "Rocket League",
    creator: "Psyonix",
    imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&h=400&q=80",
    category: "Sports"
  },
  {
    id: "fall-guys",
    name: "Fall Guys",
    creator: "Mediatonic",
    imageUrl: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=400&q=80",
    category: "Party"
  },
  {
    id: "candy-crush",
    name: "Candy Crush",
    creator: "King",
    imageUrl: "https://images.unsplash.com/photo-1642176849879-781c8ac9e124?w=800&h=400&q=80",
    category: "Puzzle"
  },
  {
    id: "subway-surfers",
    name: "Subway Surfers",
    creator: "SYBO Games",
    imageUrl: "https://images.unsplash.com/photo-1640833906651-6bd1af7aeea3?w=800&h=400&q=80",
    category: "Runner"
  },
  {
    id: "temple-run",
    name: "Temple Run",
    creator: "Imangi Studios",
    imageUrl: "https://images.unsplash.com/photo-1640050290垍-75f88d14aa44?w=800&h=400&q=80",
    category: "Runner"
  },
  {
    id: "angry-birds",
    name: "Angry Birds",
    creator: "Rovio",
    imageUrl: "https://images.unsplash.com/photo-1632336534566-497df0c0e7b0?w=800&h=400&q=80",
    category: "Puzzle"
  }
]

// Game categories for filtering
export const categories = [
  "All Games",
  "Adventure",
  "Battle Royale",
  "Party",
  "Sports",
  "Puzzle",
  "Runner"
]

export default function GamesPage() {
  return (
    <div className="flex min-h-screen">

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto p-6">
          <header className="mb-8 space-y-4">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">Games</h1>
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search games..."
                  className="pl-10"
                />
              </div>
            </div>
            
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="rounded-full bg-gray-100 px-4 py-1 text-sm hover:bg-neon hover:text-neon-foreground"
                >
                  {category}
                </button>
              ))}
            </div>
          </header>

          {/* Featured Games Section */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Featured Games</h2>
            <div className="grid gap-6 grid-cols-3">
              {games.slice(0, 3).map((game) => (
                <GameCard
                  key={game.id}
                  id={game.id}
                  name={game.name}
                  creator={game.creator}
                  imageUrl={game.imageUrl}
                />
              ))}
            </div>
          </section>

          {/* All Games Section */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">All Games</h2>
            <div className="grid gap-6 grid-cols-4">
              {games.map((game) => (
                <GameCard
                  key={game.id}
                  id={game.id}
                  name={game.name}
                  creator={game.creator}
                  imageUrl={game.imageUrl}
                />
              ))}
            </div>
          </section>

          {/* Load More Button */}
          <div className="mt-8 flex justify-center">
            <button className="rounded-lg bg-neon px-6 py-2 text-neon-foreground hover:bg-neon/90">
              Load More Games
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
