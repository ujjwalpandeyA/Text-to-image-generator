import React from 'react'
import { NavLink } from 'react-router-dom'
import "../CSS/Navbar.css";
import img2 from './images/06.png'

function Navbar() {
  return (
    <div className='navBar-container'>
      <div className='nav-logo'>
        <img src={img2} id='logo-image-content' alt="manNavLogo" />
        <h1 id='title-content'>AIArT</h1>
      </div>
      <div className='nav-menu'>
        <ul className='nav-menu'>
          <li className='nav-item-1'>
           <NavLink to='/'>Home</NavLink> 
          </li>
          <li className='nav-item-2'>
            <NavLink to='/imgGenerator'>Generate Image</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar