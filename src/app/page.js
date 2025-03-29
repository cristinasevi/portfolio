"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Mail, Linkedin as LinkedinIcon, Github as GithubIcon } from "lucide-react"

export default function Home() {
  const [activeTab, setActiveTab] = useState("Cristina Sevi")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/avatar-hover.jpg" alt="Background" fill className="object-cover opacity-90" priority />
      </div>

      {/* Card container */}
      <div className="bg-gradient-to-br from-[#1E1E1E]/50 to-[#3C3C3C]/20 backdrop-blur-xl rounded-2xl p-8 max-w-xl w-full z-10 text-white shadow-2xl border border-white/10">
        {/* Profile tabs */}
        <div className={`flex gap-2 mb-6 transition-all duration-700 ease-in-out ${isLoaded ? "opacity-100" : "opacity-0"}`}>
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-full ${activeTab === "Cristina Sevi" ? "bg-white/20" : "bg-transparent"}`}
            onClick={() => setActiveTab("Cristina Sevi")}
          >
            <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center bg-white/10">
              <Image
                src="/images/avatar-hover.jpg"
                alt="Profile"
                width={48}
                height={48}
                className="object-cover min-w-full min-h-full"
                quality={100}
              />
            </div>
            <span className="text-sm font-medium">Cristina Sevi</span>
          </button>

          {/* <button
            className={`flex items-center gap-2 px-4 py-2 rounded-full ${activeTab === "skills" ? "bg-white/20" : "bg-transparent"}`}
            onClick={() => setActiveTab("skills")}
          >
            <span className="text-sm font-medium">skills</span>
          </button> */}
        </div>

        {/* Main content */}
        <div className="space-y-6">
          <div className={`transition-all duration-1000 ease-in-out transform ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <h1 className="text-4xl font-extrabold">Web Designer</h1>
            <h2 className="text-4xl font-extrabold">&amp; Developer</h2>
          </div>

          <div className={`space-y-4 text-gray-300 transition-all duration-1000 delay-200 ease-in-out transform ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p>Hi! I'm Cris — Web designer &amp; developer based in Zaragoza.</p>

            <p>With a special interest in UI/UX and a great passion for design, grid, and type.</p>

            <p>
              My focus is on blending design and development to build digital experiences that are both visually
              appealing and user-friendly.
            </p>
          </div>

          <div className={`flex flex-wrap items-center gap-4 pt-2 transition-all duration-1000 delay-400 ease-in-out transform ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <a
              href=""
              className="bg-[#005EFE] hover:bg-[#0050d9] text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ease-in-out whitespace-nowrap inline-block"
            >
              View Projects
            </a>

            <div className="flex items-center gap-4">
              <a
                href="mailto:hello@cristinasevi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-white/10"
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href="https://linkedin.com/in/cristinasevi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-white/10"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>

              {/* <a
                href="https://github.com/cristinasevi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-white/10"
              >
                <GithubIcon className="w-5 h-5" />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
