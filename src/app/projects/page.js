"use client"

import Image from "next/image"
import { BlurButton, TryButton } from "../components/ui/buttons"
import { ArrowUpRight } from "lucide-react"
import { useState, useEffect } from "react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Offgrid",
      subtitle: "A visual space designed to inspire — blending colors and typography to spark creativity.",
      imageUrl: "/images/offgrid.png",
      altText: "Offgrid - Design System",
      website: "https://offgrid.cristinasevi.com/effects/color-palette"
    },
  ];
  
  return (
    <main className="min-h-screen py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              subtitle={project.subtitle}
              imageUrl={project.imageUrl}
              altText={project.altText}
              website={project.website}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

function ProjectCard({ title, subtitle, imageUrl, altText, website }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es dispositivo móvil al cargar y cuando cambia el tamaño de la ventana
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Verificar al cargar
    checkIfMobile();
    
    // Verificar cuando se redimensiona
    window.addEventListener('resize', checkIfMobile);
    
    // Limpiar event listener
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Función para manejar el clic en el botón
  const handleButtonClick = () => {
    if (website) {
      window.open(website, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className="bg-white rounded-3xl overflow-hidden shadow-md" 
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      <div className="relative bg-white rounded-3xl overflow-hidden mx-1 mt-1 mb-1 aspect-[4/3]">
        
        {/* Estado normal (sin hover) - Imagen completa con BlurButton */}
        <div 
          className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
            isHovered || isMobile ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <Image 
            src={imageUrl || "/placeholder.svg"} 
            alt={altText} 
            fill 
            className="object-cover bg-[#999]" 
            loading="lazy" quality={70}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          
          <div className="absolute bottom-5 right-6 z-20">
            <BlurButton onClick={handleButtonClick}>
              <span>See more</span>
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </BlurButton>
          </div>
        </div>

        {/* Estado hover o móvil - Imagen más pequeña con sección de información */}
        <div 
          className={`absolute inset-0 flex flex-col transition-opacity duration-300 ease-in-out ${
            isHovered || isMobile ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-full h-[73%] pt-3 px-3 relative">
            <div className="w-full h-full overflow-hidden rounded-2xl">
              <Image 
                src={imageUrl || "/placeholder.svg"} 
                alt={altText} 
                fill 
                className="object-cover bg-[#999] rounded-2xl" 
              />
            </div>
          </div>
          
          {/* Sección de información - Mostrar en desktop y mobile */}
          <div className="p-5 h-[27%] bg-white text-black relative">
            <div className="z-10 relative">
              <h3 className="text-lg font-bold text-black">{title}</h3>
              {/* Solo mostrar subtitulo en desktop */}
              {!isMobile && (
                <p className="text-gray-400 text-base max-w-[75%] line-clamp-2">{subtitle}</p>
              )}
            </div>
            
            <div className={`absolute ${isMobile ? 'bottom-3' : 'bottom-5'} right-6 z-20`}>
              <TryButton onClick={handleButtonClick}>
                <span>See more</span>
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </TryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}