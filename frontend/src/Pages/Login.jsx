import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { userDataContext } from '../context/Usercontext'
import axios from 'axios'


const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setpassword]=useState("");
    const [userData,setuserData]=useState({})
    const navigate=useNavigate();
    const {user,setUser}=useContext(userDataContext)
    const submithandler=async (e)=>{
        e.preventDefault()

        const Credentials={
            Email:email,
            Password:password
        }

        setuserData(Credentials)
        console.log(userData);

        try {
            const response=await axios.post("http://localhost:3000/user/login",Credentials)
            if(response.status===201){
                setUser(response.data.user)
                console.log(user)
                localStorage.setItem('token',response.data.token)
                navigate("/home")
            }
            
        } catch (error) {
            console.error("There was an error logging the account!", error);
        }

        


        
        setpassword("");
        setEmail("");
    }
  return (
    <div className='flex flex-col justify-between'>
         <img className='w-24 ml-8 mt-6' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <div className="p-10 ">
            <form action="" onSubmit={(e)=>submithandler(e)}>

                <h3 className='text-2xl font-semibold'>What's your email?</h3>
                <input type="email" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required placeholder='abc@example.com' className='bg-[#eeeeee] border my-2 text-base p-3 w-full'/>
                <h3 className='text-2xl  font-semibold'>Enter Password</h3>
                <input type="password" required 
                value={password}
                onChange={(e)=>setpassword (e.target.value)}  className='border bg-[#eeeeee] my-2 text-base p-3 w-full'/>
                 <button className='bg-black w-full text-2xl  p-3 my-4 rounded text-white flex align-middle items-center justify-center'>
                    Login

                 </button>
            </form>
            <p className='flex justify-center text-bold'> New here? <Link to="/signup" className="text-blue-500 px-1"> Create New Account</Link></p>
            
            {/* <p>New here?  <Link className="text-blue-500">Create New Account</Link> </p> */}

        </div>
        <div className="p-10 ">
            <Link to="/captainlogin" className='bg-[#418a52] w-full text-2xl  p-3 my-4 rounded text-white flex align-middle items-center justify-center'>
            Sign in as Captain
            </Link>
        </div>


      
    </div>
  )
}

export default Login
