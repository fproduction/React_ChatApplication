


const Avatar = (props) => {
    return (
        <>
            <div
                className={` w-[90px] h-[90px] bg-center bg-cover bg-no-repeat rounded-full ${props.className}`}
                style={{
                    backgroundImage: `url('${process.env.PUBLIC_URL}/images/farzan.jpeg')`
                }}
            >

            </div>
        </>
    )
}

export default Avatar