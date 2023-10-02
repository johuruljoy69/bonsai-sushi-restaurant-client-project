import { Link } from "react-router-dom";
import Cover from "../../../components/Shared/Cover";
import MenuItem from "../../../components/Shared/MenuItem";


const MenuCategory = ({ items, title, subtitle, img }) => {
    return (
        <div>
            {
                title && <Cover img={img} title={title} subtitle={subtitle} />
            }
            <div className="container mx-auto grid md:grid-cols-2 gap-5 px-3 my-20">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    />)
                }
            </div>
            <div className="text-center my-10">
                <Link to={`/order/${title}`}><button className="tw-btn">Order Your Favourite Foods </button></Link>
            </div>                  
        </div>
    );
};

export default MenuCategory;