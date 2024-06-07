import { db } from "../../lib/db";

export default function handler(req, res) {
    if (req.method === 'GET') {
        const { tanggal } = req.query;
        let sql = 'SELECT * FROM mtbf_mttr_results';
        let values = [];

        if (tanggal) {
            sql += ' WHERE tanggal = ?';
            values.push(tanggal);
        }

        db.query(sql, values, (error, results) => {
            if (error) {
                console.error('Error fetching results from database:', error);
                res.status(500).json({ message: 'Internal Server Error' });
            } else {
                res.status(200).json(results);
            }
        });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
