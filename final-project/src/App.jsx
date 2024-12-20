import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarAdmin from "./components/NavbarAdmin";
import NavbarUser from "./components/NavbarUser";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import UserHome from "./pages/UserHome";
import UserProfile from "./pages/UserProfile";

const App = () => {
    const userRole = null; // Set as null for initial state (e.g., before login)

    return (
        <Router>
            {userRole === "admin" && <NavbarAdmin />}
            {userRole === "user" && <NavbarUser />}
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/home" element={<UserHome />} />
                <Route path="/profile" element={<UserProfile />} />
            </Routes>
        </Router>
    );
};

export default App;
