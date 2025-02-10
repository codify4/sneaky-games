import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Info } from "lucide-react"
import { games } from "@/lib/data"

interface PageProps {
  params: {
    id: string
  }
  searchParams?: { [key: string]: string | string[] | undefined }
}

export default function GamePage({ params }: PageProps) {
  const game = games.find((g) => g.id === params.id)

  if (!game) {
    notFound()
  }

  return (
    <div className="flex min-h-screen">

      {/* Main Content */}
      <main className="flex-1">
        <div className="container mx-auto p-6">
          {/* Game Container */}
          <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
            {/* Game Title */}
            <h1 className="absolute left-4 top-4 text-2xl font-bold">{game.name}</h1>

            {/* Game Preview Image (placeholder for actual game) */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${game.imageUrl})` }}
            />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Button size="lg" className="bg-neon text-neon-foreground hover:bg-neon/90">
                PLAY NOW
              </Button>
            </div>
          </div>

          {/* Game Info and Controls */}
          <Card className="p-6">
            <div className="mb-4 flex items-center gap-2">
              <Info className="h-5 w-5" />
              <h2 className="text-xl font-semibold">Game Info and Controls</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Game Details */}
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 font-semibold">About</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{game.description}</p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Creator</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{game.creator}</p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Category</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{game.category}</p>
                </div>
              </div>

              {/* Controls */}
              <div>
                <h3 className="mb-2 font-semibold">Controls</h3>
                <div className="space-y-2">
                  {Object.entries(game.controls).map(([action, key]) => (
                    <div
                      key={action}
                      className="flex items-center justify-between rounded-lg bg-gray-50 p-2 dark:bg-gray-800"
                    >
                      <span className="text-sm capitalize">{action}</span>
                      <kbd className="rounded bg-gray-200 px-2 py-1 text-xs font-semibold dark:bg-gray-700">{key}</kbd>
                    </div>
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
