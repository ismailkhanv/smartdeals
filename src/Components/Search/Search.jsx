import React, { useContext, useEffect, useRef, useState } from 'react'
import { Productsinfo } from '../../App';

const Search = () => {

  const Product = useContext(Productsinfo) || [];

  const [searchInput,setSearchInput] = useState('');
  const [showResults,setShowResults] = useState(false);

  const timer = useRef(null);

  const [prodTitle,setProdTitle] = useState('');

  useEffect(()=>{
    const title = Product.map(x => x.title);
    setProdTitle(title);
  },[Product]);

  
  const searchResults = (e) =>{
    const value = e.target.value;
    setSearchInput(value);
    setShowResults(false);

    clearTimeout(timer.current);

    timer.current = setTimeout(()=>{
      if(value.trim() !== ''){
        setShowResults(true);
      } else{
        return <div>Sorry! No results found!</div>
      }
    },[500]);
  }


  return (
    <div className='position-relative w-100'>
        <form className='sd_products_searchWrapper'>
            <i className="bi bi-search"></i>
            <input type='text' className='sd_products_search' placeholder='Search Product' autoFocus="fasle" onChange={searchResults} />
        </form>

        {showResults && (
            <div className='sd_searchResultsWrapper'>
                <div className='sd_searchResults w-100 h-100'>
                    <div className='sd_searchResultsHead'>
                      Search results of: <span>{searchInput}</span>
                    </div>

                    <div className='sd_searchResultsList'>
                            {prodTitle
                              .filter(item => item.toLowerCase().includes(searchInput.toLowerCase()))
                              .map((title,index)=>(
                                <div className='sd_searchResultsListItem' key={index}>{title}</div>
                              ))}
                       
                      
                    </div>
                </div>
              
            </div>
        )}
        
    </div>
  )
}

export default Search