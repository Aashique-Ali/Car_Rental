import React from "react"
import { FaArrowRight } from "react-icons/fa6"
import totoya from "../images/Group 71.png"
import ford from "../images/Group 72.png"
import tesla from "../images/Group 73.png"
import walks from "../images/Group 74.png"
import honda from "../images/Group 75.png"
import nissan from "../images/Group 76.png"

const Rent = () => {
  return (
    <div className="mt-32 px-24 ">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Rent by Brands</h1>
        <button className="flex justify-center items-center gap-2">
          view all <FaArrowRight />
        </button>
      </div>
      <div className="mt-5">
        <div className="flex justify-between items-center">
          <img src={totoya} alt="" />
          <img src={ford} alt="" />
          <img src={tesla} alt="" />
          <img src={walks} alt="" />
          <img src={honda} alt="" />
          <img src={nissan} alt="" />
        </div>
        <div className="flex justify-between items-center">
          <img src={totoya} alt="" />
          <img src={ford} alt="" />
          <img src={tesla} alt="" />
          <img src={walks} alt="" />
          <img src={honda} alt="" />
          <img src={nissan} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Rent
