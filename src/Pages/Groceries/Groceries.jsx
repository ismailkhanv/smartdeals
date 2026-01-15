import React, { useContext, useState } from 'react'
import { Productsinfo } from '../../App'
import ProductCard from '../../Components/ProductCard';
import NavBar from '../../Components/navbar/NavBar';

const ITEMS_PER_PAGE = 9;
const Groceries = () => {
    const products = useContext(Productsinfo) || [];
    const sdGroceriessProducts = products.filter((x)=>(
        x.category === 'groceries'
    ))
    const prodcount = sdGroceriessProducts.length || [];
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(prodcount / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentProducts = sdGroceriessProducts.slice(startIndex, endIndex);

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
                          <h2 className='productsLabel'> Groceries <span className='sdProductsCount'>({prodcount})</span></h2>
                          <div className='sdProductsGrid'>
                              {currentProducts.map((x) => (
                                  <ProductCard key={x.id} {...x} />
                              ))}
                          </div>
                          {/* Pagination */}
                          {prodcount >= ITEMS_PER_PAGE ? (
                                <div className="sdPagination d-flex align-items-center justify-content-center flex-wrap">
                                    {Array.from({ length: totalPages }, (_, i) => (
                                    <button
                                        key={i}
                                        className={`sdPageBtn ${currentPage === i + 1 ? 'active' : ''}`}
                                        onClick={() => setCurrentPage(i + 1)}>
                                        {i + 1}
                                    </button>
                                    ))}
                                </div>
                          ) :(
                            <div></div>
                          )}                           
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Groceries