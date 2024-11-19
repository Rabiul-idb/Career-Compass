import { Link } from "react-router-dom";




const Login = () => {
    return (
        <div className="border border-gray-500 rounded-2xl p-7 w-5/12 mx-auto mt-12 mb-10 bg-cyan-50 ">
            <h2 className="font-bold text-3xl mb-5 text-center">Sign In to Your Account</h2>
            <div className="mb-5">
                <label className="text-text-clr font-semibold text-base">Email</label><br></br>
                <input placeholder="User email" required type="email" name="username" className="outline outline-gray-400 w-full h-11 rounded-lg px-5 mt-2" />
            </div>
            <div>
                <label className="text-text-clr font-semibold text-base">Password</label><br></br>
                <input placeholder="Password" required type="password" name="password" className="outline outline-gray-400 w-full h-11 rounded-lg px-5 mt-2" />
            </div>
            <button className="btn hover:bg-info bg-info text-white font-bold text-lg px-8 py-2 rounded-3xl border border-white mt-5 block mx-auto">SignIn</button>
            <p className="font-medium text-sm text-center mt-4">Don't have an account? <Link to={'/register'} className="text-info underline">Click Here</Link></p>
        </div>
    );
};

export default Login;