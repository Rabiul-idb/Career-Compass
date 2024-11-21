import { Link } from "react-router-dom";
import img from '../assets/Images/abt-banner.jpg';

const ContactBanner = () => {
    return (
        <div className=" relative mb-3">
                <img src={img} className="object-cover object-center h-80 w-full" alt="" />
                <div className="absolute top-20 left-20 ">
                    <h1 className="font-bold text-5xl text-white">Contact Us</h1>
                    <p className="font-black text-white text-base mt-5"><Link to={"/"} className="text-info hover:text-blue-700">Home  </Link> / Contact</p>
                </div>
        </div>
    );
};

export default ContactBanner;