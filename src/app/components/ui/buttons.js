export function Button({ children, ...props }) {
    return (
        <button 
            {...props}
            className="bg-[#005EFE] hover:bg-[#0050d9] text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ease-in-out whitespace-nowrap inline-block"
        >
            {children}
        </button>
    )
}

export function BlurButton({ children, ...props }) {
    return (
        <button 
            {...props}
            className="bg-black/20 backdrop-blur-md text-white border border-white/10 hover:bg-black/40 px-5 py-2.5 rounded-full font-semibold transition-colors duration-300 ease-in-out whitespace-nowrap inline-flex items-center text-base"
        >
            {children}
        </button>
    )
}

export function TryButton({ children, ...props }) {
    return (
        <button 
            {...props}
            className="bg-[#005EFE] hover:bg-[#0050d9] text-white px-5 py-2.5 rounded-full font-semibold transition-colors duration-300 ease-in-out whitespace-nowrap inline-flex items-center text-base"
        >
            {children}
        </button>
    )
}

export default Button;