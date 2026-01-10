import { Outlet } from "react-router"
import Navbar from "../assets/navbar/navbar"

function MainLayout() {
    return <div className=" flex flex-col h-screen bg-white dark:bg-slate-800 shadow-sm">
        <Navbar/>
        <div className="flex-1">
            <Outlet />
        </div>
    </div>
}
export default MainLayout