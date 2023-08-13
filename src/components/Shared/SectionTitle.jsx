
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto md:w-2/5 text-center space-y-3 my-7">
            <p className="text-orange-500 font-semibold">---{subHeading}---</p>
            <h2 className="text-4xl font-bold uppercase border-y-2 py-3">{heading}</h2>
        </div>
    );
};

export default SectionTitle;