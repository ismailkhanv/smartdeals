import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {

  const location = useLocation();

  const allActive = location.pathname === '/' || location.pathname === '/all';

  return (
    <div className="MenuList">
        <NavLink to='/all' className={allActive ? 'MenuListItem active' : 'MenuListItem'}>All</NavLink>
        <NavLink to='/beauty' className={({isActive})=> isActive ? 'MenuListItem active' : 'MenuListItem'}>Beauty</NavLink>
        <NavLink to='/fragrances' className={({isActive})=> isActive ? 'MenuListItem active' : 'MenuListItem'}>Fragrances</NavLink>
        <NavLink to='/furniture' className={({isActive})=> isActive ? 'MenuListItem active' : 'MenuListItem'}>Furniture</NavLink>
        <NavLink to='/groceries' className={({isActive})=> isActive ? 'MenuListItem active' : 'MenuListItem'}>Groceries</NavLink>
    </div>
  )
}

export default NavBar