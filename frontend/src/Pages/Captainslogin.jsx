import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainContext } from '../context/Captaincontext';

const Captainslogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  const { captain, setCaptain } = useContext(CaptainContext);
  const navigate = useNavigate();

 
  const submitHandler = async (e) => {
    e.preventDefault();
    const captainLogin = {
      email: email,
      password: password
    };

    setUserData(captainLogin);
    console.log(userData)

    try {
      const response = await axios.post("http://localhost:3000/captain/login", captainLogin);
      if (response.status === 201) {
        setCaptain(response.data.captain);
        console.log(captain)
        localStorage.setItem('token', response.data.token);
        navigate("/captains-home");
      }
    } catch (error) {
      console.error("There was an error logging the account!", error);
    }

    setPassword("");
    setEmail("");
  };

  return (
    <div className="flex flex-col justify-between">
      <img className="w-24 ml-8 mt-6" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <div className="p-10 ">
        <form action="" onSubmit={submitHandler}>
          <h3 className="text-2xl font-semibold">What's your email?</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="abc@example.com"
            className="bg-[#eeeeee] border my-2 text-base p-3 w-full"
          />
          <h3 className="text-2xl font-semibold">Enter Password</h3>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border bg-[#eeeeee] my-2 text-base p-3 w-full"
          />
          <button className="bg-black w-full text-2xl p-3 my-4 rounded text-white flex align-middle items-center justify-center">
            Login
          </button>
        </form>
        <p className="flex justify-center text-bold">
          Join a fleet? <Link to="/captainsignup" className="text-blue-500 px-1">Register as Captain</Link>
        </p>
      </div>
      <div className="p-10 ">
        <Link to="/login" className="bg-[#ddbf36] w-full text-2xl p-3 my-4 rounded text-white flex align-middle items-center justify-center">
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default Captainslogin;
