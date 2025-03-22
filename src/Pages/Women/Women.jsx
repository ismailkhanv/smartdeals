import React, { useContext } from 'react'
import { productData } from '../../App'
import ProductCard from '../../Components/ProductCard';

const Women = () => {

  const all = useContext(productData);
  const womenProduct = all.filter((x)=>(
    x.cat_id === 2
  ))

  return (
    <div className='ProductGrid'>
        {womenProduct.map((x)=>(
          <ProductCard {...x} />
        ))}
    </div>
  )
}

export default Women 