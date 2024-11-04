// File: tests/api.test.js

const request = require('supertest'); // Library untuk melakukan HTTP request pada aplikasi Node.js
const app = require('../app'); // Path ke file utama aplikasi API Mahasiswa B

describe("Pengujian API Mahasiswa B", () => {
    // Test endpoint GET /users
    it("GET /users - Harus mengembalikan daftar pengguna", async () => {
        const res = await request(app).get("/users");
        expect(res.statusCode).toBe(200);
        expect(res.body).toBeInstanceOf(Array); // Pastikan bahwa hasilnya array
    });

    // Test endpoint POST /users
    it("POST /users - Harus menambahkan pengguna baru", async () => {
        const newUser = { name: "Mahasiswa D", email: "mahasiswaD@example.com" };
        const res = await request(app).post("/users").send(newUser);
        expect(res.statusCode).toBe(201); // Status code untuk berhasil menambahkan data
        expect(res.body).toHaveProperty("id"); // Pastikan respon berisi properti id
        expect(res.body.name).toBe(newUser.name);
        expect(res.body.email).toBe(newUser.email);
    });

    // Test endpoint DELETE /users/:id
    it("DELETE /users/:id - Harus menghapus pengguna berdasarkan id", async () => {
        const userIdToDelete = 1; // Misalkan kita akan menghapus pengguna dengan id 1
        const res = await request(app).delete(`/users/${userIdToDelete}`);
        expect(res.statusCode).toBe(200); // Status code untuk berhasil menghapus data
        expect(res.body.message).toBe("User deleted successfully"); // Pesan respon yang diharapkan
    });
});
