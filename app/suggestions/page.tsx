"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function SuggestionsPage() {
  return (
    <div className="container mx-auto py-10 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-6">Suggest a Game</h1>
      <form className="space-y-8 w-1/2 border p-5 rounded-xl shadow-md">
        <div className="space-y-2">
          <Label htmlFor="name">Game Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Enter game name"
            required
            className="rounded-xl"
          />
          <p className="text-sm text-muted-foreground">
            The name of the game you want to suggest.
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            placeholder="Tell us about the game..."
            className="resize-none rounded-xl"
            required
          />
          <p className="text-sm text-muted-foreground">
            Provide a description of the game and why it should be added.
          </p>
        </div>

        <Button type="submit" className="text-black hover:bg-white hover:border hover:border-primary hover:text-primary">Submit Suggestion</Button>
      </form>
    </div>
  )
}