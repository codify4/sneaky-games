import Link from "next/link"
import { CircleUser, GamepadIcon, HomeIcon } from 'lucide-react'
import { categories, games } from "@/app/games/page"

const Sidebar = () => {
  return (
    <aside className="w-64 border-r bg-gray-50 p-4">
        <nav className="space-y-2">
          <Link 
            href="/"
            className="flex items-center space-x-2 rounded-lg px-3 py-2 hover:bg-gray-100"
          >
            <HomeIcon className="h-5 w-5" />
            <span>Home</span>
          </Link>
          <Link 
            href="/settings"
            className="flex items-center space-x-2 rounded-lg px-3 py-2 hover:bg-gray-100"
          >
            <CircleUser className="h-5 w-5" />
            <span>Account</span>
          </Link>

          {/* Categories Section */}
          <div className="py-4">
            <h4 className="mb-2 px-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
              Categories
            </h4>
            {categories.map((category) => (
              <Link
                key={category}
                href={`/games?category=${category}`}
                className="flex items-center space-x-2 rounded-lg px-3 py-2 text-sm hover:bg-gray-100"
              >
                <GamepadIcon className="h-4 w-4" />
                <span>{category}</span>
              </Link>
            ))}
          </div>

          {/* Popular Games Section */}
          <div className="py-4">
            <h4 className="mb-2 px-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
              Popular Games
            </h4>
            {games.slice(0, 5).map((game) => (
              <Link
                key={game.id}
                href={`/games/${game.id}`}
                className="flex items-center space-x-2 rounded-lg px-3 py-2 text-sm hover:bg-gray-100"
              >
                <GamepadIcon className="h-4 w-4" />
                <span>{game.name}</span>
              </Link>
            ))}
          </div>
        </nav>
      </aside>
  )
}
export default Sidebar