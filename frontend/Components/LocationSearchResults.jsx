import React from 'react'

const LocationSearchResults = ({setOpenPanel ,addresses, setVehicle }) => {
  return (
    <div>
      {addresses.map((address, index) => (
        <div key={index} onClick={() => {
            setOpenPanel(false)
            setVehicle(true)

        }} className="flex gap-2 border rounded-xl p-2 my-4">
          <h3 className="flex items-center text-3xl">
            <i className="ri-map-pin-fill"></i>
          </h3>
          <div className="font-bold">
            {address}
          </div>
        </div>
      ))}
    </div>
  )
}

export default LocationSearchResults
