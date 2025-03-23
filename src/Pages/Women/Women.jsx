import React, { useContext } from 'react'
import { Productsinfo } from '../../App'
import ProductCard from '../../Components/ProductCard';

const Women = () => {
    const smProducts =  useContext(Productsinfo);
     const smWomensProducts = smProducts.filter((x)=>(
        x.cat_id === 2
     ))
     const prodcount = smWomensProducts.length;
  return (
        <div className='ProductsWrapper'>
            <h2 className='productsLabel'> Women <span className='smProductsCount'>({prodcount})</span></h2>
                <div className='smProductsGrid'>
                    {smWomensProducts.map((x)=>(
                        <ProductCard {...x} />
                    ))}

                </div>
        </div>
  )
}

export default Women