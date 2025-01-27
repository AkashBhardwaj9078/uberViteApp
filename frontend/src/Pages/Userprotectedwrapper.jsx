// import React, { useContext, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { userDataContext } from '../context/Usercontext'
// import { CaptainContext } from '../context/Captaincontext'
// import axios from 'axios'

// const Userprotectedwrapper = async ({ children }) => {
//     const navigate = useNavigate()
//     const token = localStorage.getItem('token')
    

//     useEffect(() => {
//         if (!token) {
//             navigate("/login")
//         }
//     }, [token, navigate])

   

 

//     return (
//         <>
//             {children}
//         </>
//     )
// }

// export default Userprotectedwrapper
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Userprotectedwrapper = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); // Retrieve token from localStorage

  useEffect(() => {
    if (!token) {
      navigate('/login'); // Redirect to login if token is missing
    }
  }, [token, navigate]); // Run effect when `token` or `navigate` changes

  // Render children only if token exists
 

  return <>{children}</>; // Render protected content
};

export default Userprotectedwrapper;