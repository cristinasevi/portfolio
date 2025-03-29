import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="fixed top-0 w-full pt-6 px-8 md:px-13 z-50">
      <nav className="flex justify-between items-center max-w-[1920px] mx-auto">
        <div className="flex-shrink-0">
          <Link href="/" className="block p-1 hover:opacity-80 transition-opacity">
            <Image
              src="/images/asterisco.svg"
              alt="Asterisk Logo"
              width={16}
              height={16}
              className="brightness-0 invert"
              priority
            />
          </Link>
        </div>
        <ul className="flex items-center gap-8">
          <li>
            <Link href="#about" className="hover:text-[#0055FF]">
              about
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-[#0055FF]">
              projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-[#0055FF]">
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}