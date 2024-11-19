import support from '../assets/Images/support.png';
import text from '../assets/Images/text.png';

const Contact = () => {
    return (
        <div className='w-11/12 mx-auto mb-8'>
            <div className="text-center mt-5">
                <span className="text-lg font-semibold uppercase text-info mb-10">Contact Us</span>
                <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-6 leading-tight">We Have a Professional <br></br>Support Team</h2>
            </div>
            <div className="flex gap-7  justify-center items-center  mt-10">
                <div className='border-2 shadow-xl p-12 rounded-xl'>
                    <div className="inline-flex gap-7">
                        <div><img src={support} alt="" /></div>
                        <div>
                            <h2 className="font-medium text-3xl ">Customer Support</h2>
                            <p className="text-slate-400 my-4">
                                We are here to help you with any questions or concerns you may have.
                            </p>
                            <button className="btn btn-info px-10 text-lg">Get Token</button>
                        </div>
                    </div>
                </div>
                <div className='border-2 shadow-xl p-12 rounded-xl'>
                    <div className="inline-flex gap-7">
                        <div><img src={text} alt="" /></div>
                        <div>
                            <h2 className="font-medium text-3xl ">Have any Questions?</h2>
                            <p className="text-slate-400 my-4">
                                We are here to help you with any questions or concerns you may have.
                            </p>
                            <button className="btn btn-info px-10 text-lg">Contact us</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;