import SectionTitle from "../../../components/Shared/SectionTitle";
import featureImg from '../.../../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-cover bg-fixed mt-20">
            <div className="bg-slate-400 bg-opacity-60 py-5">
                <SectionTitle subHeading={"Check it out"} heading={"Our Features"} />
                <div className="container mx-auto md:flex justify-center items-center gap-7 pt-5 pb-14 px-14">
                    <div>
                        <img src={featureImg} alt="" />
                    </div>
                    <div className="text-white font-semibold space-y-3">
                        <p>Aug 20, 2023</p>
                        <p>Where can i get some?</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam eos illum laboriosam consectetur. Unde quibusdam, corporis aliquam esse dolorem aliquid praesentium vitae optio, eius at cupiditate aut, nostrum minus saepe.</p>
                        <button className="tw-btn">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;