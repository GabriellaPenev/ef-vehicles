import { Modal } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import { Car } from './DisplayCars';

interface Props {
    checkedCars: Car[];
    setCheckedCars: React.Dispatch<React.SetStateAction<Car[]>>;
}

const CompareModal: React.FC<Props> = ({ checkedCars, setCheckedCars }) => {
    return (
        <Modal
            show={checkedCars.length > 1}
            onHide={() => setCheckedCars([])}
            className='rounded modal modal-xl'
        >
            <Modal.Header closeButton>
                <Modal.Title className='fw-bold modal-title fs-4 text-uppercase d-flex align-items-center'>
                    <img src="/images/hexagon.png" alt="hexagon icon" className='p-2' />
                    Selected Cars
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='modal-container'>
                <div className="mobile-table">
                    <Table className='striped bordered table text-light'>
                        <caption className='text-light'>List of compared cars</caption>
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