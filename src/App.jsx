import React, { createContext } from 'react'
import All from './Pages/All/All';
import Men from './Pages/Men/Men';
import Women from './Pages/Women/Women';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import NavBar from './Components/navbar/NavBar';

export const productData = createContext();

let products = [
  { name: 'Ismail', cat_id: 1, location: 'Cbe', thumb_title: 'Men',thumb: 'images/users/men-1.jpg', salary: 49 },
  { name: 'Ammu', cat_id: 2, location: 'Chennai', thumb_title: 'Women',thumb: 'images/users/women-1.jpg',salary: 25 },
  { name: 'Sanjay', cat_id: 1, location: 'Cbe', thumb_title: 'Men',thumb: 'images/users/men-2.jpg',salary: 20 },
  { name: 'Ameesha', cat_id: 2, location: 'Mumbai', thumb_title: 'Women',thumb: 'images/users/women-2.jpg',salary: 70 },
  { name: 'Shiva', cat_id: 1, location: 'Cbe', thumb_title: 'Men',thumb: 'images/users/men-3.jpg',salary: 15 },
  { name: 'Ajay', cat_id: 1, location: 'Chennai', thumb_title: 'Men',thumb: 'images/users/men-4.jpg',salary: 25 },
  { name: 'Ayisha', cat_id: 2, location: 'Cbe', thumb_title: 'Women',thumb: 'images/users/women-3.jpg',salary: 40 },
  { name: 'Kumar', cat_id: 1, location: 'Chennai', thumb_title: 'Men',thumb: 'images/users/men-5.jpg',salary: 55 },
  { name: 'Preethi', cat_id: 2, location: 'Mumbai', thumb_title: 'Women',thumb: 'images/users/women-4.jpg',salary: 33 },
  { name: 'Simran', cat_id: 2, location: 'Cbe', thumb_title: 'Women',thumb: 'images/users/women-5.jpg',salary: 69 },
]


const App = () => {
  
  return (


        <productData.Provider value= {products}>
          <div className='container'>
            <div className='PageHead'>
              <h1 className='PageTitle'>Hire Your Employee now @bestdeals!</h1>
              <p  className='PageDesc'>We have a lot of deals only for You! Don't miss any new offers...</p>
            </div>
            <div className="ShopSection">
              <NavBar />

              <div className="ProductGridWrapper">
                <Routes>
                  <Route path='/all' element={<All />} />
                  <Route path='/men' element={<Men />} />
                  <Route path='/women' element={<Women />} />
                </Routes>
              </div>
            </div>
          </div>
      
        </productData.Provider>

    
  )
}

export default App