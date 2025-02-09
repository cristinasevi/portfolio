import Avatar from "./avatar"
import Image from "next/image"

export default function Homepage(){
    return(
        <section id="homepage" className="w-full min-h-screen flex items-center justify-center">
            <div className="relative">
                <div className="relative">
                    {/* Desktop Image */}
                    <div className="hidden md:block w-[32rem] h-[20rem] rounded-lg bg-cover bg-center bg-no-repeat">
                    <Image src="/images/avatar-dither.png" alt="Avatar" fill className="rounded-lg object-cover" />
                    </div>
                    {/* <Avatar></Avatar> */}
                    {/* Mobile Image */}
                    <div className="md:hidden w-[20rem] h-[250px] rounded-lg bg-cover bg-center bg-no-repeat">
                    <Image src="/images/avatar-dither.png" alt="Avatar" fill className="rounded-lg object-cover" />
                    </div>
                    
                    {/* Desktop Text Content */}
                    <div className="hidden md:block">
                        <div>
                            <span className="absolute left-[-1rem] top-[38%] -translate-y-1/2 -rotate-90 origin-left text-[#0000FF] uppercase text-base">
                                WEB DESIGNER
                            </span>
                            <span className="absolute -top-6 left-[6.5%] -translate-x-1/2 text-[#0000FF] uppercase text-base">
                                & DEVELOPER
                            </span>
                            <span className="absolute -bottom-6 left-[88%] -translate-x-1/2 text-[#0000FF] uppercase text-base tracking-tight">
                                CRISTINASEVI
                            </span>
                            <span className="absolute right-[-1rem] top-[98%] -translate-y-1/2 rotate-90 origin-right text-[#0000FF] uppercase text-xs tracking-tight scale-y-150">
                                ©2025
                            </span>
                        </div>
                        <div>
                            <span className="absolute left-[-1rem] top-[24%] -translate-y-1/2 rotate-90 origin-left text-[#0000FF] uppercase text-base">
                                I BELIEVE GREAT DESIGN IS MORE
                            </span>
                            <span className="absolute -bottom-6 left-[26%] -translate-x-1/2 text-[#0000FF] uppercase text-base">
                                THAN AESTHETICS — IT'S ABOUT
                            </span>
                            <span className="absolute -top-6 right-0 text-[#0000FF] uppercase text-base whitespace-nowrap">
                                CREATING EXPERIENCES THAT ARE ENGAGING,
                            </span>
                            <span className="absolute right-[-1rem] top-[80%] -translate-y-1/2 rotate-90 origin-right text-[#0000FF] uppercase text-base">
                                ACCESSIBLE, AND MEANINGFUL
                            </span>
                        </div>
                    </div>

                    {/* Mobile Text Content */}
                    <div className="md:hidden">
                        <div>
                            <span className="absolute left-[-1rem] top-[44%] -translate-y-1/2 -rotate-90 origin-left text-[#0000FF] uppercase text-[0.9rem]">
                                WEB DESIGNER
                            </span>
                            <span className="absolute -top-6 left-[9%] -translate-x-1/2 text-[#0000FF] uppercase text-[0.9rem]">
                                & DEVELOPER
                            </span>
                            <span className="absolute -bottom-6 left-[83%] -translate-x-1/2 text-[#0000FF] uppercase text-[0.9rem] tracking-tight">
                                CRISTINASEVI
                            </span>
                            <span className="absolute right-[-1rem] top-[97%] -translate-y-1/2 rotate-90 origin-right text-[#0000FF] uppercase text-[0.9rem] tracking-tight scale-y-150">
                                ©2025
                            </span>
                        </div>
                        <div>
                            <span className="absolute left-[-1rem] top-[13%] -translate-y-1/2 rotate-90 origin-left text-[#0000FF] uppercase text-[0.9rem]">
                                I BELIEVE GREAT DESIGN IS MORE
                            </span>
                            <span className="absolute -bottom-6 left-[37%] -translate-x-1/2 text-[#0000FF] uppercase text-[0.9rem]">
                                THAN AESTHETICS — IT'S ABOUT
                            </span>
                            <span className="absolute -top-6 right-0 text-[#0000FF] uppercase text-[0.9rem] whitespace-nowrap">
                                CREATING EXPERIENCES THAT ARE ENGAGING,
                            </span>
                            <span className="absolute right-[-1rem] top-[92%] -translate-y-1/2 rotate-90 origin-right text-[#0000FF] uppercase text-[0.9rem]">
                                ACCESSIBLE, AND MEANINGFUL
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}