import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContex } from "../../ContextProvider/ContextProvider";


const Register = () => {

    const {CreateNewUser, setUser, updateUserProfile} = useContext(AuthContex);
   
    const [error, setError] = useState({});
    const navigate = useNavigate();

    

    const handleSubmit = (e)=>{
        e.preventDefault();

        const name = e.target.username.value;
        if(name.length < 5){
            setError({...error, name: 'Name must be at least 5 characters'});
            return;
        }
        const email = e.target.email.value;

        const password = e.target.password.value;
        const validatePassword = (password)=>{
            const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
            return regex.test(password);
        }
        if(!validatePassword(password)){
            setError({...error, password: 'Password must be at least 8 characters and contain at least 1 uppercase, 1 lowercase, 1 number and 1 special character'})
        }

        const photo = e.target.photo.value;

        console.log(name, email, password, photo)

        CreateNewUser(email, password)
        .then((result) =>{
            const user = result.user;
            setUser(user);
            updateUserProfile({displayName: name, photoURL: photo})
            .then(() =>{
                navigate('/')
            })
            .catch(() =>{
                setError({...error, photo: 'Failed to update profile photo'})
            })
            console.log(user);
            alert("Registerd")
            
            e.target.reset();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
        

    }

    return (
        <div className="border border-gray-500 rounded-2xl p-7 w-5/12 mx-auto mt-12 mb-10 bg-cyan-50">
            <h2 className="font-bold text-3xl text-center">User Registration</h2>
            <hr className="my-3"/>
            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label className="text-text-clr font-semibold text-base">UserName</label><br></br>
                    <input placeholder="User name" required type="text" name="username" className="outline outline-gray-400 w-full h-11 rounded-lg px-5 mt-2" />
                    <label>
                        {
                            error.name ? (<p className="text-red-500 text-sm mt-1">{error.name}</p>) : " "
                        }
                    </label>
                </div>
                <div className="mb-5">
                    <label className="text-text-clr font-semibold text-base">Password</label><br></br>
                    <input placeholder="Password" required type="password" name="password" className="outline outline-gray-400 w-full h-11 rounded-lg px-5 mt-2" />
                    <label>
                        {
                            error.password ? (<p className="text-red-500 text-sm mt-1">{error.password}</p>) : " "
                        }
                    </label>
                </div>
                <div className="mb-5">
                    <label className="text-text-clr font-semibold text-base">Email</label><br></br>
                    <input placeholder="Email address" required type="email" name="email" className="outline outline-gray-400 w-full h-11 rounded-lg px-5 mt-2" />
                </div>
                <div className="mb-5">
                    <label className="text-text-clr font-semibold text-base">User Photo</label><br></br>
                    <input placeholder="Photo url" required type="text" name="photo" className="outline outline-gray-400 w-full h-11 rounded-lg px-5 mt-2" />
                    
                </div>
                <button className="btn hover:bg-info bg-info text-white font-bold text-lg px-8 py-2 rounded-3xl border border-white block w-fit mx-auto">Register</button>
            </form>

            <p className="font-medium text-sm text-center mt-4">Already have an account?  <Link to={'/login'} className="text-info underline">Login here</Link></p>
            
        </div>
    );
};

export default Register;