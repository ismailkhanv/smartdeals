import React from 'react'
import Product from '../Product'

const ProductGallery = () => {

    const images = [
        'images/products/items/men-shoes-3.jpg',
        'images/products/items/men-shoes.jpg',
        'images/products/items/men-shoes-1.jpg',
        'images/products/items/men-shoes-2.jpg',
    ]
  return (
    <div>
        <Product images = {images} />
    </div>
  )
}

export default ProductGallery