import React, { useState, useEffect } from "react";
import NavbarAdmin from "../components/NavbarAdmin";
import { db } from "../firebase"; // Pastikan kamu sudah mengonfigurasi Firebase dan export db
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const AdminManageStudents = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: "", age: "", class: "" });
  const [editStudent, setEditStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Memuat data siswa dari Firestore
  const loadStudents = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "students"));
      const studentsList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setStudents(studentsList);
    } catch (error) {
      console.error("Error getting students: ", error);
    }
  };

  useEffect(() => {
    loadStudents(); // Panggil loadStudents saat pertama kali komponen dimuat
  }, []);

  // Menambahkan siswa baru ke Firestore
  const handleAddStudent = async () => {
    try {
      const docRef = await addDoc(collection(db, "students"), {
        name: newStudent.name,
        age: newStudent.age,
        class: newStudent.class,
      });
      setStudents((prevStudents) => [
        ...prevStudents,
        { id: docRef.id, ...newStudent },
      ]);
      setNewStudent({ name: "", age: "", class: "" });
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error adding student: ", error);
    }
  };

  // Mengedit siswa yang ada
  const handleEditStudent = (student) => {
    setEditStudent(student);
    setNewStudent({
      name: student.name,
      age: student.age,
      class: student.class,
    });
    setIsModalOpen(true);
  };

  // Menyimpan perubahan edit siswa ke Firestore
  const handleSaveEdit = async () => {
    try {
      const studentRef = doc(db, "students", editStudent.id);
      await updateDoc(studentRef, {
        name: newStudent.name,
        age: newStudent.age,
        class: newStudent.class,
      });
      setStudents((prevStudents) =>
        prevStudents.map((student) =>
          student.id === editStudent.id ? { ...student, ...newStudent } : student
        )
      );
      setEditStudent(null);
      setNewStudent({ name: "", age: "", class: "" });
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error updating student: ", error);
    }
  };

  // Menghapus siswa dari Firestore
  const handleDeleteStudent = async (id) => {
    try {
      const studentRef = doc(db, "students", id);
      await deleteDoc(studentRef);
      setStudents((prevStudents) => prevStudents.filter((student) => student.id !== id));
    } catch (error) {
      console.error("Error deleting student: ", error);
    }
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
