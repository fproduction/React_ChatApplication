import Avatar from "../../Components/Profile/Avatar"


const ChatBoxHeader = () => {
    return (
        <>
            <div className="px-4 pt-2 ">
                <div className="border-b border-gray-200 pb-4 flex items-center justify-between">
                    <div className="flex items-center">
                        <Avatar className='w-[50px] h-[50px] mr-3' />
                        <div>
                            <h3>Huzaifa</h3>
                            <span className="flex items-center">
                                <p className="mr-2 text-sm text-gray-400 font-light">Active</p>
                                <span className="w-[10px] h-[10px] block rounded-full bg-green-600"></span>
                            </span>
                        </div>
                    </div>
                    <div>
                        icons
                    </div>
                </div>
            </div>
        </>
    )
}


const ChatBox = () => {

    return (
        <>
            <div className="flex-1 bg-[#1f2133] h-full">
                <ChatBoxHeader />
                <div className="h-full flex flex-col">
                    <div className="flex-1">
                        hello
                    </div>
                    <div >
                        <input type="text" placeholder="Type any message here..." />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatBox