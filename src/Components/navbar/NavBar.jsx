import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="MenuList">
        <Link to='/all' className='MenuListItem'>All</Link>
        <Link to='/beauty' className='MenuListItem'>Beauty</Link>
        <Link to='/fragrances' className='MenuListItem'>Fragrances</Link>
        <Link to='/furniture' className='MenuListItem'>Furniture</Link>
        <Link to='/groceries' className='MenuListItem'>Groceries</Link>
    </div>
  )
}

export default NavBar