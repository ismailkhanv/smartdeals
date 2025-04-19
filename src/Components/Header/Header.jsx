import React from 'react'
import './css/header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (

    <header className="py-1 mb-4 border-bottom position-relative">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid position-relative">
                <a href="#" className="navbar-brand d-flex align-items-center mb-0 me-auto text-decoration-none ui_logowrapper">
                  <span className='bn_logo text-dark'>buy<span className='bn_text-primary'>now</span></span>
                </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#ui_navbarContent" aria-controls="ui_navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-lg-end ps-lg-3" id="ui_navbarContent">

                <ul className="nav">
                  <li className="nav-item"><Link to='/all' className='nav-link active'>Home</Link></li>
                  <li className="nav-item"><Link to='/offers' className='nav-link'>Offers</Link></li>
                  <li className="nav-item"><Link to= '/new-deals' className='nav-link'>New Deals</Link></li>
                </ul>

                <ul className="nav ms-lg-auto pt-0">
                    <li className="nav-item dropdown">
                      <a href="#" className="d-block text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle my-3 my-lg-0" />
                      </a>
                      <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                        <li><Link to='/cart' className="dropdown-item">Cart</Link></li>
                        <li><Link to='/orders' className="dropdown-item">My Orders</Link></li>
                        <li><Link to='/wishlist' className="dropdown-item">Wishlist</Link></li>
                        <li><Link to='/settings' className="dropdown-item">Settings</Link></li>
                        <li><Link to='/profile' className="dropdown-item">My Account</Link></li>
                      </ul>
                    </li>
                  </ul>
              </div>
            </div>
          </nav>

      </div>

      </header>

  )}

export default Header