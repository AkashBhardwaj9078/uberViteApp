import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainContext } from "../context/Captaincontext";
import axios from "axios";
import { useEffect } from "react";

const Captainsignup = () => {
  const [first_name, setFirst_name] = useState("");
  const [second_name, setSecond_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setvehicleType] = useState("");
  const { captain, Akash, setCaptain } = useContext(CaptainContext);
  const navigate = useNavigate();

  // console.log("Hello", Akash);

  const submithandler = async (e) => {
    e.preventDefault();
    const captaindata = {
      fullname: {
        firstname: first_name,
        lastname: second_name,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    console.log(captaindata);

    try {
      const response = await axios.post(
        "http://localhost:3000/captain/register",
        captaindata
      );
      if (response.status === 201) {
        setCaptain(response.data.captain);
        console.log(captain);
        
        localStorage.setItem("token", response.data.token);
        navigate("/captains-home");
      }
    } catch (error) {
      console.error("Error creating a captain account:", error);
    }

    // Reset form fields
    setPassword("");
    setEmail("");
    setFirst_name("");
    setSecond_name("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setvehicleType("");
  };

  return (
    <div className="flex flex-col justify-between">
      <img
        className="w-24 ml-8 mt-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div className="px-10 py-4 ">
        <form onSubmit={submithandler}>
          <h3 className="text-xl font-semibold">What's our Captain's name?</h3>
          <div className="flex justify-between gap-4">
            <input
              type="text"
              value={first_name}
              onChange={(e) => setFirst_name(e.target.value)}
              required
              placeholder="First Name"
              className="bg-[#eeeeee] border my-2 text-base p-3 w-1/2"
            />
            <input
              type="text"
              value={second_name}
              onChange={(e) => setSecond_name(e.target.value)}
              required
              placeholder="Last Name"
              className="bg-[#eeeeee] border my-2 text-base p-3 w-1/2"
            />
          </div>
          <h3 className="text-xl w-full font-semibold">What's our Captain's  email?</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="abc@example.com"
            className="bg-[#eeeeee] border my-2 text-base p-3 w-full"
          />
          <h3 className="text-xl font-semibold">Enter our Captain's Password</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border bg-[#eeeeee] my-2 text-base p-3 w-full"
          />
          <h3 className="text-xl font-semibold">Vehicle Information</h3>
          <div className="flex justify-between gap-4">
            <input
              type="text"
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              required
              placeholder="Vehicle Color"
              className="bg-[#eeeeee] border my-2 text-base p-3 w-1/2"
            />
            <input
              type="text"
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              required
              placeholder="Vehicle Plate"
              className="bg-[#eeeeee] border my-2 text-base p-3 w-1/2"
            />
          </div>
          <div className="flex justify-between gap-4">
            <input
              type="number"
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              required
              placeholder="Vehicle Capacity"
              className="bg-[#eeeeee] border my-2 text-base p-3 w-1/2"
            />
            <select
              value={vehicleType}
              onChange={(e) => setvehicleType(e.target.value)}
              required
              className="bg-[#eeeeee] border my-2 text-base p-3 w-1/2"
            >
              <option value="" disabled>
                Select Vehicle Type
              </option>
              <option value="car">car </option>
              <option value="bike">motorcycle</option>
              <option value="van"> auto</option>
            </select>
          </div>
          <button className="bg-black w-full text-2xl p-3 my-4 rounded text-white flex align-middle items-center justify-center">
            Create Captain Account
          </button>
        </form>
        <p className="flex justify-center text-bold">
          Already have an account?{" "}
          <Link to="/captainlogin" className="text-blue-500 px-0">
            Login as captain
          </Link>
        </p>
      </div>
      <div className="p-10">
        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service apply</span>.
        </p>
      </div>
    </div>
  );
};

export default Captainsignup;

