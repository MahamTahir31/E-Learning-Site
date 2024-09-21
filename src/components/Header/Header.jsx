import React from "react";
import {Link, NavLink} from "react-router-dom";

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0 ">
            <nav className=" border-gray-200 px-4 lg:px-6 py-2.5 bg-pink-500 ">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center font-bold">
                        User Dashboard
                    </Link>
                    <div className="flex items-center lg:order-2">
                       
                        <Link
                            to="/Profile"
                            className="  bg-purple-500 hover:bg-purple-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                           Profile
                        </Link>
                        <Link
                            to="/Login"
                            className="  bg-purple-500 hover:bg-purple-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                           Log out
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to ="/"
                                    className={(isActive) =>
                                        `block py-2 pr-4 pl-3 ${isActive ? "active:text-orange-700" : "text-gray-700"}border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/Progress"
                                    className={(isActive) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"}border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
                                    }
                                >
                                    Progress
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/Courses"
                                    className={(isActive) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"}border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
                                    }
                                >
                                    Courses
                                </NavLink>
                            </li>
                         
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}


