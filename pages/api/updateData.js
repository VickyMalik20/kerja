import { db } from "../../lib/db";

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { id } = req.query;
        const data = req.body;
        const {
            tanggal,
            machine_name,
            shift1_failures,
            shift1_downtime,
            shift1_mtbf,
            shift1_mttr,
            shift2_failures,
            shift2_downtime,
            shift2_mtbf,
            shift2_mttr,
            shift3_failures,
            shift3_downtime,
            shift3_mtbf,
            shift3_mttr,
            total_failures,
            total_downtime,
            total_mtbf,
            total_mttr
        } = data;

        db.query(
            `UPDATE mtbf_mttr_results SET tanggal = ?, machine_name = ?, shift1_failures = ?, shift1_downtime = ?, shift1_mtbf = ?, shift1_mttr = ?,             shift2_failures = ?, shift2_downtime = ?, shift2_mtbf = ?, shift2_mttr = ?, shift3_failures = ?, shift3_downtime = ?, shift3_mtbf = ?, shift3_mttr = ?, total_failures = ?, total_downtime = ?, total_mtbf = ?, total_mttr = ? WHERE id = ?`,
            [
                tanggal,
                machine_name,
                shift1_failures,
                shift1_downtime,
                shift1_mtbf,
                shift1_mttr,
                shift2_failures,
                shift2_downtime,
                shift2_mtbf,
                shift2_mttr,
                shift3_failures,
                shift3_downtime,
                shift3_mtbf,
                shift3_mttr,
                total_failures,
                total_downtime,
                total_mtbf,
                total_mttr,
                id
            ],
            (error) => {
                if (error) {
                    console.error('Error updating data in database:', error);
                    res.status(500).json({ message: 'Internal Server Error' });
                } else {
                    res.status(200).json({ message: 'Data updated successfully' });
                }
            }
        );
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}

