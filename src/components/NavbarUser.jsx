import React from "react";
import { Link } from "react-router-dom";

const NavbarUser = () => {
    return (
        <nav className="bg-green-800 text-white p-4 flex justify-between items-center">
            <div className="text-lg font-bold">ENTEN</div>
            <ul className="flex space-x-6">
                <li><Link to="/home" className="hover:underline">Home</Link></li>
                <li><Link to="/attendance" className="hover:underline">Presensi</Link></li>
                <li><Link to="/history" className="hover:underline">Riwayat Presensi</Link></li>
                <li><Link to="/profile" className="hover:underline">Profile</Link></li>
            </ul>
            <Link to="/" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Logout</Link>
        </nav>
    );
};

export default NavbarUser;