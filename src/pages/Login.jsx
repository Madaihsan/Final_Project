import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../data/users.json";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        const user = users.find(
            (user) => user.username === username && user.password === password
        );

        if (user) {
            if (user.role === "admin") {
                navigate("/admin/dashboard");
            } else if (user.role === "user") {
                navigate("/home");
            }
        } else {
            alert("Invalid username or password");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    className="w-full p-2 mb-4 border rounded"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 mb-4 border rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                    onClick={handleLogin}
                >
                    Login
                </button>
                <p className="mt-4 text-sm text-center text-gray-600">
                    Don't have an account? 
                    <button
                        onClick={() => navigate("/")}
                        className="font-medium text-blue-600 hover:underline"
                    >
                        Register
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Login;
