import { useState } from 'react'

import './App.css'
import Login from './Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Login />
      <br />
      <Login />
    </div>
  )
}

export default App
