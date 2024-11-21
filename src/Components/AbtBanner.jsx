import { Link } from "react-router-dom";
import img from '../assets/Images/abt-banner.jpg';


const AbtBanner = () => {
    return (

        <div className=" relative mb-3">
                <img src={img} className="object-cover object-center h-80 w-full" alt="" />
                <div className="absolute top-20 left-20 ">
                    <h1 className="font-bold md:text-3xl text-2xl lg:text-5xl text-white">About Us</h1>
                    <p className="font-black text-white text-base mt-5"><Link to={"/"} className="text-info hover:text-blue-700">Home  </Link> / About</p>
                </div>
        </div>


        // <div className="bg-abt-banner object-cover object-center bg-no-repeat bg-center bg-blend-overlay bg-slate-600 h-96 pt-20 px-20 ">
        //     <h1 className="font-bold text-5xl text-white">About Us</h1>
        //     <p className="font-black text-white text-base mt-5"><Link>Home </Link>  About</p>
        // </div>
    );
};

export default AbtBanner;