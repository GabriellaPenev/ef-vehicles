import './App.css'
import { Header } from './components/Header'
import { CompareCars } from './components/CompareCars'
import { DisplayCars } from './components/DisplayCars'

function App() {

  return (
    <div className="container">
      <Header />
      <CompareCars />
      <DisplayCars />

    </div>
  )
}

export default App
