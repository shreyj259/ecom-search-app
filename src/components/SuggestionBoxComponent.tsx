import React from 'react'
import SuggestionCard from '../utils/SuggestionCard'
import { product } from '../utils/productInterface'

const SuggestionBoxComponent = ({products}:{products:product[]}) => {
  return (
    <div className='suggestion-box-container'>
      <span >Latest Trends</span>
      <div className="suggestion-cards-container">
       {products.map(item=><SuggestionCard key={item.id} name={item.name} image={item.image} />)} 
      </div>
    </div>
  )
}

export default SuggestionBoxComponent