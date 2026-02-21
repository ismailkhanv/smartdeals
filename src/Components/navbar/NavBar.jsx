import React, { useContext } from 'react'
import { NavLink, useLocation} from 'react-router-dom';
import './NavBar.css';
import { Productsinfo } from '../../App';

const NavBar = () => {

  const products = useContext(Productsinfo) || [];

  const location = useLocation();

  const categoryItem = [...new Set(products.map((p)=>p.category))];

  const activeCls = ({ isActive })=> (isActive ? 'MenuListItem active' : 'MenuListItem');

  return (
    <div className="MenuList">
      <NavLink to='/category/all' className={activeCls}>All</NavLink>
      {categoryItem.map((item)=>(
        <NavLink key={item} to={`/category/${item}`} className={activeCls}>{item}</NavLink>
      ))}
    </div>
    
  )
}

export default NavBar