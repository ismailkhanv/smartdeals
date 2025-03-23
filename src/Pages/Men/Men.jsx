import React, { useContext } from 'react'
import ProductCard from '../../Components/ProductCard'
import { Productsinfo } from '../../App'


const Men = () => {
    const smProducts = useContext(Productsinfo);
    const smMensProducts = smProducts.filter((x)=>(
        x.cat_id === 1
    ))
    const prodcount = smMensProducts.length;

  return (
        <div className='ProductsWrapper'>
            <h2 className='productsLabel'> Men <span className='smProductsCount'>({prodcount})</span></h2>
                <div className='smProductsGrid'>
                    {smMensProducts.map((x)=>(
                        <ProductCard {...x} />
                    ))}
                </div>
        </div>
  )
}

export default Men