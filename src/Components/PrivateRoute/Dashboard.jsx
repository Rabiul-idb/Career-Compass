import { useContext } from "react";
import { AuthContex } from "../../ContextProvider/ContextProvider";
import SelectedCard from "./SelectedCard";
import { Link } from "react-router-dom";
import img from '../../assets/Images/abt-banner.jpg';
import { Helmet } from "react-helmet-async";


const Dashboard = () => {

    const {selectedItems, setSelectedItems} = useContext(AuthContex);
    //console.log(selectedItems)

    return (
        <div className="">

        <Helmet>
          <title>Dashboard || Career Compass</title>
        </Helmet>

            <div className=" relative mb-3">
                <img src={img} className="object-cover object-center h-80 w-full" alt="" />
                <div className="absolute top-20 left-20 ">
                    <h1 className="font-bold md:text-3xl text-2xl lg:text-5xl text-white">Your Dashboard</h1>
                    <p className="font-black text-white text-base mt-5"><Link to={"/"} className="text-info hover:text-blue-700">Home  </Link> / Dashboard</p>
                </div>
            </div>
            
            <div className="w-11/12 mx-auto my-5">
                <h2 className="font-semibold text-black lg:text-2xl text-xl mb-6 text-center">Your Selected Career discussion</h2>
                {
                    selectedItems.map((item, index) => 
                        <SelectedCard item = {item} key={index}></SelectedCard>
                    )
                }
            </div>    
        </div>
    );
};

export default Dashboard;