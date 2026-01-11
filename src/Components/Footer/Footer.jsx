import React from 'react'
import './css/footer.css'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <footer className="pt-5 pb-3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-md-3 col-6">
                        <h5 className="sd_link_label">About</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link to='/' className="nav-link p-0 text-muted">About Us</Link></li>
                            <li className="nav-item mb-2"><Link to='/' className="nav-link p-0 text-muted">Contact Us</Link></li>
                            <li className="nav-item mb-2"><Link to='/' className="nav-link p-0 text-muted">Careers</Link></li>
                            <li className="nav-item mb-2"><Link to='/' className="nav-link p-0 text-muted">Press</Link></li>
                            <li className="nav-item mb-2"><Link to='/' className="nav-link p-0 text-muted">Corporate Information</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-3 col-6">
                        <h5 className="sd_link_label">Group Partners</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link to='/' className="nav-link p-0 text-muted">Amazon</Link></li>
                            <li className="nav-item mb-2"><Link to='/' className="nav-link p-0 text-muted">FlipKart</Link></li>
                            <li className="nav-item mb-2"><Link to='/' className="nav-link p-0 text-muted">Meesho</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-3 col-6">
                        <h5 className="sd_link_label">Help</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link to='/' className="nav-link p-0 text-muted">Payments</Link></li>
                            <li className="nav-item mb-2"><Link to='/' className="nav-link p-0 text-muted">Shipping</Link></li>
                            <li className="nav-item mb-2"><Link to='/' className="nav-link p-0 text-muted">Cancellation & Returns</Link></li>
                            <li className="nav-item mb-2"><Link to='/' className="nav-link p-0 text-muted">FAQs</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-3 col-6">
                        <h5 className="sd_link_label">Consumer Policy</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link to='/' className="nav-link p-0 text-muted">Terms</Link></li>
                            <li className="nav-item mb-2"><Link to='/' className="nav-link p-0 text-muted">Policy</Link></li>
                            <li className="nav-item mb-2"><Link to='/' className="nav-link p-0 text-muted">Security</Link></li>
                            <li className="nav-item mb-2"><Link to='/' className="nav-link p-0 text-muted">Roadmap</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12">
                        <form>
                            <h5 className="sd_link_label">Subscribe to our newsletter</h5>
                            <p>Monthly digest of whats new and exciting from us.</p>
                            <div className="d-flex w-100 gap-2">
                                <label for="newsletter1" className="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                <button className="btn btn-primary" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="d-flex justify-content-between py-3 border-top">
                    <p className='mb-0'>© 2026 SmartDeals, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer