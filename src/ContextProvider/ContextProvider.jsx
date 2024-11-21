import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContex = createContext();
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const ContextProvider = ({children}) => {

    const [allData, setAllData] = useState([]);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedItems, setSelectedItems] = useState([]);
    

    useEffect(()=>{
        fetch('/public/serviceData.json')
        .then(response => response.json())
        .then(data => setAllData(data))
        .catch(error => console.log('Error', error)
        )
    },[])

    // Register new User
    const CreateNewUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    
    // Observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return unsubscribe;

    },[]);

   // console.log(user);

    // user logOut 
    const logOut = ()=>{
        setLoading(true);
        return signOut(auth)
    }

    // user login
    const userLogin = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // update profile
    // const updateUserProfile = (profile) => {
    //     setLoading(true);
    //     return updateProfile(auth.currentUser, profile);
    // }

    // forgot email
    const forgotPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    }


    const contextValue = {
        allData,
        setAllData,
        CreateNewUser,
        user,
        setUser,
        logOut,
        userLogin,
        loading,
        setLoading,
        forgotPassword,
        auth,
        setSelectedItems,
        selectedItems,
    }

    return (
        <AuthContex.Provider value={contextValue}>{children}</AuthContex.Provider>
    );
};

export default ContextProvider;