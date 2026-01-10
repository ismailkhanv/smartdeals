import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="MenuList">
        <NavLink to='/all' className={({isActive})=> isActive ? 'MenuListItem active' : 'MenuListItem'}>All</NavLink>
        <NavLink to='/beauty' className={({isActive})=> isActive ? 'MenuListItem active' : 'MenuListItem'}>Beauty</NavLink>
        <NavLink to='/fragrances' className={({isActive})=> isActive ? 'MenuListItem active' : 'MenuListItem'}>Fragrances</NavLink>
        <NavLink to='/furniture' className={({isActive})=> isActive ? 'MenuListItem active' : 'MenuListItem'}>Furniture</NavLink>
        <NavLink to='/groceries' className={({isActive})=> isActive ? 'MenuListItem active' : 'MenuListItem'}>Groceries</NavLink>
    </div>
  )
}

export default NavBar