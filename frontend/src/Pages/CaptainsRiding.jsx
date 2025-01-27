import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishedRidePopUp from '../../Components/FinishedRidePopUp'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const CaptainsRiding = () => {
    const [finished,setFinished]=useState(false);
    const FinishedRef=useRef(null);

    useGSAP(()=>{ 
        if(finished){
          gsap.to(FinishedRef.current,{
            transform:'translateY(0)',
            duration: 0.5,
            ease: 'power2.out',
          })
    
        }
        else{
          gsap.to(FinishedRef.current,{
            transform:'translateY(100%)',
            duration: 0.5,
            ease: 'power2.in',
          })
        }
          
      },[finished])
    return (
        <div className='relative '>
            <div className="h-screen">
                <img
                    className="absolute top-5 left-5 w-24 z-10"
                    src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
                    alt="Logo"
                />
                <Link to="/home" className="fixed right-2 top-2 rounded-full bg-white h-10 w-10 flex items-center justify-center">
                    <i class="text-2xl ri-home-5-line"></i>
                </Link>
                <div className="h-4/5">
                    <img

                        className=" w-full h-full object-cover"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjgBWkh-2RpEXtRmA1vxakcVsTzG3XVMnd3Q&s"
                        alt="Background"
                    />


                </div>
                <div onClick={ ()=>setFinished(true)} className="h-1/5 p-4 bg-yellow-400 flex flex-col justify-center items-center">
                    <h1><i class="text-xl font-bold ri-arrow-down-wide-line"></i></h1>
                    <h1 className='text-xl font-bold '>4 KM Away ...</h1>
                    <button onClick={() => {

                    }} className="w-full text-xl text-white font-bold rounded-xl p-2 mt-2 bg-green-600">
                        Finish Ride
                    </button>


                    





                </div>

                <div ref={FinishedRef}  className="bottom-0    bg-white absolute z-50 px-4  py-6 flex flex-col gap-2">

                        <FinishedRidePopUp setFinished={setFinished}/>


                    </div>


            </div>



        </div>
    )
}

export default CaptainsRiding
