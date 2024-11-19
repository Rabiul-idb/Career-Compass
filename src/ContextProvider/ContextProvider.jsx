import { createContext, useEffect, useState } from "react";

export const AuthContex = createContext();

const ContextProvider = ({children}) => {

    const [allData, setAllData] = useState([]);

    useEffect(()=>{
        fetch('/public/serviceData.json')
        .then(response => response.json())
        .then(data => setAllData(data))
        .catch(error => console.log('Error', error)
        )
    },[])

    

    const contextValue = {
        allData,
        setAllData
    }

    return (
        <AuthContex.Provider value={contextValue}>{children}</AuthContex.Provider>
    );
};

export default ContextProvider;