import { Car } from './DisplayVehicles'
import { Card } from 'react-bootstrap'

type VehicleCardProps = {
    car: Car;
    checkboxRefs: React.MutableRefObject<{ [key: string]: HTMLInputElement | null; }>
}

const VehicleCard = ({ car, checkboxRefs }: VehicleCardProps) => {
    return (
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
                alt={`${car.Make}-${car.Model}`}
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
    )
}

export default VehicleCard;