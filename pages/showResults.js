import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSearch, faTimes, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { format } from 'date-fns';
import { Modal, Button } from 'react-bootstrap';


export default function ShowResults() {
    const [results, setResults] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const handleShowModal = (message) => {
        setModalMessage(message);
        setShowModal(true);
    };


    const fetchResults = async (tanggal = '') => {
        try {
            const response = await fetch(`/api/showData${tanggal ? `?tanggal=${tanggal}` : ''}`);
            if (response.ok) {
                const data = await response.json();
                setResults(data);
            } else {
                console.error('Failed to fetch results');
            }
        } catch (error) {
            console.error('Error fetching results:', error);
        }
    };

    const handleDelete = async (id) => {
        if (confirm('Are you sure you want to delete this data?')) {
            try {
                const response = await fetch(`/api/deleteData?id=${id}`, {
                    method: 'DELETE',
                });
                if (response.ok) {
                    handleShowModal('Data deleted successfully!');
                    fetchResults();
                } else {
                    handleShowModal('Failed to delete data!');
                }
            } catch (error) {
                console.error('Error deleting data:', error);
                handleShowModal('An error occurred while deleting data!');
            }
        }
    };

    useEffect(() => {
        fetchResults();
    }, []);

    const handleSearch = () => {
        fetchResults(selectedDate);
    };

    const handleReset = () => {
        setSelectedDate('');
        fetchResults();
    };

    const formatDate = (dateString) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('id-ID', options);
    };

    const handleCloseModal = () => setShowModal(false);


    return (
        <>
            <Head>
                <title>Data MTBF & MTTR</title>
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
                <h2 className="mt-5 mb-4 text-center">MTBF & MTTR Calculator</h2>
            </div>
            <div className="d-flex justify-content-center mb-2 mt-2">
                <div className="input-group w-50">
                    <input
                        type="date"
                        className="form-control me-2"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-primary me-2" onClick={handleSearch}>
                            <FontAwesomeIcon icon={faSearch} /> Cari data
                        </button>
                    </div>
                    {selectedDate && (
                        <div className="input-group-append">
                            <button className="btn btn-secondary" onClick={handleReset}>
                                <FontAwesomeIcon icon={faTimes} /> Reset
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div id='results-table-container'>
                <div className="table-responsive" style={{ backgroundColor: 'white' }}>
                    <table id="results-table" className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th rowSpan="2">Tanggal</th>
                                <th rowSpan="2">Machine Name</th>
                                <th colSpan="4">Shift 1</th>
                                <th colSpan="4">Shift 2</th>
                                <th colSpan="4">Shift 3</th>
                                <th rowSpan="2">Total Failures</th>
                                <th rowSpan="2">Total Downtime</th>
                                <th rowSpan="2">Total MTBF</th>
                                <th rowSpan="2">Total MTTR</th>
                                <th rowSpan="2">Action</th>
                            </tr>
                            <tr>
                                <th>Failures</th>
                                <th>Downtime</th>
                                <th>MTBF</th>
                                <th>MTTR</th>
                                <th>Failures</th>
                                <th>Downtime</th>
                                <th>MTBF</th>
                                <th>MTTR</th>
                                <th>Failures</th>
                                <th>Downtime</th>
                                <th>MTBF</th>
                                <th>MTTR</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((result, index) => (
                                <tr key={index}>
                                    <td>{formatDate(result.tanggal)}</td>
                                    <td>{result.machine_name}</td>
                                    <td>{result.shift1_failures}</td>
                                    <td>{result.shift1_downtime}</td>
                                    <td>{result.shift1_mtbf}</td>
                                    <td>{result.shift1_mttr}</td>
                                    <td>{result.shift2_failures}</td>
                                    <td>{result.shift2_downtime}</td>
                                    <td>{result.shift2_mtbf}</td>
                                    <td>{result.shift2_mttr}</td>
                                    <td>{result.shift3_failures}</td>
                                    <td>{result.shift3_downtime}</td>
                                    <td>{result.shift3_mtbf}</td>
                                    <td>{result.shift3_mttr}</td>
                                    <td>{result.total_failures}</td>
                                    <td>{result.total_downtime}</td>
                                    <td>{result.total_mtbf}</td>
                                    <td>{result.total_mttr}</td>
                                    <td>
                                        <div className="d-flex justify-content-between">
                                            <Link href={`/edit/${result.id}`}>
                                                <button className="btn btn-primary me-2">
                                                    <FontAwesomeIcon icon={faEdit} /> Edit
                                                </button>
                                            </Link>
                                            <button className="btn btn-danger" onClick={() => handleDelete(result.id)}>
                                                <FontAwesomeIcon icon={faTrash} /> Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="d-flex justify-content-start mt-3">
                    <Link href="/line1" legacyBehavior>
                        <button className="btn btn-secondary">
                            <FontAwesomeIcon icon={faArrowLeft} /> Back
                        </button>
                    </Link>
                </div>

            </div>

        </>
    );
}
