import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let a = 15;
  const firstnName = 'John'

  let vize1 = 60;
  let vize2 = 80;
  let sonuc = false;

  let isimler = ['John', 'Jane', 'Jack', 'Jim']

  return (

    <div>
      <p>a degişkenin degeri : {a}</p>
      <p>Müşterinin adı: {firstnName}</p>
      <p>Ortalama: {(vize1 + vize2) / 2}</p>
      {sonuc ? <p>Geçti</p> : <p>Kaldı</p>}
      {
        (vize1 + vize2) / 2 > 50 ? <p>Dersten Geçti</p> : <p>Dersten Kaldı</p>
      }

      {
        isimler.map((isim, index) => (
          <div style={{
            backgroundColor: 'orange',
            border: '1px solid black',
          }} key={index}>{isim}</div>
        ))
      }

    </div>
  )
}

export default App
