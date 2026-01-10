import React, { useState } from 'react'
import './css/product.css'
import productData from "../../assets/data/item.json"

const Product = () => {

    const [selectedImg, SetSelectedImg] = useState(productData.images[0]);
    const imageClick = (img) => {
        SetSelectedImg(img);
    }

    return (
        <div className='sd_productPage'>
            <div className='container'>
                <div className='sd_productPageMain'>
                    <div className='sd_product_gallery'>
                        <div className='sd_product_img'>
                            <img src={selectedImg} alt='product' className='sd_product_img_item img-fluid' />
                        </div>
                        <div className='sd_prod_list'>
                            {productData.images.map((img, index) => (
                                <img src={img} key={index} alt={index} className={img === selectedImg ? 'sd_img_thumb active img-fluid' : 'sd_img_thumb img-fluid'} onClick={() => imageClick(img)} />
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
                            <p className='sd_product_amount'>{productData.price}<span className='sd_product_amt'>{productData.originalPrice}</span><span className='sd_product_discount'>{productData.discount}</span></p>
                            <div className='sd_product_review'>
                                <span className='sd_product_rating'>{productData.rating}<i className="bi bi-star-fill"></i></span>
                                <span className='sd_product_rating_count text-secondary ps-2'>{productData.ratingCount}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product