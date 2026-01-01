import { NavLink } from "react-router"
function Navbar() {
    return <div className="navbar bg-white dark:bg-gray-900 shadow-sm px-4">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><NavLink to="/">Homepage</NavLink></li>
                    <li><NavLink to="/predict">Predict</NavLink></li>
                </ul>
            </div>
        </div>
        <div className="navbar-center">
            <NavLink to="/predict" className="btn btn-ghost text-xl">Predict Heart Attack</NavLink>
        </div>
        <div className="navbar-end">
            <div className="dropdown dropdown-end">
                <div className= "circle avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt=""
                            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3VzdmtuZGxybWpsY3gzYjc1MG80NGR0MWlodG9md2RveXE3ZmFxdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eyupvI48Z0b0Ax1txM/giphy.gif" />
                    </div>
                </div>
            </div>

        </div>
    </div>
}
export default Navbar