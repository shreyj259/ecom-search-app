import React from 'react'
import { Link,useLocation,useNavigate } from "react-router-dom";
import '../styles/searchBar.css'

interface Props{
  setInFocus?:Function,
  searchBarValue?:string,
  setSearchBarValue?:Function
}

const SearchBarComponent = ({setInFocus,searchBarValue,setSearchBarValue}:Props) => {
  const navigate=useNavigate()
  const {pathname}=useLocation()
  
  const handleFocus=()=>{
    if(setInFocus){
    setInFocus((prev:boolean)=>!prev);
    }
  }

  const handleEnter=(e:any)=>{
    if(e.keyCode===13){
      navigate('/store')
    }
  }

  const handleInput=(e:any)=>{
    if(setSearchBarValue)
    setSearchBarValue(e.target.value)
  }

  return (
    <div className={`searchbar-container ${pathname==="/store"?"r-padding":""}`}>
      <div className="searchbar">
        <input value={searchBarValue} onKeyDown={handleEnter} onChange={handleInput} onFocus={handleFocus} onBlur={handleFocus} type="text" placeholder='Search'/>
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