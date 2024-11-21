

const SelectedCard = ({item}) => {
    const {id, image, service_name, category, brief_description, pricing, duration, counselor, rating} = item || {}

    return (
        <div>
            
            <div className="border border-info rounded-2xl p-5 flex items-center gap-7 mb-5 relative">
                <div>
                     <img src={image} className="w-28 object-cover rounded-2xl " alt={service_name} />
                </div>
                <div>
                    <h2 className="font-semibold md:text-xl text-lg">{service_name}</h2>
                    <p className="font-semibold text-base text-black">Counselor: <span className="text-gray-500">{counselor}</span></p>
                    <p className="font-semibold text-base text-black">Date: <span className="text-gray-500">{duration}</span></p>
                    <p className="font-semibold text-base text-red-500">{pricing}</p>
                </div>
                <span className="font-semibold text-lg text-red-500 border bg-red-100 rounded-full h-10 w-10 flex justify-center items-center cursor-pointer absolute top-2 right-2">x</span>
            </div>
        </div>
    );
};

export default SelectedCard;