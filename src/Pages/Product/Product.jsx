import React, { useContext, useEffect, useMemo, useState } from 'react'
import './css/product.css'
import { Productsinfo } from '../../App'
import { useParams } from 'react-router-dom'

const Product = () => {

    const {id} = useParams();
    const products = useContext(Productsinfo) || [];

    const productData = useMemo(
        () => products.find(p => p.id === Number(id)), [products,id]
    );
   

    const [selectedImg, SetSelectedImg] = useState(null);
    
    useEffect(
        () => {
            if(productData?.images?.length){
                SetSelectedImg(productData.images[0])
            }
        },[productData]);

    if(!productData){
        return <div className='container text-center'>Data is Loading...</div>
    }


    return (
        <div className='sd_productPage'>
            <div className='container'>
                <div className='sd_productPageMain'>
                    <div className='sd_product_gallery'>
                        <div className='sd_product_img'>
                            <img src={selectedImg} alt={productData.title} className='sd_product_img_item img-fluid' />
                        </div>
                        <div className='sd_prod_list'>
                            {productData.images.map((img, index) => (
                                <img src={img} key={index} alt={index} className={img === selectedImg ? 'sd_img_thumb active img-fluid' : 'sd_img_thumb img-fluid'} onClick={()=>SetSelectedImg(img)} />
                            ))}
                        </div>
                    </div>
                    <div className='sd_product_content'>
                        <div className='sd_breadcrumbs_wrapper'>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item" aria-current="page">Men</li>
                                    <li className="breadcrumb-item active" aria-current="page">Men Solid formal shoes</li>
                                </ol>
                            </nav>
                        </div>
                        <div className='sd_product_details'>
                            <h1 className='sd_product_title'>{productData.title}</h1>
                            <p className='sd_product_amount'>{productData.price}<span className='sd_product_amt'>{productData.originalPrice}</span><span className='sd_product_discount'>{productData.discountPercentage}</span></p>
                            <div className='sd_product_review'>
                                <span className='sd_product_rating'>{productData.rating}<i className="bi bi-star-fill"></i></span>
                                <span className='sd_product_rating_count text-secondary ps-2'>{productData.availabilityStatus}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product