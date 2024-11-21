import { useContext } from "react";
import { AuthContex } from "../ContextProvider/ContextProvider";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoMdSend } from "react-icons/io";
import img from '../assets/Images/abt-banner.jpg';
import { Helmet } from "react-helmet-async";


const CareerDetails = () => {

    const {allData, selectedItems, setSelectedItems , user} = useContext(AuthContex);
    //console.log(allData)

    const navigate = useNavigate();
    const param = useParams();
    const serviceId = parseInt(param ?.id);
    //console.log(serviceId);

    const eachCardData = [...allData].find(i => i.id === serviceId)
    
    const {id, image, service_name, category, brief_description, pricing, duration, counselor, rating} = eachCardData || {} ;


   
    const bookNowService = (id) => {
        
        const items = allData.find((i) => i.id === id);
        setSelectedItems([...selectedItems, items]);
        alert('booked item')
    };
     //console.log(selectedItems);


    const showInputField = ()=>{
        const inputField = document.getElementById('feedback');
        inputField.style.display = 'block';
    }

    const addFeedback = () => {
        const feedbackContainer = document.getElementById('feedbackContainer');
        const feedbackValue = document.getElementById('feedbackValue').value;
    
        const div = document.createElement('div');
        div.innerHTML = `
            <div>
                <img src=${user?.photoURL} class="w-11 rounded-full" alt="User" />
            </div>
            <div>
                <p class="font-semibold text-base text-gray-600">${feedbackValue}</p>
                <p class="text-sm text-gray-600">${new Date().toLocaleString()}</p>
            </div>
        `;
        div.classList.add('flex', 'gap-3', 'border', 'rounded-lg', 'p-3', 'mb-2');
        feedbackContainer.appendChild(div);
    };

    return (
        <div className="">
           
           <Helmet>
           <link rel="icon" type="image/svg+xml" href="../assets/Images/icon_5.png" />
            <title>Career Details || Career Compass</title>

            <meta name="description" content="this is a Career details page of Career Compass" />
            </Helmet>

           <div className=" relative mb-3">
                <img src={img} className="object-cover object-center h-80 w-full" alt="" />
                <div className="absolute top-20 left-20 ">
                    <h1 className="font-bold text-5xl text-white">Career Details</h1>
                    <p className="font-black text-white text-base mt-5"><Link to={"/"} className="text-info hover:text-blue-700">Home  </Link> / Career Details</p>
                </div>
            </div>

            <div className="w-11/12 mx-auto grid grid-cols-12 gap-6 border rounded-2xl p-5">
                <div className="col-span-5">
                    <img src={image} className="w-full object-cover rounded-2xl" alt="image" />
                </div>
                <div className="col-span-7">
                    <h2 className="font-bold text-3xl mb-3">{service_name}</h2>
                    <p className="font-bold text-lg text-gray-600 mb-3">{brief_description}</p>
                    <p className="font-bold text-lg text-black mb-2">Category: <span className=" ml-1 px-4 py-1 bg-info rounded-2xl border border-white text-white">{category}</span></p>
                    <p className="font-bold text-lg text-black mb-2">Date: <span className="text-gray-600 ml-1">{duration}</span></p>
                    <p className="font-bold text-lg text-black mb-2">Counselor: <span className="text-gray-600 ml-1">{counselor}</span></p>
                    <p className="font-bold text-lg text-black mb-2">Price: <span className=" ml-1 text-red-500">{pricing}</span></p>
                    <div className="font-bold text-lg text-black flex gap-2 items-center">Rating: 
                        <div className="rating rating-base rating-half">
                            <input type="radio" name="rating-10" className="rating-hidden" />
                            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" defaultChecked />
                        </div>
                        <span className=" ml-2 text-green-600">({rating})</span>
                    </div>
                    <div className="mt-6 flex gap-4 items-center">
                    <button onClick={()=> bookNowService(id)} className="btn btn-success btn-sm rounded-3xl text-white">Book Now</button>
                    <button onClick={showInputField} className="btn btn-info rounded-3xl btn-sm">Give Feedback</button>
                    <button onClick={()=> navigate(-1)} className="btn btn-info rounded-3xl btn-sm">Go back</button>
                    </div>

                    <div id="feedback" className="hidden">
                        <label className="relative ">
                            <input id="feedbackValue" type="text"placeholder="Add your feedback"
                            className="input input-bordered input-primary w-full max-w-sm pr-12 mt-4" />
                            <button onClick={addFeedback} className="absolute right-2 -top-1 p-1 text-lg text-indigo-600"><IoMdSend></IoMdSend></button>
                        </label>
                    </div>
                </div>
            </div>
            <div id="feedbackContainer" className="w-10/12 mx-auto p-6 border rounded-xl my-5">
                <h3 className="text-center font-semibold text-2xl mb-5">Clients Feedbacks</h3>
            </div>
        </div>
    );
};

export default CareerDetails;