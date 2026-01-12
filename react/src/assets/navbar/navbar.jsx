import { faBook, faHouse, faStethoscope, faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router"

function Navbar() {
    return (
        <div className="w-full fixed top-0 z-50 bg-gray-900 border-b border-gray-800 shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    
                    <div className="flex-shrink-0">
                        <NavLink to="/predict" className="text-xl font-bold text-white hover:text-gray-300 transition-colors">
                            Predict Heart Attack
                        </NavLink>
                    </div>

                    <div className="hidden md:flex items-center space-x-2">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-xl font-medium transition-all ${isActive ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800/50'}`
                            }
                        >
                            <FontAwesomeIcon icon={faHouse} className="w-4 h-4 mr-2" />
                            Home
                        </NavLink>
                        <NavLink
                            to="/predict"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-xl font-medium transition-all ${
                                    isActive ? 'bg-green-500 text-gray-900' : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                                }`
                            }
                        >
                            <FontAwesomeIcon icon={faStethoscope} className="w-4 h-4 mr-2" />
                            Predict
                        </NavLink>
                        <NavLink
                            to="/learn-more"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-xl font-medium transition-all ${
                                    isActive  ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                                }`
                            }
                        >
                            <FontAwesomeIcon icon={faBook} className="w-4 h-4 mr-2" />
                            Learn More
                        </NavLink>
                    </div>

                    <div className="md:hidden">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-gray-400 hover:text-white hover:bg-gray-800">
                                <FontAwesomeIcon icon={faBars} className="w-5 h-5" />
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu dropdown-content bg-gray-900 border border-gray-800 rounded-2xl mt-3 w-52 p-2 shadow-2xl"
                            >
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            `rounded-xl ${isActive ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800/50'}`
                                        }
                                    >
                                        <FontAwesomeIcon icon={faHouse} className="w-4 h-4" />
                                        Homepage
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/predict"
                                        className={({ isActive }) =>
                                            `rounded-xl ${isActive ? 'bg-green-500 text-gray-900' : 'text-gray-400 hover:text-white hover:bg-gray-800/50'}`
                                        }
                                    >
                                        <FontAwesomeIcon icon={faStethoscope} className="w-4 h-4" />
                                        Heart Attack Prediction
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/learn-more"
                                        className={({ isActive }) =>
                                            `rounded-xl ${isActive ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800/50'}`
                                        }
                                    >
                                        <FontAwesomeIcon icon={faBook} className="w-4 h-4" />
                                        About Heart Attack
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar