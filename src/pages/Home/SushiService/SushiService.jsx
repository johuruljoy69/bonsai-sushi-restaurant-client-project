import img from '../../../assets/home/chef-service.jpg'

const SushiService = () => {
    return (
        <div className='container mx-auto relative mt-20 w-full mb-20'>
            <img className='w-full' src={img} alt="" />
            <div className='absolute flex flex-col justify-center items-center inset-0 md:m-20 md:p-7 px-3 bg-white'>
                <h2 className='text-center pb-3 text-xl font-bold lg:text-4xl'>Bonsai Sushi Restaurant</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, magni? Maxime porro quo minus laudantium doloremque ut vero, consequuntur quae tempore ex repellat ullam quis praesentium, atque autem, eum necessitatibus soluta! Deserunt ducimus magnam, ab omnis ut recusandae atque laborum reprehenderit voluptatum expedita quia aperiam excepturi fugit, totam sunt modi.</p>
            </div>
        </div>
    );
};

export default SushiService;