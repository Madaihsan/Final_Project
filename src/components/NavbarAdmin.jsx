import React from "react";
import { Link } from "react-router-dom";

const NavbarAdmin = () => {
    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="text-lg font-bold">ENTEN</div>
            <ul className="flex space-x-6">
                <li><Link to="/admin/dashboard" className="hover:underline">Dashboard</Link></li>
                <li><Link to="/admin/manage-students" className="hover:underline">Kelola Siswa</Link></li>
                <li><Link to="/admin/manage-attendance" className="hover:underline">Presensi Siswa</Link></li>
                <li><Link to="/admin/AdminProfile" className="hover:underline">Profile Admin</Link></li>
            </ul>
            <Link to="/" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Logout</Link>
        </nav>
    );
};

export default NavbarAdmin;