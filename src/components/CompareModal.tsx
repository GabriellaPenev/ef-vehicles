import { Modal } from 'react-bootstrap';
import { Car } from './DisplayCars';
import Table from 'react-bootstrap/Table'

interface Props {
    checkedCars: Car[];
    setCheckedCars: React.Dispatch<React.SetStateAction<Car[]>>;
}

const CompareModal: React.FC<Props> = ({ checkedCars, setCheckedCars }) => {
    return (
        <Modal show={checkedCars.length > 1} onHide={() => setCheckedCars([])} className='modal modal-xl'>
            <Modal.Header closeButton className='modal-container'>
                <Modal.Title className='fw-bold'>Selected Cars</Modal.Title>
            </Modal.Header>
            <Modal.Body className='modal-container'>
                <div className="mobile-table">
                    <Table className='striped bordered hover table'>
                        <thead>
                            <tr>
                                <th>Make</th>
                                <th>Model</th>
                                <th>Year</th>
                                <th>Price</th>
                                <th>Engine</th>
                                <th>Engine Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {checkedCars.map((car) => (
                                <tr key={car.Model}>
                                    <td>{car.Make}</td>
                                    <td>{car.Model}</td>
                                    <td>{car.Year}</td>
                                    <td>{car.Price}</td>
                                    <td>{car.EngineType}</td>
                                    <td>{car.EngineDetail}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default CompareModal;