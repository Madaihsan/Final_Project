const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 5000;

// Middleware untuk parsing JSON
app.use(express.json());

// Path untuk file JSON
const dataFilePath = path.join(__dirname, 'dataSiswa.json');

// Mendapatkan semua siswa
app.get('/api/students', (req, res) => {
    fs.readFile(dataFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read data' });
        }
        res.json(JSON.parse(data));
    });
});

// Menambah siswa baru
app.post('/api/students', (req, res) => {
    const newStudent = req.body;

    fs.readFile(dataFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read data' });
        }

        const students = JSON.parse(data);
        const id = students.length ? students[students.length - 1].id + 1 : 1;
        newStudent.id = id;
        students.push(newStudent);

        fs.writeFile(dataFilePath, JSON.stringify(students, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to save data' });
            }
            res.json(newStudent); // Mengirimkan data siswa yang baru ditambahkan
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
