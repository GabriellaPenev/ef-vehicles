import vehicles from '../data/vehicles.json'
import { useState, useRef } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap'
import CompareModal from './CompareModal';

export interface Car {
    Year: number
    Make: string
    Model: string
    EngineDetail: string
    EngineType: string
    Price: string
    Image: string
}

export function DisplayCars() {

    const [checkedCars, setCheckedCars] = useState<Car[]>([]);
    const checkboxRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

    const handleCompare = () => {
        const checkedCarModels = Object.values(checkboxRefs.current)
            .filter((ref) => ref?.checked) // filter and return only the checked refs
            .map((ref) => ref!.id); // map to IDs of checked inputs

        const checkedCars = vehicles.filter((car) => checkedCarModels.includes(car.Model));
        setCheckedCars(checkedCars);

        checkedCars.length <= 1 ? alert('you need to select more than 1 car to compare!') : null
    }

    const clearCheckboxes = () => {
        Object.values(checkboxRefs.current)
            .filter((ref) => ref?.checked)
            .map((checked) => checked!.checked = false)
    }

    return (
        <>
            <div className='d-flex justify-content-end my-3'>
                <Button onClick={handleCompare} className='button fw-bold rounded border-0 mx-2'>Compare Cars</Button>
                <Button onClick={clearCheckboxes} className='button fw-bold rounded border-0'>Clear Selections</Button>
            </div>

            <Row md={2} lg={3} sm={2} xs={1} className='row-cols-1 gy-4 pb-5'>
                {vehicles.map((car: Car) => (
                    <Col key={car.Model}>
                        <Card
                            className='h-100 car-card'>
                            <div className='d-flex justify-content-end p-2 compare'>
                                <label
                                    htmlFor={car.Model}
                                    aria-label="Checkbox to compare vehicle"
                                    className='px-1 fw-bold'>
                                    Select to Compare
                                </label>
                                <input
                                    type="checkbox"
                                    name="compare"
                                    id={car.Model}
                                    className='checkbox'
                                    ref={(el) => (checkboxRefs.current[car.Model] = el)}
                                />
                            </div>

                            <Card.Img
                                src={car.Image}
                                alt={`${car.Make} ${car.Model}`}
                                style={{ objectFit: 'cover' }}
                                className='card-img-top car-image'
                            />

                            <Card.Title className='p-3 m-0 fw-bold text-white card-title'>{car.Make} {car.Model}</Card.Title>

                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>Year: {car.Year}</li>
                                <li className='list-group-item'>Price: {car.Price}</li>
                                <li className='list-group-item'>Engine Type: {car.EngineType}</li>
                                <li className='list-group-item'>Engine Details: {car.EngineDetail}</li>
                            </ul>

                        </Card>
                    </Col>
                ))}
            </Row>


            <CompareModal checkedCars={checkedCars} setCheckedCars={setCheckedCars} />

        </>
    )
}