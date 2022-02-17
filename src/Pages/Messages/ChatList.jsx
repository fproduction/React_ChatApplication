

import Avatar from "../../Components/Profile/Avatar"
import SearchBar from "../../Components/SearchBar"

const Tab = (props) => {
    return (
        <>
            <p className={`cursor-pointer ${props.active && 'border-b-2 border-red-600'}`}>
                {props.text}
            </p>
        </>
    )
}


const ChatContact = (props) => {
    return (
        <>
            <div className={`px-2 cursor-pointer py-1  w-full rounded flex items-center justify-between mb-3 ${props.active ? 'bg-[#292c47]' : 'bg-[#1f2133]'} hover:bg-[#292c47] transition-all`}>
                <div className="mr-2">
                    <Avatar className='w-[30px] h-[30px]' />
                </div>
                <div className="flex-1">
                    <h3 className="text-sm flex items-stretch">
                        Farzan
                        {/* <span className="ml-2 w-[17px] rounded-full  h-[17px] bg-green-700 flex items-center justify-center">2</span> */}
                    </h3>
                    <p className="text-xs text-gray-500">Hi! How are you?</p>
                </div>
                <div>
                    5 mint
                </div>
            </div>
        </>
    )
}


const ChatList = () => {
    return (
        <>
            <div className="min-w-[320px] bg-[#171926]">
                <div className="px-4 py-2">
                    <SearchBar />
                </div>
                <div className="px-2 flex items-center gap-3">
                    <Tab text='All' active />
                    <Tab text='Unread' />
                    <Tab text='Groups' />
                </div>
                <div className="py-3 px-2">
                    <ChatContact />
                    <ChatContact />
                    <ChatContact active />
                    <ChatContact />
                    <ChatContact />
                    <ChatContact />
                    <ChatContact />
                    <ChatContact />
                    <ChatContact />
                    <ChatContact />
                </div>
            </div>
        </>
    )
}

export default ChatList