export default function Avatar(){
    return(
        <div className="avatar"
            style={{
                backgroundImage: 'url(/images/avatar-dither.png)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                borderRadius: '.5rem',
                width: '32rem',
                height: '20rem',
            }}>
        </div>
    )
}