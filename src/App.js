

import { BrowserRouter, Routes, Route,Outlet } from "react-router-dom"
import MainSideBar from "./Components/Sidebar/MainSideBar"


// Components 
import Home from "./Pages/Home"
import Inbox from "./Pages/Messages/Inbox"
import Contacts from "./Pages/Contacts/Contacts"
import Notifications from "./Pages/Notifications/Notifications"
import Analytics from "./Pages/Analytics/Analytics"
import Settings from "./Pages/Settings/Settings"

const App = () => {
    return (
        <>
            <BrowserRouter>
                <div className="bg-[#262738] h-screen w-screen">
                    <div className="fixed top-16 left-16 right-16 bottom-16 bg-[#171926] overflow-hidden rounded-xl flex" >
                        <MainSideBar />
                        <div className="flex-1 text-white">
                            <Routes>
                                <Route path={''} element={<Home />} />
                                <Route path={'/inbox/'}>
                                    <Route path={'huzaifa'} element={<Inbox />} />
                                </Route>

                                <Route path={'/contacts'} element={<Contacts />} />
                                <Route path={'/notifications'} element={<Notifications />} />
                                <Route path={'/analytics'} element={<Analytics />} />
                                <Route path={'/settings'} element={<Settings />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </>
    )
}


export default App