import React from 'react'
import 'remixicon/fonts/remixicon.css'

function Navbar() {
  return (
    <div className="dis flex justify-between items-center pt-[25px] ">
    <div className="navbar  px-[60px] flex justify-start items-center gap-[20px]">
        <i className="ri-menu-line text-xl text-white  "></i>
        <a className='uppercase text-white text-xl font-[anzo5]' href=''>Studoc</a>
        <a className='text-l text-white font-[anzo3] ml-6' href=''>University</a>
        <a href='' className='text-l text-white font-[anzo3] ml-6'>High School</a>
        <a href='' className='text-l text-white font-[anzo3] ml-6'>Notes</a>
    </div>
    <button className='border-2 rounded-full px-5 py-2 mr-[20px] text-white bg-green-500'>SignIn</button>
    </div>
  )
}

export default Navbar