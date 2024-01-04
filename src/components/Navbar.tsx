import React from 'react'
import { TiHome } from "react-icons/ti";
import { FaRocket } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className='flex top-5 rounded-xl  bg-gradient-to-r from-[#FFFFFF] from-%80 to-[#FFFFFF] to-%60 w-11/12 h-12 items-center justify-between'>

        <div className='flex items-start justify-center'>
        <div className='bg-logo ml-5 w-[32px] h-[29px] rounded-xl'>
        <img src='src\assets\logo.jpg' alt="Logo" className='w-full h-full object-cover rounded-xl' />
        </div>
        <div className='font-ibm font-semibold ml-5'>ANKASOFT | ToDo List APP</div>
        </div>

        <div className='flex mr-9'>
            <div className='flex items-center'>
                <TiHome className="size-5 text-blue-400 mr-2"/>
                <FaRocket className="size-4"/>
                </div>
        </div>
    </div>
  )
}

export default Navbar;