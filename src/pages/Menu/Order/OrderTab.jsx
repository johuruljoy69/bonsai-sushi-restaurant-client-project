import FoodCard from "../../../components/FoodCard";


const OrderTab = ({ items }) => {
    return (
        <div className="container mx-auto grid grid-cols-4 gap-10">
            {
                items.map(item => <FoodCard
                    key={item._id}
                    item={item}
                />)
            }
        </div>
    );
};

export default OrderTab;