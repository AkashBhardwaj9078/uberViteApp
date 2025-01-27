import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    
      <div className=" bg-cover bg-bottom bg-[url(https://images.unsplash.com/photo-1593950315186-76a92975b60c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWJlcnxlbnwwfHwwfHx8MA%3D%3D)] h-screen w-screen flex justify-between flex-col  ">
        <img className='w-24 ml-8 mt-6' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <div className="bg-white px-[10%] pb-5 flex flex-col  align-middle items-center">
            <div className=" ">
            <h1 className='text-2xl font-bold p-0'>
            Get Started with Uber
            </h1>
            </div>
            <div className="py-2  px-2 w-full ">
            <Link to="/login" className='flex justify-center items-center bg-black p-4 rounded w-full text-white text-2xl font-bold '>
                Continue
            </Link>
            </div>
        </div>

      </div>
   
  )
}

export default Start

