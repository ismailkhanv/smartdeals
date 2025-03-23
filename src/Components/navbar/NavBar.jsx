import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="MenuList">
        <Link to='/all' className='MenuListItem'>All</Link>
        <Link to='/men' className='MenuListItem'>Men</Link>
        <Link to= 'women' className='MenuListItem'>Women</Link>
    </div>
  )
}

export default NavBar