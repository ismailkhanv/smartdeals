import React, { useContext } from 'react'
import ProductCards from '../../Components/ProductCard'
import { productData } from '../../App'
import ProductCard from '../../Components/ProductCard';


const All = () => {

  const all = useContext(productData);

  return (
    <div className='ProductGrid'>
      {all.map((x)=>(
        <ProductCard {...x} />
      ))}   
    </div>
  )
}
 
export default All