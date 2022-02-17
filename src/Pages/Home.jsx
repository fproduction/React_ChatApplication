

import { Link } from "react-router-dom"

import HeaderComponent from "../Components/Header/Header"
import Avatar from "../Components/Profile/Avatar"



const Home = () => {
    return (
        <>
            <div className="bg-[#171926] h-full flex items-start py-5 justify-center">
                <div className="text-center">
                    <Avatar className='w-[150px] h-[150px] mb-3' />
                    <h3 className="cursor-pointer mb-2">Edit</h3>
                    <h2 className="text-lg mb-4">Syed Farzan Haider</h2>
                    <p className="text-xs cursor-pointer mb-3">+92-317-4014492</p>
                    <div>
                        <p>Urget Calls only</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home