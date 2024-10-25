import React from "react"
import Heroimg from "../images/Hero.png"
import FindVehicle from "./FindVehicle"

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url("${Heroimg}")` }}
      className="relative text-white md:h-[110vh] h-[85vh] text-center flex justify-center items-center md:bg-center bg-cotain "
    >
      <div className="md:w-[900px] absolute md:top-10 top-60 ">
        <h1 className="md:text-6xl text-2xl font-semibold">
          Discover the world on wheels with our car rental service
        </h1>
      </div>
      <div className=" absolute -bottom-16 left-0 w-[100%] flex justify-center items-center">
        <FindVehicle />
      </div>
    </div>
  )
}

export default Hero
