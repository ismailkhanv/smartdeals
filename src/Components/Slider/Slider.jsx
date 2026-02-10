import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './slider.scss'


const bannerImages = [
    {
        thumbnail: '/images/home/Hero/banner-1.jpg',
        bannerTitle: 'Big Savings, Bigger Smiles',
        bannerDesc: "Discover unbeatable deals on products you'll love. Shop more, Spend less -- only for a limited time.",
        buttonLabel: 'Shop now'
    },
    {
        thumbnail: '/images/home/Hero/banner-2.jpg',
        bannerTitle: 'Upgrade Your Everyday',
        bannerDesc: 'From essentials to must-haves, find quality products designed to make life easier and better.',
        buttonLabel: 'Buy now'
    },
    {
        thumbnail: '/images/home/Hero/banner-3.jpg',
        bannerTitle: "Deals You Can't Miss",
        bannerDesc: "Fresh offers added daily. Grab your favorites before they're gone",
        buttonLabel: 'Purchase now'
    },
    {
        thumbnail: '/images/home/Hero/banner-4.jpg',
        bannerTitle: 'Style. Quality. Value.',
        bannerDesc: 'Carefully curated products that bring comfort, style, and value to your doorstep.',
        buttonLabel: 'View more'
    }
];

const Slider = () => {
  return (
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                // autoplay={{
                //     delay: 6000,
                //     disableOnInteraction: false,
                // }}
                // loop={true}
                pagination={{ clickable: true }}
                navigation={true}
                slidesPerView={1}
                className="homeHeroSlider"
                >
                {bannerImages.map((item, index) => (
                    <SwiperSlide key={index} style={{backgroundImage: `url(${item.thumbnail})`}}>
                        
                        <div className="sd_BannerInfo">
                            <h1 className="sd_BannerTitle">{item.bannerTitle}</h1>
                            <p  className="sd_BannerDesc">{item.bannerDesc}</p>
                            <Link to ='/all' className="sd_BannerBtn">{item.buttonLabel}</Link>
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>   
    
  );
};

export default Slider;
