import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav className='navbar'>
      <h1>
        Listify
      </h1>
      <button className='btn'>Sign Out</button>
    </nav>
    </>
  )
}

export default App
