'use client'

import { GameCard } from '@/components/game-card'
import { Input } from "@/components/ui/input"
import { categories } from "@/lib/data"
import { Button } from "@/components/ui/button"
import data from "@/lib/games.json"
import { useState, useEffect } from 'react'
import { EggFried, Search } from 'lucide-react'
import { useSearchParams } from "next/navigation"

export default function GamesPage() {
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState<string>("");
  const [categoryValue, setCategoryValue] = useState(searchParams.get('category') || "All Games");
  const [gamesToShow, setGamesToShow] = useState(12); // Initial number of games to show
  
  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setCategoryValue(category);
    } else {
      setCategoryValue("All Games");
    }
  }, [searchParams]);
  
  const searchedGames = data.filter((game) => {
    // First filter by search term
    const matchesSearch = game.title.toLowerCase().includes(searchValue.toLowerCase());
    
    // Then filter by category if not "All Games"
    const matchesCategory = categoryValue === "All Games" || 
      game.tags.toLowerCase().includes(categoryValue.toLowerCase());
    
    return matchesSearch && matchesCategory;
  });
  
  const gamesToDisplay = searchedGames.slice(0, gamesToShow);
  const hasMoreGames = searchedGames.length > gamesToShow;

  const loadMoreGames = () => {
    setGamesToShow(prev => prev + 12); // Load 12 more games
  };
  
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
              {gamesToDisplay.map((game) => (
                <GameCard
                  key={game.title}
                  title={game.title}
                  description={game.description}
                  imageUrl={game.image}
                  embedUrl={game.embed}
                />
              ))}
            </div>
            {hasMoreGames && (
              <div className="mt-8 flex justify-center">
                <Button 
                  onClick={loadMoreGames}
                  className="px-6 py-2 bg-neon hover:bg-neon/60 text-black rounded-lg"
                >
                  Load More Games
                </Button>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  )
}