export default function Link({ children, ...props }) {
    return (
        <a 
            {...props}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-white/10"
        >
            {children}
        </a>
    )
}
