import { useEffect, useState } from "react";
import SectionTitle from "../../../components/Shared/SectionTitle";
import ChefCard from "../../../components/Shared/ChefCard";


const ChefRecommend = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])
    return (
        <div className="mt-20">
            <SectionTitle subHeading={"Should Try"} heading={"Chef Recommends"} />
            <div className="grid md:grid-cols-4 gap-10 px-3">
                {
                    menu.slice(0, 4).map(item => <ChefCard 
                        key={item._id}
                        item={item}
                        /> )
                }
            </div>
        </div>
    );
};

export default ChefRecommend;