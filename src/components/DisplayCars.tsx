import vehicles from '../data/vehicles.json'
import { Card, Col, Row } from 'react-bootstrap'

interface Car {
    Year: number
    Make: string
    Model: string
    EngineDetail: string
    EngineType: string
    Price: string
    Image: string
}

export function DisplayCars() {

    return (
        <>
            <Row md={2} lg={3} sm={2} xs={1} className='row-cols-1 gy-4 pb-5'>
                {vehicles.map((car: Car) => (
                    <Col key={car.Model}>
                        <Card 
                        className='h-100 car-card'>
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
        </>
    )
}