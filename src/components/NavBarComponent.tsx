import React from 'react'
import { Link, useLocation } from "react-router-dom";
import '../styles/navbar.css'
import SearchBarComponent from './SearchBarComponent';

interface Props{
  searchBarValue?:string,
  setSearchBarValue?:Function
}

const NavBarComponent = ({searchBarValue,setSearchBarValue}:Props) => {
  const {pathname}=useLocation()
  return (
    <nav>
       { pathname==="/store"?<SearchBarComponent searchBarValue={searchBarValue} setSearchBarValue={setSearchBarValue}/>:""}
        <div className="logo-container">
          <Link to="/">
            <img src="./assets/logo.png" alt="" />
          </Link>
        </div>
    </nav>
  )
}

export default NavBarComponent