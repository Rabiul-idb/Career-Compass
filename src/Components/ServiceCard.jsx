import { useNavigate } from "react-router-dom";


const ServiceCard = ({cardData}) => {

    const {id, image, service_name, category, brief_description, pricing, duration, counselor, rating} = cardData;

    const navigate = useNavigate();
    const CareerDetails = (id)=> {
        navigate(`/service/careerDetails/${id}`)
    }

    return (
        <div className="card bg-base-100  shadow-xl p-5">
  <figure>
    <img src={image} className="w-full h-[250px] object-cover rounded-xl"/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {service_name}
      <div className={`badge badge-info `}>{category}</div>
    </h2>
    <p className="font-bold text-black text-base">Counselor: <span className="font-semibold text-gray-600 text-base">{counselor}</span></p>
    <p className="font-bold text-black text-base">Date: <span className="font-semibold text-gray-600 text-base">{duration}</span></p>
    <div className="card-actions flex justify-between items-center">
      <div className="font-bold text-black text-base flex gap-2">Rating:
        <div className="rating rating-base rating-half">
            <input type="radio" name="rating-10" className="rating-hidden" />
            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500"
                defaultChecked />
            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
        </div>
        <span className="ml-2">({rating})</span></div>
      <button onClick={()=> CareerDetails(id)} className="btn btn-info rounded-3xl py-1 text-base text-white block mt-2 w-full">view Details</button>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;