"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Paint95",
    description: "Relive the classic Windows 95 Paint in your browser.",
    image: "/images/paint95.png",
    link: "https://paint95.cristinasevi.com/",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
]

export default function Projects() {
    const [currentProject, setCurrentProject] = useState(0)

    const nextProject = () => {
        setCurrentProject((prev) => (prev + 1) % projects.length)
    }

    const previousProject = () => {
        setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
    }

    const formatPageNumber = (number) => {
        return String(number).padStart(2, "0")
    }

    return (
        <section id="projects" className="w-full min-h-screen flex items-center justify-center px-6 md:px-16">
            <div className="max-w-7xl w-full">
                {/* Mobile View (Carousel) */}
                <div className="md:hidden mt-16 relative min-h-[calc(100vh-8rem)]">
                    <div className="relative">
                        <motion.div
                        key={currentProject}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                        >

                        <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-[var(--badge)]">
                            <Image
                            src={projects[currentProject].image || "/placeholder.svg"}
                            alt={projects[currentProject].title}
                            fill
                            className="object-cover"
                            />
                        </div>

                        <div className="space-y-4">
                            <span className="text-sm">{projects[currentProject].number}</span>
                            <h3 className="text-xl">{projects[currentProject].title}</h3>
                            <p className="text-[#666] text-base leading-relaxed">{projects[currentProject].description}</p>

                            <div className="flex flex-wrap gap-2">
                            {projects[currentProject].technologies.map((tech, index) => (
                                <span key={index} className="inline-block px-3 py-1 bg-[var(--badge)] rounded-lg text-sm">
                                {tech}
                                </span>
                            ))}
                            </div>

                            <a
                            href={projects[currentProject].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-2 text-blue-500 hover:underline"
                            >
                            See more
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M7 7h10v10"></path>
                                <path d="M7 17L17 7"></path>
                            </svg>
                            </a>
                        </div>
                        </motion.div>
                    </div>

                    {/* Navigation Arrows with Page Numbers */}
                    <div className="absolute bottom-2 left-0 right-0 flex justify-center items-center gap-8">
                        <button
                            onClick={previousProject}
                            className="p-2"
                            aria-label="Previous project"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <div className="min-w-[60px] text-center">
                            <motion.span
                            key={currentProject}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm"
                            >
                            {formatPageNumber(currentProject + 1)}/{formatPageNumber(projects.length)}
                            </motion.span>
                        </div>

                        <button
                            onClick={nextProject}
                            className="p-2"
                            aria-label="Next project"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Desktop View (Grid) */}
                <div className="hidden md:grid md:grid-cols-3 gap-16">
                    {projects.map((project, index) => (
                        <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                        >

                        <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-[var(--badge)]">
                            <Image 
                                src={project.image || "/placeholder.svg"} 
                                alt={project.title} 
                                fill 
                                className="object-cover transition-transform duration-300 hover:scale-105" 
                            />
                        </div>

                        <div className="space-y-4">
                            {/* <span className="mt-6 text-lg">{String(index + 1).padStart(2, "0")}</span> */}
                            <h3 className="text-xl">{project.title}</h3>
                            <p className="text-[#666] text-base leading-relaxed">
                                {project.description.length > 300 
                                ? project.description.slice(0, 85) + "..." 
                                : project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="inline-block px-3 py-1 bg-[var(--badge)] rounded-lg text-sm">
                                {tech}
                                </span>
                            ))}
                            </div>

                            <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-2 text-blue-500 hover:underline"
                            >
                            See more
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M7 7h10v10"></path>
                                <path d="M7 17L17 7"></path>
                            </svg>
                            </a>
                        </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}