import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="MenuList">
                <Link to='/all' className="MenuListItem">
                  <span className='CatIcon'>
                    <img src='images/category/all.png' className='img-fluid' />
                  </span>
                  <span className='CatLabel'>All</span>
                </Link>
      
                <Link to='/men' className="MenuListItem">
                <span className='CatIcon'>
                    <img src='images/category/men.png' className='img-fluid' />
                  </span>
                  <span className='CatLabel'>Men</span>
                </Link>
      
                <Link to='/women' className="MenuListItem">
                <span className='CatIcon'>
                    <img src='images/category/women.png' className='img-fluid' />
                  </span>
                  <span className='CatLabel'>Women</span>
                </Link>
              </div>
  )
}

export default NavBar