import React, { useState } from 'react'
import './css/product.css'
import productData from "../../assets/data/products.json"

const Product = () => {

    const [selectedImg, SetSelectedImg] = useState(productData.images[0]);
    const imageClick = (img) => {
        SetSelectedImg(img);
    }

    return (
        <div className='bn_productPage'>
            <div className='container'>
                <div className='bn_productPageMain'>
                    <div className='bn_product_gallery'>
                        <div className='bn_product_img'>
                            <img src={selectedImg} alt='product' className='bn_product_img_item img-fluid' />
                        </div>
                        <div className='bn_prod_list'>
                            {productData.images.map((img, index) => (
                                <img src={img} key={index} alt={index} className={img === selectedImg ? 'bn_img_thumb active img-fluid' : 'bn_img_thumb img-fluid'} onClick={() => imageClick(img)} />
                            ))}
                        </div>
                    </div>
                    <div className='bn_product_content'>
                        <div className='bn_breadcrumbs_wrapper'>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item" aria-current="page">Men</li>
                                    <li className="breadcrumb-item active" aria-current="page">Men Solid formal shoes</li>
                                </ol>
                            </nav>
                        </div>
                        <div className='bn_product_details'>
                            <h1 className='bn_product_title'>{productData.title}</h1>
                            <p className='bn_product_amount'>{productData.price}<span className='bn_product_amt'>{productData.originalPrice}</span><span className='bn_product_discount'>{productData.discount}</span></p>
                            <div className='bn_product_review'>
                                <span className='bn_product_rating'>{productData.rating}<i className="bi bi-star-fill"></i></span>
                                <span className='bn_product_rating_count text-secondary ps-2'>{productData.ratingCount}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product