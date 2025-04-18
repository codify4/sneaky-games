import { Suspense } from 'react'
import { GameList } from '@/components/game-list'

export default function GamesPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen justify-center items-center">Loading games...</div>}>
      <GameList />
    </Suspense>
  )
}