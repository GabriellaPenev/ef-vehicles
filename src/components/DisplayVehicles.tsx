import vehicles from '../data/vehicles.json'
import { useState, useRef } from 'react';
import { Col, Row, Button } from 'react-bootstrap'
import CompareModal from './CompareModal';
import VehicleCard from './VehicleCard';

export interface Car {
    Year: number
    Make: string
    Model: string
    EngineDetail: string
    EngineType: string
    Price: string
    Image: string
}

const DisplayVehicles = () => {

    const [checkedCars, setCheckedCars] = useState<Car[]>([]);
    const checkboxRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

    const handleCompare = (): void => {
        const checkedCarModels: string[] = Object.values(checkboxRefs.current)
            .filter((input): input is HTMLInputElement => input !== null && input.checked)
            .map((input) => input.id);

        const checkedInput: Car[] = vehicles.filter((car) => checkedCarModels.includes(car.Model));
        setCheckedCars(checkedInput);

        checkedInput.length <= 1 ? alert('Select more than 1 car to compare!') : null;
    };

    const clearCheckboxes = (): void => {
        Object.values(checkboxRefs.current)
            .filter((ref): ref is HTMLInputElement => ref !== null)
            .forEach((ref) => (ref.checked = false));
    };

    return (
        <div className='container'>
            <div className='d-flex justify-content-end my-3'>
                <Button
                    onClick={handleCompare}
                    className='button fw-bold rounded border-0 m-1'>Compare Cars
                </Button>
                <Button
                    onClick={clearCheckboxes}
                    className='button fw-bold rounded border-0 m-1'>Clear Selection
                </Button>
            </div>
            <Row md={2} lg={3} sm={2} xs={1} className='row-cols-1 gy-4 pb-5'>
                {vehicles.map((car: Car) => (
                    <Col key={car.Model}>

                        <VehicleCard
                            car={car}
                            checkboxRefs={checkboxRefs}
                        />

                    </Col>
                ))}
            </Row>

            <CompareModal
                checkedCars={checkedCars}
                setCheckedCars={setCheckedCars}
            />

        </div>
    )
}

export default DisplayVehicles;