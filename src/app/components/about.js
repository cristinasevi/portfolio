"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])

  return (
    <section
      ref={containerRef}
      id="about"
      className="w-full min-h-screen flex items-center justify-center px-6 md:px-16"
    >
      <motion.div style={{ opacity, scale }} className="max-w-3xl w-full flex flex-col items-center">
        <div className="space-y-7 md:space-y-12">
          <p className="text-2xl md:text-[2.5rem] font-light leading-normal">
            HI! I'M <span className="text-[#0000FF] font-normal">CRIS</span> — <span className="text-[#0000FF] font-normal">WEB DESIGNER &
            DEVELOPER</span> BASED IN ZARAGOZA.
          </p>
          <p className="text-2xl md:text-[2.5rem] font-light leading-normal">
            WITH A SPECIAL INTEREST IN <span className="text-[#0000FF] font-normal">UI/UX </span>
            AND A GREAT PASSION FOR DESIGN,
            GRID, AND TYPE.
          </p>
          <p className="text-2xl md:text-[2.5rem] font-light leading-normal">
            MY FOCUS IS ON BLENDING
            DESIGN AND DEVELOPMENT TO
            BUILD DIGITAL EXPERIENCES
            THAT ARE BOTH VISUALLY
            APPEALING AND <span className="text-[#0000FF] font-normal">USER-FRIENDLY</span>.
          </p>
        </div>
      </motion.div>
    </section>
  )
}