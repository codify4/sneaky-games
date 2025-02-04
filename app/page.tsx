import { Button } from "@/components/ui/button"
import { GamepadIcon as GameController, Gamepad2, Users, Sparkles, Star, Trophy, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative py-56 overflow-hidden">
        <div className="flex items-center justify-center px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="flex flex-col items-center justify-center space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Play Awesome Games <mark className="text-neon bg-transparent">Instantly</mark>
                </h1>
                <p className="flex text-center text-xl w-3/4 text-gray-500 dark:text-gray-400">
                  Jump into thousands of free games. No downloads required. Start playing right away!
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-neon text-black hover:bg-neon/90">
                  Start Playing
                  <GameController className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline">
                  Browse Games
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
        </div>
      </section>

      <section className="w-full py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <header className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Sneaky Games?</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Experience gaming like never before with our unique features
            </p>
          </header>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <article className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neon">
                <Gamepad2 className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold">Instant Play</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                No downloads needed. Play directly in your browser.
              </p>
            </article>
            <article className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neon">
                <Sparkles className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold">New Games Daily</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Fresh content added every day for endless entertainment.
              </p>
            </article>
            <article className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neon">
                <Trophy className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold">Compete & Win</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Join tournaments and climb the leaderboards.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="w-full py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <header className="space-y-2">
                <h6 className="inline-block rounded-lg bg-neon px-3 py-1 text-black">About Us</h6>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Gaming Made Simple</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We're passionate gamers who believe that great games should be accessible to everyone. Our platform
                  brings together the best free-to-play games from around the web.
                </p>
              </header>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-neon hover:bg-neon/70 text-black">
                  Learn More
                  <Users className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="mx-auto grid gap-6 lg:grid-cols-2">
              <article className="flex flex-col space-y-3">
                <Star className="h-6 w-6 text-neon" />
                <h4 className="font-bold">Our Mission</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  To make gaming accessible and enjoyable for everyone, everywhere.
                </p>
              </article>
              <article className="flex flex-col space-y-3">
                <Trophy className="h-6 w-6 text-neon" />
                <h4 className="font-bold">Community First</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Built by gamers, for gamers. Your experience is our priority.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full border-t bg-gray-100 py-12 ">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <Image
                src="/logo.png"
                alt="Sneaky Games Logo"
                width={120}
                height={40}
                className="object-contain"
              />
              <h5 className="text-gray-500 dark:text-gray-400">
                Your destination for the best free online games.
              </h5>
            </div>
            <nav className="space-y-4">
              <h4>
                <strong>Quick Links</strong>
              </h4>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>
                  <Link href="/games">
                    <u>Games</u>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <u>About Us</u>
                  </Link>
                </li>
                <li>
                  <Link href="/suggest">
                    <u>Suggest</u>
                  </Link>
                </li>
              </ul>
            </nav>
            <nav className="space-y-4">
              <h4>
                <strong>Support</strong>
              </h4>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>
                  <a href="/contact">
                    <em>
                      <u>Contact</u>
                    </em>
                  </a>
                </li>
                <li>
                  <a href="/faq">
                    <em>
                      <u>FAQ</u>
                    </em>
                  </a>
                </li>
                <li>
                  <a href="/privacy">
                    <em>
                      <u>Privacy Policy</u>
                    </em>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <small className="mt-8 block border-t pt-8 text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Sneaky Games. All rights reserved.
          </small>
        </div>
      </footer>
    </div>
  )
}

