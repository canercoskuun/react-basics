import { useState } from 'react'
import './App.css'
import Product from './Product'
import Container from './Container'

function App() {

  const productName = "Buzdolabı"

  return (
    <div>
      <Product productName="Ayakkabı" price={3200} />
      <hr />
      <Product productName="Çanta" price={1200} />
      <hr />
      <Product productName={productName} price={5200} />

      <Container>
        <Product productName="Telefon" price={99000} />
      </Container>

    </div>
  )
}

export default App
