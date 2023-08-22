import { Link } from "react-router-dom";

const CallService = () => {
    return (
        <div className="relative bg-gray-900 mt-20 h-[200px]">
            <div className="absolute flex flex-col justify-center items-center inset-0">
                <Link><h2 className="md:text-3xl text-xl text-white hover:text-orange-500 font-semibold uppercase">Call Us :  +880 1710 10 01 10</h2></Link>
            </div>
        </div>
    );
};

export default CallService;