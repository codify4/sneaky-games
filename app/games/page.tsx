'use client'

import { EggFried, Search } from 'lucide-react'
import { GameCard } from '@/components/game-card'
import { Input } from "@/components/ui/input"
import { categories } from "@/lib/data"
import { Button } from "@/components/ui/button"
import data from "@/lib/games.json"
import { useState } from 'react'

export default function GamesPage() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [categoryValue, setCategoryValue] = useState("All Games");
  
  const searchedGames = data.filter((game) => game.title.toLowerCase().includes(searchValue.toLowerCase()));
  const filteredGames = data.filter((game) => game.tags.includes(categoryValue.toLocaleLowerCase()));
  
  return (
    <div className="flex min-h-screen">

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto p-6 md:p-8 lg:p-12">
          <header className="mb-8 space-y-4">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between">
              <div className="flex flex-row items-center gap-4 w-full">
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-500" />
                  <Input
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    type="search"
                    placeholder="Search games..."
                    className="pl-10 w-full py-4 rounded-lg"
                  />
                </div>
                <a href="/easteregg">
                  <Button size={'icon'} variant={'outline'}>
                    <EggFried size={40} className='animate-spin'/>
                  </Button>
                </a>
              </div>
            </div>
            
            {/* Category Pills
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="rounded-full bg-gray-100 px-4 py-1 text-sm hover:bg-neon hover:text-neon-foreground"
                  onClick={() => setCategoryValue(category)}
                >
                  {category}
                </button>
              ))}
            </div> */}
          </header>

          {/* Featured Games Section */}
          {searchValue === "" && (
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold">Featured Games</h2>
              <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-3">
                {data.slice(0, 3).map((game) => (
                  <GameCard
                    key={game.title}
                    title={game.title}
                    description={game.description}
                    imageUrl={game.image}
                    embedUrl={game.embed}
                  />
                ))}
              </div>
            </section>
          )}
          

          {/* All Games Section */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">All Games</h2>
            <div className="grid gap-6 md:grid-cols-4 lg:grid-cols-4">
              {searchedGames.map((game) => (
                <GameCard
                  key={game.title}
                  title={game.title}
                  description={game.description}
                  imageUrl={game.image}
                  embedUrl={game.embed}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}