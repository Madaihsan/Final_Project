import React, { useState, useEffect } from "react";
import NavbarAdmin from "../components/NavbarAdmin";

const AdminManageStudents = () => {
  // Memuat data siswa dari localStorage jika ada
  const loadStudentsFromStorage = () => {
    const studentsData = localStorage.getItem("students");
    return studentsData ? JSON.parse(studentsData) : [];
  };

  // State untuk data siswa
  const [students, setStudents] = useState(loadStudentsFromStorage);

  // State untuk form input
  const [newStudent, setNewStudent] = useState({ name: "", age: "", class: "" });
  const [editStudent, setEditStudent] = useState(null);

  // State untuk modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Menambahkan siswa baru
  const handleAddStudent = () => {
    const id = students.length ? students[students.length - 1].id + 1 : 1;
    const updatedStudents = [...students, { id, ...newStudent }];
    setStudents(updatedStudents);
    localStorage.setItem("students", JSON.stringify(updatedStudents));
    setNewStudent({ name: "", age: "", class: "" });
    setIsModalOpen(false);
  };

  // Menghapus siswa
  const handleDeleteStudent = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
    localStorage.setItem("students", JSON.stringify(updatedStudents));
  };

  // Memulai proses edit
  const handleEditStudent = (student) => {
    setEditStudent(student);
    setNewStudent({
      name: student.name,
      age: student.age,
      class: student.class,
    });
    setIsModalOpen(true); // Membuka modal saat edit
  };

  // Menyimpan perubahan siswa
  const handleSaveEdit = () => {
    const updatedStudents = students.map((student) =>
      student.id === editStudent.id ? { ...student, ...newStudent } : student
    );
    setStudents(updatedStudents);
    localStorage.setItem("students", JSON.stringify(updatedStudents));
    setEditStudent(null);
    setNewStudent({ name: "", age: "", class: "" });
    setIsModalOpen(false); // Menutup modal setelah menyimpan
  };

  // Validasi input nama hanya boleh huruf
  const handleNameChange = (e) => {
    const value = e.target.value;
    if (/^[A-Za-z\s]*$/.test(value)) {
      setNewStudent({ ...newStudent, name: value });
    }
  };

  // Mengecek apakah semua input sudah terisi
  const isFormValid = newStudent.name && newStudent.age && newStudent.class;

  return (
    <div>
      <NavbarAdmin />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Peserta Didik SDN Gen Gold</h1>

        {/* Tombol untuk menambah siswa */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-6 bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-300"
        >
          Tambah Siswa
        </button>

        {/* Modal Form Tambah/Edit Siswa */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-xl font-semibold mb-4">
                {editStudent ? "Edit Siswa" : "Tambah Siswa"}
              </h2>
              <input
                type="text"
                placeholder="Nama"
                className="w-full p-2 mb-2 border rounded-lg shadow-sm"
                value={newStudent.name}
                onChange={handleNameChange}
              />
              <input
                type="number"
                placeholder="Umur"
                className="w-full p-2 mb-2 border rounded-lg shadow-sm"
                value={newStudent.age}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, age: e.target.value })
                }
              />
              <select
                className="w-full p-2 mb-2 border rounded-lg shadow-sm"
                value={newStudent.class}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, class: e.target.value })
                }
              >
                <option value="">Pilih Kelas</option>
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>
                    Kelas {num}
                  </option>
                ))}
              </select>
              <div className="flex justify-between mt-4">
                <button
                  onClick={editStudent ? handleSaveEdit : handleAddStudent}
                  className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                  disabled={!isFormValid} // Menonaktifkan tombol jika form tidak valid
                >
                  {editStudent ? "Simpan Perubahan" : "Simpan"}
                </button>
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setEditStudent(null);
                    setNewStudent({ name: "", age: "", class: "" });
                  }}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                >
                  Batal
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tabel Data Siswa */}
        <div className="bg-white p-4 rounded-lg shadow-lg mt-6">
          <h2 className="text-xl font-semibold mb-4">Daftar Siswa</h2>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="border px-4 py-2 text-left">Nama</th>
                <th className="border px-4 py-2 text-left">Umur</th>
                <th className="border px-4 py-2 text-left">Kelas</th>
                <th className="border px-4 py-2 text-left">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td className="border px-4 py-2">{student.name}</td>
                  <td className="border px-4 py-2">{student.age}</td>
                  <td className="border px-4 py-2">{student.class}</td>
                  <td className="border px-4 py-2 space-x-2">
                    <button
                      className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
                      onClick={() => handleEditStudent(student)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                      onClick={() => handleDeleteStudent(student.id)}
                    >
                      Hapus
                    </button>
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

export default AdminManageStudents;
