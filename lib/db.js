import mysql from "serverless-mysql";

export const db = mysql({
    config: {
        host: process.env.MYSQL_HOST,
        database: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
        port: parseInt(process.env.MYSQL_PORT) // Tidak perlu melakukan parseInt jika sudah dalam format yang benar
    }
});

// Fungsi untuk menutup koneksi
export const closeDbConnection = async () => {
    await db.end();
};

export default async function handler(req, res) {
    try {
        const results = await db.query('SELECT * FROM your_table'); // Ganti dengan query yang sesuai
        res.status(200).json(results);
    } catch (error) {
        console.error('Error executing database query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
