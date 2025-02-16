"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Palette,
  Code as Html5,
  Layout as Css3,
  Braces as JS,
  GitBranch as Git,
  Atom as ReactIcon,
  LayoutGrid,
  Figma,
  Boxes,
  Laptop,
  PenTool,
  Smartphone,
  Accessibility,
  Triangle as VercelIcon,
} from "lucide-react"

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("DEVELOPMENT")

  const skills = {
    DEVELOPMENT: [
      { name: "HTML", icon: Html5 },
      { name: "CSS", icon: Css3 },
      { name: "JavaScript", icon: JS },
      { name: "Git", icon: Git },
      { name: "React.js", icon: ReactIcon },
      { name: "Next.js", icon: Boxes },
      { name: "Tailwind CSS", icon: LayoutGrid },
      { name: "Vercel", icon: VercelIcon },
    ],
    DESIGN: [
      { name: "UI/UX Design", icon: Palette },
      { name: "Wireframing", icon: PenTool },
      { name: "Prototyping", icon: Laptop },
      { name: "Responsive Design", icon: Smartphone },
      { name: "Accessibility (WCAG)", icon: Accessibility },
      { name: "Figma", icon: Figma },
    ],
  }

  return (
    <section id="skills" className="w-full min-h-screen flex items-center justify-center px-6 md:px-16">
      <div className="max-w-6xl w-full">
        <h2 className="text-6xl md:text-8xl text-[#0000FF] font-normal tracking-tighter scale-y-200 origin-top mb-16 md:mb-32">
          <span className="block">my</span>
          <span className="block">skills</span>
        </h2>

        <div className="space-y-16">
          <div className="flex flex-wrap gap-8">
            {Object.keys(skills).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-xl relative px-4 py-2 transition-colors duration-300 ${
                  activeCategory === category
                    ? "text-[#0000FF]"
                    : "text-gray-600 dark:text-[#666] hover:text-gray-800 dark:hover:text-[#888]"
                }`}
              >
                {category}
                {activeCategory === category && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#0000FF]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {skills[activeCategory].map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="relative group"
              >
                <div className="border border-gray-200 dark:border-[#333] rounded-lg p-4 md:p-6 transition-all duration-300 h-full bg-white dark:bg-black/5">
                  <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                    <skill.icon className="w-6 h-6 text-gray-700 dark:text-gray-300 dark:group-hover:text-white group-hover:text-black transition-colors duration-300" />
                    <span className="relative z-10 text-sm text-gray-800 dark:text-gray-200 dark:group-hover:text-white group-hover:text-black transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                  <motion.div
                    className="absolute inset-0 rounded-lg opacity-0 dark:group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}