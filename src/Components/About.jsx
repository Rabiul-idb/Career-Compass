import { Link } from "react-router-dom";
import abtImg from "../assets/Images/about.jpg"

const About = () => {
    return (
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
                <img src={abtImg} className="rounded-xl w-full object-cover" alt="" />
            </div>
            <div>
                <span className="text-lg font-semibold uppercase text-info mb-5">who we are</span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 leading-tight">We Care about your<br></br>Dream Career</h2>
                <p className="text-base font-semibold text-slate-700 ">
                    We are a team of passionate individuals who are dedicated to helping you achieve your dream career. With years of experience in the industry, we have the knowledge and expertise to guide you every step of the
                    way.
                </p>
                <ul className="mt-5 space-y-3">
                    <li className="text-base font-semibold text-slate-600">
                        <span className="border-2 mr-2 rounded-full p-2 bg-sky-100 inline-flex items-center justify-center">
                            <span className="w-3 h-3 rounded-full bg-info"></span>
                        </span>
                        One to One Counseling
                    </li>
                    <li className="text-base font-semibold text-slate-600">
                        <span className="border-2 mr-2 rounded-full p-2 bg-sky-100 inline-flex items-center justify-center">
                            <span className="w-3 h-3 rounded-full bg-info"></span>
                        </span>
                        Career Development
                    </li>
                    <li className="text-base font-semibold text-slate-600">
                        <span className="border-2 mr-2 rounded-full p-2 bg-sky-100 inline-flex items-center justify-center">
                            <span className="w-3 h-3 rounded-full bg-info"></span>
                        </span>
                        Group Counseling
                    </li>
                    <li className="text-base font-semibold text-slate-600">
                        <span className="border-2 mr-2 rounded-full p-2 bg-sky-100 inline-flex items-center justify-center">
                            <span className="w-3 h-3 rounded-full bg-info"></span>
                        </span>
                        Career Transition
                    </li>
                </ul>
                <Link to={'/about'} className="btn btn-info mt-6 px-10">Learn More</Link>
            </div>
        </div>
    );
};

export default About;