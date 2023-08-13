import Banner from "./Banner/Banner";
import Category from "./Banner/Category/Category";
import PopularMenu from "./PopularMenu/PopularMenu";
import SushiService from "./SushiService/SushiService";


const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <SushiService />
            <PopularMenu />
        </div>
    );
};

export default Home;