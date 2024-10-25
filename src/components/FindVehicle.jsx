import React from "react"
import { FaArrowRight } from "react-icons/fa6"
import { SlLocationPin } from "react-icons/sl"
import { CiCalendar } from "react-icons/ci"

const FindVehicle = () => {
  return (
    <div className="bg-white text-gray-800 p-5 w-[85%] rounded-lg text-sm t ">
      <div className="flex justify-start items-center gap-36 pb-5">
        <h1>Pick-up Location</h1>
        <h1>Pick-up date</h1>
        <h1>Drop-off Location</h1>
        <h1>Drop-off date</h1>
      </div>
      <div className="flex justify-between items-center pb-2">
        <div className="flex justify-center gap-14 items-center">
          <h1 className="flex justify-center items-center gap-2 border border-gray-300 py-3 pl-2 pr-16 rounded">
            <SlLocationPin size={18} />
            Search a location
          </h1>
          <h1 className="flex justify-center items-center gap-2 border border-gray-300 py-3 px-5 rounded">
            12/12/2023 <CiCalendar size={20} />
          </h1>
          <h1 className="flex justify-center items-center gap-2 border border-gray-300 py-3 pl-2 pr-16 rounded">
            <SlLocationPin size={18} />
            Search a location
          </h1>
          <h1 className="flex justify-center items-center gap-2 border border-gray-300 py-3 px-5 rounded">
            12/12/2023 <CiCalendar size={20} />
          </h1>
        </div>
        <div>
          <button className="flex justify-center items-center gap-2 rounded-full bg-black text-white py-4 px-6">
            Find a Vehicle <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default FindVehicle
