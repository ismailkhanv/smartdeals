import React, { useContext } from 'react'
import ProductCard from '../../Components/ProductCard'
import { Productsinfo } from '../../App'
import NavBar from '../../Components/navbar/NavBar';


const Men = () => {
    const smProducts = useContext(Productsinfo);
    const smMensProducts = smProducts.filter((x)=>(
        x.cat_id === 1
    ))
    const prodcount = smMensProducts.length;

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
                          <h2 className='productsLabel'> Men <span className='smProductsCount'>({prodcount})</span></h2>
                          <div className='smProductsGrid'>
                              {smMensProducts.map((x) => (
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

export default Men