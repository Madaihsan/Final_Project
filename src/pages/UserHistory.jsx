import React, { useState, useEffect } from "react";
import NavbarUser from "../components/NavbarUser";

const UserHistory = () => {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Ambil data riwayat presensi dari localStorage
        const storedHistory = JSON.parse(localStorage.getItem("attendanceData"));
        if (storedHistory) {
            setHistory(storedHistory);
        }
        setLoading(false);
    }, []);

    return (
        <div>
            <NavbarUser />
            <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
                <h1 className="text-3xl font-semibold text-center mb-6">Riwayat Presensi</h1>
                {loading ? (
                    <p className="text-center text-gray-500">Memuat data...</p>
                ) : history.length > 0 ? (
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 p-2">Tanggal</th>
                                <th className="border border-gray-300 p-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {history.map((item, index) => (
                                <tr key={index} className="text-center">
                                    <td className="border border-gray-300 p-2">{item.date}</td>
                                    <td
                                        className={`border border-gray-300 p-2 ${
                                            item.status === "Present"
                                                ? "text-green-500"
                                                : item.status === "Absent"
                                                ? "text-red-500"
                                                : "text-yellow-500"
                                        }`}
                                    >
                                        {item.status}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-center text-gray-500">Tidak ada riwayat presensi tersedia.</p>
                )}
            </div>
        </div>
    );
};

export default UserHistory;
