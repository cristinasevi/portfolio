import Image from "next/image"
import Link from "next/link"

export default function Header(){
    return(
        <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] h-8 flex rounded-[15px]">
            <div className="flex items-center justify-between h-full w-full ">
                <div className="h-full rounded-full aspect-square flex justify-center md:px-4 p-0 items-center ">
                    <Link href="/" className="flex items-center gap-1 h-full">
                    <Image
                        src="/images/asterisco.svg" 
                        alt="Asterisk Logo"
                        width={16}
                        height={16}
                        className="dark:invert"
                        priority 
                    />
                    <span className="text-foreground font-semibold text-[16px] pr-4 pl-1 leading-tight md:block hidden">cristinasevi</span>
                    </Link>
                </div>
                <nav>
                    <ul className="flex justify-end items-center text-[12px] gap-10">
                        <li><Link href="#about" className="border-b-2 border-transparent hover:border-foreground transition-all duration-200">ABOUT</Link></li>
                        <li><Link href="#projects" className="border-b-2 border-transparent hover:border-foreground transition-all duration-200">PROJECTS</Link></li>
                        <li><Link href="#blog" className="border-b-2 border-transparent hover:border-foreground transition-all duration-200">BLOG</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}