import FoodCard from "../../../components/FoodCard";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './OrderTab.css'

const OrderTab = ({ items }) => {
  // Calculate the number of slides needed based on 6 cards per slide
  const numSlides = Math.ceil(items.length / 6);

  // Configure pagination settings
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
    return (
        <>
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper"
          slidesPerView={1} // Show 1 slide at a time
        >
          {Array.from({ length: numSlides }).map((_, index) => (
            <SwiperSlide key={index}>
              <div className="container mx-auto grid grid-cols-4 gap-10">
                {items.slice(index * 6, (index + 1) * 6).map((item) => (
                  <FoodCard key={item._id} item={item} />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
};

export default OrderTab;