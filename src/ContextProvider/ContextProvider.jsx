import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";

export const AuthContex = createContext();
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const ContextProvider = ({children}) => {

    const [allData, setAllData] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(()=>{
        fetch('/public/serviceData.json')
        .then(response => response.json())
        .then(data => setAllData(data))
        .catch(error => console.log('Error', error)
        )
    },[])

    const CreateNewUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    };
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            });
            return unsubscribe;
    },[]);

    console.log(user);

    const contextValue = {
        allData,
        setAllData,
        CreateNewUser,
        user,
        setUser,
    }

    return (
        <AuthContex.Provider value={contextValue}>{children}</AuthContex.Provider>
    );
};

export default ContextProvider;