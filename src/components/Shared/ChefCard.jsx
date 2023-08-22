
const ChefCard = ({item}) => {
    const {name, image, recipe} = item;
    return (
        <div className="border w-full md:flex flex-col justify-center items-center bg-slate-100">
            <img className="md:h-40 w-full img-hover" src={image} alt="" />
            <div className="mt-5 text-center space-y-3 p-3">
                <h2 className="text-xl font-semibold">{name}</h2>
                <p><small>{recipe}</small></p>
                <button className="tw-btn">Add to Card</button>
            </div>
        </div>
    );
};

export default ChefCard;