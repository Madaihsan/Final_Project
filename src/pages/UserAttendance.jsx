import React, { useState, useEffect } from "react";
import NavbarUser from "../components/NavbarUser";

const UserAttendance = () => {
    const [attendanceData, setAttendanceData] = useState([]);
    const [newAttendance, setNewAttendance] = useState({
        date: "",
        status: "",
    });

    useEffect(() => {
        // Ambil data dari localStorage saat halaman pertama kali dimuat
        const savedAttendance = JSON.parse(localStorage.getItem("attendanceData"));
        if (savedAttendance) {
            setAttendanceData(savedAttendance);
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewAttendance({
            ...newAttendance,
            [name]: value,
        });
    };

    const handleAddAttendance = () => {
        if (newAttendance.date && newAttendance.status) {
            const updatedAttendanceData = [...attendanceData, newAttendance];
            setAttendanceData(updatedAttendanceData);
            // Simpan data ke localStorage
            localStorage.setItem("attendanceData", JSON.stringify(updatedAttendanceData));
            setNewAttendance({ date: "", status: "" });
        } else {
            alert("Please fill in both fields before adding attendance.");
        }
    };

    return (
        <div>
            <NavbarUser />
            <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
                <h1 className="text-3xl font-semibold text-center mb-6">Attendance</h1>
                <div className="bg-white p-6 rounded-lg shadow-lg space-y-6">
                    <h2 className="text-2xl font-semibold">Add Attendance</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-gray-700">Date:</label>
                            <input
                                type="date"
                                name="date"
                                value={newAttendance.date}
                                onChange={handleInputChange}
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Status:</label>
                            <select
                                name="status"
                                value={newAttendance.status}
                                onChange={handleInputChange}
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                <option value="">Select Status</option>
                                <option value="Present">Present</option>
                                <option value="Absent">Absent</option>
                            </select>
                        </div>
                    </div>
                    <button
                        onClick={handleAddAttendance}
                        className="w-full bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition duration-200 mt-4"
                    >
                        Add Attendance
                    </button>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-semibold">Attendance Records</h2>
                    {attendanceData.length === 0 ? (
                        <p className="text-gray-700 mt-4">No attendance records available.</p>
                    ) : (
                        <table className="w-full mt-4 border-collapse">
                            <thead>
                                <tr>
                                    <th className="border p-3">Date</th>
                                    <th className="border p-3">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {attendanceData.map((record, index) => (
                                    <tr key={index}>
                                        <td className="border p-3 text-center">{record.date}</td>
                                        <td className="border p-3 text-center">{record.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserAttendance;
