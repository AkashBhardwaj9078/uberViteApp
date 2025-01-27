import React from 'react'

const LookingForDriver = ({setWaitingDriver,setDriver}) => {
  return (
    <div>
         <h3 className="text-3xl font-semibold text-red mx-2">Looking For Driver</h3>
         <div className="">
         <img onClick={()=>{
          setDriver(false);
          setWaitingDriver(true)
         }} className="h-full w-full" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1646663312/assets/76/4edafa-472b-4fe6-bf8a-74a894ad3dea/original/uberXL.png" alt="" />
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
                <h3 className="text-2xl font-bold">$193.82</h3>
                <h3 className="text-base text-gray-500 ">Cash Cash </h3>
             </div>
         </div>

         
         </div>
      
    </div>
  )
}

export default LookingForDriver
