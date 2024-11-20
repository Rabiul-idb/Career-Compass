import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContex } from "../../ContextProvider/ContextProvider";




const Login = () => {

    const {userLogin, setUser} = useContext(AuthContex);

    const [error, setError] = useState({})
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e)=>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        userLogin(email, password)
        .then((respons) => {
            const user = respons.user;
            setUser(user);
            alert("successfully login");
            navigate(location?.state ? location.state : "/")
            e.target.reset();
            console.log(user);
          })
          .catch((error) => {
            setError({...error, login:error.code})
        });

        

    }


    return (
        <div className="border border-gray-500 rounded-2xl p-7 w-5/12 mx-auto mt-12 mb-10 bg-cyan-50 ">
            <h2 className="font-bold text-3xl mb-5 text-center">User Login</h2>
            <form onSubmit={handleLogin}>
                <div className="mb-5">
                    <label className="text-text-clr font-semibold text-base">Email</label><br></br>
                    <input placeholder="User email" required type="email" name="email" className="outline outline-gray-400 w-full h-11 rounded-lg px-5 mt-2" />
                </div>
                <div>
                    <label className="text-text-clr font-semibold text-base">Password</label><br></br>
                    <input placeholder="Password" required type="password" name="password" className="outline outline-gray-400 w-full h-11 rounded-lg px-5 mt-2" />
                </div>
                <label>
                    {
                        error.login && <p className="text-red-500 text-sm mt-1">{error.login}</p>
                    }
                </label>
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover text-sm">Forgot password?</a>
                </label>
                <button className="btn hover:bg-info bg-info text-white font-bold text-lg px-8 py-2 rounded-3xl border border-white mt-5 block mx-auto">Login</button>
            </form>
            <p className="font-medium text-sm text-center mt-4">Don't have an account? <Link to={'/register'} className="text-info underline">Click Here</Link></p>
        </div>
    );
};

export default Login;