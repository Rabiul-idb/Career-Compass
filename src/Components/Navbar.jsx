import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContex } from "../ContextProvider/ContextProvider";
import logo from '../assets/Images/icon_5.png';
import { FaBars } from "react-icons/fa6";



const Navbar = () => {
   // console.log(import.meta.env.VITE_API_KEY);

    const {user, logOut} = useContext(AuthContex);
   // console.log(user)

   const [show, setShow] = useState(false);


    return (
        <div className="navbar  flex justify-between items-center w-11/12 mx-auto">
            <div className="">
                <img src={logo} alt="" />
                <Link to={'/'} className="ml-2 text-xl lg:text-2xl font-semibold text-white">Career Compass</Link>
            </div>
            <div>
                <ul className="hidden lg:flex gap-6 ">
                    <li><NavLink to={"/"} className="text-base font-semibold">Home</NavLink></li>
                    <li><NavLink to={"/about"} className="text-base font-semibold">About</NavLink></li>
                    {
                        user?.email && (<li><NavLink to={"/dashboard"} className="text-base font-semibold">Dashboard</NavLink></li>) 
                    }
                    <li><NavLink to={"/contact"} className="text-base font-semibold">Contact</NavLink></li>

                    
                </ul>
            </div>
            <div className="">
            
                <div className="hidden lg:block font-semibold text-white text-lg mr-2">
                    {
                        user && user?.email ? user?.displayName : ""
                    }
                </div>
            
                {
                    user && user?.email ? (
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" onClick={()=> setShow(!show)} className="btn btn-ghost btn-circle avatar">
                                <div className="w-11 rounded-full">
                                    <img alt="user" className="w-11 h-11 rounded-full"
                                    src={user?.photoURL} />
                                </div>
                            </div>
                            <ul
                            tabIndex={0}
                            className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow ${show ? "block" : 'hidden'}`}>
                            
                            <li className="block lg:hidden"><a>{user?.displayName}</a></li>
                            <li><a>{user?.email}</a></li>
                            <li>
                                <Link to={"/updateInfo"} className="justify-between text-info">
                                update profile
                                </Link>
                            </li>
                            <li onClick={logOut} className="font-semibold text-red-500"><a>Logout</a></li>
                            </ul>
                        </div>
                    ) : (
                        <Link to={'/login'} className="btn ">Login</Link>
                    )
                }


                 {/* drawer start  */}

                <div className="lg:hidden drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    
                </div>
                <div className="drawer-side z-20">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-72 p-4">
                        
                    <h2 className="font-bold text-xl flex items-center justify-center gap-2"><img src={logo} alt="" />Career Compass</h2>
                    <div className="divider divider-info"></div>
                   
                        <li><NavLink to={"/"} className="text-base font-semibold">Home</NavLink></li>
                        <li><NavLink to={"/about"} className="text-base font-semibold">About</NavLink></li>
                        {
                            user?.email && (<li><NavLink to={"/dashboard"} className="text-base font-semibold">Dashboard</NavLink></li>) 
                        }
                        <li><NavLink to={"/contact"} className="text-base font-semibold">Contact</NavLink></li>

                    </ul>
                </div>
                </div>

                <label htmlFor="my-drawer-4" className="lg:hidden drawer-button btn border rounded-full ml-2 text-base"><FaBars className=""></FaBars></label>
                
            </div>
      </div>
    );
};

export default Navbar;