import { Outlet } from "react-router"
import Navbar from "../assets/navbar/navbar"

function MainLayout() {
    return <div className="flex flex-col h-screen">
        <Navbar/>
        <div className="flex-1">
            <Outlet />
        </div>
        <div>
        </div>
    </div>
}
export default MainLayout