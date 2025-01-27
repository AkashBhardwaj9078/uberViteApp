import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react"
// import LocationSearchResults from './Pages/LocationSearchResults';
// import 'remixicon/fonts/remixicon.css'

import LocationSearchResults from '../../Components/LocationSearchResults';
import VehiclePanel from '../../Components/VehiclePanel';
import ConfirmedRide from '../../Components/ConfirmedRide';
import LookingForDriver from '../../Components/LookingForDriver';
import WaitingForDriver from '../../Components/WaitingForDriver';
const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [openPanel, setOpenPanel] = useState(false);
  const [vehicle,setVehicle]=useState(false)
  const [ride,setRide]=useState(false);
  const [driver,setDriver]=useState(false);
  const [waitingDriver,setWaitingDriver]=useState(false);
 

  const panelRef = useRef(null);
  const hiddenDivRef = useRef(null);
  const arrowRef = useRef(null);
  const vehicleRef=useRef(null);
  const rideRef=useRef(null);
  const driveRef=useRef(null);
  const waitingRef=useRef(null);

  const addresses = [
    "456 Elmwood Avenue, Apartment 12B, Grandview Heights, Columbus, Ohio",
    "123 Maple Street, Suite 5A, Downtown, Columbus, Ohio",
    "789 Oak Lane, House 10, Suburbia, Columbus, Ohio",
    "101 Pine Road, Unit 3C, Uptown, Columbus, Ohio"
  ];


  // useGSAP(()=>{
  //   if(ride){
  //     gsap.to(vehicleRef.current,{
  //       transform:'translateY(0)'
  //     })

  //   }
  //   else{
  //     gsap.to(vehicleRef.current,{
  //       transform:'translateY(100%)'
  //     })
  //   }
     
  // },[ride])
  useGSAP(()=>{ 
    if(waitingDriver){
      gsap.to(waitingRef.current,{
        transform:'translateY(0)',
        duration: 0.5,
        ease: 'power2.out',
      })

    }
    else{
      gsap.to(waitingRef.current,{
        transform:'translateY(100%)',
        duration: 0.5,
        ease: 'power2.in',
      })
    }
      
  },[waitingDriver])

  useGSAP(()=>{ 
    if(ride){
      gsap.to(rideRef.current,{
        transform:'translateY(0)'
      })

    }
    else{
      gsap.to(rideRef.current,{
        transform:'translateY(100%)'
      })
    }
      
  },[ride])

  useGSAP(()=>{ 
    if(driver){
      gsap.to(driveRef.current,{
        transform:'translateY(0)'
      })

    }
    else{
      gsap.to(driveRef.current,{
        transform:'translateY(100%)'
      })
    }
      
  },[driver])




  useGSAP(() => {
    if (openPanel) {
      gsap.to(panelRef.current, {
        height: '100vh', // Full screen height
        duration: 0.5,
        ease: 'power2.out',
      });

      gsap.to(arrowRef.current, {
        opacity: 1
      });


      // Make the hidden div visible
      gsap.to(hiddenDivRef.current, {
        opacity: 1,
        duration: 0.5,
        display: 'block',
      });
    }
    else {

      // Animate panel height back to default
      gsap.to(panelRef.current, {
        height: 'auto', // Collapse height
        duration: 0.5,
        ease: 'power2.in',
      });

      gsap.to(arrowRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in',
      });

      // Hide the hidden div
      gsap.to(hiddenDivRef.current, {
        opacity: 0,
        duration: 0.5,
        display: 'none',
      });

    }
  }, [openPanel])


  useGSAP(()=>{ 
    if(vehicle){
      gsap.to(vehicleRef.current,{
        transform:'translateY(0)'
      })

    }
    else{
      gsap.to(vehicleRef.current,{
        transform:'translateY(100%)'
      })
    }
      
  },[vehicle])

  const handlePanelOpen = () => {
    setOpenPanel(true);



    // Animate panel height to full screen
    gsap.to(panelRef.current, {
      height: '100vh', // Full screen height
      duration: 0.5,
      ease: 'power2.out',
    });

    // Make the hidden div visible
    gsap.to(hiddenDivRef.current, {
      opacity: 1,
      duration: 0.5,
      display: 'block',
    });
  };

  const handlePanelClose = () => {
    setOpenPanel(false);

    // Animate panel height back to default
    gsap.to(panelRef.current, {
      height: 'auto', // Collapse height
      duration: 0.5,
      ease: 'power2.in',
    });

    // Hide the hidden div
    gsap.to(hiddenDivRef.current, {
      opacity: 0,
      duration: 0.5,
      display: 'none',
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Pickup:", pickup, "Destination:", destination);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background Image */}
      <div>
        <img
          onClick={()=>{ 
            setVehicle(false);
            setDriver(false);
            setRide(false);
            setDriver(false);
            setWaitingDriver(false);
            
          }}
          className="absolute inset-0 w-full h-full object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjgBWkh-2RpEXtRmA1vxakcVsTzG3XVMnd3Q&s"
          alt="Background"
        />

        {/* Bottom White Section */}
        <div
          ref={panelRef}
          className="bg-white  flex flex-col justify-end absolute bottom-0 rounded-t-xl w-full p-5 z-20"
        >
          {/* Trip Form */}
          <div className="relative">
            <h5
              onClick={() => { setOpenPanel(false) }}
              ref={arrowRef}
              className="text-2xl absolute right-2 top-1">
              <i className="ri-arrow-down-wide-fill"></i>
            </h5>
            <div className="bg-black h-[65px] absolute left-4 top-16 w-1"></div>

            <h3 className=" z-14 text-3xl font-semibold mx-2">Find a trip</h3>
            <form onSubmit={submitHandler}>
              <input
                type="text"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                onClick={() => { setOpenPanel(true) }}
                className="w-full rounded-lg text-lg my-2 bg-[#eeeeee] p-2 px-8 border"
                placeholder="Add a pickup location"
              />
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                onClick={() => { setOpenPanel(true) }}
                className="w-full rounded-lg text-lg my-2 bg-[#eeeeee] p-2 px-8 border"
                placeholder="Enter your destination"
              />
            </form>
          </div>

          {/* Additional Content */}
          <div
            ref={hiddenDivRef}
            className="opacity-0 hidden h-[70%] mt-4"
          >

            <LocationSearchResults setOpenPanel={setOpenPanel} setVehicle={setVehicle} addresses={addresses} />
          </div>
        </div>
      </div>

      {/* Logo */}
      <img
        className="absolute top-5 left-5 w-24 z-10"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="Logo"
      />
     

       
      <div ref={vehicleRef}  className="bottom-0 bg-white absolute z-50 px-4 translate-y-full py-6 flex flex-col gap-2">
        
        <VehiclePanel setVehicle={setVehicle} setRide={setRide}/>
      

      </div>

      <div ref= {rideRef} className="bottom-0 bg-white absolute z-50 px-4  py-6 flex flex-col gap-2">
        
        <ConfirmedRide setDriver={setDriver} setRide={setRide} /> 
      

      </div>

      <div ref= {driveRef} className="bottom-0  bg-white absolute z-50 px-4  py-6 flex flex-col gap-2">
        
      <LookingForDriver setWaitingDriver={setWaitingDriver} setDriver={setDriver} />
      

      </div>
      <div ref={waitingRef}  className="bottom-0  translate-y-full  bg-white absolute z-50 px-4  py-6 flex flex-col gap-2">
        
      <WaitingForDriver/>
      

      </div>


    </div>
  );
};

export default Home;


