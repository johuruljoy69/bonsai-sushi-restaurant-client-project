import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Category from "./Banner/Category/Category";
import CallService from "./CallService";
import ChefRecommend from "./ChefRecommend/ChefRecommend";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import SushiService from "./SushiService/SushiService";
import Testimonial from "./Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bonsai Sushi | Home</title>
            </Helmet>
            <Banner />
            <div className="container mx-auto">
            <Category />
            <SushiService />
            <PopularMenu />
            <CallService />
            <ChefRecommend />
            </div>
            <Featured />
            <Testimonial />
        </div>
    );
};

export default Home;