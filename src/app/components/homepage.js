"use client"
import { useEffect } from "react"
import Image from "next/image"

export default function Homepage() {
    useEffect(() => {
        const text1 = document.getElementById("text1")
        const text2 = document.getElementById("text2")
        let cont = 0

        const interval = setInterval(() => {
        if(cont%2 === 0) {
            text1.style.display = "none"
            text2.style.display = "block"
        } else {
            text1.style.display = "block"
            text2.style.display = "none"
        }
        cont++
        }, 5000)

        document.getElementById('year').textContent = new Date().getFullYear();
        return () => clearInterval(interval)
    }, [])

    const handleScroll = () => {
        const windowHeight = window.innerHeight
        window.scrollTo({
          top: windowHeight,
          behavior: "smooth",
        })
    }

    return (
        <section id="homepage" className="w-full min-h-screen flex items-center justify-center">
            <div className="relative">
                <div className="relative">
                    <div className="relative w-[20rem] h-[250px] md:w-[32rem] md:h-[20rem] rounded-lg bg-cover bg-center bg-no-repeat">
                        <Image 
                            src="/images/avatar-dither.png" 
                            alt="Avatar" 
                            fill 
                            className="rounded-lg object-cover" 
                            priority 
                        />
                    </div>
                    <div>
                        <div id="text1">
                            <span className="absolute left-[-1rem] top-[44%] md:top-[38%] -translate-y-1/2 -rotate-90 origin-left text-[#0000FF] uppercase text-[0.9rem] md:text-base">
                                WEB DESIGNER
                            </span>
                            <span className="absolute -top-6 left-[9%] md:left-[6.5%] -translate-x-1/2 text-[#0000FF] uppercase text-[0.9rem] md:text-base">
                                & DEVELOPER
                            </span>
                            <span className="absolute -bottom-6 left-[83%] md:left-[88%] -translate-x-1/2 text-[#0000FF] uppercase text-[0.9rem] md:text-base tracking-tight">
                                CRISTINASEVI
                            </span>
                            <span className="absolute right-[-1rem] top-[97%] md:top-[98%] -translate-y-1/2 rotate-90 origin-right text-[#0000FF] uppercase text-[0.7rem] md:text-xs tracking-tight scale-y-150">
                                ©<span id="year"></span>
                            </span>
                        </div>
                        <div id="text2" className="hidden">
                            <span className="absolute left-[-1rem] top-[13%] md:top-[24%] -translate-y-1/2 rotate-90 origin-left text-[#0000FF] uppercase text-[0.9rem] md:text-base">
                                I BELIEVE GREAT DESIGN IS MORE
                            </span>
                            <span className="absolute -bottom-6 left-[37%] md:left-[26%] -translate-x-1/2 text-[#0000FF] uppercase text-[0.9rem] w-full  md:ml-32 ml-10 md:text-base">
                                THAN AESTHETICS — IT'S ABOUT
                            </span>
                            <span className="absolute -top-6 -right-5 text-[#0000FF] uppercase text-[0.9rem] md:text-base whitespace-nowrap">
                                CREATING EXPERIENCES THAT ARE ENGAGING,
                            </span>
                            <span className="absolute right-[-1rem] top-[92%] md:top-[80%] -translate-y-1/2 rotate-90 origin-right text-[#0000FF] uppercase text-[0.9rem] md:text-base">
                                ACCESSIBLE, AND MEANINGFUL
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={handleScroll} className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
                <div className="animate-pulse"> {/* animate-bounce */}
                    <span className="uppercase text-[10px] tracking-widest">SCROLL</span>
                </div>
                <div className="w-2 h-2 border-b-[1.5px] border-r-[1.5px] border-foreground rotate-45 mx-auto"></div>
            </button>
        </section>
    )
}