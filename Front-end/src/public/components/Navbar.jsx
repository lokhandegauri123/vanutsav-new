import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa';
import { MdArrowDropDown, MdClose, MdMenu } from 'react-icons/md';
import { IoMdArrowDropdown } from "react-icons/io"
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    return <>

        <nav className="bg-white shadow-lg fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-5">
                <div className="flex justify-between items-center h-24">
                    <div className="flex items-center">
                        <p className="flex items-center justify-center">
                            <img
                                className="h-20"
                                src="/vanutsav/logo.png"
                                alt="Logo"
                            />
                            <span className="ml-4 uppercase font-black">
                                <Link to={"/"}>
                                    Van Utsav
                                </Link>
                            </span>
                        </p>
                    </div>
                    <div className="hidden md:flex justify-center items-center lg:space-x-7 md:space-x-5">
                        <p className="relative group text-lg font-semibold text-black hover:text-green-600 transition duration-300 ease-in-out transform hover:scale-105">
                            <Link to={"/"}>
                                Home
                            </Link>
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </p>

                        <p className="relative group text-lg font-semibold text-black hover:text-green-600 transition duration-300 ease-in-out transform hover:scale-105">
                            <Link to={"/about"}>
                                About
                            </Link>
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </p>
                        {/* <p className="relative text-lg font-semibold text-black hover:text-green-600 transition duration-300 ease-in-out transform hover:scale-105">
                            <Link to={"/about"}>
                                About
                            </Link>
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 scale-x-0 transition-transform duration-300 ease-in-out origin-bottom-right hover:origin-bottom-left hover:scale-x-100"></span>
                        </p> */}
                        <p className="relative group text-lg font-semibold text-black hover:text-green-600 transition duration-300 ease-in-out transform hover:scale-105">
                            <Link to={"/gallary"}>
                                Gallery
                            </Link>
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </p>
                        <p className="relative group text-lg font-semibold text-black hover:text-green-600 transition duration-300 ease-in-out transform hover:scale-105">
                            <Link to={"/our-package"}>
                                Activities
                            </Link>
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </p>


                        {/* Dropdown for Package on Hover */}
                        <div className="relative group ">
                            <div className='flex'>
                                <button
                                    className="relative group flex items-center text-lg font-semibold text-black hover:text-green-600 transition duration-300 ease-in-out transform hover:scale-105"
                                >
                                    Packages
                                    <IoMdArrowDropdown />
                                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                                </button>
                            </div>

                            {/* Dropdown content (shown on hover) */}
                            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transform scale-y-0 group-hover:scale-y-100 origin-top transition-all duration-300 ease-in-out">
                                <Link
                                    to="/my-packges"
                                    className="block px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-green-500 hover:text-white"
                                >
                                    One Day Picnic
                                </Link>
                                <Link
                                    to="/my-packges"
                                    className="block px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-green-500 hover:text-white"
                                >
                                    Night Package
                                </Link>
                                <Link
                                    to="/my-packges"
                                    className="block px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-green-500 hover:text-white"
                                >
                                    Whole Day Package
                                </Link>
                                <Link
                                    to="/school-package"
                                    className="block px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-green-500 hover:text-white"
                                >
                                    School Package
                                </Link>
                            </div>

                        </div>

                        <p className="relative  group text-lg font-semibold text-black hover:text-green-600 transition duration-300 ease-in-out transform hover:scale-105">
                            <Link to={"/contact"}>
                                Contact
                            </Link>
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </p>


                        <Link to={"/contact"}>
                            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-transform duration-300 ease-in-out transform hover:scale-105">
                                Book Now
                            </button>
                        </Link>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu}>
                            {isOpen ? (
                                <MdClose className="h-6 w-6 text-gray-800" />
                            ) : (
                                <MdMenu className="h-6 w-6 text-gray-800" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <Link to={"/"} onClick={toggleMenu}>
                        <p

                            className="block text-gray-800 hover:text-white px-4 py-2 hover:bg-green-500 "
                        >
                            Home
                        </p>
                    </Link>
                    <Link to={"/about"} onClick={toggleMenu}>
                        <p
                            className="block text-gray-800 hover:text-white px-4 py-2 hover:bg-green-500"
                        >
                            About
                        </p>
                    </Link>

                    <Link to={"/gallary"} onClick={toggleMenu}>
                        <p
                            className="block text-gray-800 px-4 py-2 hover:text-white  hover:bg-green-500"
                        >
                            Gallary
                        </p>
                    </Link>

                    <Link to={"/our-package"} onClick={toggleMenu}>
                        <p
                            className="block text-gray-800 px-4 py-2 hover:text-white  hover:bg-green-500"
                        >
                            Activities
                        </p>
                    </Link>



                    {/* Mobile Dropdown for Package */}
                    <div className="block text-gray-800 hover:text-green-700 px-4 py-2">
                        <button className="w-full text-left">
                            Packages
                        </button>
                        <div className="pl-4">
                            <Link
                                to="/my-packges"
                                className="block px-4 py-2 text-sm  text-gray-800 hover:bg-green-500 hover:text-white"
                                onClick={toggleMenu}
                            >
                                Day Picnic Package
                            </Link>
                            <Link
                                to="/my-packges"
                                className="block px-4 py-2 text-sm  text-gray-800 hover:bg-green-500 hover:text-white"
                                onClick={toggleMenu}
                            >
                                Night Package
                            </Link>
                            <Link
                                to="/my-packges"
                                className="block px-4 py-2 text-sm  text-gray-800 hover:bg-green-500 hover:text-white"
                                onClick={toggleMenu}
                            >
                                Whole Day Package
                            </Link>
                            <Link to={"/school-package"} onClick={toggleMenu}>
                                <p
                                    className="block text-gray-800 hover:text-white px-4 py-2 hover:bg-green-500"
                                >


                                    School Package
                                </p>
                            </Link>
                        </div>
                    </div>
                    <Link to={"/contact"} onClick={toggleMenu}>
                        <p
                            className="block text-gray-800 hover:text-white px-4 py-2 hover:bg-green-500"
                        >

                            Contact
                        </p>
                    </Link>
                    <div className="text-center">
                        <button onClick={toggleMenu} className="w-52 bg-green-600 text-white px-4 py-2 mt-2 rounded mb-2">
                            <Link to={"/contact"}>
                                Book Now
                            </Link>
                        </button>
                    </div>
                </div>
            )}
        </nav>



    </>
}

export default Navbar