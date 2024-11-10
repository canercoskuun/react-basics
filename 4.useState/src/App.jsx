
import { useState } from 'react';
import './App.css'

function App() {

  const [firstname, setFirstname] = useState('Caner');
  const [lastname, setLastname] = useState('Coşkun');
  const [names, setNames] = useState(['Caner', 'Ayşenur', 'Mehmet', 'Ayşe']);
  const [userInfo, setUserInfo] = useState({ name: 'Caner', surname: 'Coşkun', age: 25 });
  const [count, setCount] = useState(0);

  const arttir = () => {
    setCount(count + 1)
  }

  const handleChange = () => {
    debugger
    if (firstname === "Caner") {
      setFirstname("Ayşenur")
    }
    else {
      setFirstname("Caner")
    }

  }

  return (
    <div>
      <div>{firstname} </div>
      <div><button onClick={handleChange}>İsmi Degiştir</button></div>
      <div>{userInfo.age}</div>
      <div>{count}</div>
      <div><button onClick={arttir}>Arttır</button></div>


    </div>
  )
}

export default App
