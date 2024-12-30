import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarAdmin from "./components/NavbarAdmin";
import NavbarUser from "./components/NavbarUser";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import UserHome from "./pages/UserHome";
import UserProfile from "./pages/UserProfile";
import Register from "./pages/Register/register";
import firebase from './config/firebase';

console.log('config firebase ==> ', firebase);



// const App = () => {
//     const userRole = null; 

//     return (
//         <Router>
//             {userRole === "admin" && <NavbarAdmin />}
//             {userRole === "user" && <NavbarUser />}
//             <Routes>
//                 <Route path="/" element={<Register />} />
//             </Routes>
//         </Router>
//     );
// };

// export default App;


const App = () => {
    const userRole = null; 

    return (
        <Router>
            {userRole === "admin" && <NavbarAdmin />}
            {userRole === "user" && <NavbarUser />}
            <Routes>
                <Route path="/" element={<Register />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/home" element={<UserHome />} />
                <Route path="/profile" element={<UserProfile />} />
            </Routes>
        </Router>
    );
};

export default App;
