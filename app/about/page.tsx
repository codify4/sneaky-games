import { Nav } from "@/components/nav"
import { Button } from "@/components/ui/button"
import { Users, Trophy, Star } from "lucide-react"

const AboutPage = () => {
  return (
    <>
      <Nav />
      <section id="about" className="w-full py-32">
        <div className="container px-6">
          <div className="grid gap-6 grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <header className="space-y-2">
                <h6 className="inline-block rounded-lg bg-neon px-3 py-1 text-black">About Us</h6>
                <h2 className="font-bold tracking-tighter text-5xl">Gaming Made Simple</h2>
                <p className="max-w-[600px] text-gray-500 text-xl">
                  We{"'"}re passionate gamers who believe that great games should be accessible to everyone. Our platform
                  brings together the best free-to-play games from around the web.
                </p>
              </header>
              <div className="flex gap-2 flex-row">
                <a href="/signin">
                  <Button className="bg-neon hover:bg-neon/70 text-black">
                    Learn More
                    <Users className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="mx-auto grid gap-6 grid-cols-2">
              <article className="flex flex-col space-y-3">
                <Star className="h-6 w-6 text-neon" />
                <h4 className="font-bold">Our Mission</h4>
                <p className="text-sm text-gray-500">
                  To make gaming accessible and enjoyable for everyone, everywhere.
                </p>
              </article>
              <article className="flex flex-col space-y-3">
                <Trophy className="h-6 w-6 text-neon" />
                <h4 className="font-bold">Community First</h4>
                <p className="text-sm text-gray-500">
                  Built by gamers, for gamers. Your experience is our priority.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section id="video" className="py-32">
        <div className="container px-6">
          <div className="mx-auto grid gap-6 grid-cols-2">
            <video
              width="100%"
              height="100%"
              controls
              muted
              className="rounded-lg shadow-lg"
            >
              <source src="/vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/x24KoVNliMk?si=vaG89pIehZluK8LQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <audio controls className="block">
              <source src="/audio.mp3" type="audio/mp3" />
              Your browser does not support the audio tag.
            </audio>
          </div>
        </div>
      </section>
    </>
  )
}
export default AboutPage