import React, { useState, useEffect } from "react";
import NavbarAdmin from "../components/NavbarAdmin";

const AdminProfile = () => {
  const [adminData, setAdminData] = useState({
    fullName: "",
    username: "",
    email: "",
    phone: "",
    address: "",
    birthDate: "",
    photo: "", // Add photo to admin data
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...adminData });

  // Load data from localStorage when the component mounts
  useEffect(() => {
    const savedData = localStorage.getItem("adminData");
    if (savedData) {
      setAdminData(JSON.parse(savedData));
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedData = {
          ...formData,
          photo: reader.result, // Save the image data to formData
        };
        setFormData(updatedData);
        localStorage.setItem("adminData", JSON.stringify(updatedData)); // Save to localStorage
      };
      reader.readAsDataURL(file); // Read file as base64 URL
    }
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      setFormData({ ...adminData });
    }
  };

  const handleSave = () => {
    setAdminData({ ...formData });
    localStorage.setItem("adminData", JSON.stringify(formData)); // Save data to localStorage
    setIsEditing(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <NavbarAdmin />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6">Admin Profile</h1>
        
        {/* Admin Photo Section (Moved to the top) */}
        <div className="flex justify-center mb-6">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg transform hover:scale-105 transition-all duration-300">
            <img
              src={formData.photo || "/default-avatar.png"} // Display default image if no photo is available
              alt="Admin Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* File Input to Change Photo */}
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

        {/* Profile Details Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-700">Profile Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["fullName", "username", "email", "phone", "address", "birthDate"].map((field) => (
              <div key={field}>
                <label htmlFor={field} className="block text-sm font-semibold text-gray-600 mb-2 capitalize">
                  {field.replace(/([A-Z])/g, " $1")}
                </label>
                <input
                  type={field === "email" ? "email" : field === "birthDate" ? "date" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
                />
              </div>
            ))}
          </div>

          <div className="flex space-x-4 mt-6">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none"
                >
                  Save
                </button>
                <button
                  onClick={handleEditToggle}
                  className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 focus:outline-none"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={handleEditToggle}
                className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 focus:outline-none"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
