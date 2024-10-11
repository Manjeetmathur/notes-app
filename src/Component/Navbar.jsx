import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { FaNotesMedical } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className='flex flex-wrap gap-4 bg-gray-200 p-4 border-2 rounded-lg w-[85vw]  justify-around border-red-400'>
      <NavLink to="/" className="bg-red-300 p-3 text-2xl rounded-xl font-bold text-black shadow-slate-500 shadow-lg">
        <FaHome />
      </NavLink>

      <NavLink to="/pastes" className="bg-red-300 text-2xl p-3 rounded-xl font-bold text-black shadow-slate-500 shadow-lg">
      <FaNotesMedical />
      </NavLink>
    </div>
  )
}

export default Navbar
