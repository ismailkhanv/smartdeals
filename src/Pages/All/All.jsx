import React, { useContext } from 'react'
import { Productsinfo } from '../../App'
import ProductCard from '../../Components/ProductCard';

const All = () => {

    const smProducts = useContext(Productsinfo);
    let prodcount = smProducts.length;

  return (
    <div className='ProductsWrapper'>
        <h2 className='productsLabel'> All <span className='smProductsCount'>({prodcount})</span></h2>
            <div className='smProductsGrid'>
                {smProducts.map((x)=>(
                    <ProductCard {...x} />
                ))}
            </div>
    </div>
  )
}

export default All