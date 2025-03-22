import React, { useContext } from 'react'
import { productData } from '../../App';
import ProductCard from '../../Components/ProductCard';

const Men = () => {

  const all = useContext(productData);

  const mensProduct = all.filter((x)=>(
      x.cat_id === 1
  ))
  return (
    <div className='ProductGrid'>
    {mensProduct.map((x)=>(
      <ProductCard {...x} />
    ))}   
  </div>
  )
}

export default Men 