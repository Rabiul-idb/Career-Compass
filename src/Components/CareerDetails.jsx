import { useContext } from "react";
import AbtBanner from "./AbtBanner";
import { AuthContex } from "../ContextProvider/ContextProvider";
import { useParams } from "react-router-dom";
import { IoMdSend } from "react-icons/io";


const CareerDetails = () => {

    const {allData} = useContext(AuthContex);
    //console.log(allData)

    const param = useParams();
    const serviceId = parseInt(param ?.id);
    //console.log(serviceId);

    const eachCardData = [...allData].find(i => i.id === serviceId)
    
    const { image, service_name, category, brief_description, pricing, duration, counselor, rating} = eachCardData || {} ;

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
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" class="w-11 rounded-full" alt="User" />
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
        <div>
            <AbtBanner></AbtBanner>
            <div className="grid grid-cols-12 gap-6 border rounded-2xl p-5">
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
                    <button onClick={showInputField} className="btn btn-info rounded-3xl btn-sm mt-6 block">Give Feedback</button>
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