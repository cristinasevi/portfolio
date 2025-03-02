import Link from "next/link";
import { SuisseIntlMedium } from "../fonts";

export default function Header() {
  return (
    <header className={`${SuisseIntlMedium.className} fixed top-0 w-full md:w-auto left-0 md:left-auto right-5 pt-6 md:pr-13 z-50`}>
      <nav>
        <ul className="flex items-center justify-between md:justify-end md:gap-8 text-foreground px-8 md:px-0 max-w-md mx-auto md:mx-0">
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