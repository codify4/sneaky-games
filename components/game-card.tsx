import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export interface GameCardProps {
  title: string
  description: string
  imageUrl: string
  embedUrl: string
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/ /g, '-')       // spaces to dashes
    .replace(/[^\w-]+/g, '')  // remove special chars
}

export function GameCard({ title, description, imageUrl, embedUrl }: GameCardProps) {
  return (
    <Link href={`/games/${slugify(title)}`}>
      <Card className="overflow-hidden transition-all lg:hover:scale-105">
        <div className="aspect-video relative">
          <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
        <CardContent className="p-4">
          <h3>
            <strong>{title}</strong>
          </h3>
          <p className="text-sm text-gray-500">{description.slice(0, 95) + "..."}</p>
        </CardContent>
      </Card>
    </Link>
  )
}

