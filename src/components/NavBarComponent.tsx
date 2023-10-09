import React from 'react'
import { Link } from "react-router-dom";
import './styles/navbar.css'

const NavBarComponent = () => {
  return (
    <nav>
        <div className="logo-container">
          <Link to="/">
            <img src="./assets/logo.png" alt="" />
          </Link>
        </div>
    </nav>
  )
}

export default NavBarComponent