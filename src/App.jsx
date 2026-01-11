import React, { createContext, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import All from './Pages/All/All'
import Beauty from './Pages/Beauty/Beauty'
import Fragrances from './Pages/Fragrances/Fragrances'
import Furniture from './Pages/Furniture/Furniture'
import Groceries from './Pages/Groceries/Groceries'
import './App.css'
import Header from './Components/Header/Header'
import Offers from './Pages/Offers/Offers'
import Wishlist from './Pages/Wishlist/Wishlist'
import NewDeals from './Pages/NewDeals/NewDeals'
import Orders from './Pages/Orders/Orders'
import Settings from './Pages/Settings/Settings'
import Profile from './Pages/Profile/Profile'
import Footer from './Components/Footer/Footer'
import Product from './Pages/Product/Product'

export const Productsinfo = createContext();

const App = () => {

  const [shopProducts,setShopProducts] = useState(null);

  // Method 1:
  // useEffect(()=>{
  //   setShopProducts(ProductItem.products);
  // });

  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res=>res.json())
    .then(data => {
      setShopProducts(data.products);
    })
    .catch(() =>{
      alert('Data is not loading');
    })
  }, []);



  return (

    <Productsinfo.Provider value={shopProducts}>

      <div className='sdPage'>

        <Header />

         <main className='bnPageMain'>
              <Routes>
                <Route path='/' element ={<All />} /> {/*Important to display default component in home page */}
                <Route path='/all' element={<All />} />
                <Route path='/beauty' element={<Beauty />} />
                <Route path='/fragrances' element={<Fragrances />} />
                <Route path='/furniture' element={<Furniture />} />
                <Route path='/groceries' element={<Groceries />} />
                <Route path='/offers' element={<Offers />} />
                <Route path='/wishlist' element={<Wishlist/>} />
                <Route path='/new-deals' element={<NewDeals />} />
                <Route path='/orders' element= {<Orders />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/product/:id/:slug/' element={<Product />} />
              </Routes>
         </main>

         <Footer />
         

      </div>
    </Productsinfo.Provider>
    
  )
}

export default App