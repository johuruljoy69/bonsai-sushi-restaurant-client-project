import { useEffect, useState } from "react";
import SectionTitle from "../../../components/Shared/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    return (
        <div className="pt-20 container mx-auto">
            <section>
                <SectionTitle subHeading={"What Our Client Say"} heading={"Testimonials"} />
            </section>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="flex flex-col items-center  m-20">
                            <Rating style={{ maxWidth: 250 }} value={review.rating} readOnly />
                            <p className="py-5">{review.details}</p>
                            <h2 className="text-2xl font-bold text-orange-500 mt-5">{review.name}</h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonial;