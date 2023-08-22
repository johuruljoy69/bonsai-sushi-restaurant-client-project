
import SectionTitle from "../../../components/Shared/SectionTitle";
import MenuItem from "../../../components/Shared/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

    return (
        <section className="pt-10 pb-10">
            <SectionTitle subHeading={"Popular Items"} heading={"From Our Menu"} />
            <div className="grid md:grid-cols-2 gap-5 px-3">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    />)
                }
            </div>
            <div className="text-center mt-10">
                <button className="tw-btn">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;