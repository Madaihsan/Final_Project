import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarAdmin from "../components/NavbarAdmin";

const AdminDashboard = () => {
    const [totalStudents, setTotalStudents] = useState(0);
    const [loading, setLoading] = useState(true);
    const [recentActivities, setRecentActivities] = useState([]);
    const [announcements, setAnnouncements] = useState([]);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                // Fetch total students
                const response = await axios.get("http://localhost:5000/api/students");
                const students = response.data;
                setTotalStudents(students.length);

                // Simulate recent activities (replace with real API later)
                setRecentActivities([
                    { id: 1, activity: "Added a new student: Mada Ihsan", timestamp: "2025-01-07 10:00 AM" },
                    { id: 2, activity: "Updated class schedule", timestamp: "2025-01-06 3:00 PM" },
                    { id: 3, activity: "Deleted student: Agus Sad", timestamp: "2025-01-05 1:30 PM" },
                ]);

                // Simulate announcements (replace with real API later)
                setAnnouncements([
                    { id: 1, message: "Reminder: Midterm exams start next week." },
                    { id: 2, message: "Holiday on January 15 for school anniversary." },
                ]);

                setLoading(false);
            } catch (error) {
                console.error("Error fetching dashboard data:", error);
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100">
            <NavbarAdmin />
            <div className="container mx-auto p-6">
                <h1 className="text-2xl font-bold text-gray-700 mb-4">Admin Dashboard</h1>
                {loading ? (
                    <p className="text-center text-gray-500">Loading...</p>
                ) : (
                    <>
                        {/* Total Students */}
                        <div className="bg-white shadow rounded-lg p-6 mb-6">
                            <h2 className="text-xl font-semibold text-gray-600">Total Students</h2>
                            <p className="text-4xl font-bold text-blue-500 mt-2">{totalStudents}</p>
                        </div>

                        {/* Recent Activities */}
                        <div className="bg-white shadow rounded-lg p-6 mb-6">
                            <h2 className="text-xl font-semibold text-gray-600">Recent Activities</h2>
                            <ul className="mt-2">
                                {recentActivities.map((activity) => (
                                    <li key={activity.id} className="text-gray-700 text-sm mb-2">
                                        <span className="font-medium">{activity.activity}</span> -{" "}
                                        <span className="text-gray-500">{activity.timestamp}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Announcements */}
                        <div className="bg-white shadow rounded-lg p-6 mb-6">
                            <h2 className="text-xl font-semibold text-gray-600">Announcements</h2>
                            <ul className="mt-2">
                                {announcements.map((announcement) => (
                                    <li key={announcement.id} className="text-gray-700 text-sm mb-2">
                                        {announcement.message}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <a
                                href="/admin/manage-students"
                                className="bg-blue-500 text-white rounded-lg p-4 text-center font-semibold shadow hover:bg-blue-600"
                            >
                                Manage Students
                            </a>
                            <a
                                href="/admin/manage-attendance"
                                className="bg-green-500 text-white rounded-lg p-4 text-center font-semibold shadow hover:bg-green-600"
                            >
                                Manage Attendance
                            </a>
                            <a
                                href="/admin/dashboard"
                                className="bg-yellow-500 text-white rounded-lg p-4 text-center font-semibold shadow hover:bg-yellow-600"
                            >
                                View Reports
                            </a>
                            <a
                                href="/admin/AdminProfile"
                                className="bg-red-500 text-white rounded-lg p-4 text-center font-semibold shadow hover:bg-red-600"
                            >
                                Admin Profile
                            </a>
                        </div>

                        {/* Calendar */}
                        <div className="bg-white shadow rounded-lg p-6">
                            <h2 className="text-xl font-semibold text-gray-600">Calendar</h2>
                            <p className="text-gray-500 mt-2">Calendar integration coming soon!</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
