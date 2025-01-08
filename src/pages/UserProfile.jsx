import React, { useState, useEffect } from "react";
import NavbarUser from "../components/NavbarUser";

const UserProfile = () => {
    // State untuk data profil user
    const [profile, setProfile] = useState({
        name: "Mada Ihsan",
        email: "madaihsan123@gmail.com",
        phone: "087788652910",
        address: "Jl. Tanjakan",
        photo: "", // Menambahkan state foto
    });

    // State untuk mengedit data
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(profile);

    // Mengambil data dari localStorage saat pertama kali load
    useEffect(() => {
        const savedData = localStorage.getItem("userProfile");
        if (savedData) {
            setProfile(JSON.parse(savedData));
            setFormData(JSON.parse(savedData));
        }
    }, []);

    // Handle perubahan input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Mengubah foto profil
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const updatedData = { ...formData, photo: reader.result };
                setFormData(updatedData);
                localStorage.setItem("userProfile", JSON.stringify(updatedData)); // Simpan ke localStorage
            };
            reader.readAsDataURL(file); // Baca file sebagai base64
        }
    };

    // Simpan perubahan
    const handleSave = () => {
        setProfile(formData);
        localStorage.setItem("userProfile", JSON.stringify(formData)); // Simpan ke localStorage
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
                photo: "", // Reset foto juga
            });
            localStorage.removeItem("userProfile"); // Hapus data dari localStorage
        }
    };

    return (
        <div>
            <NavbarUser />
            <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
                <h1 className="text-3xl font-semibold text-center mb-6">Profil Pengguna</h1>

                {/* Foto Profil */}
                <div className="flex justify-center mb-6">
                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg transform hover:scale-105 transition-all duration-300">
                        <img
                            src={formData.photo || "/default-avatar.png"} // Foto default jika tidak ada foto
                            alt="User Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* File Input untuk Mengubah Foto */}
                {isEditing && (
                    <div className="flex justify-center mb-6">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="text-sm text-gray-700"
                        />
                    </div>
                )}

                {/* Detail Profil */}
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
