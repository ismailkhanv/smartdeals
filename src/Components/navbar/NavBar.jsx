import React, { use, useContext } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import './NavBar.css'
import { Productsinfo } from '../../App';

const NavBar = () => {

  const location = useLocation();
  const products = useContext(Productsinfo) || [];

  const category = [... new Set(products.map(p =>p.category))];

  const allActive = location.pathname === '/category/all';

  return (
    <div className="MenuList">
      <NavLink to='/all' className={allActive ? 'MenuListItem active' : 'MenuListItem'}>All</NavLink>
      {category.map((item,index)=>(
        <NavLink key={index} to={`../category/${item}/`} className={({isActive})=> isActive ? 'MenuListItem active' : 'MenuListItem'}>{item}</NavLink>
      ))}
        
    </div>
  )
}

export default NavBar