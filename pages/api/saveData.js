import { db } from '../../lib/db';
import { parse, format } from 'date-fns'; // Import fungsi parse dan format dari date-fns


export default function handler(req, res) {
    if (req.method === 'POST') {
        const { shift1, shift2, shift3, tanggal, machine_name } = req.body;
        const parsedTanggal = parse(tanggal, 'dd/MM/yyyy', new Date());
        const formattedTanggal = format(parsedTanggal, 'yyyy-MM-dd'); // Memformat tanggal sesuai dengan format yang diharapkan oleh MySQL

        // Lakukan operasi penyimpanan data ke database
        const sql = `INSERT INTO mtbf_mttr_results 
                 (tanggal, machine_name, 
                  shift1_failures, shift1_downtime, shift1_mtbf, shift1_mttr, 
                  shift2_failures, shift2_downtime, shift2_mtbf, shift2_mttr, 
                  shift3_failures, shift3_downtime, shift3_mtbf, shift3_mttr, 
                  total_failures, total_downtime, total_mtbf, total_mttr) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        const values = [
            formattedTanggal, // Menggunakan tanggal yang sudah diformat
            machine_name,
            shift1.failures, shift1.downtime, shift1.mtbf, shift1.mttr,
            shift2.failures, shift2.downtime, shift2.mtbf, shift2.mttr,
            shift3.failures, shift3.downtime, shift3.mtbf, shift3.mttr,
            shift1.failures + shift2.failures + shift3.failures,
            shift1.downtime + shift2.downtime + shift3.downtime,
            (1440 / (shift1.failures + shift2.failures + shift3.failures)).toFixed(2),
            ((shift1.downtime + shift2.downtime + shift3.downtime) / (shift1.failures + shift2.failures + shift3.failures)).toFixed(2)
        ];

        db.query(sql, values, (error, results) => {
            if (error) {
                console.error('Error saving data to database:', error);
                res.status(500).json({ message: 'Internal Server Error' });
            } else {
                console.log('Data saved successfully:', results);
                res.status(200).json({ message: 'Data saved successfully' });
            }
        });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
