import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface GameCardProps {
  id: string
  name: string
  creator: string
  imageUrl: string
}

export function GameCard({ id, name, creator, imageUrl }: GameCardProps) {
  return (
    <Link href={`/games/${id}`}>
      <Card className="overflow-hidden transition-all lg:hover:scale-105">
        <div className="aspect-video relative">
          <Image src={imageUrl || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <CardContent className="p-4">
          <h3>
            <strong>{name}</strong>
          </h3>
          <p className="text-sm text-gray-500">by {creator}</p>
        </CardContent>
      </Card>
    </Link>
  )
}

