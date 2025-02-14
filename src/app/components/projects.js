"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Paint95",
    description:
      "Relive the classic Windows 95 Paint in your browser.",
    image: "/images/paint95.png",
    link: "https://paint95.cristinasevi.com/",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
]

export default function Projects() {
  return (
        <section id="projects" className="w-full min-h-screen flex items-center justify-center py-24 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24">
                {projects.map((project, index) => (
                    <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col space-y-6"
                    >
                        
                    {/* <p className="mt-6 text-lg">{String(index + 1).padStart(2, "0")}</p> */}

                    <div className="relative aspect-square w-full bg-[var(--badge)] rounded-lg overflow-hidden">
                        <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl">{project.title}</h3>
                        <p className="mt-2 text-[#666] text-base leading-relaxed">
                            {project.description.length > 100 
                            ? project.description.slice(0, 85) + "..." 
                            : project.description}
                        </p> 

                        <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="inline-block px-3 py-1 bg-[var(--badge)] rounded-lg text-sm">
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