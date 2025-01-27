import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
    return (
        <div>
            <div className="h-screen">
                <Link to="/home" className="fixed right-2 top-2 rounded-full bg-white h-10 w-10 flex items-center justify-center">
                <i class="text-2xl ri-home-5-line"></i>
                </Link>
                <div className="h-1/2">
                    <img

                        className=" w-full h-full object-cover"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjgBWkh-2RpEXtRmA1vxakcVsTzG3XVMnd3Q&s"
                        alt="Background"
                    />


                </div>
                <div className="h-1/2 p-4">
                    <div className="flex items-center justify-between w-full ">
                        <img className="h-[80px]" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1646663312/assets/76/4edafa-472b-4fe6-bf8a-74a894ad3dea/original/uberXL.png" alt="" />
                        <div className="w-[70%] text-right">
                            <h3 className='text-xl font-bold'>Sarthak</h3>
                            <h3 className='text-xl font-bold'>MPPO RW 1234</h3>
                            <h3 className='text-sm  font-semibold text-gray-600'>Maruti Suzuki Alto</h3>

                        </div>
                    </div>
                    <div className="p-2 flex gap-4 my-2 items-center w-full border-b-2">
                        <h3 className='text-3xl'><i className="ri-user-3-fill"></i></h3>
                        <div className="w-full">
                            <h1 className='text-2xl font-bold'>541/56</h1>
                            <h3 className='text-base text-gray-500 '>Kankariya Talab , Bhopal </h3>
                        </div>
                    </div>
                    <div className="p-2 flex gap-4 mt-2 items-center w-full border-b-2">
                        <h3 className='text-3xl'><i class="ri-currency-line"></i></h3>
                        <div className="w-full">
                            <h1 className='text-2xl font-bold'>$193.82</h1>
                            <h3 className='text-base text-gray-500 '>Cash Cash </h3>
                        </div>
                    </div>
                    <button className='w-full text-xl text-white font-bold rounded-xl p-2 mt-5 bg-green-600'>
                        Make a payment
                    </button>

                </div>

            </div>

        </div>
    )
}

export default Riding
