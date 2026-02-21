import React, { useContext } from 'react'
import Slider from '../../Components/Slider/Slider'
import { Link } from 'react-router-dom'
import { Productsinfo } from '../../App'
import { slugify } from '../../utils/slug'
import './Home.scss'
import CatList from '../../Components/CatList/CatList'

const Home = () => {

    const product = useContext(Productsinfo) || [];
    const categories = [...new Set(product.map(p=>p.category))];

  return (
    <div className='sd_HomePage'>
        <section className='sd_pageHero'>
            <div className='container' style={{paddingTop:'40px'}}>
                <Slider />
            </div>
        </section>
        <section className='sd_pageCategories py-5'>
            <div className='container'>
                <div className='d-flex sd_catItemList'>
                    <div className='sd_homeSectionLabel'>Shop By Categories</div>
                    <div className='d-flex align-items-center sd_catItemListMain'>
                        {categories.map((item,index)=>(
                            <Link key={index} to = {`/category/${slugify(item)}`} className='sd_catItem text-center'>
                                <div className='sd_catThumb'>
                                    <img src={`/images/categories/${item}.jpg`} className='img-fluid' alt='All' />
                                </div>
                                <div className='sd_catTitle'>
                                    {item}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        <CatList />
    </div>
  )
}

export default Home
