"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Contact() {
    const [hoveredIndex, setHoveredIndex] = useState(null)

    const contacts = [
        {
        title: "EMAIL",
        value: "hello@cristinasevi.com",
        link: "mailto:hello@cristinasevi.com",
        },
        {
        title: "INSTAGRAM",
        value: "@cristina.csv",
        link: "https://www.instagram.com/cristina.csv",
        },
        // {
        // title: "GITHUB",
        // value: "github.com/cristinasevi",
        // link: "https://github.com/cristinasevi",
        // },
        {
        title: "LINKEDIN",
        value: "in/cristinasevi",
        link: "https://www.linkedin.com/in/cristinasevi",
        },
    ]

    return (
        <section id="contact" className="w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-16">
            <div className="max-w-2xl w-full">
                <p className="text-6xl md:text-8xl text-[#0000FF] font-normal tracking-tighter scale-y-200 origin-top mb-32">
                <span className="block">let's</span>
                <span className="block">connect</span>
                </p>

                <div className="space-y-8">
                {contacts.map((contact, index) => (
                    <motion.a
                    key={index}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full group"
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    whileHover={{ x: 20 }}
                    transition={{ duration: 0.2 }}
                    >
                    <div className="flex items-center justify-between border-b border-[#333] py-4">
                        <span className="text-lg uppercase">{contact.title}</span>
                        <span
                        className={`text-sm transition-colors duration-300 ${
                            hoveredIndex === index ? "text-blue-500" : "text-[#666]"
                        }`}
                        >
                        {contact.value}
                        </span>
                    </div>
                    </motion.a>
                ))}
                </div>
            </div>
        </section>
    )
}