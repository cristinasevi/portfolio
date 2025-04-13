export default function Button({ children, ...props }) {
    return (
        <button 
            {...props}
            className="bg-[#005EFE] hover:bg-[#0050d9] text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ease-in-out whitespace-nowrap inline-block"
        >
            {children}
        </button>
    )
}
