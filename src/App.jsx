import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarAdmin from "./components/NavbarAdmin";
import NavbarUser from "./components/NavbarUser";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import AdminManageStudents from "./pages/AdminManageStudents"; 
import AdminManageAttendance from "./pages/AdminManageAttendance"; 
import AdminProfile from "./pages/AdminProfile"; 
import UserHome from "./pages/UserHome";
import UserProfile from "./pages/UserProfile";
import Register from "./pages/Register/register";
import StudentList from "./components/StudentList";
import firebase from './config/firebase/index';

console.log('config firebase ==> ', firebase);

const App = () => {
    const userRole = "admin"; // Anda bisa mengubah ini sesuai dengan autentikasi yang digunakan

    return (
        <Router>
            <Routes>
                {/* Jika userRole adalah admin, navbar admin akan muncul */}
                {userRole === "admin" && (
                    <Route path="/*" element={<NavbarAdmin />} />
                )}
                {/* Jika userRole adalah user, navbar user akan muncul */}
                {userRole === "user" && (
                    <Route path="/*" element={<NavbarUser />} />
                )}

                <Route path="/" element={<Register />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/manage-students" element={<AdminManageStudents />} />
                <Route path="/admin/manage-attendance" element={<AdminManageAttendance />} /> 
                <Route path="/admin/AdminProfile" element={<AdminProfile />} /> 
                <Route path="/home" element={<UserHome />} />
                <Route path="/profile" element={<UserProfile />} />
            </Routes>
        </Router>
    );
};

export default App;
