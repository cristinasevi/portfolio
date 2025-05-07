"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Mail, Linkedin, Github } from "lucide-react"
import Button from "./components/ui/button"
import Link from "./components/ui/link"
// import Projects from "./projects/page"

export default function Home() {
  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(false)
  const cardRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [showProjects, setShowProjects] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowProjects(true)
      } else {
        setShowProjects(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleMouseMove = (e) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()

    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const x = (e.clientX - centerX) / (rect.width / 2)
    const y = (e.clientY - centerY) / (rect.height / 2)

    setTilt({ x: -y * 3, y: x * 3 })
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setTilt({ x: 0, y: 0 })
  }

  const navigateToProjects = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
    setShowProjects(true)
  }

  return (
    <div className="relative">
      {/* Main section */}
      <main className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image src="/images/avatar-hover.jpg" alt="Background" fill className="object-cover opacity-90" priority />
        </div>

        {/* Card container */}
        <div
          ref={cardRef}
          className="bg-gradient-to-br from-[#1E1E1E]/50 to-[#3C3C3C]/20 backdrop-blur-xl rounded-2xl p-8 max-w-xl w-full z-10 text-white shadow-2xl border border-white/10 transition-transform duration-200 ease-out"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: isHovering
              ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.02)`
              : "perspective(1000px) rotateX(0) rotateY(0) scale(1)",
            transition: "transform 0.2s ease-out",
          }}
        >
          <div
            className={`flex gap-2 mb-6 transition-all duration-700 ease-in-out transform ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Profile display */}
            <div className="flex items-center gap-2 py-2">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-white/10 border border-white/10">
                <Image
                  src="/images/avatar-hover.jpg"
                  alt="Profile"
                  width={100}
                  height={100}
                  className="object-cover min-w-full min-h-full"
                  quality={100}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-semibold">Cristina Sevi</span>
                <span className="text-sm font-medium text-white/60">Zaragoza, Spain</span>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="space-y-6">
            <div
              className={`transition-all duration-1000 ease-in-out transform ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="text-4xl font-extrabold">
                <span>Front-end</span>
                <br/>
                <span>Developer</span>
              </h1>
            </div>

            <div
              className={`space-y-4 text-gray-300 transition-all duration-1000 delay-200 ease-in-out transform ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p>Hi! I'm Cris — Front-end developer & UI/UX designer.</p>

              <p>With a special interest in user interfaces and a great passion for design, grids, and type.</p>

              <p>
                My focus is on blending design and development to build digital experiences that are both visually
                appealing and user-friendly.
              </p>
            </div>

            <div
              className={`flex flex-wrap items-center gap-4 pt-2 transition-all duration-1000 delay-400 ease-in-out transform ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Button onClick={navigateToProjects}>
                View Projects
              </Button>

              <div className="flex items-center gap-4">
                <Link href="mailto:hello@cristinasevi.com" aria-label="Send email to Cristina">
                  <Mail className="w-5 h-5" />
                </Link>

                <Link href="https://linkedin.com/in/cristinasevi" aria-label="Visit LinkedIn profile">
                  <Linkedin className="w-5 h-5" />
                </Link>

                {/* <Link href="https://github.com/cristinasevi" aria-label="Visit GitHub profile">
                  <Github className="w-5 h-5" />
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Projects section */}
      {/* <section className={`min-h-screen flex items-center justify-center p-4 relative transition-opacity duration-500`}>
        <Projects/>
      </section> */}
    </div>
  )
}
