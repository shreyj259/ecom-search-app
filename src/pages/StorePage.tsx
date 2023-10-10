import React, { useState } from 'react'
import NavBarComponent from '../components/NavBarComponent'
import SideBarComponent from '../components/SideBarComponent'
import StoreResultsComponent from '../components/StoreResultsComponent'
import '../styles/storePage.css'
import { product } from '../utils/productInterface'
import {fakeProducts} from '../faker';

interface FilterInterface{
  price:boolean[]
  ratings:boolean[]
}

const StorePage = () => {
  const [products,setProducts]=useState<product[]>(fakeProducts)
  const [loadAll,setLoadAll]=useState(false);
  const [filters,setFilters]=useState<FilterInterface>({
    price:[true,true,true],
    ratings:[true,true,true,true,true]
  })
  const [searchBarValue,setSearchBarValue]=useState<string>("")

  let results:product[]=products;
  
  if(searchBarValue!==""){
      results=products.filter((item) => item.name.toLowerCase().includes(searchBarValue.toLowerCase()));
  }
  const handleLike=(id:string)=>{
    const tempProducts=[...products];
    tempProducts.map(item=>{
      if(item.id===id){
        item.liked=!item.liked
      }
      return item;
    })
    setProducts(tempProducts)
  }
 
 
  results=results.filter((product)=>{
    if((filters.price[0] && product.price<500) || (filters.price[1] && product.price<=1000 && product.price>=500) || (filters.price[2] && product.price<=1500 && product.price>1000))
      return true
    return false
  }).filter((product)=>{
    if((filters.ratings[0] && product.rating===5) || (filters.ratings[1] && product.rating===4) || (filters.ratings[2] && product.rating===3) || (filters.ratings[3] && product.rating===2) || (filters.ratings[4] && product.rating===1))
      return true
    return false
  });

  if(!loadAll){
    results=results.slice(0,8);
  }

  return (
    <>
    <NavBarComponent searchBarValue={searchBarValue} setSearchBarValue={setSearchBarValue} />
    <div className="store-page-heading">
    Search Results
    </div>
    <div className="store-page-container">
      <SideBarComponent filters={filters} setFilters={setFilters} />
      <StoreResultsComponent products={results} handleLike={handleLike}/>
    </div>
    {!loadAll?<div className="view-more-button-container">
    <button onClick={()=>setLoadAll(true)} className="view-more-button">
      Load All
    </button>
    </div>:""}
    </>
  )
}

export default StorePage