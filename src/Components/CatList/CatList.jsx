import React, { useContext } from 'react'
import { Productsinfo } from '../../App'
import { Link } from 'react-router-dom';
import { slugify } from '../../utils/slug';

const CatList = () => {
    const products = useContext(Productsinfo) || [];

    const prodCat = [...new Set(products.map(p => p.category))];

    

  return (
    <div className='sd_CatProductsSec'>
      {prodCat.map((category,index)=>{

        const prodData = products.filter(item => item.category === category).slice(0,7);
        return (
          <section key={index} className='sd_pageSection pb-5'>
            <div className='container'>
                <div className='sd_pageCard position-relative'>
                    <div className='sd_homeCatProducts'>
                        <div className='sd_homeSectionLabel'>{category}</div>
                        <div className='sd_homeCatProductsList d-flex align-items-start gap-3'>
                          {prodData.map((products,index)=>(
                            <Link to={`/product/${products.id}/${slugify(products.title)}`} key={index} className='sd_homeCatProductsListItem'>
                                <div className='sd_CatProductsItemThumb'>
                                    <img src={products.thumbnail} className='img-fluid' alt={products.title} />
                                </div>
                                <div className='sd_CatProductsItemTitle'> {products.title}</div>
                            </Link>
                          ))}
                        </div>
                    </div>
                      
                   <Link to={`/category/${slugify(category)}`} className='sd_homeCatLinkBtn'>
                      <i className="bi bi-chevron-right"></i>
                  </Link> 
                </div>
            </div>
        </section>
      )})}

    </div>
     
  )
}

export default CatList