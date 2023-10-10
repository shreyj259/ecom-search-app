import React from 'react'
import { product } from '../utils/productInterface'
import ProductCard from './ProductCard'

interface PropsInterface{
  products:product[]
  handleLike:Function;
}

const StoreResultsComponent = ({products,handleLike}:PropsInterface) => {
  return (
    <div className='store-results-container'>
      {products.map((item:product)=><ProductCard {...item} handleLike={handleLike}/>)}
    </div>
  )
}

export default StoreResultsComponent