import React from "react";
import NavbarUser from "../components/NavbarUser";

const UserHome = () => {
    const nextAttendance = "2024-12-22";
    const totalAttendance = 20;

    return (
        <div>
            <NavbarUser />
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Selamat Datang di Halaman User</h1>
                <div className="grid grid-cols-2 gap-6">
                    <div className="bg-yellow-500 text-white p-4 rounded shadow">
                        <h2 className="text-xl font-semibold">Presensi Berikutnya</h2>
                        <p className="text-2xl font-bold">{nextAttendance}</p>
                    </div>
                    <div className="bg-purple-500 text-white p-4 rounded shadow">
                        <h2 className="text-xl font-semibold">Total Presensi</h2>
                        <p className="text-4xl font-bold">{totalAttendance}</p>
                    </div>
                </div>
                <div className="mt-6">
                    <h2 className="text-xl font-bold mb-2">Informasi</h2>
                    <p>Pastikan untuk melakukan presensi tepat waktu agar data Anda tetap lengkap.</p>
                </div>
            </div>
        </div>
    );
};

export default UserHome;
