import React, { useState } from "react";
import NavbarUser from "../components/NavbarUser";

const UserProfile = () => {
    // State untuk data profil user
    const [profile, setProfile] = useState({
        name: "Mada Ihsan",
        email: "madaihsan123@gmail.com",
        phone: "087788652910",
        address: "Jl. Tanjakan",
    });

    // State untuk mengedit data
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(profile);

    // Handle perubahan input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Simpan perubahan
    const handleSave = () => {
        setProfile(formData);
        setIsEditing(false);
    };

    // Batalkan perubahan
    const handleCancel = () => {
        setFormData(profile);
        setIsEditing(false);
    };

    // Hapus data profil
    const handleDelete = () => {
        if (window.confirm("Apakah Anda yakin ingin menghapus profil ini?")) {
            setProfile({
                name: "",
                email: "",
                phone: "",
                address: "",
            });
        }
    };

    return (
        <div>
            <NavbarUser />
            <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
                <h1 className="text-3xl font-semibold text-center mb-6">Profil Pengguna</h1>
                {isEditing ? (
                    <div className="bg-white p-6 rounded-lg shadow-lg space-y-6">
                        <h2 className="text-2xl font-semibold">Edit Profil</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-gray-700">Nama:</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Telepon:</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Alamat:</label>
                                <textarea
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                ></textarea>
                            </div>
                        </div>
                        <div className="flex space-x-4 mt-6">
                            <button
                                onClick={handleSave}
                                className="w-full sm:w-auto bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-200"
                            >
                                Simpan
                            </button>
                            <button
                                onClick={handleCancel}
                                className="w-full sm:w-auto bg-gray-500 text-white py-3 px-6 rounded-lg hover:bg-gray-600 transition duration-200"
                            >
                                Batal
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white p-6 rounded-lg shadow-lg space-y-6">
                        <h2 className="text-2xl font-semibold">Detail Profil</h2>
                        <p><strong>Nama:</strong> {profile.name}</p>
                        <p><strong>Email:</strong> {profile.email}</p>
                        <p><strong>Telepon:</strong> {profile.phone}</p>
                        <p><strong>Alamat:</strong> {profile.address}</p>
                        <div className="flex space-x-4 mt-6">
                            <button
                                onClick={() => setIsEditing(true)}
                                className="w-full sm:w-auto bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition duration-200"
                            >
                                Edit
                            </button>
                            <button
                                onClick={handleDelete}
                                className="w-full sm:w-auto bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition duration-200"
                            >
                                Hapus
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserProfile;
