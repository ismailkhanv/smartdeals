import React from 'react'
import './css/header.css'
import { Link, NavLink } from 'react-router-dom'
import Search from '../Search/Search'

const Header = () => {

  const navClose = () =>{
     setShowResults(false);
  }
  return (

    <header className="py-1 mb-0 border-bottom position-relative">
        <nav className="navbar navbar-expand-md">
          <div className="container position-relative">
            <NavLink to='/' className="navbar-brand d-flex align-items-center mb-0 me-auto text-decoration-none ui_logowrapper">
              <span className='sd_logo text-dark'>smart<span className='sd_text-primary'>deals</span></span>
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#ui_navbarContent" aria-controls="ui_navbarContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-md-end ps-md-3" id="ui_navbarContent">
              <div className='sd_navbarClose d-md-none' onClick={navClose}><i class="bi bi-x-circle"></i></div>
              <ul className="nav">
                <li className="nav-item"><NavLink to='/' className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink></li>
                <li className="nav-item"><NavLink to='/offers' className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Offers</NavLink></li>
                <li className="nav-item"><NavLink to='/all' className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Products</NavLink></li>
                <li className="nav-item"><NavLink to='/new-deals' className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>New Deals</NavLink></li>
                <li className="nav-item d-md-none"><NavLink to='/cart' className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Cart</NavLink></li>
                <li className="nav-item d-md-none"><NavLink to='/orders' className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>My Orders</NavLink></li>
                <li className="nav-item d-md-none"><NavLink to='/wishlist' className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Wishlist</NavLink></li>
                <li className="nav-item d-md-none"><NavLink to='/settings' className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Settings</NavLink></li>
                <li className="nav-item d-md-none"><NavLink to='/profile' className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>My Account</NavLink></li>
              </ul>

              <div className='ms-md-auto d-flex align-items-center gap-3 justify-content-end px-3 px-md-0'>
                <Search />
                
                <div className='sd_header_action_btn'>
                  <NavLink to='/cart'><i className="bi bi-cart"></i></NavLink>
                </div>
                <ul className="nav pt-0 d-none d-md-block">
                  <li className="nav-item dropdown">
                    <a href="#" className="d-block text-decoration-none dropdown-toggle" id="sd_UserAccountSettings" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle my-3 my-md-0" />
                    </a>
                    <ul className="dropdown-menu text-sdall" aria-labelledby="sd_UserAccountSettings" style={{ left: 'auto', right: 0 }}>
                      <li><NavLink to='/orders' className="dropdown-item">My Orders</NavLink></li>
                      <li><NavLink to='/wishlist' className="dropdown-item">Wishlist</NavLink></li>
                      <li><NavLink to='/settings' className="dropdown-item">Settings</NavLink></li>
                      <li><NavLink to='/profile' className="dropdown-item">My Account</NavLink></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
    </header>
  )
}

export default Header