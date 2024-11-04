// server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const taskRoutes = require('./routes/tasks');

app.use(express.json());

// Koneksi ke MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/tugasdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Terhubung ke MongoDB'))
  .catch((error) => console.error('Gagal terhubung ke MongoDB:', error));

// Rute API untuk tugas
app.use('/api/tasks', taskRoutes);

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
