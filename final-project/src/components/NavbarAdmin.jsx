import React from "react";
import { Link } from "react-router-dom";

const NavbarAdmin = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <ul className="flex space-x-4">
                <li><Link to="/admin/dashboard">Dashboard</Link></li>
                <li><Link to="/admin/manage-students">Kelola Murid</Link></li>
                <li><Link to="/admin/manage-attendance">Kelola Presensi</Link></li>
                <li><Link to="/admin/reports">Laporan Presensi</Link></li>
                <li><Link to="/">Logout</Link></li>
            </ul>
        </nav>
    );
};

export default NavbarAdmin;
