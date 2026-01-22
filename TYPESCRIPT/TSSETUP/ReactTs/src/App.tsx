import './App.css'
import { ChaiCard } from './components/ChaiCard.tsx'
import { Counter } from './components/Counter.tsx'

function App() {
  return (
    <>
      <div>
        <h1>Vite + React</h1>
        <ChaiCard name="Headphones" price= {5000} />
        <ChaiCard name="Apple Iphone" price= {100000} />
      </div>
      <div>
        <Counter/>
      </div>
    </>
  )
}

export default App
