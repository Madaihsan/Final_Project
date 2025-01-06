import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // Sesuaikan lokasi file firebase.js Anda

const StudentsList = () => {
  const [students, setStudents] = useState([]); // State untuk menyimpan data

  const fetchStudents = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "students")); // "students" adalah nama koleksi di Firestore
      const studentsData = querySnapshot.docs.map((doc) => ({
        id: doc.id, // Menyimpan ID dokumen
        ...doc.data(), // Menyimpan data dokumen
      }));
      setStudents(studentsData); // Menyimpan data ke state
    } catch (error) {
      console.error("Error fetching data from Firestore:", error);
    }
  };

  useEffect(() => {
    fetchStudents(); // Ambil data saat komponen dimuat
  }, []);

  return (
    <div>
      <h2>Daftar Siswa</h2>
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Umur</th>
            <th>Kelas</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.class}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsList;
