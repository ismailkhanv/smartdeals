import React from 'react'
import './css/header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (

    <header className="py-1 mb-0 border-bottom position-relative">
      <div className="container">
        <nav className="navbar navbar-expand-md">
          <div className="container-fluid position-relative">
            <Link to='/' className="navbar-brand d-flex align-items-center mb-0 me-auto text-decoration-none ui_logowrapper">
              <span className='sd_logo text-dark'>smart<span className='sd_text-primary'>deals</span></span>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#ui_navbarContent" aria-controls="ui_navbarContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-md-end ps-md-3" id="ui_navbarContent">

              <ul className="nav">
                <li className="nav-item"><Link to='/' className='nav-link active'>Home</Link></li>
                <li className="nav-item"><Link to='/offers' className='nav-link'>Offers</Link></li>
                <li className="nav-item"><Link to='/all' className='nav-link'>Features</Link></li>
                <li className="nav-item"><Link to='/new-deals' className='nav-link'>New Deals</Link></li>
                <li className="nav-item d-md-none"><Link to='/cart' className="nav-link">Cart</Link></li>
                <li className="nav-item d-md-none"><Link to='/orders' className="nav-link">My Orders</Link></li>
                <li className="nav-item d-md-none"><Link to='/wishlist' className="nav-link">Wishlist</Link></li>
                <li className="nav-item d-md-none"><Link to='/settings' className="nav-link">Settings</Link></li>
                <li className="nav-item d-md-none"><Link to='/profile' className="nav-link">My Account</Link></li>
              </ul>

              <div className='ms-md-auto d-flex align-items-center gap-3 justify-content-end px-3 px-md-0'>
                <form className='sd_products_searchWrapper'>
                  <i className="bi bi-search"></i>
                  <input type='text' className='sd_products_search' placeholder='Search Product' autoFocus="fasle" />
                </form>
                <div className='sd_header_action_btn'>
                  <Link to='/cart'><i className="bi bi-cart"></i></Link>
                </div>
                <ul className="nav pt-0 d-none d-md-block">
                  <li className="nav-item dropdown">
                    <a href="#" className="d-block text-decoration-none dropdown-toggle" id="sd_UserAccountSettings" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle my-3 my-md-0" />
                    </a>
                    <ul className="dropdown-menu text-sdall" aria-labelledby="sd_UserAccountSettings" style={{ left: 'auto', right: 0 }}>
                      <li><Link to='/orders' className="dropdown-item">My Orders</Link></li>
                      <li><Link to='/wishlist' className="dropdown-item">Wishlist</Link></li>
                      <li><Link to='/settings' className="dropdown-item">Settings</Link></li>
                      <li><Link to='/profile' className="dropdown-item">My Account</Link></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

      </div>

    </header>

  )
}

export default Header