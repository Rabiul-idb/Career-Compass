import { Link } from 'react-router-dom';
import ctaImg from '../assets/Images/cta_image.png';

const Cta = () => {
    return (
        <div className='flex justify-between items-center px-10 rounded-xl bg-info w-10/12 mx-auto relative'>
            <div>
                <span className="text-lg font-semibold mb-3">Our Professionals</span>
                <h2 className="font-semibold text-4xl text-white mt-3 mb-5 leading-tight">Do You Want To Developed Your<br></br> Career For Better?</h2>
                <Link to={'/contact'} className="btn btn-white text-lg px-10">Contact Us</Link>
            </div>
            <div>
                <img src={ctaImg} alt="" />
            </div>
        </div>
    );
};

export default Cta;