import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { userDataContext } from '../context/Usercontext'
import { CaptainContext } from '../context/Captaincontext'

const Signup = () => {
  const [first_name, setFirst_name] = useState("");
  const [second_name, setSecond_name] = useState("")
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [userData, setuserData] = useState({})
  const { user, setUser, name } = useContext(userDataContext);
  const captainContext = useContext(CaptainContext);
  const navigate = useNavigate();
  

  const submithandler = async (e) => {
    e.preventDefault();

    const newUserData = {
      Fullname: {
        First_name: first_name,
        Last_name: second_name
      },
      Email: email,
      Password: password
    };

    setuserData(newUserData);
    console.log(newUserData);

    try {
      const response = await axios.post("http://localhost:3000/user/register", newUserData);
      if (response.status === 201) {
        setUser(response.data.user);
        console.log(user);
        localStorage.setItem('token', response.data.token)
        navigate('/home');
      }
    } catch (error) {
      console.error("There was an error creating the account!", error);
    }

    setpassword("");
    setEmail("");
    setFirst_name("");
    setSecond_name("");
  }

  return (
    <div className='flex flex-col justify-between'>
      <img className='w-24 ml-8 mt-6' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <div className="p-10 ">
        <form action="" onSubmit={(e) => submithandler(e)}>
          <h3 className='text-2xl font-semibold'>What's your name?</h3>
          <div className="flex justify-between gap-4">
            <input type="text"
              value={first_name}
              onChange={(e) => {
                setFirst_name(e.target.value)
              }}
              required placeholder='First_name' className='bg-[#eeeeee] border my-2 text-base p-3 w-1/2' />
            <input type="text"
              value={second_name}
              onChange={(e) => {
                setSecond_name(e.target.value)
              }}
              required placeholder='Last_name' className='bg-[#eeeeee] border my-2 text-base p-3 w-1/2 ' />
          </div>
          <h3 className='text-2xl font-semibold'>What's your email?</h3>
          <input type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required placeholder='abc@example.com' className='bg-[#eeeeee] border my-2 text-base p-3 w-full' />
          <h3 className='text-2xl  font-semibold'>Enter Password</h3>
          <input type="password" required
            value={password}
            onChange={(e) => setpassword(e.target.value)} className='border bg-[#eeeeee] my-2 text-base p-3 w-full' />
          <button className='bg-black w-full text-2xl  p-3 my-4 rounded text-white flex align-middle items-center justify-center'>
            Create Account
          </button>
        </form>
        <p className='flex justify-center text-bold'> Already have a account ?<Link to="/login" className="text-blue-500 px-1">Login here</Link></p>
      </div>
      <div className="p-10 ">
        <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
          Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
    </div>
  )
}

export default Signup
