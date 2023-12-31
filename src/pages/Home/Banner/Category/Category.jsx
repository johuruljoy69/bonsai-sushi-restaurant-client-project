import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../../../assets/home/slide1.jpg'
import slide2 from '../../../../assets/home/slide2.jpg'
import slide3 from '../../../../assets/home/slide3.jpg'
import slide4 from '../../../../assets/home/slide4.jpg'
import slide5 from '../../../../assets/home/slide5.jpg'
import SectionTitle from '../../../../components/Shared/SectionTitle';
import { Link } from 'react-router-dom';


const Category = () => {
    return (
        <div className='mt-20'>
            <SectionTitle subHeading={"From 10:00am to 11:00pm"} heading={"Order Online"}/>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><Link><img className='img-hover' src={slide1} alt="" /></Link>
                <h2 className='swiper-title'>Salads</h2>
                </SwiperSlide>
                <SwiperSlide><Link><img className='img-hover' src={slide2} alt="" /></Link>
                <h2 className='swiper-title'>Pizzas</h2>
                </SwiperSlide>
                <SwiperSlide><Link><img className='img-hover' src={slide3} alt="" /></Link>
                <h2 className='swiper-title'>Soups</h2>
                </SwiperSlide>
                <SwiperSlide><Link><img className='img-hover' src={slide4} alt="" /></Link>
                <h2 className='swiper-title'>Desserts</h2>
                </SwiperSlide>
                <SwiperSlide><Link><img className='img-hover' src={slide5} alt="" /></Link>
                <h2 className='swiper-title'>Salads</h2>
                </SwiperSlide>                
                <SwiperSlide><Link><img className='img-hover' src={slide1} alt="" /></Link>
                <h2 className='swiper-title'>Salads</h2>
                </SwiperSlide>
                <SwiperSlide><Link><img className='img-hover' src={slide2} alt="" /></Link>
                <h2 className='swiper-title'>Pizzas</h2>
                </SwiperSlide>
                <SwiperSlide><Link><img className='img-hover' src={slide3} alt="" /></Link>
                <h2 className='swiper-title'>Soups</h2>
                </SwiperSlide>
                <SwiperSlide><Link><img className='img-hover' src={slide4} alt="" /></Link>
                <h2 className='swiper-title'>Desserts</h2>
                </SwiperSlide>
                <SwiperSlide><Link><img className='img-hover' src={slide5} alt="" /></Link>
                <h2 className='swiper-title'>Salads</h2>
                </SwiperSlide>  
               
            </Swiper>
        </div>
    );
};

export default Category;