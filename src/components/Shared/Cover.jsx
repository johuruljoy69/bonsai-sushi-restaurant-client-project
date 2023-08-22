import { Parallax } from 'react-parallax';

const Cover = ({ img, title, subtitle }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the Menu"
            strength={-200}
        >
            <div className="hero h-[700px]">
                <div className="hero-overlay"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="bg-slate-800 opacity-60 px-32 py-16">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5 text-xl font-semibold">{subtitle}</p>
                    </div>
                </div>
            </div>
        </Parallax>


    );
};

export default Cover;