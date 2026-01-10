import React, { useContext } from 'react'
import { Productsinfo } from '../../App'
import ProductCard from '../../Components/ProductCard';
import NavBar from '../../Components/navbar/NavBar';

const Fragrances = () => {
    const sdProducts =  useContext(Productsinfo) || [];
    const sdFragrancessProducts = sdProducts.filter((x)=>(
        x.category === 'fragrances'
    ))
     const prodcount = sdFragrancessProducts.length;
  return (

      <div className='bnShopWrapper'>
          <div className='container'>
              <div className='sdShop'>
                  <div className='sdCatSidebar'>
                      <h4 className='sdSidebarLabel'>Categories</h4>
                      <NavBar />  
                  </div>
                  <div className='ProductListWrapper'>
                      <div className='ProductsWrapper'>
                          <h2 className='productsLabel'> Fragrances <span className='sdProductsCount'>({prodcount})</span></h2>
                          <div className='sdProductsGrid'>
                              {sdFragrancessProducts.map((x) => (
                                  <ProductCard key={x.id} {...x} />
                              ))}

                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Fragrances