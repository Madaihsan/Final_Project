import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavbarAdmin = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold">ENTEN</div>
                {/* Hamburger menu for small screens */}
                <button
                    className="block md:hidden focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
                {/* Menu items */}
                <ul
                    className={`${
                        isMenuOpen ? "block" : "hidden"
                    } absolute top-16 left-0 w-full bg-gray-800 md:static md:flex md:space-x-6 md:top-auto md:w-auto`}
                >
                    <li className="block md:inline-block py-2 px-4 md:p-0">
                        <Link to="/admin/dashboard" className="hover:underline">
                            Dashboard
                        </Link>
                    </li>
                    <li className="block md:inline-block py-2 px-4 md:p-0">
                        <Link to="/admin/manage-students" className="hover:underline">
                            Kelola Siswa
                        </Link>
                    </li>
                    <li className="block md:inline-block py-2 px-4 md:p-0">
                        <Link to="/admin/manage-attendance" className="hover:underline">
                            Presensi Siswa
                        </Link>
                    </li>
                    <li className="block md:inline-block py-2 px-4 md:p-0">
                        <Link to="/admin/AdminProfile" className="hover:underline">
                            Profile Admin
                        </Link>
                    </li>
                </ul>
                {/* Logout button for desktop */}
                <Link
                    to="/"
                    className="hidden md:block bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                    Logout
                </Link>
            </div>

            {/* For mobile screens: move the logout button outside the menu */}
            {isMenuOpen && (
                <div className="bg-gray-800 p-4 md:hidden">
                    <Link
                        to="/"
                        className="block bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 text-center"
                    >
                        Logout
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default NavbarAdmin;
