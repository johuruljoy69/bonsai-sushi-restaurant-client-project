

const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className="md:flex justify-center space-x-4 space-y-4 border p-5">
            <img className="w-40 rounded-lg img-hover" src={image} alt="" />
            <div>
                <h2 className="uppercase font-semibold">{name} ---</h2>
                <p>{recipe}</p>
            </div>
            <p className="text-orange-600 font-semibold">${price}</p>
        </div>
    );
};

export default MenuItem;