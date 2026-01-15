import React, { useContext, useState } from 'react'
import { Productsinfo } from '../../App'
import ProductCard from '../../Components/ProductCard';
import NavBar from '../../Components/navbar/NavBar';
import Pagination from '../../Components/Pagination/Pagination';

const Groceries = () => {
    const products = useContext(Productsinfo) || [];
    const sdGroceriessProducts = products.filter((x)=>(
        x.category === 'groceries'
    ))

    const [ITEMS_PER_PAGE,setITEMS_PER_PAGE] = useState(9);
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
                            <div className='ProductsWrapperHead'>
                                <h2 className='productsLabel'> Groceries <span className='sdProductsCount'>({prodcount})</span></h2>
                                <Pagination itemPerPage = {ITEMS_PER_PAGE} 
                                    selectCount = {(value) => {
                                        setITEMS_PER_PAGE(value); 
                                        setCurrentPage(1);
                                    }}
                                 />                                
                            </div>
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