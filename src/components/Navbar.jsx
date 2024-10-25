import React, { useState } from "react"
import { HiMenuAlt4 } from "react-icons/hi"
import { NavLink } from "react-router-dom"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import Logo from "../images/Heading.png"
import menu from "../images/menu.png"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  return (
    <div className="bg-black flex justify-between items-center p-8 md:px-28">
      <div
        onClick={() => setNav(!nav)}
        className="block  cursor-pointer text-white"
      >
        {nav ? <AiOutlineClose size={40} /> : <img src={menu} alt="menuIcon" />}
      </div>
      <ul
        className={
          nav
            ? " bg-white fixed uppercase  right-0 top-[10%] w-[30%] h-full bg-primary ease-in-out duration-500 z-50"
            : " bg-white w-[30%]  fixed top-[10%] bottom-0 right-[-100%] ease-in-out duration-500"
        }
      >
        <li className="p-4 hover:bg-secondary rounded-xl m-2 cursor-pointer duration-300  ">
          <NavLink> home</NavLink>
        </li>
        <li className="p-4 hover:bg-secondary rounded-xl m-2 cursor-pointer duration-300 ">
          <NavLink>about</NavLink>
        </li>
        <li className="p-4 hover:bg-secondary rounded-xl m-2 cursor-pointer duration-300 ">
          <NavLink>Service</NavLink>
        </li>

        <li className="p-4 hover:bg-secondary rounded-xl m-2 cursor-pointer duration-300 ">
          <NavLink>process</NavLink>
        </li>
        <li className="p-4 hover:bg-secondary rounded-xl m-2 cursor-pointer duration-300 ">
          <NavLink>client</NavLink>
        </li>
        <div>
          <button className="bg-white  py-2 px-8 rounded-full uppercase">
            signup
          </button>
        </div>
      </ul>
      <div className="ml-8">
        <img src={Logo} alt="logo" />
      </div>
      <div className="text-white py-1 md:px-4 rounded-full  border-gray-600 border-2">
        <button>Login / Register</button>
      </div>
    </div>
  )
}

export default Navbar
