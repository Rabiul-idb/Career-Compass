import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="border border-gray-500 rounded-2xl p-7 w-5/12 mx-auto mt-12 mb-10 bg-cyan-50">
            <h2 className="font-bold text-3xl text-center">Sign Up for Your Account</h2>
            <hr className="my-3"/>
            <div className="mb-5">
                <label className="text-text-clr font-semibold text-base">UserName</label><br></br>
                <input placeholder="User name" required type="text" name="username" className="outline outline-gray-400 w-full h-11 rounded-lg px-5 mt-2" />
            </div>
            <div className="mb-5">
                <label className="text-text-clr font-semibold text-base">Password</label><br></br>
                <input placeholder="Password" required type="password" name="password" className="outline outline-gray-400 w-full h-11 rounded-lg px-5 mt-2" />
            </div>
            <div className="mb-5">
                <label className="text-text-clr font-semibold text-base">Email</label><br></br>
                <input placeholder="Email address" required type="email" name="email" className="outline outline-gray-400 w-full h-11 rounded-lg px-5 mt-2" />
            </div>
            <div className="mb-5">
                <label className="text-text-clr font-semibold text-base">User Photo</label><br></br>
                <input placeholder="Photo url" required type="text" name="photo" className="outline outline-gray-400 w-full h-11 rounded-lg px-5 mt-2" />
            </div>
            <Link to={'/login'} className="btn hover:bg-info bg-info text-white font-bold text-lg px-8 py-2 rounded-3xl border border-white block w-fit mx-auto">Register</Link>

            <p className="font-medium text-sm text-center mt-4">know our policy and <Link className="text-info underline">Terms & Conditions</Link></p>
            
        </div>
    );
};

export default Register;