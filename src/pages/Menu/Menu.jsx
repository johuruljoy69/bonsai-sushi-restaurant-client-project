import { Helmet } from "react-helmet-async";
import Cover from "../../components/Shared/Cover";
import menuImg from '../../assets/menu/banner3.jpg';
import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import saladImg from '../../assets/menu/salad-bg.jpg';
import soupImg from '../../assets/menu/soup-bg.jpg';
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/Shared/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";



const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div className="">
            <Helmet>
                <title>Bonsai Sushi | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"Our Menu"} subtitle={"Would you like to try a dish?"} />
            {/* main cover */}
            <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"} />
            {/* offered menu items */}
            <MenuCategory items={offered} />
            {/* dessert menu items */}
            <MenuCategory items={dessert} title="Dessert" subtitle="Lorem Ipsum has been the industry" img={dessertImg} />
            <MenuCategory items={pizza} title="Pizza" subtitle="Lorem Ipsum has been the industry" img={pizzaImg} />
            <MenuCategory items={salad} title="salad" subtitle="Lorem Ipsum has been the industry" img={saladImg} />
            <MenuCategory items={soup} title="soup" subtitle="Lorem Ipsum has been the industry" img={soupImg} />


        </div>
    );
};

export default Menu;