"use client"
import Image from "next/image"

const projects = [
  {
    Name: "Paint95",
    Description: "Relive the classic Windows 95 Paint in your browser.",
    Web: "https://paint95.cristinasevi.com/",
    Image: "/images/paint95.png",
    Icons: [{ Name: "HTML" }, { Name: "CSS" }, { Name: "JS" }],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full min-h-screen flex items-center justify-center px-6 md:px-16">
        <div className="max-w-6xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
                {projects.map((project, index) => (
                    <div key={index} className="group">
                        <div className="relative aspect-square w-full rounded-lg overflow-hidden">
                            <Image
                            src={project.Image || "/placeholder.svg"}
                            alt={project.Name}
                            fill
                            className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        {/* <p className="mt-6 text-lg">{String(index + 1).padStart(2, "0")}</p> */}
                        <p className="mt-4 text-lg font-normal">{project.Name}</p>
                        <p className="mt-2 text-[#9D9D9D] text-base">
                            {project.Description.length > 100 
                            ? project.Description.slice(0, 100) + "..." 
                            : project.Description}
                        </p>
                        <a
                            href={project.Web}
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
                ))}
            </div>
        </div>
    </section>
  );
}