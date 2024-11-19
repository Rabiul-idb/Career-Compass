import { Link } from "react-router-dom";


const AbtBanner = () => {
    return (
        <div className="bg-abt-banner object-cover object-center bg-no-repeat bg-center bg-blend-overlay bg-slate-600 h-96 pt-20 px-20 ">
            <h1 className="font-bold text-5xl text-white">About Us</h1>
            <p className="font-black text-white text-base mt-5"><Link>Home </Link>  About</p>
        </div>
    );
};

export default AbtBanner;