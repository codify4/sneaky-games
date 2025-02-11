import { Nav } from "@/components/nav"
import { Button } from "@/components/ui/button"
import { GamepadIcon as GameController, Gamepad2, Sparkles, Trophy } from "lucide-react"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <section className="relative pt-56 overflow-hidden md:pt-64 lg:pt-72 pb-20 lg:pb-0">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-center space-x-4 md:space-x-8 lg:space-x-12">
            <div className="flex flex-col items-center justify-center space-y-4 md:space-y-8 lg:space-y-12">
              <div className="flex flex-col items-center justify-center space-y-2 md:space-y-4 lg:space-y-6">
                <h1 className="flex flex-col items-center justify-center space-y-2 md:space-y-4 lg:space-y-6 tracking-tighter text-6xl md:text-7xl lg:text-8xl">
                  <strong className="text-center font-bold">
                    Play Awesome Games
                  </strong> 
                  <mark className="text-neon bg-transparent font-bold">
                    Instantly
                  </mark>
                </h1>
                <p className="flex text-center text-xl w-3/4 md:w-1/2 lg:w-1/3 text-gray-500 animate-fade-in">
                  Jump into thousands of free games. No downloads required. Start playing right away!
                </p>
              </div>
              <a href="/signin">
                <Button className="bg-neon text-black hover:bg-neon/90 px-5 py-2 md:px-10 md:py-4">
                  Start Playing
                  <GameController className="ml-2 h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8 animate-spin" />
                </Button>
              </a>
            </div>
          </div>
          <div className="mx-auto w-full block">
              <video
                className="w-full aspect-video"
                controls
                poster="/screenshot.png"
                autoPlay
              >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
          </div>
        </div>
      </section>

      

      <section className="w-full py-32 md:py-48 lg:py-64 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <header className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="font-bold tracking-tighter text-5xl">Why Choose Sneaky Games?</h2>
            <p className="max-w-[900px] text-gray-500 text-xl">
              Experience gaming like never before with our unique features
            </p>
          </header>
          <div className="mx-auto max-w-5xl py-12">
            <table className="w-full">
              <thead>
                <tr className="grid grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                  <th className="font-normal pb-4"><h3 className="text-xl font-bold">Instant Play</h3></th>
                  <th className="font-normal pb-4"><h3 className="text-xl font-bold">New Games Daily</h3></th>
                  <th className="font-normal pb-4">Competitions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                  <td className="flex flex-col items-center space-y-4 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neon p-3">
                      <Gamepad2 className="h-8 w-8 text-black md:h-12 md:w-12 lg:h-16 lg:w-16" />
                    </div>
                    <p className="text-base text-gray-500">
                      No downloads needed. Play directly in your browser.
                    </p>
                  </td>
                  <td className="flex flex-col items-center space-y-4 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neon p-3">
                      <Sparkles className="h-8 w-8 text-black md:h-12 md:w-12 lg:h-16 lg:w-16" />
                    </div>
                    <p className="text-base text-gray-500">
                      Fresh content added every day for endless entertainment.
                    </p>
                  </td>
                  <td className="flex flex-col items-center space-y-4 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neon p-3">
                      <Trophy className="h-8 w-8 text-black md:h-12 md:w-12 lg:h-16 lg:w-16" />
                    </div>
                    <p className="text-base text-gray-500">Join tournaments and climb the leaderboards.</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center flex-col w-full py-12 bg-gray-50">
        <div className="flex items-center justify-center flex-col mx-auto w-1/2">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Content</h2>
          <div className="w-full flex flex-col items-center justify-center">
            {/* Game Preview */}
            <div className="flex items-center justify-center flex-col rounded-lg overflow-hidden w-full">
              <h3 className="text-xl font-semibold mb-4 px-4 pt-4">Game Preview</h3>
              <iframe src="https://player.twitch.tv/?channel=ninja&parent=sneaky-games.vercel.app" frameBorder="0" allowFullScreen={true} scrolling="no" height="378" width="620"></iframe>
            </div>
            
            {/* Game Soundtrack */}
            <div className="rounded-lg overflow-hidden w-full">
              <h3 className="text-xl font-semibold mb-4 px-4 pt-4">Game Soundtrack</h3>
              <div className="p-4">
                <audio
                  className="w-full"
                  controls
                >
                  <source src="/fn-track.mp3" type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
