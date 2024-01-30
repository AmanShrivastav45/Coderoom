import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import Logo from '../../images/Logofghd.png'
import '../../fonts/stylesheet.css'

export default function Header() {
    return (
        <header className="shadow fixed w-screen z-50 top-0 bg-[#fff0e5]">
            <nav className="border-b border-solid border-[#98a9ec] px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center Apercu-Pro-Bold font-extrabold">
                        <img
                            src={Logo}
                            className="mr-3 h-9"
                            alt="Logo"
                        />
                    </Link>
                    
                    <div className="flex items-center lg:order-2">
                        
                        <Link
                            to='/login'
                            className="Apercu-Medium text-black border-solid border-2 transition duration-200 ease-in-out border-[#10162f]  hover:text-white bg-[white] hover:bg-[#10162f] rounded-md text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Sign Up
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="Apercu-Regular flex flex-col mt-4 text-base lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-700" : "text-black"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-700" : "text-black"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                                    }
                                >
                                    Learn
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/problems"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-700" : "text-black"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                                    }
                                >
                                    Problems
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/ide"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-700" : "text-black"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                                    }
                                >
                                    IDE
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-700" : "text-black"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                                    }
                                >
                                    Coderoom
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}