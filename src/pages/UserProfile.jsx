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
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Profil Pengguna</h1>
            {isEditing ? (
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-xl font-semibold mb-2">Edit Profil</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-gray-700">Nama:</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Telepon:</label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Alamat:</label>
                            <textarea
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            ></textarea>
                        </div>
                    </div>
                    <div className="mt-4 flex space-x-2">
                        <button
                            onClick={handleSave}
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Simpan
                        </button>
                        <button
                            onClick={handleCancel}
                            className="bg-gray-500 text-white px-4 py-2 rounded"
                        >
                            Batal
                        </button>
                    </div>
                </div>
            ) : (
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-xl font-semibold mb-2">Detail Profil</h2>
                    <p><strong>Nama:</strong> {profile.name}</p>
                    <p><strong>Email:</strong> {profile.email}</p>
                    <p><strong>Telepon:</strong> {profile.phone}</p>
                    <p><strong>Alamat:</strong> {profile.address}</p>
                    <div className="mt-4 flex space-x-2">
                        <button
                            onClick={() => setIsEditing(true)}
                            className="bg-green-500 text-white px-4 py-2 rounded"
                        >
                            Edit
                        </button>
                        <button
                            onClick={handleDelete}
                            className="bg-red-500 text-white px-4 py-2 rounded"
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
