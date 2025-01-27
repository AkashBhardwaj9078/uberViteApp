import React from 'react'

const CaptainDetails = ({setFirstPopup }) => {
  return (
    <div>
        <div onClick={()=>setFirstPopup(true)} className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <img className='rounded-full w-[60px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmoVz7s-PndhfAAcZS0ko0n41-tVjp8BBzBYyMlnyD9Rkf0m3HpvKMk-7XbovYVu2O91A&usqp=CAU" alt="" srcset="" />
              <h3 className='text-xl font-bold'>Harsh Patel</h3>
            </div>

            <div className="">
              <h3 className='text-xl font-bold'>$195.90</h3>
              <h3 className='text-base text-gray-500'>Earned</h3>
            </div>
          </div>
          <div className="flex items-center bg-gray-100 rounded-xl mx-2 align-middle px-5 gap-5">
            <div className="flex flex-col items-center ">
              <h3 className='text-2xl'><i className="ri-timer-2-line"></i></h3>
              <h3 className='text-xl font-bold'>10.2</h3>
              <h3 className='text-base text-gray-500'>Hours Online</h3>
            </div>
            <div className="flex flex-col items-center ">
              <h3 className='text-2xl'><i className="ri-timer-2-line"></i></h3>
              <h3 className='text-xl font-bold'>10.2</h3>
              <h3 className='text-base text-gray-500'>Hours Online</h3>
            </div>
            <div className="flex flex-col items-center ">
              <h3 className='text-2xl'><i className="ri-timer-2-line"></i></h3>
              <h3 className='text-xl font-bold'>10.2</h3>
              <h3 className='text-base text-gray-500'>Hours Online</h3>
            </div>
          </div>
      
    </div>
  )
}

export default CaptainDetails
