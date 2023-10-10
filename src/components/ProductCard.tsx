import React from 'react'
import { product } from '../utils/productInterface'


interface PropsInterface extends product{
  handleLike:Function
}

const ProductCard = ({id,name,price,image,rating,liked,handleLike}:PropsInterface) => {

  let starsOutput=[];
  for(let i=0;i<rating;i++)
  starsOutput.push(<img src="./assets/filled-star.png"/>)
  for(let i=0;i<5-rating;i++)
  starsOutput.push(<img src="./assets/empty-star.png"/>)


  return (
    <div className="product-card-container">
      <div className="product-card-image-container">
        <div className="product-card-image">
          <img src={image} alt="" />
        </div>
        <div onClick={()=>handleLike(id)} className={`product-card-like-button  ${liked?"active":""}`}>
        <svg clip-rule="evenodd" fill-rule="evenodd" fill='currentColor' stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z" fill-rule="nonzero"/></svg>
        </div>
        <div className="product-card-hover-button">
          View Product
        </div>
      </div>
      <div className="product-card-title">
         {name}
      </div>
      <div className="product-card-price">
         Rs. {price}
      </div>
      <div className="product-card-ratings-container">
        {starsOutput}
      </div>
    </div>
  )
}

export default ProductCard