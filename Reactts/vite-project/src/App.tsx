import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ChaiCard } from './components/ChaiCard'
import { Counter } from './components/Counter'
import type { Chai } from './types'
import { Chailist } from './components/Chailist'
import { OrderForm } from './components/OrderForm'
import { Card } from './components/Card'

const menu: Chai[] = [
  { id: 1, name: "masala", price: 30 },
  { id: 1, name: "masala", price: 30 },
  { id: 1, name: "masala", price: 50 }

]


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <ChaiCard name={"Headphones"} price={100} isSpecial={true} />
      <Counter />
      {/* <Chailist items={menu} /> */}
      <OrderForm onSubmit={(order) => {
        console.log("placed Order", order.cups, order.name);

      }} />

      <div>
        <Card title='Top' footer={<h1>Hello</h1>} />
      </div>
    </>
  )
}

export default App
