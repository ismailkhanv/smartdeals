import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './slider.scss'
import { Link } from "react-router-dom";

const bannerImages = [
    {
        thumbnail: '/images/home/Hero/banner-1.jpg',
        bannerTitle: 'Shop Your Product now!',
        bannerDesc: 'lorem ipsum dolor sit emit',
        buttonLabel: 'Shop now'
    },
    {
        thumbnail: '/images/home/Hero/banner-2.jpg',
        bannerTitle: 'Shop Your Product now!',
        bannerDesc: 'lorem ipsum dolor sit emit',
        buttonLabel: 'Shop now'
    },
    {
        thumbnail: '/images/home/Hero/banner-3.jpg',
        bannerTitle: 'Shop Your Product now!',
        bannerDesc: 'lorem ipsum dolor sit emit',
        buttonLabel: 'Shop now'
    },
    {
        thumbnail: '/images/home/Hero/banner-4.jpg',
        bannerTitle: 'Shop Your Product now!',
        bannerDesc: 'lorem ipsum dolor sit emit',
        buttonLabel: 'Shop now'
    }
];

const Slider = () => {
  return (
    <div className="sd_pageHero" style={{paddingTop: '40px'}}>
        <div className="container">
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
                    <SwiperSlide key={index}>
                        <img
                            src={item.thumbnail}
                            alt={`Banner ${index + 1}`}
                            className="img-fluid w-100"
                        />
                        <div className="sd_BannerInfo">
                            <h1 className="sd_BannerTitle">{item.bannerTitle}</h1>
                            <p  className="sd_BannerDesc">{item.bannerDesc}</p>
                            <Link to ='/all' className="sd_BannerBtn">{item.buttonLabel}</Link>
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>   
        </div>
    </div>
    
  );
};

export default Slider;
