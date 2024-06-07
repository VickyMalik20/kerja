import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndoAlt, faSave, faTable } from '@fortawesome/free-solid-svg-icons';
import { format } from 'date-fns';
import Link from 'next/link';
import { Modal, Button } from 'react-bootstrap';



export default function Home() {
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleShowModal = (message) => {
        setModalMessage(message);
        setShowModal(true);
    };


    const [clientRendered, setClientRendered] = useState(false);
    const [shiftData, setShiftData] = useState({
        shift1: { failures: 0, downtime: 0, mtbf: 0, mttr: 0 },
        shift2: { failures: 0, downtime: 0, mtbf: 0, mttr: 0 },
        shift3: { failures: 0, downtime: 0, mtbf: 0, mttr: 0 },
    });
    const [totalData, setTotalData] = useState({
        failures: 0,
        downtime: 0,
        mtbf: 0,
        mttr: 0
    });

    useEffect(() => {
        setClientRendered(true);
    }, []);

    useEffect(() => {
        calculateTotal();
    }, [shiftData]);

    const calculateMTBF = (failures, uptime) => {
        return failures ? (uptime / failures).toFixed(2) : 0;
    };

    const calculateMTTR = (failures, downtime) => {
        return failures ? (downtime / failures).toFixed(2) : 0;
    };

    const handleFailuresChange = (shift, value, uptime) => {
        setShiftData(prevState => {
            const updatedShift = { ...prevState[shift], failures: parseInt(value) || 0 };
            const mtbf = calculateMTBF(updatedShift.failures, uptime);
            return { ...prevState, [shift]: { ...updatedShift, mtbf } };
        });
    };

    const handleDowntimeChange = (shift, value) => {
        setShiftData(prevState => {
            const updatedShift = { ...prevState[shift], downtime: parseInt(value) || 0 };
            const mttr = calculateMTTR(prevState[shift].failures, updatedShift.downtime);
            return { ...prevState, [shift]: { ...updatedShift, mttr } };
        });
    };

    const saveResultsToDatabase = async () => {
        try {
            const tanggal = format(new Date(document.getElementById('tanggal').value), 'dd/MM/yyyy');
            const machine_name = document.getElementById('machine_name').value; // Mendapatkan nilai machine_name dari dropdown

            // Pastikan machine_name tidak kosong
            if (!machine_name) {
                alert('Pilih mesin terlebih dahulu!');
                return;
            }

            const dataToSend = {
                ...shiftData,
                tanggal: tanggal,
                machine_name: machine_name
            };

            const response = await fetch('/api/saveData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
            });

            if (response.ok) {
                handleShowModal('Results saved successfully!');
                // Reset shiftData setelah disimpan
                setShiftData({
                    shift1: { failures: 0, downtime: 0, mtbf: 0, mttr: 0 },
                    shift2: { failures: 0, downtime: 0, mtbf: 0, mttr: 0 },
                    shift3: { failures: 0, downtime: 0, mtbf: 0, mttr: 0 },
                });

                document.getElementById('tanggal').value = '';
                document.getElementById('machine_name').value = '';
                document.getElementById('shift1_failures').value = '';
                document.getElementById('shift1_downtime').value = '';
                document.getElementById('shift2_failures').value = '';
                document.getElementById('shift2_downtime').value = '';
                document.getElementById('shift3_failures').value = '';
                document.getElementById('shift3_downtime').value = '';
            } else {
                handleShowModal('Failed to save results!');
            }
        } catch (error) {
            console.error('Error saving data:', error);
            alert('An error occurred while saving data!');
        }
    };
    const handleCloseModal = () => setShowModal(false);


    const calculateTotal = () => {
        const totalFailures = Object.values(shiftData).reduce((acc, shift) => acc + shift.failures, 0);
        const totalDowntime = Object.values(shiftData).reduce((acc, shift) => acc + shift.downtime, 0);
        const totalUptime = 1440; // Total uptime for 24 hours
        const mtbf = totalFailures ? (totalUptime / totalFailures).toFixed(2) : 0;
        const mttr = totalFailures ? (totalDowntime / totalFailures).toFixed(2) : 0;
        setTotalData({ failures: totalFailures, downtime: totalDowntime, mtbf, mttr });
    };

    if (!clientRendered) {
        return null;
    }

    return (
        <>
            <Head>
                <title>MTBF MTTR</title>
                <link rel="icon" href="/aqua.jpg" />
            </Head>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Notification</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalMessage}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className="calculator-title">
                <h2 className="mt-5 mb-4 text-center">MTBF & MTTR Calculator Line 1</h2>
            </div>

            <div className="container" id="form-input">
                <div className="form-group">
                    <label htmlFor="tanggal">Tanggal:</label>
                    <input type="date" className="form-control" id="tanggal" name="tanggal" />
                </div>
                <label htmlFor="machine_name" style={{ color: 'black' }}>Pilih Mesin:</label>
                <select className="form-control" id="machine_name">
                    <option value="autoloader">Autoloader</option>
                    <option value="blowing">Blowing</option>
                    <option value="labeller">Labeller</option>
                    <option value="filler">Filler</option>
                    <option value="variopack">Variopack</option>
                    <option value="modulpal">Modulpal</option>
                </select>

                <div className="row">
                    <div className="col-md-4">
                        <div className="shift">
                            <h3>Shift 1</h3>
                            <div className="form-group">
                                <label>Total Up Time</label>
                                <input type="text" className="form-control" value="480 minutes/8 jam" readOnly />
                            </div>
                            <div className="form-group">
                                <label htmlFor="shift1_failures">Total Failures:</label>
                                <input type="number" className="form-control" id="shift1_failures"
                                    onChange={(e) => handleFailuresChange('shift1', e.target.value, 480)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="shift1_downtime">Total Downtime (in minutes):</label>
                                <input type="number" className="form-control" id="shift1_downtime"
                                    onChange={(e) => handleDowntimeChange('shift1', e.target.value)} />
                            </div>
                            <div className="result">
                                <label htmlFor="mtbf_result1">MTBF Result:</label>
                                <input type="text" className="form-control" value={shiftData.shift1.mtbf} readOnly />
                            </div>
                            <div className="result">
                                <label htmlFor="mttr_result1">MTTR Result:</label>
                                <input type="text" className="form-control" value={shiftData.shift1.mttr} readOnly />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="shift">
                            <h3>Shift 2</h3>
                            <div className="form-group">
                                <label>Total Up Time</label>
                                <input type="text" className="form-control" value="480 minutes/8 jam" readOnly />
                            </div>
                            <div className="form-group">
                                <label htmlFor="shift2_failures">Total Failures:</label>
                                <input type="number" className="form-control" id="shift2_failures"
                                    onChange={(e) => handleFailuresChange('shift2', e.target.value, 480)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="shift2_downtime">Total Downtime (in minutes):</label>
                                <input type="number" className="form-control" id="shift2_downtime"
                                    onChange={(e) => handleDowntimeChange('shift2', e.target.value)} />
                            </div>
                            <div className="result">
                                <label htmlFor="mtbf_result2">MTBF Result:</label>
                                <input type="text" className="form-control" value={shiftData.shift2.mtbf} readOnly />
                            </div>
                            <div className="result">
                                <label htmlFor="mttr_result2">MTTR Result:</label>
                                <input type="text" className="form-control" value={shiftData.shift2.mttr} readOnly />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="shift">
                            <h3>Shift 3</h3>
                            <div className="form-group">
                                <label>Total Up Time</label>
                                <input type="text" className="form-control" value="480 minutes/8 jam" readOnly />
                            </div>
                            <div className="form-group">
                                <label htmlFor="shift3_failures">Total Failures:</label>
                                <input type="number" className="form-control" id="shift3_failures"
                                    onChange={(e) => handleFailuresChange('shift3', e.target.value, 480)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="shift3_downtime">Total Downtime (in minutes):</label>
                                <input type="number" className="form-control" id="shift3_downtime"
                                    onChange={(e) => handleDowntimeChange('shift3', e.target.value)} />
                            </div>
                            <div className="result">
                                <label htmlFor="mtbf_result3">MTBF Result:</label>
                                <input type="text" className="form-control" value={shiftData.shift3.mtbf} readOnly />
                            </div>
                            <div className="result">
                                <label htmlFor="mttr_result3">MTTR Result:</label>
                                <input type="text" className="form-control" value={shiftData.shift3.mttr} readOnly />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <Link href="/">
                            <div className="btn btn-warning mt-4 me-2">
                                <FontAwesomeIcon icon={faArrowLeft} /> Back
                            </div>
                        </Link>
                        <button className="btn btn-success mt-4 me-2" onClick={saveResultsToDatabase}>
                            <FontAwesomeIcon icon={faSave} /> Save
                        </button>

                        <Link href="/showResults">
                            <div className="btn btn-info mt-4">
                                <FontAwesomeIcon icon={faTable} /> Show Saved Data
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export async function getStaticProps() {
    return {
        props: {},
    };
}

