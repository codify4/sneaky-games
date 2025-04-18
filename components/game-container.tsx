'use client'

import { Button } from "@/components/ui/button"
import { Maximize } from "lucide-react"

interface GameContainerProps {
  embed: string
}

export default function GameContainer({ embed }: GameContainerProps) {
    const handleFullscreen = () => {
        // This function needs access to the document object, which is only available on the client.
        const gameContainer = document.getElementById("game-container");
        if (!gameContainer) return;
        
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            gameContainer.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable fullscreen: ${err.message}`);
            });
        }
    };

    return (
        // The 'id' is used by the handleFullscreen function to find the element.
        <div id="game-container" className="relative mb-6 aspect-video w-full overflow-hidden rounded-lg bg-gray-100">
            <iframe 
                src={embed} 
                width="100%" 
                height="100%" 
                frameBorder="no" 
                scrolling="no" 
                allowFullScreen
                allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="absolute inset-0"
            ></iframe>
            {/* The Button component likely uses onClick internally, requiring this component to be a Client Component */}
            <Button 
                onClick={handleFullscreen}
                variant="outline"
                size="icon"
                className="absolute bottom-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full"
                aria-label="Toggle fullscreen"
            >
                <Maximize className="h-5 w-5" />
            </Button>
        </div>
    )
}