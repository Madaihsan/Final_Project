import React from "react";
import { Link } from "react-router-dom";

const NavbarUser = () => {
    return (
        <nav className="bg-green-800 text-white p-4">
            <ul className="flex space-x-4">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/attendance">Presensi</Link></li>
                <li><Link to="/history">Riwayat Presensi</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/">Logout</Link></li>
            </ul>
        </nav>
    );
};

export default NavbarUser;
