import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from './Home'

const NavBar = () => {
  return (
    
    <div className='flex gap-6 justify-center p-5 border-b-[1px] border-blue-200  '>
        <NavLink 
            to={'/'}
            className={`text-red-700 text-3xl font-bold`}
        >
            Home
        </NavLink>

        <NavLink 
            to={'/pastes'}
            className={`text-red-700 text-3xl font-bold`}>
            Pastes 
        </NavLink>
    </div>
  )
}

export default NavBar
