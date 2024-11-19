import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar  flex justify-between items-center w-11/12 mx-auto">
            <div className="">
                <a className="btn btn-ghost text-2xl font-semibold text-white">Career Compass</a>
            </div>
            <div>
                <ul className="flex gap-6">
                    <li><NavLink to={"/"} className="text-base font-semibold">Home</NavLink></li>
                    <li><NavLink to={"/about"} className="text-base font-semibold">About</NavLink></li>
                    <li><NavLink to={"/contact"} className="text-base font-semibold">Contact</NavLink></li>
                </ul>
            </div>
            <div className="">
            
                <div tabIndex={0} role="button" className="btn px-8 font-semibold bg-white rounded-lg text-lg ">
                Enroll
                </div>
            
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                    </div>
                    <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li>
                        <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
      </div>
    );
};

export default Navbar;