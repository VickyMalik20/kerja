import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { format } from 'date-fns';

export default function EditData() {
    const router = useRouter();
    const { id } = router.query;
    const [formData, setFormData] = useState({
        tanggal: '',
        machine_name: '',
        shift1_failures: '',
        shift1_downtime: '',
        shift1_mtbf: '',
        shift1_mttr: '',
        shift2_failures: '',
        shift2_downtime: '',
        shift2_mtbf: '',
        shift2_mttr: '',
        shift3_failures: '',
        shift3_downtime: '',
        shift3_mtbf: '',
        shift3_mttr: '',
        total_failures: '',
        total_downtime: '',
        total_mtbf: '',
        total_mttr: '',
    });

    useEffect(() => {
        if (id) {
            fetchData();
        }
    }, [id]);

    const fetchData = async () => {
        try {
            const response = await fetch(`/api/getData?id=${id}`);
            if (response.ok) {
                const data = await response.json();
                setFormData({
                    ...data,
                    tanggal: format(new Date(data.tanggal), 'yyyy-MM-dd')
                });
            } else {
                console.error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleInputChange = (e, shift) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [`${shift}_${name}`]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/updateData?id=${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                alert('Data updated successfully!');
                router.push('/showResults');
            } else {
                alert('Failed to update data!');
            }
        } catch (error) {
            console.error('Error updating data:', error);
            alert('An error occurred while updating data!');
        }
    };

    const uptime = 480; // Total uptime for 8 hours (in minutes)

    const calculateMTBF = (failures) => (failures !== 0 ? (uptime / failures).toFixed(2) : 0);
    const calculateMTTR = (failures, downtime) => (failures !== 0 ? (downtime / failures).toFixed(2) : 0);

    const calculateTotalMTBF = (shift1_failures, shift2_failures, shift3_failures) => {
        const totalFailures = shift1_failures + shift2_failures + shift3_failures;
        return totalFailures !== 0 ? (1440 / totalFailures).toFixed(2) : 0; // Total minutes in 24 hours
    };

    const calculateTotalMTTR = (shift1_failures, shift2_failures, shift3_failures, shift1_downtime, shift2_downtime, shift3_downtime) => {
        const totalFailures = shift1_failures + shift2_failures + shift3_failures;
        const totalDowntime = shift1_downtime + shift2_downtime + shift3_downtime;
        return totalFailures !== 0 ? (totalDowntime / totalFailures).toFixed(2) : 0;
    };

    useEffect(() => {
        const {
            shift1_failures,
            shift1_downtime,
            shift2_failures,
            shift2_downtime,
            shift3_failures,
            shift3_downtime
        } = formData;

        const total_failures = parseInt(shift1_failures || 0) + parseInt(shift2_failures || 0) + parseInt(shift3_failures || 0);
        const total_downtime = parseInt(shift1_downtime || 0) + parseInt(shift2_downtime || 0) + parseInt(shift3_downtime || 0);

        setFormData(prevData => ({
            ...prevData,
            shift1_mtbf: calculateMTBF(parseInt(shift1_failures || 0)),
            shift2_mtbf: calculateMTBF(parseInt(shift2_failures || 0)),
            shift3_mtbf: calculateMTBF(parseInt(shift3_failures || 0)),
            shift1_mttr: calculateMTTR(parseInt(shift1_failures || 0), parseInt(shift1_downtime || 0)),
            shift2_mttr: calculateMTTR(parseInt(shift2_failures || 0), parseInt(shift2_downtime || 0)),
            shift3_mttr: calculateMTTR(parseInt(shift3_failures || 0), parseInt(shift3_downtime || 0)),
            total_failures: total_failures,
            total_downtime: total_downtime,
            total_mtbf: calculateTotalMTBF(parseInt(shift1_failures || 0), parseInt(shift2_failures || 0), parseInt(shift3_failures || 0)),
            total_mttr: calculateTotalMTTR(parseInt(shift1_failures || 0), parseInt(shift2_failures || 0), parseInt(shift3_failures || 0), parseInt(shift1_downtime || 0), parseInt(shift2_downtime || 0), parseInt(shift3_downtime || 0)),
        }));
    }, [
        formData.shift1_failures,
        formData.shift1_downtime,
        formData.shift2_failures,
        formData.shift2_downtime,
        formData.shift3_failures,
        formData.shift3_downtime
    ]);

    return (
        <>
            <Head>
                <title>Edit Data</title>
                <link rel="icon" href="/aqua.jpg" />
            </Head>
            <div className="container px-4">
                <h1>Edit Data</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="tanggal" className="form-label">Tanggal</label>
                        <input
                            type="date"
                            className="form-control"
                            id="tanggal"
                            name="tanggal"
                            value={formData.tanggal}
                            onChange={(e) => setFormData({ ...formData, tanggal: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="machine_name" className="form-label">Machine Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="machine_name"
                            name="machine_name"
                            value={formData.machine_name}
                            onChange={(e) => setFormData({ ...formData, machine_name: e.target.value })}
                            required
                        />
                    </div>
                    <div className="row gx-5">
                        {['shift1', 'shift2', 'shift3'].map(shift => (
                            <div key={shift} className="col mb-3">
                                <h3>{shift.toUpperCase()}</h3>
                                <label htmlFor={`${shift}_failures`} className="form-label">Failures</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id={`${shift}_failures`}
                                    name="failures"
                                    value={formData[`${shift}_failures`]}
                                    onChange={(e) => handleInputChange(e, shift)}
                                    required
                                />
                                <label htmlFor={`${shift}_downtime`} className="form-label">Downtime</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id={`${shift}_downtime`}
                                    name="downtime"
                                    value={formData[`${shift}_downtime`]}
                                    onChange={(e) => handleInputChange(e, shift)}
                                    required
                                />
                                <label htmlFor={`${shift}_mtbf`} className="form-label">MTBF</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id={`${shift}_mtbf`}
                                    name="mtbf"
                                    value={formData[`${shift}_mtbf`]}
                                    readOnly
                                />
                                <label htmlFor={`${shift}_mttr`} className="form-label">MTTR</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id={`${shift}_mttr`}
                                    name="mttr"
                                    value={formData[`${shift}_mttr`]}
                                    readOnly
                                />
                            </div>
                        ))}
                    </div>
                    <div className="row gx-5 mb-3">
                        <div className="col">
                            <label htmlFor="total_failures" className="form-label">Total Failures</label>
                            <input
                                type="number"
                                className="form-control"
                                id="total_failures"
                                name="total_failures"
                                value={formData.total_failures}
                                readOnly
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="total_downtime" className="form-label">Total Downtime</label>
                            <input
                                type="number"
                                className="form-control"
                                id="total_downtime"
                                name="total_downtime"
                                value={formData.total_downtime}
                                readOnly
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="total_mtbf" className="form-label">Total MTBF</label>
                            <input
                                type="number"
                                className="form-control"
                                id="total_mtbf"
                                name="total_mtbf"
                                value={formData.total_mtbf}
                                readOnly
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="total_mttr" className="form-label">Total MTTR</label>
                            <input
                                type="number"
                                className="form-control"
                                id="total_mttr"
                                name="total_mttr"
                                value={formData.total_mttr}
                                readOnly
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Update</button>
                </form>
            </div>
        </>
    );
}
