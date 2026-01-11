import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Link, Route, useParams } from 'react-router-dom'
import Product from './Product'
import { Productsinfo } from '../../App';

const Sample = () => {
  return (
    <div>product Connect:</div>
    Step1:
    <Route path='/product/:id/:slug' element={</Product>}></Route>

    step2:

    <Link to={`/product/${item.id}//${item.title}`}></Link>

    step3: Product.jsx:
    const prod = useContext(Productsinfo) || [];
    const {id,slug} = useParams();

    const prodData = useMemo(
        () => prod.find(p = p.id === Number(id)),[prod,id]
    );

    const [selectedImg,SetSelectedImg] = useState(null);
    useEffect(
        ()=> {
            if(prodData.images.length){
                SetSelectedImg(prodData.images[0]);
            }
        }
    );


    <img src={selectedImg} className='img-fluid' />

    {prodData.images.map((img,i)=>(
        <div key={i} className={img === selectedImg ? 'img-fluid active' : 'img-fluid'} onClick={SetSelectedImg(img)}>{img}</div>
    ))}

  )
}

export default Sample