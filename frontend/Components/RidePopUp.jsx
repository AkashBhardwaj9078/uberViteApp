import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const RidePopUp = ({ setFirstPopup, setAccepted }) => {
  return (
    <div className='w-[93vw]'>
      {/* <h3  className='flex justify-center mb-2'><i onClick={()=>{setFirstPopup(false)}} class=" rounded-full text-2xl ri-arrow-down-box-line"></i></h3> */}
      <h3 className="text-3xl font-semibold text-red mx-2">New Ride Available</h3>
      <div className="flex rounded-xl mt-2 items-center justify-between bg-yellow-400 px-4 py-2">
        <div className="flex items-center gap-3">
          <img className='rounded-full w-[60px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmoVz7s-PndhfAAcZS0ko0n41-tVjp8BBzBYyMlnyD9Rkf0m3HpvKMk-7XbovYVu2O91A&usqp=CAU" alt="" />
          <h3 className='text-xl font-bold'>Harsh Patel</h3>
        </div>
        <h3 className='text-xl font-bold'>2.2 KM</h3>
      </div>
      <div className="">
        <div className="p-2 flex gap-4 my-2 items-center  border-b-2">
          <h3 className="text-3xl"><i className="text-3xl ri-account-circle-fill"></i></h3>
          <div className=" ">
            <h1 className="text-2xl font-bold">541/56</h1>
            <h3 className="text-base text-gray-500 ">Kankariya Talab , Bhopal </h3>
          </div>
        </div>
        <div className="p-2 flex gap-4 my-2 items-center  border-b-2">
          <h3 className="text-3xl"><i className="ri-user-3-fill"></i></h3>
          <div className=" ">
            <h1 className="text-2xl font-bold">541/56</h1>
            <h3 className="text-base text-gray-500 ">Kankariya Talab , Bhopal </h3>
          </div>
        </div>
        <div className="p-2 flex gap-4 my-2 items-center  border-b-2">
          <h3 className="text-3xl"><i className="ri-currency-line"></i></h3>
          <div className=" ">
            <h1 className="text-2xl font-bold">$193.82</h1>
            <h3 className="text-base text-gray-500 ">Cash Cash </h3>
          </div>
        </div>
        <button onClick={() => {
          setAccepted(true)
        }} className="w-full text-xl text-white font-bold rounded-xl p-2 mt-5 bg-green-600">
          Confirm
        </button>
        <button onClick={() => {
          setFirstPopup(false)
        }} className="w-full text-xl text-white font-bold rounded-xl p-2 mt-5 bg-[#a1a4a8]">
          Ignore
        </button>
      </div>
    </div>
  )
}

export default RidePopUp
