import React, { useContext, useEffect, useRef, useState } from 'react'
import { Productsinfo } from '../../App';
import { Link } from 'react-router-dom';
import { slugify } from '../../utils/slug';

const Search = () => {

  const Product = useContext(Productsinfo) || [];

  const [searchInput,setSearchInput] = useState('');
  const [showResults,setShowResults] = useState(false);

  const mainProduct = Product.filter((item)=>(
      item.title.toLowerCase().includes(searchInput.toLowerCase())
  ));

  const timer = useRef(null);
  
  
  const searchResults = (e) =>{
    const value = e.target.value;
    setSearchInput(value);
    setShowResults(false);

    clearTimeout(timer.current);

    timer.current = setTimeout(()=>{
      if(value.trim() !== ''){
        setShowResults(true);
      } 
    },500);
  }
  return (
    <div className='position-relative w-100'>
        <form className='sd_products_searchWrapper'>
            <i className="bi bi-search"></i>
            <input type='text' className='sd_products_search' placeholder='Search Product' autoFocus="fasle" onChange={searchResults} />
        </form>

        {showResults && (
            <div className='sd_searchResultsWrapper'>
                <div className='sd_searchResultsClose'></div>
                <div className='sd_searchResults w-100 h-100'>
                    <div className='sd_searchResultsHead'>
                      Search results of: <span>{searchInput}</span>
                    </div>

                    <div className='sd_searchResultsList'>
                      {mainProduct.length > 0 ? (
                          mainProduct.map((item)=>(
                            <Link to={`/product/${item.id}/${slugify(item.title)}`} className='sd_searchResultsListItem' key={item.id}>
                                <div className='sd_searchResultsListItemThumb'><img src={item.thumbnail} className='img-fluid' alt={item.title} /></div>
                                <div className='sd_searchResultsListItemTitle'>{item.title}</div>
                            </Link>
                          ))
                      ) : (
                        <div className='sd_emptyResults'>Sorry! No results found...</div>
                      )}                       
                       

                    </div>
                </div>
              
            </div>
        )}
        
    </div>
  )
}

export default Search