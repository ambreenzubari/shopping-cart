import React from 'react'
import { CartState } from '../context/Context'
import SingleProduct from './SignleProduct'
import "./styles.css"

function Home() {
  const {state: {products}}=CartState()
  console.log(products)
  return (
    <div className='home'>
      <div className='productContainer'>
        {
          products.map((prod) =>(
            <SingleProduct prod={prod} key={prod.id}/>
          ))
        }
      </div>
    </div>
  )
}

export default Home