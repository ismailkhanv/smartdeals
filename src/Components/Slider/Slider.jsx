import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './slider.scss'

const bannerImages = [
  "/images/home/Hero/banner-1.jpg",
  "/images/home/Hero/banner-2.jpg",
  "/images/home/Hero/banner-3.jpg",
  "/images/home/Hero/banner-4.jpg",
];

const Slider = () => {
  return (
    <div className="sd_pageHero" style={{paddingTop: '40px'}}>
        <div className="container">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{ clickable: true }}
                navigation={true}
                slidesPerView={1}
                className="homeHeroSlider"
                >
                {bannerImages.map((img, index) => (
                    <SwiperSlide key={index}>
                    <img
                        src={img}
                        alt={`Banner ${index + 1}`}
                        className="img-fluid w-100"
                    />
                    </SwiperSlide>
                    ))}
                </Swiper>   
        </div>
    </div>
    
  );
};

export default Slider;
