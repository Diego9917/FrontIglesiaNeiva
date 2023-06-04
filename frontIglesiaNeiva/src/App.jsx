import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div className="construction-page">
      <h1>Estamos en construcción</h1>
      <div className="hammer-animation">
        <img src="../public/images/hammer.png" alt="Martillo girando" />
      </div>
    </div>
    <div className="card">
      <p>
        contador de personas que han visitado esta obra de arte en construcción
      </p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
