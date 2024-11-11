import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  useEffect(() => {
    console.log("her zaman calisir")

  })

  useEffect(() => {
    console.log("ilk render edildiginde calisir")
  }, [])

  useEffect(() => {
    console.log("ilk render edildiginde ve firstname degistiginde calisir")
  }, [firstName])


  return (
    <div>
      <div><button onClick={() => setFirstName("Caner")}>Adı degiştir</button></div>
    </div>
  )
}

export default App
