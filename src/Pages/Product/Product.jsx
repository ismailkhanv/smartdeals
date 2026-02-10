import React, { useContext, useEffect, useMemo, useState } from 'react'
import './css/product.css'
import { Productsinfo } from '../../App'
import { Link, useParams } from 'react-router-dom'
import { slugify } from '../../utils/slug'
import usrImg from './images/user.png'
import { PuffLoader } from 'react-spinners'

const Product = () => {

    const {id, slug} = useParams();
    const products = useContext(Productsinfo) || [];

    const productData = products.find(p=> p.id == Number(id));

    const [selectedImg, SetSelectedImg] = useState(null);
    
    useEffect(
        () => {
            if(productData?.images?.length){
                SetSelectedImg(productData.images[0])
            }
        },[productData]);

    if(!productData){
        return (
            <div className='bnPageMain'>
                <div className='sd_productPage'>
                    <div className='container text-center'>
                        <div className='sd_productPageMain position-relative d-flex align-items-center justify-content-center text-center'>
                            <PuffLoader color="#40a060" /> 
                        </div>
                    </div>
                </div>
            </div>
        )}

    const originalPrice = (productData.price / (1 - productData.discountPercentage / 100)).toFixed(2);


    return (
        <div className='sd_productPage'>
            <div className='container'>
                <div className='sd_productPageMain'>
                    <div className='sd_product_gallery'>
                        <div className='sd_product_img'>
                            <img src={selectedImg} className='sd_product_img_item img-fluid' />
                        </div>
                        <div className='sd_prod_list'>
                            {productData.images.map((img, index) => (
                                <img key={index} src={img} className={img === selectedImg ? 'sd_img_thumb active' : 'sd_img_thumb' } onClick={()=>SetSelectedImg(img)}></img>
                            ))}
                        </div>
                    </div>
                    <div className='sd_product_content'>
                        <div className='sd_breadcrumbs_wrapper'>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                                    <li className="breadcrumb-item" aria-current="page"><Link to={`/${slugify(productData.category)}`}>{productData.category}</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Men Solid formal shoes</li>
                                </ol>
                            </nav>
                        </div>
                        <div className='sd_product_details'>
                            <h1 className='sd_product_title'>{productData.title}</h1>
                            <div className='sd_product_tags pb-2 d-flex align-items-center gap-2'>
                                {productData.tags.map((tags,index)=>(
                                    <span className='sd_product_tags_list' key={index}>{tags}</span>
                                ))}
                            </div>
                            <div className='sd_product_amountWrapper d-flex align-items-center gap-2'>
                                <span className='sd_product_amount' style={{gap: 0}}>
                                    <span class="amountSymbol" style={{fontSize:'14px'}}>$</span>{productData.price} 
                                </span>
                                <span className='sd_product_amount' style={{gap: 0,fontSize: '20px',textDecoration:'line-through',color:'#7d7d7d',fontWeight:500}}>
                                    <span class="amountSymbol" style={{fontSize:'14px'}}>$</span>{originalPrice}
                                </span>
                            </div>
                            
                            <div className='d-flex align-items-center gap-2'>
                                <span className='sd_product_rating'>{productData.rating}<i className="bi bi-star-fill"></i></span>
                                <span className='sd_product_rating_count'>{productData.reviews.length} reviews</span>
                            </div>
                            <div className='sd_product_description pt-3'>{productData.description}</div>

                            <div className='sd_product_info_wrapper pt-3'>
                                <h2>More Information</h2>
                                <table className='sd_product_info_table w-100 table table-striped'>
                                    <tbody>
                                        <tr>
                                            <td>Category</td>
                                            <td>{productData.category}</td>
                                        </tr>
                                        <tr>
                                            <td>stock</td>
                                            <td>{productData.stock}</td>
                                        </tr>
                                        <tr>
                                            <td>brand</td>
                                            <td>{productData.brand}</td>
                                        </tr>
                                        <tr>
                                            <td>tags</td>
                                            <td>{productData.tags.map((tag,index)=> <span className='pe-1' key={index}>{tag},</span>)}..</td>
                                        </tr>
                                        <tr>
                                            <td>sku</td>
                                            <td>{productData.sku}</td>
                                        </tr>
                                        <tr>
                                            <td>weight</td>
                                            <td>{productData.weight}</td>
                                        </tr>
                                        <tr>
                                            <td>dimensions <span className='ps-1' style={{fontSize: '12px'}}>(W*H*D)</span></td>
                                            <td><span><span className='pe-1' style={{fontSize: '10px'}}>W:</span>{productData.dimensions.width}</span> * <span><span className='pe-1' style={{fontSize: '10px'}}>H:</span>{productData.dimensions.height}</span> * <span><span className='pe-1' style={{fontSize: '10px'}}>D:</span>{productData.dimensions.depth}</span></td>
                                        </tr>
                                        <tr>
                                            <td>Warranty</td>
                                            <td>{productData.warrantyInformation}</td>
                                        </tr>
                                        <tr>
                                            <td>shipping</td>
                                            <td>{productData.shippingInformation}</td>
                                        </tr>
                                        <tr>
                                            <td>Return Policy</td>
                                            <td>{productData.returnPolicy}</td>
                                        </tr>
                                        <tr>
                                            <td>Created At</td>
                                            <td>{productData.meta.createdAt}</td>
                                        </tr>
                                        <tr>
                                            <td>Updated At</td>
                                            <td>{productData.meta.updatedAt}</td>
                                        </tr>
                                        <tr>
                                            <td>barcode</td>
                                            <td>{productData.meta.barcode}</td>
                                        </tr>
                                        <tr>
                                            <td>QR Code</td>
                                            <td><img src={productData.meta.qrCode} className='img-fluid sd_productQRCode' alt={productData.title} /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className='sd_product_info_wrapper pt-3'>
                                <h2>Top Customer reviews</h2>
                                <div className='sd_product_reviews'>
                                    {productData.reviews.map((review,index)=>(
                                        <div className='sd_product_reviews_item' key={index}>
                                            <div className='sd_product_reviews_head d-flex align-items-center gap-1'>
                                                <img src={usrImg} className='img-fluid' alt={review.reviewerName} />
                                                <span className='sd_product_reviews_title'>{review.reviewerName}</span>
                                            </div>
                                            <div className='sd_product_reviewRating d-flex align-items-center gap-2'>
                                                <div className='sd_product_ratinglist d-flex gap-1'>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-half"></i>
                                                    <i className="bi bi-star"></i>
                                                </div>
                                                <span className='sd_product_ratingValue'>{review.rating}</span>
                                            </div>
                                            <div className='sd_product_rating_date'>{review.date}</div>
                                            <div className='sd_product_rating_message'>{review.comment}</div>
                                        </div>
                                        
                                    ))}
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product