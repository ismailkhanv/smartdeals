import React from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import './category.css'
import All from './All/All'
import Men from './Men/Men'
import Women from './Women/Women'
import ProductCard from '../Components/ProductCard'

const Shop = () => {

  const location = useLocation();

  let products = [
    { name: 'Ismail', cat_id: 1, location: 'Cbe', thumb_title: 'Men',thumb: 'images/users/men-1.jpg' },
    { name: 'Ammu', cat_id: 2, location: 'Chennai', thumb_title: 'Women',thumb: 'images/users/women-1.jpg' },
    { name: 'Sanjay', cat_id: 1, location: 'Cbe', thumb_title: 'Men',thumb: 'images/users/men-2.jpg' },
    { name: 'Ameesha', cat_id: 2, location: 'Mumbai', thumb_title: 'Women',thumb: 'images/users/women-2.jpg' },
    { name: 'Shiva', cat_id: 1, location: 'Cbe', thumb_title: 'Men',thumb: 'images/users/men-3.jpg' },
    { name: 'Ajay', cat_id: 1, location: 'Chennai', thumb_title: 'Men',thumb: 'images/users/men-4.jpg' },
    { name: 'Ayisha', cat_id: 2, location: 'Cbe', thumb_title: 'Women',thumb: 'images/users/women-3.jpg' },
    { name: 'Kumar', cat_id: 1, location: 'Chennai', thumb_title: 'Men',thumb: 'images/users/men-5.jpg' },
    { name: 'Preethi', cat_id: 2, location: 'Mumbai', thumb_title: 'Women',thumb: 'images/users/women-4.jpg' },
    { name: 'Simran', cat_id: 2, location: 'Cbe', thumb_title: 'Women',thumb: 'images/users/women-5.jpg' },
  ]

  const mainProducts =  products.filter((x =>
    location.pathname === '/men' ? x.cat_id === 1 :
    location.pathname === '/women' ? x.cat_id === 2 :
    true
  ));

  return (
      <div className="ShopSection">
        <div className="MenuList">
          <Link to='/all' className="MenuListItem">
            <span className='CatIcon'>
              <img src='images/category/all.png' className='img-fluid' />
            </span>
            <span className='CatLabel'>All</span>
          </Link>
          <Link to='/men' className="MenuListItem">
          <span className='CatIcon'>
              <img src='images/category/men.png' className='img-fluid' />
            </span>
            <span className='CatLabel'>Men</span>
          </Link>
          <Link to='/women' className="MenuListItem">
          <span className='CatIcon'>
              <img src='images/category/women.png' className='img-fluid' />
            </span>
            <span className='CatLabel'>Women</span>
          </Link>
        </div>
        <div className="ProductGridWrapper">
          <Routes>
            <Route path='/all' element={<All/>}/>
            <Route path='/men' element={<Men/>}/>
            <Route path='/women' element={<Women/>}/>
          </Routes>

          <div className="ProductGrid">
          {mainProducts.map((x)=>(
            <ProductCard 
              name={x.name}
              location = {x.location}
              thumb_title = {x.thumb_title}
              thumb = {x.thumb}
            />
          ))}
          </div>
          


        </div>
    </div>
  )
}

export default Shop