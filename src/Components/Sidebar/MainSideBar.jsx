


import Avatar from "../Profile/Avatar"

import NavItem from "./NavItem"

const MainSideBar = () => {

    let name = 'Syed Farzan Haider'



    return (
        <>
            <div className="bg-[#e7233c] min-w-[200px]">
                <div className="flex justify-center py-4">
                    <div>
                        <div className="flex justify-center">
                            <Avatar />
                        </div>
                        <h3 className="font-bold text-white">{name.slice(0 , 20)}{name.length > 20 && '...'}</h3>
                    </div>
                </div>
                <div className="px-2">
                    <NavItem text='Home' icon='house-solid.svg' nextPath='/' />
                    <NavItem text='Messages' icon='message-solid.svg' nextPath='/inbox' />
                    <NavItem text='Contacts' icon='address-card-solid.svg' nextPath='/contacts' />
                    <NavItem text='Notifications' icon='bell-solid.svg' nextPath='/notifications' />
                    <NavItem text='Analytics' icon='chart-line-solid.svg' nextPath='/analytics' />
                    <NavItem text='Settings' icon='gear-solid.svg' nextPath='/settings' />
                </div>
            </div>
        </>
    )
}

export default MainSideBar