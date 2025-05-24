import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Product from '../Pages/Product/Product';

const ProductCard = ({name,category,thumb,amount}) => {

  let [active,setActive] = useState(false);
  let [cartcount,setcartCount] = useState(0);

  const activeStatus = ()=>{
    setActive(prevActive => !prevActive); // Toggle class 'active'
  }

  const addWishlist = () =>{
    activeStatus();
  }
 
  const addtocart = ()=>{
    setcartCount(prevCount => prevCount + 1);
  }

  
  return (
    <Link className='ProductItem' to='./product'>
        <div className='ProductThumb position-relative'>
          <img src={thumb} className='img-fluid' alt={name} />
          <div className='smProductsActionBtns'>
            <button className={`ProductBtn smWishlistBtn ${ active ? 'active' : ''} `} onClick={addWishlist}><i className="bi bi-heart"></i></button>
            <div className='smCartBtnWrapper position-relative'>
              <button className= 'ProductBtn smcartBtn' onClick={addtocart}><i className="bi bi-cart"></i></button>
              <span className='smcartCount'>{cartcount}</span>
            </div>
          </div>
          
        </div>
        <div className='ProductInfo'>
            <div className='d-flex align-items-center justify-content-between' style={{gap: '8px'}}>
                <div className='ProductLocation'>{category}</div>
                <div className='ProductAmount'><span className='amountSymbol'>$</span>{amount}</div>
            </div>
            
            <div className='ProductTitle'>{name}</div>
        </div>
    </Link>
  )
}

export default ProductCard