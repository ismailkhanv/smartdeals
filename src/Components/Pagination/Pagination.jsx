import React from 'react'

const Pagination = ({itemPerPage,selectCount, options}) => {
  return (
    <div className='sd_selectProductsCount'>
        <span className='sd_selectProductsCountLabel'>Show</span>
        <div className='sd_selectProductsCountItem'>
            <select className='sd_selectProductsCountTag' value={itemPerPage} onChange={(e)=>selectCount(Number(e.target.value))}>
                {/* <option value={9}>9</option>
                <option value={18}>18</option>
                <option value={27}>27</option>
                <option value={36}>36</option> */}

                {options && (
                  options.map((count)=>(
                    <option key={count} value={count}>{count}</option>
                  ))
                )}
            </select>
            <i className="bi bi-chevron-down sd_selectProductsCountIcon"></i>
        </div>
        
        <span className='sd_selectProductsCountLabel'>Products</span>
    </div>
  )
}

export default Pagination