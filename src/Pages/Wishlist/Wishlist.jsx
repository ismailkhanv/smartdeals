import React, { useContext, useState } from 'react'
import Pagination from '../../Components/Pagination/Pagination';
import './wishlist.scss'
import { Productsinfo } from '../../App';
import AddtoCart from '../../Components/AddtoCart/AddtoCart';
import { Link } from 'react-router-dom';
import { slugify } from '../../utils/slug';


const Wishlist = () => {

  const productData = useContext(Productsinfo) || [];
  const [wishlistCount,setwishlistCount] = useState(9);

  return (
    <div className='sd_wishlist_page'>
      <div className='container'>
        <div className='sdShop'>
          <div className='sd_pageCard'>
              <div className='sd_pageCardHeader d-flex align-items-center justify-content-between flex-wrap gap-3'>
                <h2 class="sd_pageCardHeaderLabel">Wishlist</h2>
                <Pagination 
                  itemPerPage = {wishlistCount}
                  selectCount = {(value)=>(
                    setwishlistCount(value)
                  )}
                />
              </div>
              <div className='sd_pageCardContent'>
                <div className='sd_wishlist_tableWrapper pt-4 table-responsive'>
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col"><input type="checkbox" className='sd_wishlistTableCheckBox'/></th>
                        <th scope="col" className='text-start'>Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Stock status</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>

                      
                      {productData.slice(0,wishlistCount).map((item,index)=>(
                        <tr className='position-relative'>
                          <td scope="row"><input type="checkbox" id={index} className='sd_wishlistTableCheckBox' name="vehicle1" value="Bike" /></td>
                          <td className='text-start d-flex align-items-center gap-3'>
                            <img key={index} src={item.images?.[0]} className='sd_wishlistProductImg' alt={item.title} />
                            <Link className='w-100 sd_wishlistProductTitleLink' to={`/product/${item.id}/${slugify(item.title)}`}><label for={index} className='sd_wishlistProductTitle'>{item.title}</label></Link>
                          </td>
                          <td>${item.price}</td>
                          <td> <AddtoCart /> </td>
                          <td>In Stock</td>
                          <td><button className='sd_addtocartBtn btn btn-primary'>Add to Cart</button></td>
                        </tr>
                      ))}
                      
                    </tbody>
                  </table>
                  
                  

                </div>
                
              </div>

        </div>
        </div>
      </div>
     
    </div>
  )
}

export default Wishlist