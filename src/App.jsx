import React, { createContext, useState } from 'react'
import NavBar from './Components/navbar/NavBar'
import { Route, Routes } from 'react-router-dom'
import All from './Pages/All/All'
import Men from './Pages/Men/Men'
import Women from './Pages/Women/Women'
import './App.css'
import Header from './Components/Header/Header'
import Offers from './Pages/Offers/Offers'
import Wishlist from './Pages/Wishlist/Wishlist'
import NewDeals from './Pages/NewDeals/NewDeals'
import Orders from './Pages/Orders/Orders'
import Settings from './Pages/Settings/Settings'
import Profile from './Pages/Profile/Profile'

export const Productsinfo = createContext();

let products = [
  { name: 'Premier Cropped Skinny Jean', cat_id: 2, category: 'Levis', thumb: 'images/products/women/StretchCottonSkinnyPant_1024x.jpg', amount: 49 },
  { name: 'Ocean Wash Linen Sport Shirt', cat_id: 1, category: 'Lacoste', thumb: 'images/products/men/CustomFitSoft-TouchPolo_3_600x.jpg',amount: 25 },
  { name: 'Tailored Fit Mesh-Panel Polo', cat_id: 2, category: 'Levis', thumb: 'images/products/women/StripedCap-SleevePolo_3_600x.jpg',amount: 20 },
  { name: 'Standard Fit Sport Shirt', cat_id: 1, category: 'Guess', thumb: 'images/products/men/Featherweight_Pima_Hoodie_4_2048x2048_4a6d6aad-3619-4140-be98-998454c3287d_1024x.jpg',amount: 70 },
  { name: 'Two-Tone Sleeveless Dress', cat_id: 2, category: 'Levis', thumb: 'images/products/women/StripedFunnelneckPullover_1_600x.jpg',amount: 15 },
  { name: 'Custom Fit Soft-Touch Polo', cat_id: 1, category: 'Lacoste', thumb: 'images/products/men/Ocean-WashLinenSportShirt_1_600x.jpg',amount: 25 },
  { name: 'Twill 2-Button Jacket', cat_id: 2, category: 'Levis', thumb: 'images/products/women/TailoredFitPoloShirt_4_1024x.jpg',amount: 40 },
  { name: 'East Hampton Fleece Hoodie', cat_id: 1, category: 'Lacoste', thumb: 'images/products/men/StandardFitSportShirt_3_600x.jpg',amount: 55 },
  { name: 'Tailored Fit Mesh-Panel Polo', cat_id: 2, category: 'Guess', thumb: 'images/products/women/Two-ToneSleevelessDress_1_600x.jpg',amount: 33 },
  { name: 'Packable Jacket', cat_id: 1, category: 'Levis', thumb: 'images/products/men/PackableJacket_4_1024x.jpg',amount: 69 },
]

const App = () => {
  return (

    <Productsinfo.Provider value={products}>

      <div className='smPage'>

        <Header />

         <main className='bnPageMain'>
          <div className='container'>
              <Routes>
                <Route path='/' element ={<All />} /> {/*Important to display default component in home page */}
                <Route path='/all' element={<All />} />
                <Route path='/men' element={<Men />} />
                <Route path='/women' element={<Women />} />
                <Route path='/offers' element={<Offers />} />
                <Route path='/wishlist' element={<Wishlist/>} />
                <Route path='/new-deals' element={<NewDeals />} />
                <Route path='/orders' element= {<Orders />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='profile' element={<Profile />} />
              </Routes>
            </div>
         </main>
         

      </div>
    </Productsinfo.Provider>
    
  )
}

export default App