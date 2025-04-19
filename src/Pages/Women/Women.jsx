import React, { useContext } from 'react'
import { Productsinfo } from '../../App'
import ProductCard from '../../Components/ProductCard';
import NavBar from '../../Components/navbar/NavBar';

const Women = () => {
    const smProducts =  useContext(Productsinfo);
     const smWomensProducts = smProducts.filter((x)=>(
        x.cat_id === 2
     ))
     const prodcount = smWomensProducts.length;
  return (

      <div className='bnShopWrapper'>
          <div className='container'>
              <div className='smShop'>
                  <div className='smCatSidebar'>
                      <h4 className='smSidebarLabel'>Categories</h4>
                      <NavBar />  
                  </div>
                  <div className='ProductListWrapper'>
                      <div className='ProductsWrapper'>
                          <h2 className='productsLabel'> Women <span className='smProductsCount'>({prodcount})</span></h2>
                          <div className='smProductsGrid'>
                              {smWomensProducts.map((x) => (
                                  <ProductCard {...x} />
                              ))}

                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Women