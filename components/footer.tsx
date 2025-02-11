import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="w-full border-t bg-gray-100 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col items-center justify-center mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 items-center justify-center lg:grid-cols-3">
            <div className="space-y-4">
              <Image
                src="/logo.png"
                alt="Sneaky Games Logo"
                width={120}
                height={40}
                className="object-contain"
              />
              <h5 className="text-gray-500 w-[200px]">
                Your destination for the best free online games.
              </h5>
            </div>
            <nav className="space-y-4">
              <h4>
                <strong>Quick Links</strong>
              </h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <Link href="/games">
                    <em>
                      <u>Games</u>
                    </em>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <em>
                      <u>About Us</u>
                    </em>
                  </Link>
                </li>
                <li>
                  <Link href="/suggestions">
                    <em>
                      <u>Suggestions</u>
                    </em>
                  </Link>
                </li>
              </ul>
            </nav>
            <nav className="space-y-4">
              <h4>
                <strong>Game Categories</strong>
              </h4>
              <ol className="space-y-2 text-sm text-gray-500 list-decimal pl-4">
                <li>
                  <a href="/games">
                    <em>
                      <u>Action Games</u>
                    </em>
                  </a>
                </li>
                <li>
                  <a href="/games">
                    <em>
                      <u>Puzzle Games</u>
                    </em>
                  </a>
                </li>
                <li>
                  <a href="/games">
                    <em>
                      <u>Strategy Games</u>
                    </em>
                  </a>
                </li>
              </ol>
            </nav>
          </div>
          <small className="mt-8 block border-t pt-8 text-center text-gray-500">
            {new Date().getFullYear()} Sneaky Games. All rights reserved.
          </small>
        </div>
      </footer>
  )
}
export default Footer