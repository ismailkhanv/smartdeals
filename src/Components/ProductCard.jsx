import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Product from '../Pages/Product/Product';

const ProductCard = (props) => {

  let item = props;

  let [active,setActive] = useState(false);
  let [cartcount,setcartCount] = useState(0);

  const activeStatus = () =>{
    setActive(prevActive => !prevActive); // Toggle class 'active'
  }

  const addWishlist = () =>{
    activeStatus();
  }
 
  const addtocart = ()=>{
    setcartCount(prevCount => prevCount + 1);
  }

  return (
    <Link className='ProductItem' to={`/product/${item.id}`}>
        <div className='ProductThumb position-relative'>
          <img src={item.thumbnail} className='img-fluid' alt={item.title} />
          <div className='sdProductsActionBtns'>
            <button className={`ProductBtn sdWishlistBtn ${ active ? 'active' : ''} `} onClick={addWishlist}><i className="bi bi-heart"></i></button>
            <div className='sdCartBtnWrapper position-relative'>
              <button className='ProductBtn sdcartBtn' onClick={addtocart}><i className="bi bi-cart"></i></button>
              <span className='sdcartCount'>{cartcount}</span>
            </div>
          </div>
          
        </div>
        <div className='ProductInfo'>
            <div className='d-flex align-items-center justify-content-between' style={{gap: '8px'}}>
                <div className='ProductLocation'>{item.category}</div>
                <div className='ProductAmount'><span className='amountSymbol'>$</span>{item.price}</div>
            </div>
            
            <div className='ProductTitle'>{item.title}</div>
        </div>
    </Link>
  )
}

export default ProductCard