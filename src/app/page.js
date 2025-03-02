import Image from "next/image"
import { SuisseIntlMedium } from "./fonts"
import About from "./about/page"
import Skills from "./skills/page"
import Projects from "./projects/page"
import Contact from "./contact/page"

export default function Home() {
  return (
    <>
      <main className={`${SuisseIntlMedium.className} min-h-screen flex flex-col justify-between px-4 pt-20 md:pt-16`}>
        <div className="relative w-full h-[60vh] rounded-lg overflow-hidden">
          <Image src="/images/avatar-dither.png" alt="Avatar" fill className="object-cover" priority />
        </div>
        <div className="w-full relative pb-8 md:pb-0">
          <h1 className="text-[#0055FF] text-[25vw] md:text-[min(20vw,350px)] leading-[0.7] md:leading-[273px] tracking-[-0.08em] md:tracking-[-0.11em] md:text-center pl-4 pr-4">
            <span className="block text-left md:inline">cristina</span>
            <span className="block text-right md:inline mt-[-2vw] md:mt-0">sevi</span>
          </h1>
        </div>
      </main>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  )
}
