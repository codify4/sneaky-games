import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface GameCardProps {
  name: string
  creator: string
  imageUrl: string
  embedUrl: string
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/ /g, '-')       // spaces to dashes
    .replace(/[^\w-]+/g, '')  // remove special chars
}

export function GameCard({ name, creator, imageUrl, embedUrl }: GameCardProps) {
  return (
    <Link href={`/games/${slugify(name)}`}>
      <Card className="overflow-hidden transition-all lg:hover:scale-105">
        <div className="aspect-video relative">
          <Image src={imageUrl || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <CardContent className="p-4">
          <h3>
            <strong>{name}</strong>
          </h3>
          <p className="text-sm text-gray-500">{creator.slice(0, 100) + "..."}</p>
        </CardContent>
      </Card>
    </Link>
  )
}

