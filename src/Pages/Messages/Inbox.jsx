


import ChatList from "./ChatList"
import ChatBox from "./ChatBox"

import { Route, Routes } from "react-router-dom"

const Inbox = () => {
    return (
        <>
            <div className="flex items-stretch h-full">
                <ChatList />
                <Routes>
                    <Route path={'/inbox/huzaifa/'} element={<ChatBox />} />
                </Routes>
            </div>
        </>
    )
}

export default Inbox