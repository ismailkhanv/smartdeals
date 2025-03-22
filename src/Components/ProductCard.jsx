import React from 'react'

const ProductCard = ({name,location,thumb,salary}) => {
  return (
    <div className='ProductItem'>
        <div className='ProductThumb'><img src={thumb} /></div>
        <div className='ProductInfo'>
            <div className='ProductTitle'>{name}</div>
            <div className='ProductLocation'>{location}</div>
            <div className='ProductAmount'><span className='amountSymbol'>$</span>{salary}</div>
            <button className='btn btn-primary ProductBtn'><i class="bi bi-cart me-2"></i> Add To cart</button>
        </div>
    </div>
  )
}

export default ProductCard