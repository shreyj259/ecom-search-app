import React from 'react'
import { Link,useNavigate } from "react-router-dom";
import './styles/searchBar.css'

interface Props{
  setInFocus:Function,
  seachBarValue:string,
  setSearchBarValue:Function
}

const SearchBarComponent = ({setInFocus,seachBarValue,setSearchBarValue}:Props) => {
  const navigate=useNavigate()
  
  const handleFocus=()=>{
    setInFocus((prev:boolean)=>!prev);
  }

  const handleEnter=(e:any)=>{
    if(e.keyCode===13){
      navigate('/store')
    }
  }

  const handleInput=(e:any)=>{
    setSearchBarValue(e.target.value)
  }

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input value={seachBarValue} onKeyDown={handleEnter} onChange={handleInput} onFocus={handleFocus} onBlur={handleFocus} type="text" placeholder='Search'/>
      </div>
      <div className="search-icon-container">
        <Link to="store">

        <img src="./assets/search.png" alt="" />
        </Link>
      </div>
    </div>
  )
}

export default SearchBarComponent