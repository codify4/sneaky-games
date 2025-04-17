import { notFound } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Info } from "lucide-react"
import data from '@/lib/games.json'
import { slugify } from "@/components/game-card"

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
          <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-lg bg-gray-100">
            <iframe src={game.embed} width="100%" height="100%" frameBorder="no" scrolling="no" allowFullScreen></iframe>
          </div>

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

              {/* Controls */}
              {/* <div>
                <h3 className="mb-2 font-semibold">Controls</h3>
                <div className="space-y-2">
                  {Object.entries(game.controls).map(([action, key]) => (
                    <div
                      key={action}
                      className="flex items-center justify-between rounded-lg bg-gray-50 p-2"
                    >
                      <span className="text-sm capitalize">{action}</span>
                      <kbd className="rounded bg-gray-200 px-2 py-1 text-xs font-semibold">{key}</kbd>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
