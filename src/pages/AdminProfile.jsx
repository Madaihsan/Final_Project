import React, { useState } from "react";
import NavbarAdmin from "../components/NavbarAdmin";

const AdminProfile = () => {
  const [adminData, setAdminData] = useState({
    fullName: "John Doe",
    username: "johndoe",
    email: "admin@example.com",
    phone: "123-456-7890",
    address: "123 Admin Street, City, Country",
    birthDate: "1990-01-01",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...adminData });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      setFormData({ ...adminData });
    }
  };

  const handleSave = () => {
    setAdminData({ ...formData });
    setIsEditing(false);
  };

  return (
    <div>
      <NavbarAdmin />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Admin Profile</h1>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Profile Information</h2>
          {isEditing ? (
            <div className="space-y-4">
              <div>
                <label className="font-semibold">Full Name:</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded mt-1"
                />
              </div>
              <div>
                <label className="font-semibold">Username:</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded mt-1"
                />
              </div>
              <div>
                <label className="font-semibold">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded mt-1"
                />
              </div>
              <div>
                <label className="font-semibold">Phone:</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded mt-1"
                />
              </div>
              <div>
                <label className="font-semibold">Address:</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded mt-1"
                />
              </div>
              <div>
                <label className="font-semibold">Birth Date:</label>
                <input
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded mt-1"
                />
              </div>
              <div className="flex space-x-4 mt-4">
                <button
                  onClick={handleSave}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Save
                </button>
                <button
                  onClick={handleEditToggle}
                  className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Full Name:</p>
                <p>{adminData.fullName}</p>
              </div>
              <div>
                <p className="font-semibold">Username:</p>
                <p>{adminData.username || "Not provided"}</p>
              </div>
              <div>
                <p className="font-semibold">Email:</p>
                <p>{adminData.email}</p>
              </div>
              <div>
                <p className="font-semibold">Phone:</p>
                <p>{adminData.phone || "Not provided"}</p>
              </div>
              <div>
                <p className="font-semibold">Address:</p>
                <p>{adminData.address || "Not provided"}</p>
              </div>
              <div>
                <p className="font-semibold">Birth Date:</p>
                <p>{adminData.birthDate}</p>
              </div>
              <button
                onClick={handleEditToggle}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4"
              >
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;