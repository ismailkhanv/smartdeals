import React from 'react'

const Search = () => {
  return (
    <div className='position-relative'>
        <form className='sd_products_searchWrapper'>
            <i className="bi bi-search"></i>
            <input type='text' className='sd_products_search' placeholder='Search Product' autoFocus="fasle" />
        </form>
    </div>
  )
}

export default Search