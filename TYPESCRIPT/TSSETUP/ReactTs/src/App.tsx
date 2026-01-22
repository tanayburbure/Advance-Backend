import './App.css'
import { ChaiCard } from './components/ChaiCard.tsx'
import ChaiList from './components/ChaiList.tsx'
import { Counter } from './components/Counter.tsx'
import type {Chai} from "./types.ts"

const menu:Chai[] = [
  {id:1 , name: "Masala" , price:25},
  {id:2 , name: "Ginger" , price:45},
  {id:3 , name: "Lemon" , price:35}
]

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
      <div>
        <ChaiList
        items={menu}
        />
      </div>
    </>
  )
}

export default App
