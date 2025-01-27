import React, { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link } from 'react-router-dom'
import RidePopUp from '../../Components/RidePopUp'
import CaptainDetails from '../../Components/CaptainDetails'
import AcceptedRidePopUp from '../../Components/AcceptedRidePopUp';

const Captainshome = () => {
  const [firstPopUp, setFirstPopup] = useState(true);
  const [Accepted, setAccepted] = useState(false);
  const FirstPopUpRef = useRef(null);
  const AcceptRideRef = useRef(null);

  useEffect(() => {
    if (firstPopUp) {
      gsap.to(FirstPopUpRef.current, {
        transform: 'translateY(0)',
        duration: 0.5,
        ease: 'power2.out',
      });
    } else {
      gsap.to(FirstPopUpRef.current, {
        transform: 'translateY(100%)',
        duration: 0.5,
        ease: 'power2.in',
      });
    }
  }, [firstPopUp]);

  useEffect(() => {
    if (Accepted) {
      gsap.to(AcceptRideRef.current, {
        transform: 'translateY(0)',
        duration: 0.5,
        ease: 'power2.out',
      });
    } else {
      gsap.to(AcceptRideRef.current, {
        transform: 'translateY(100%)',
        duration: 0.5,
        ease: 'power2.in',
      });
    }
  }, [Accepted]);

  return (
    <div className="relative overflow-hidden">
      <div className="h-screen ">
        <Link to="/captainlogin" className="fixed right-2 top-2 rounded-full bg-white h-10 w-10 flex items-center justify-center ">
          <i className="text-xl font-bold ri-logout-box-line"></i>
        </Link>
        <div className="h-3/5">
          <img
            onClick={() => {
              setAccepted(false);
              setFirstPopup(false);
            }}
            className="absolute top-5 left-5 w-24 z-10"
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            alt="Logo"
          />
          <img
            className="w-full h-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjgBWkh-2RpEXtRmA1vxakcVsTzG3XVMnd3Q&s"
            alt="Background"
          />
        </div>
        <div className="2/5 ">
          <CaptainDetails setFirstPopup={setFirstPopup} />
        </div>
        <div ref={FirstPopUpRef} className="bottom-0 translate-y-full bg-white absolute z-50 px-4 py-6 flex flex-col gap-2">
          <RidePopUp setFirstPopup={setFirstPopup} setAccepted={setAccepted} />
        </div>
        <div ref={AcceptRideRef} className="bottom-0 h-screen pt-10 translate-y-full bg-white absolute z-50 px-4 py-6 flex flex-col gap-2">
          <AcceptedRidePopUp setAccepted={setAccepted} />
        </div>
      </div>
    </div>
  )
}

export default Captainshome
