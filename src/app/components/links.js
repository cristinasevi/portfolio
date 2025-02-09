export default function Links({children}){
    return(
        <div className="flex justify-around items-center w-full">
            <span><a href="mailto:hello@cristinasevi.com">HELLO@CRISTINASEVI.COM</a></span>
            <span><a href="https://www.instagram.com/cristina.csv" target="_blank">Instagram</a></span>
            <span><a href="https://www.linkedin.com/in/cristinasevi" target="_blank">Linkedln</a></span>
            <span>{children}</span>
        </div>
    )
}