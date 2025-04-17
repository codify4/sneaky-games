import { EggFried, Search } from 'lucide-react'
import { GameCard } from '@/components/game-card'
import { Input } from "@/components/ui/input"
import { categories } from "@/lib/data"
import { Button } from "@/components/ui/button"
import data from "@/lib/games.json"

export default function GamesPage() {
  return (
    <div className="flex min-h-screen">

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto p-6 md:p-8 lg:p-12">
          <header className="mb-8 space-y-4">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between">
              <h1 className="text-3xl font-bold">Games</h1>
              <div className="flex flex-row items-center gap-4">
                <div className="relative w-64 md:w-auto">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Search games..."
                    className="pl-10"
                  />
                </div>
                <a href="/easteregg">
                  <Button size={'icon'} variant={'outline'}>
                    <EggFried size={40} className='animate-spin'/>
                  </Button>
                </a>
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

          {/* All Games Section */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">All Games</h2>
            <div className="grid gap-6 md:grid-cols-4 lg:grid-cols-4">
              {data.map((game) => (
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