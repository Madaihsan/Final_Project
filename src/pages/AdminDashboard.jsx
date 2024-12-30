import React from "react";
import NavbarAdmin from "../components/NavbarAdmin";

const AdminDashboard = () => {
    const totalStudents = 100;
    const totalAttendance = 450;

    return (
        <div>
            <NavbarAdmin />
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
                <div className="grid grid-cols-2 gap-6">
                    <div className="bg-blue-500 text-white p-4 rounded shadow">
                        <h2 className="text-xl font-semibold">Total Murid</h2>
                        <p className="text-4xl font-bold">{totalStudents}</p>
                    </div>
                    <div className="bg-green-500 text-white p-4 rounded shadow">
                        <h2 className="text-xl font-semibold">Total Presensi</h2>
                        <p className="text-4xl font-bold">{totalAttendance}</p>
                    </div>
                </div>
                <div className="mt-6">
                    <h2 className="text-xl font-bold mb-2">Ringkasan</h2>
                    <p>Kelola murid, presensi, dan laporan langsung dari dashboard ini.</p>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
