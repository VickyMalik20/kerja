import { db } from "../../lib/db";

export default function handler(req, res) {
    if (req.method === 'GET') {
        const { id } = req.query;
        db.query('SELECT * FROM mtbf_mttr_results_2 WHERE id = ?', [id], (error, results) => {
            if (error) {
                console.error('Error fetching data from database:', error);
                res.status(500).json({ message: 'Internal Server Error' });
            } else {
                res.status(200).json(results[0]);
            }
        });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
