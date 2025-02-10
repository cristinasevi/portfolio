export default function Links() {
    return (
        <div className="flex flex-wrap md:flex-row justify-around items-center w-full gap-2 md:gap-10 text-[0.9rem] md:text-base mb-3">
            <a 
                href="mailto:hello@cristinasevi.com" 
                className="flex items-center gap-2 hover:text-[#0000FF] transition-colors"
            >
                <span className="md:hidden">Email</span>
                <span className="hidden md:inline">HELLO@CRISTINASEVI.COM</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17L17 7"></path>
                </svg>
            </a>
            <a 
                href="https://www.instagram.com/cristina.csv" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#0000FF] transition-colors"
            >
                Instagram
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17L17 7"></path>
                </svg>
            </a>
            <a 
                href="https://www.linkedin.com/in/cristinasevi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#0000FF] transition-colors"
            >
                LinkedIn
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17L17 7"></path>
                </svg>
            </a>
        </div>
    )
}