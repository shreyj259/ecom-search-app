import React from 'react'
import AccordionComponent from '../utils/AccordionComponent'

interface filterInterface{
  price:boolean[]
  ratings:boolean[]
}

interface Props{
  filters:filterInterface
  setFilters:Function
}

const SideBarComponent = ({filters,setFilters}:Props) => {

  const handlePrice=(pos:number)=>{
    let tempFilters:filterInterface={...filters}
    let tempPrice=[...filters.price]
    tempPrice[pos]=!tempPrice[pos]
    tempFilters.price=tempPrice
    setFilters(tempFilters)
  }

  const handleRatings=(pos:number)=>{
    let tempFilters:filterInterface={...filters}
    let tempRatings=[...filters.ratings]
    tempRatings[pos]=!tempRatings[pos]
    tempFilters.ratings=tempRatings
    setFilters(tempFilters)
  }

  return (
    <div className='side-bar-container'>
      <AccordionComponent title='BRAND'>
      <form>
        <input checked={filters.price[0]} onChange={()=>handlePrice(0)} type="checkbox" id="price-1" name="price-checkbox" value="price-1"/>
        <label className="checkbox-label" htmlFor="price-1"> Below 500 </label><br/>
        <input checked={filters.price[1]} onChange={()=>handlePrice(1)} type="checkbox" id="price-2" name="price-checkbox" value="price-2"/>
        <label className="checkbox-label" htmlFor="price-2"> 500 to 1000 </label><br/>
        <input checked={filters.price[2]} onChange={()=>handlePrice(2)} type="checkbox" id="price-3" name="price-checkbox" value="price-3"/>
        <label className="checkbox-label" htmlFor="price-3"> 1000 to 1500 </label><br/>
      </form>
      </AccordionComponent>

      <hr className='sidebar-divider' />

      <AccordionComponent title='RATINGS'>
      <form>
        <input checked={filters.ratings[0]} onChange={()=>handleRatings(0)} type="checkbox" id="rating-1" name="rating-checkbox" value="rating-1"/>
        <label className="checkbox-label" htmlFor="rating-1"> <img src="./assets/filled-star.png" /> <img src="./assets/filled-star.png" /> <img src="./assets/filled-star.png" /> <img src="./assets/filled-star.png" /> <img src="./assets/filled-star.png" /> </label><br/>
        <input checked={filters.ratings[1]} onChange={()=>handleRatings(1)} type="checkbox" id="rating-2" name="rating-checkbox" value="rating-2"/>
        <label className="checkbox-label" htmlFor="rating-2"> <img src="./assets/filled-star.png" /> <img src="./assets/filled-star.png" /> <img src="./assets/filled-star.png" /> <img src="./assets/filled-star.png" /> <img src="./assets/empty-star.png" /> </label><br/>
        <input checked={filters.ratings[2]} onChange={()=>handleRatings(2)} type="checkbox" id="rating-3" name="rating-checkbox" value="rating-3"/>
        <label className="checkbox-label" htmlFor="rating-3"><img src="./assets/filled-star.png" /> <img src="./assets/filled-star.png" /> <img src="./assets/filled-star.png" /> <img src="./assets/empty-star.png" /> <img src="./assets/empty-star.png" /> </label><br/>
        <input checked={filters.ratings[3]} onChange={()=>handleRatings(3)} type="checkbox" id="rating-4" name="rating-checkbox" value="rating-4"/>
        <label className="checkbox-label" htmlFor="rating-4"><img src="./assets/filled-star.png" /> <img src="./assets/filled-star.png" /> <img src="./assets/empty-star.png" /> <img src="./assets/empty-star.png" /> <img src="./assets/empty-star.png" /> </label><br/>
        <input checked={filters.ratings[4]} onChange={()=>handleRatings(4)} type="checkbox" id="rating-5" name="rating-checkbox" value="rating-5"/>
        <label className="checkbox-label" htmlFor="rating-5"><img src="./assets/filled-star.png" /> <img src="./assets/empty-star.png" /> <img src="./assets/empty-star.png" /> <img src="./assets/empty-star.png" /> <img src="./assets/empty-star.png" /> </label><br/>
      </form>
      </AccordionComponent>
    </div>
  )
}

export default SideBarComponent