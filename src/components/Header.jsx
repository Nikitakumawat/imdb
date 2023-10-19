import React from 'react'
import MenuItem from './MenuItem'
// import {FaHome} from "react-icons/fa"
import { AiFillHome } from "react-icons/ai";

export default function Header() {
  return (
    <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6'>
      <div className='flex'>
        <MenuItem title="HOME" address="/" icon={AiFillHome} />
        <MenuItem title="ABOUT" address="/about" icon={AiFillHome} />
      </div>
      <div>
        <span className='font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1'>IMDb</span><span>Clone</span>
      </div>
    
    </div>
  )
}
