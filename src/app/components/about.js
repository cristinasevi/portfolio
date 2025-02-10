"use client"
import { useState } from "react"
import Links from "./links"
import Image from "next/image"

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section id="about" className="w-full min-h-screen pt-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="md:grid md:grid-cols-2 md:gap-16">
          <div className="space-y-12 md:space-y-16 mb-16">
            <p className="text-2xl md:text-4xl font-light leading-relaxed">
              HI! I'M <span className="text-[#0000FF]">CRIS</span> —{" "}
              <span className="text-[#0000FF]">WEB DESIGNER</span>
              <span className="text-[#0000FF]"> & DEVELOPER</span> BASED IN ZARAGOZA.
            </p>
            <p className="text-2xl md:text-4xl font-light leading-relaxed">
              WITH A SPECIAL INTEREST IN <span className="text-[#0000FF]">UI/UX </span>
              AND A GREAT PASSION FOR
              DESIGN, GRID, TYPE, AND BEING
              <span className="text-[#0000FF]"> BOLD AND MINIMAL</span> AT THE SAME TIME.
            </p>
            <p className="text-2xl md:text-4xl font-light leading-relaxed">
              MY FOCUS IS ON BLENDING
              DESIGN AND DEVELOPMENT TO
              BUILD DIGITAL EXPERIENCES
              THAT ARE BOTH VISUALLY
              APPEALING AND <span className="text-[#0000FF]">USER-FRIENDLY</span>.
            </p>
            <button onClick={() => setIsExpanded(!isExpanded)} className="font-extralight hover:text-[#0000FF]">
              [{isExpanded ? "see less" : "see more"}]
            </button>
          </div>
          <div className={`transition-all duration-500 ease-in-out ${isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 hidden md:hidden"}`}>
            <div className="space-y-12 md:space-y-16 mb-16">
              <p className="text-2xl md:text-4xl font-light leading-relaxed">
                CURRENTLY STUDYING
                MULTIPLATFORM APPLICATION
                DEVELOPMENT, EXPLORING NEW
                TECHNOLOGIES AND DESIGN
                TRENDS TO PUSH BOUNDARIES
                AND CREATE{" "}
                <span className="text-[#0000FF]">
                  INNOVATIVE,
                  USER-CENTERED INTERFACES
                </span>.
              </p>
                {/* <div className="relative w-[20rem] h-[250px] md:w-[32rem] md:h-[20rem] rounded-lg bg-cover bg-center bg-no-repeat">
                <Image 
                    src="/images/avatar-hover.jpg" 
                    alt="Avatar" 
                    fill 
                    className="rounded-lg object-cover" 
                    priority 
                />
                </div> */}
            </div>
          </div>
        </div>
        <Links/>
      </div>
    </section>
  )
}