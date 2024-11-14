import { useState } from 'react'
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import Loading from './components/Loading'
import RouterConfig from './config/RouterConfig'
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux'
import { setDrawer } from './redux/slices/basketSlice'

function App() {
  const { products, drawer } = useSelector(store => store.basket)
  const dispatch = useDispatch();
  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
        <Drawer sx={{ padding: '20px' }} onClose={() => dispatch(setDrawer())} anchor='right' open={drawer}>
          {
            products && products.map((product) => {
              return (
                <div className='flex-row' style={{ padding: '20px' }}>
                  <img style={{ marginRight: '5px' }} src={product.image} width={50} height={50} />
                  <p style={{ width: '320px', marginRight: '5px' }}>{product.title}({product.count})</p>
                  <p>{product.price}</p>
                </div>
              )
            })
          }

        </Drawer>
      </PageContainer>
    </div>
  )
}

export default App
