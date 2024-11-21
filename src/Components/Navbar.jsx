import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContex } from "../ContextProvider/ContextProvider";



const Navbar = () => {
   // console.log(import.meta.env.VITE_API_KEY);

    const {user, logOut} = useContext(AuthContex);
   // console.log(user)



    return (
        <div className="navbar  flex justify-between items-center w-11/12 mx-auto">
            <div className="">
                <a className="btn btn-ghost text-2xl font-semibold text-white">Career Compass</a>
            </div>
            <div>
                <ul className="flex gap-6">
                    <li><NavLink to={"/"} className="text-base font-semibold">Home</NavLink></li>
                    <li><NavLink to={"/about"} className="text-base font-semibold">About</NavLink></li>
                    {
                        user?.email && (<li><NavLink to={"/dashboard"} className="text-base font-semibold">Dashboard</NavLink></li>) 
                    }
                    <li><NavLink to={"/contact"} className="text-base font-semibold">Contact</NavLink></li>

                    
                </ul>
            </div>
            <div className="">
            
                <div tabIndex={0} role="button" className=" font-semibold text-white text-lg mr-2">
                {
                    user && user?.email ? user?.displayName : ""
                }
                </div>
            
                {
                    user && user?.email ? (
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-11 rounded-full">
                                <img
                                alt="user" className="w-11 h-11 rounded-full"
                                src={user?.photoURL} />
                            </div>
                            </div>
                            <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow">
                            <li>
                                <Link to={"/updateInfo"} className="justify-between">
                                update profile
                                </Link>
                            </li>
                            <li><a>{user?.email}</a></li>
                            <li onClick={logOut}><a>Logout</a></li>
                            </ul>
                        </div>
                    ) : (
                        <Link to={'/login'} className="btn">Login</Link>
                    )
                }


                
            </div>
      </div>
    );
};

export default Navbar;