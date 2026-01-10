import React, { useContext } from 'react'
import ProductCard from '../../Components/ProductCard'
import { Productsinfo } from '../../App'
import NavBar from '../../Components/navbar/NavBar';

const Beauty = () => {
    const sdProducts = useContext(Productsinfo) || [];
    const sdBeautysProducts = sdProducts.filter((x)=>(
        x.category === 'beauty'
    ))
    const prodcount = sdBeautysProducts.length || [];

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
                          <h2 className='productsLabel'> Beauty <span className='sdProductsCount'>({prodcount})</span></h2>
                          <div className='sdProductsGrid'>
                              {sdBeautysProducts.map((x) => (
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

export default Beauty