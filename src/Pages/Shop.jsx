
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import './category.css'
import All from './All/All'
import Men from './Men/Men'
import Women from './Women/Women'

const Shop = () => {

  const location = useLocation();
  const activePath = location.pathname;

  return (
    <div className="ShopSection">
      <div className="MenuList">
        <Link to='/all' className={activePath === '/all' ? "MenuListItem active" : "MenuListItem"}>
          <span className='CatIcon'>
            <img src='images/category/all.png' className='img-fluid' />
          </span>
          <span className='CatLabel'>All</span>
        </Link>
        <Link to='/men' className={activePath === '/men' ? "MenuListItem active" : "MenuListItem"}>
          <span className='CatIcon'>
            <img src='images/category/men.png' className='img-fluid' />
          </span>
          <span className='CatLabel'>Men</span>
        </Link>
        <Link to='/women' className={activePath === '/women' ? "MenuListItem active" : "MenuListItem"}>
          <span className='CatIcon'>
            <img src='images/category/women.png' className='img-fluid' />
          </span>
          <span className='CatLabel'>Women</span>
        </Link>
      </div>

      <div className="ProductGridWrapper">
        <Routes>
          <Route path='/all' element={<All />} />
          <Route path='/men' element={<Men />} />
          <Route path='/women' element={<Women />} />
        </Routes>
      </div>
    </div>
  )
}

export default Shop
