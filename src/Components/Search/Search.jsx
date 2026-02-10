import React, { useContext, useEffect, useRef, useState } from 'react'
import { Productsinfo } from '../../App';
import { Link } from 'react-router-dom';
import { slugify } from '../../utils/slug';

const Search = () => {

  const Product = useContext(Productsinfo) || [];

  const [searchInput,setSearchInput] = useState('');
  const [showResults,setShowResults] = useState(false);
  const [showSearchBox,setShowSearchBox] = useState(false);

  const mainProduct = Product.filter((item)=>(
      item.title.toLowerCase().includes(searchInput.toLowerCase())
  ));

  const timer = useRef(null);
  
  const showSearchResults = () => {
    setShowSearchBox(true);
  }

  const hideSearchResults = () => {
    setShowSearchBox(false);
  }
  
  const searchResults = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    setShowResults(false);

    clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      if(value.trim() !== ''){
        setShowResults(true);
      } 
    },500);
  }
  return (
    <div className='position-relative w-100'>
        
      <form className='sd_products_searchWrapper'>
            <i className="bi bi-search"></i>
            <input type='text' className='sd_products_search' placeholder='Search Product' autoFocus="fasle" onClick={showSearchResults} />
        </form>

        {showSearchBox && (
           
            <div className='sd_searchResultsWrapper'>
                <div className='sd_searchResults w-100 h-100'>
                  <div className='sd_searchResultsClose' onClick={hideSearchResults}><i className="bi bi-x d-flex align-items-center justify-content-center"></i></div>
                    <div className='sd_searchResultsHead'>
                       <form className='sd_products_searchWrapper sd_products_searchWrapperInner'>
                          <i className="bi bi-search"></i>
                          <input type='text' className='sd_products_search' placeholder='Search Product' autoFocus="fasle" onChange={searchResults} />
                      </form>
                    </div>
                    {showResults && (
                    <div className='sd_searchResultsList'>
                      <p className='sd_searchResultsListLabel'>Our Products</p>
                      {mainProduct.length > 0 ? (
                          mainProduct.map((item)=>(
                            <Link to={`/product/${item.id}/${slugify(item.title)}`} className='sd_searchResultsListItem' key={item.id}>
                                <div className='sd_searchResultsListItemThumb'><img src={item.thumbnail} className='img-fluid' alt={item.title} /></div>
                                <div className='sd_searchResultsListItemTitle'>{item.title}</div>
                            </Link>
                          ))
                      ) : (
                        <div className='sd_emptyResultsWrapper' style={{ height: 'calc(100% - 39px);'}} >
                            <div className='sd_emptyResults'>Sorry! No results found...</div>
                        </div>
                      )}                       
                    </div>
                    )}

                </div>
             
        </div>
        )}
        
        
    </div>
  )
}

export default Search