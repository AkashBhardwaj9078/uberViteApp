import React from 'react'

const WaitingForDriver = () => {
    return (
        <div className="">
            <div className="flex items-center justify-between w-full gap-[50px]">
                <img className="h-[80px]" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1646663312/assets/76/4edafa-472b-4fe6-bf8a-74a894ad3dea/original/uberXL.png" alt="" />
                <div className="w-[70%] text-right">
                    <h3 className="text-xl font-bold">Sarthak</h3>
                    <h3 className="text-xl font-bold">MPPO RW 1234</h3>
                    <h3 className="text-sm font-semibold text-gray-600">Maruti Suzuki Alto</h3>

                </div>
            </div>
            <div className="p-2 flex gap-4 my-2 items-center w-full border-b-2">
                <h3 className="text-3xl"><i className="text-3xl ri-account-circle-fill"></i></h3>
                <div className="w-full">
                    <h1 className="text-2xl font-bold">541/56</h1>
                    <h3 className="text-base text-gray-500">Kankariya Talab, Bhopal</h3>
                </div>
            </div>
            <div className="p-2 flex gap-4 my-2 items-center w-full border-b-2">
                <h3 className="text-3xl"><i className="ri-user-3-fill"></i></h3>
                <div className="w-full">
                    <h1 className="text-2xl font-bold">541/56</h1>
                    <h3 className="text-base text-gray-500">Kankariya Talab, Bhopal</h3>
                </div>
            </div>
            <div className="p-2 flex gap-4 my-2 items-center w-full border-b-2">
                <h3 className="text-3xl"><i className="ri-currency-line"></i></h3>
                <div className="w-full">
                    <h1 className="text-2xl font-bold">$193.82</h1>
                    <h3 className="text-base text-gray-500">Cash Cash</h3>
                </div>
            </div>
        </div>
    )
}

export default WaitingForDriver
