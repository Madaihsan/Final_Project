import React from "react";
import NavbarUser from "../components/NavbarUser";
import { Link } from "react-router-dom";

const UserHome = () => {
    return (
        <div>
            {/* Navbar */}
            <NavbarUser />

            {/* Konten utama */}
            <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md mt-6">
                <h1 className="text-3xl font-semibold text-center mb-6">Selamat Datang di Sistem Presensi</h1>
                <p className="text-gray-700 text-center mb-6">
                    Anda dapat mengelola kehadiran, melihat riwayat presensi, dan memperbarui profil Anda.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Link
                        to="/attendance"
                        className="block bg-green-500 text-white py-6 px-4 text-center rounded-lg hover:bg-green-600 transition duration-200"
                    >
                        Presensi Sekarang
                    </Link>
                    <Link
                        to="/history"
                        className="block bg-blue-500 text-white py-6 px-4 text-center rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        Lihat Riwayat Presensi
                    </Link>
                    <Link
                        to="/profile"
                        className="block bg-yellow-500 text-white py-6 px-4 text-center rounded-lg hover:bg-yellow-600 transition duration-200"
                    >
                        Perbarui Profil
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UserHome;
