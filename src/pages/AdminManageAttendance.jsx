import React, { useState } from "react";
import NavbarAdmin from "../components/NavbarAdmin"; // Pastikan ini mengarah ke komponen yang benar

const AdminManageAttendance = () => {
  // Data presensi siswa
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", status: "Hadir" },
    { id: 2, name: "Jane Smith", status: "Tidak Hadir" },
    { id: 3, name: "Samuel Green", status: "Hadir" },
    { id: 4, name: "Alice Brown", status: "Tidak Hadir" },
  ]);

  // Fungsi untuk mengubah status presensi siswa
  const toggleAttendance = (id, newStatus) => {
    setStudents((prevState) =>
      prevState.map((student) =>
        student.id === id
          ? { ...student, status: newStatus }
          : student
      )
    );
  };

  return (
    <div>
      {/* NavbarAdmin */}
      <NavbarAdmin />

      {/* Main Content */}
      <div className="container mx-auto mt-8 p-4">
        <h2 className="text-3xl font-bold mb-4">Kelola Presensi Siswa</h2>

        {/* Tabel Presensi */}
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-200 text-left">
              <tr>
                <th className="px-6 py-3 text-lg font-semibold">No</th>
                <th className="px-6 py-3 text-lg font-semibold">Nama Siswa</th>
                <th className="px-6 py-3 text-lg font-semibold">Hadir</th>
                <th className="px-6 py-3 text-lg font-semibold">Tidak Hadir</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr
                  key={student.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="px-6 py-3 text-center">{index + 1}</td>
                  <td className="px-6 py-3">{student.name}</td>

                  {/* Kolom Hadir */}
                  <td className="px-6 py-3 text-center">
                    <input
                      type="checkbox"
                      checked={student.status === "Hadir"}
                      onChange={() => toggleAttendance(student.id, "Hadir")}
                      className="form-checkbox h-5 w-5 text-green-500"
                    />
                  </td>

                  {/* Kolom Tidak Hadir */}
                  <td className="px-6 py-3 text-center">
                    <input
                      type="checkbox"
                      checked={student.status === "Tidak Hadir"}
                      onChange={() => toggleAttendance(student.id, "Tidak Hadir")}
                      className="form-checkbox h-5 w-5 text-red-500"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminManageAttendance;
