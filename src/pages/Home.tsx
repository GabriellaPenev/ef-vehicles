import { Header } from '../components/Header'
import { DisplayCars } from '../components/DisplayCars'

export function Home() {

    return (
        <div className="container">
            <Header />
            <DisplayCars />
        </div>
    )
}
