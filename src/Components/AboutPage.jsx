import about2 from '../assets/Images/about2.jpg';
import icon from '../assets/Images/icon_5.png';

const AboutPage = () => {
    return (
        <div className="w-11/12 mx-auto grid grid-cols-2 items-center gap-10 my-24">
            <div>
                <img src={about2} className="rounded-xl w-full object-cover" alt="" />
            </div>
            <div>
                <span className="text-lg font-semibold uppercase text-info mb-10">About Us</span>
                <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-6 leading-tight">Upgrade Your Skill and <br></br>Build Your Career</h2>
                <p className="text-base font-semibold text-slate-700 ">
                    We are a team of passionate individuals who are dedicated to helping you achieve your dream career. With years of experience in the industry, we have the knowledge and expertise to guide you every step of the
                    way.
                </p>
               <div className='grid grid-cols-2 gap-7 mt-10'>
                    <div className='flex gap-6'>
                        <div>
                            <img src={icon} className="object-cover"/>
                        </div>
                        <div>
                            <h3 className='font-bold text-2xl text-black mb-4'>Master Coach</h3>
                            <p className='font-medium text-base text-gray-500'>
                                We have a team of experienced coaches who have a proven track record. 
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-6'>
                        <div>
                            <img src={icon} className="object-cover"/>
                        </div>
                        <div>
                            <h3 className='font-bold text-2xl text-black mb-4'>Counseling Certificate</h3>
                            <p className='font-medium text-base text-gray-500'>
                                We have a team of experienced coaches who have a proven track record. 
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-6'>
                        <div>
                            <img src={icon} className="object-cover"/>
                        </div>
                        <div>
                            <h3 className='font-bold text-2xl text-black mb-4'>Career Development</h3>
                            <p className='font-medium text-base text-gray-500'>
                                We have a team of experienced coaches who have a proven track record. 
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-6'>
                        <div>
                            <img src={icon} className="object-cover"/>
                        </div>
                        <div>
                            <h3 className='font-bold text-2xl text-black mb-4'>Free Seminar</h3>
                            <p className='font-medium text-base text-gray-500'>
                                We have a team of experienced coaches who have a proven track record.
                            </p>
                        </div>
                    </div>
               </div>
                
            </div>
        </div>
    );
};

export default AboutPage;