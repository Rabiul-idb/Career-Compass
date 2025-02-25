import { useContext } from "react";
import { AuthContex } from "../../ContextProvider/ContextProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Loading";


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContex);
    const location = useLocation();
   // console.log(location)

    if(loading){
        return <Loading></Loading>
    }

    if(user && user?.email){
        return children;
    }
    return (
        <Navigate state={location.pathname} to={'/login'}></Navigate>
    );
};

export default PrivateRoute;