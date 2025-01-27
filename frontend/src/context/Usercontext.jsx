import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';
export const userDataContext=createContext()

const Usercontext = ({children}) => {
     const name="akash"
     const [user, setUser] = useState({
        
        fullname:{
            first_name:"",
            second_name:""
        }
        ,
        email:"",

     })
    

  return (
    <div>
        <userDataContext.Provider value={{user,setUser,name}} >
           {children}

        </userDataContext.Provider>
      
    </div>
  )
}

export default Usercontext;
