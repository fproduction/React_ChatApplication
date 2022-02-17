


import { Link } from "react-router-dom"

const NavItem = (props) => {
    return (
        <>
            <Link
                to={props.nextPath}
                className="flex items-center gap-3 text-white cursor-pointer px-4 py-2 hover:bg-[#171926] rounded-md transition-all "
                onClick={() => {

                }}
            >
                <span>
                    <img
                        src={`${process.env.PUBLIC_URL}/icons/${props.icon}`}
                        className='w-6'
                    />
                </span>
                <p>{props.text}</p>
            </Link>
        </>
    )
}


export default NavItem