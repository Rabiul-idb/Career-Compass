import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContex } from "../../ContextProvider/ContextProvider";
import { FaRegEye ,FaEyeSlash } from "react-icons/fa";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import { FaGoogle } from "react-icons/fa";



const Login = () => {
    const provider = new GoogleAuthProvider();

    const {userLogin, setUser, forgotPassword, auth} = useContext(AuthContex);

    const [error, setError] = useState({})
    const location = useLocation();
    const navigate = useNavigate();
    const emailRef = useRef();
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e)=>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
       // console.log(email, password)

        userLogin(email, password)
        .then((respons) => {
            const user = respons.user;
            setUser(user);
            alert("successfully login");
            navigate(location?.state ? location.state : "/")
            e.target.reset();
           // console.log(user);
          })
          .catch((error) => {
            setError({...error, login: "Password or User Email is not valid"})
        });

    }
    // forgot password
    const handleForgotPassword = ()=>{
        const email = emailRef.current.value;
        if(!email){
            setError({...error, forgot: "Please enter your email valid address"})
        }
        forgotPassword(email)
        .then(() => {
          alert('a email send to your mail')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }

    // login with google
    
    const loginWithGoogle = ()=>{
        signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    setUser(user);
    navigate(location?.state ? location.state : "/")
    
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
    }


    return (
        <div className="border border-gray-500 rounded-2xl p-7 lg:w-5/12 md:w-8/12 w-10/12 mx-auto mt-12 mb-10 bg-cyan-50 ">

        <Helmet>
          <title>Login || Career Compass</title>
        </Helmet>

            <h2 className="font-bold lg:text-3xl md:text-2xl text-xl mb-5 text-center">User Login</h2>
            <div className="text-center">
                <button onClick={loginWithGoogle} className="btn btn-info text-white flex justify-center items-center lg:text-lg  mx-auto mt-5">
                    <FaGoogle></FaGoogle> login with google</button><br></br>
                <div className="divider divider-info">OR</div>
            </div>
            <form onSubmit={handleLogin}>
                <div className="mb-5">
                    <label className="text-text-clr font-semibold text-base">Email</label><br></br>
                    <input placeholder="User email" required type="email" ref = {emailRef} name="email" className="outline outline-gray-400 w-full h-11 rounded-lg px-5 mt-2" />
                    <label>
                        {
                            error.forgot && <p className="text-red-500 text-sm mt-1">{error.forgot}</p>
                        }
                    </label>
                </div>
                <div>
                    <label className="text-text-clr font-semibold text-base relative">Password<br></br>
                        <input placeholder="Password" required type={!showPassword ? "password" : "text" } name="password" className="outline outline-gray-400 w-full h-11 rounded-lg px-5 mt-2" />
                        <a onClick={() => setShowPassword(!showPassword)} className="btn btn-sm absolute right-2 top-9 text-base">{!showPassword ? <FaEyeSlash/> : <FaRegEye/>}</a> 
                    </label>
                </div>
                <label>
                    {
                        error.login && <p className="text-red-500 text-sm mt-1">{error.login}</p>
                    }
                </label>
                <label className="label">
                    <a onClick={handleForgotPassword} className="label-text-alt link link-hover text-sm">Forgot password?</a>
                    
                </label>
                <button className="btn hover:bg-info bg-info text-white font-bold text-lg px-8 py-2 rounded-3xl border border-white mt-5 block mx-auto">Login</button>
            </form>
            <p className="font-medium text-sm text-center mt-4">Don't have an account? <Link to={'/register'} className="text-info underline">Click Here</Link></p>
        </div>
    );
};

export default Login;