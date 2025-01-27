import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Logout = async () => {
    const navigate=useNavigate()

    //  await axios.get('http://localhost:3000/user/logout',{
    //     headers:{
    //         Authorization:`Bearer ${localStorage.getItem('token')}`
    //     }
    // }).then((response)=>{
    //     if(response.status===201){
    //         localStorage.removeItem('token')
    //         navigate("/login")
    //     }
    // })

    
  return (
    <div>
        logout
      
    </div>
  )
}

export default Logout
