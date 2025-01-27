import React, { createContext, useState } from 'react';

export const CaptainContext = createContext();

const CaptainProvider = ({ children }) => {
    const [captain, setCaptain] = useState(null);
    const [isLoading,setIsLoading]=useState("");
    const [error,setError]=useState("")
    const Akash="Akash"
    const values={
        captain,setCaptain,
        isLoading,setIsLoading,
        error,setError,
        Akash
    }

    return (
        <CaptainContext.Provider value={values}>
            {children}
        </CaptainContext.Provider>
    );
};

export default CaptainProvider