import React, { useContext } from 'react'
import { Productsinfo } from '../../App'
import ProductCard from '../../Components/ProductCard';
import NavBar from '../../Components/navbar/NavBar';

const BestDeals = () => {
    const sdProducts =  useContext(Productsinfo) || [];
    const sdBestDealsProducts = sdProducts.filter((x)=>(
        x.rating > 4
    ))
     const prodcount = sdBestDealsProducts.length;
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
                          <h2 className='productsLabel'> BestDeals <span className='sdProductsCount'>({prodcount})</span></h2>
                          <div className='sdProductsGrid'>
                              {sdBestDealsProducts.map((x) => (
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

export default BestDeals