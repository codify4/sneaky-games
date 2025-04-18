import { notFound } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Info } from "lucide-react"
import data from '@/lib/games.json'
import { slugify } from "@/components/game-card"
import GameContainer from "@/components/game-container"

export default async function GamePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const game = data.find((g) => slugify(g.title) === id)

  if (!game) {
    notFound()
  }

  return (
    <div className="flex min-h-screen">

      {/* Main Content */}
      <main className="flex-1">
        <div className="container mx-auto p-6">
          {/* Game Container */}
          <GameContainer embed={game.embed} />

          {/* Game Info and Controls */}
          <Card className="p-6">
            <div className="mb-4 flex items-center gap-2">
              <h2 className="text-xl font-semibold">{game.title}</h2>
            </div>

            <div className="flex">
              {/* Game Details */}
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 font-semibold">About</h3>
                  <p className="text-sm text-gray-500">{game.description}</p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Category</h3>
                  {game.tags.split(',').map((tag, index) => (
                    <span key={index} className="text-sm bg-red-500/50 mr-2 rounded-full px-2 py-1">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
