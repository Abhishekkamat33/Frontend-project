import React, { Suspense, useEffect, useRef } from 'react'
import Arkm from '../components/Arkm'
import Navbar from '../components/Navbar'
import 'remixicon/fonts/remixicon.css'
import Statcs from '../components/Statcs'
import Main from '../components/Hero'
import Books from '../Books'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { reference } from 'three/webgpu'
import Footer from '../components/Footer'

function Header() {


  return (
    <>
      <div className="header  w-screen h-[100vh] relative overflow-x-hidden">
        <div className="hero bg-[#2A0316] w-screen h-[90vh] relative " >
          <Navbar />
          <div className="herosec mr-[10px] w-fit mt-[170px] ml-[370px]">
            <h1 className='text-white text-5xl font-[anzo9] p-[10px] mb-6'>Grow smarter together</h1>
            <h2 className='text-white text-xl font-[anzo5] pl-[100px]'>Find top-rated study notes from students
            </h2>
            <span className='text-white text-xl font-[anzo5] pl-[130px] mb-[100px] w-fit'>taking the same courses as you.</span>
          </div>
          <div className="search absolute left-[280px] mt-10 z-10" >
            <input className="w-[60vw] py-6 px-5 rounded-full " type="text" placeholder='Search for Courses,Books, Notes...and Document' />
          </div>
          <i className="ri-search-line text-xl text-black absolute left-[78vw] bottom-[9vh] z-10  "></i>
        </div>
        <Arkm />
        <Statcs />
        <Main />
        <div className="bg-img relative">
        <img src="https://images.pexels.com/photos/10643964/pexels-photo-10643964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="src absolute w-full h-full object-cover " />
        <Canvas className='absolute z-10 top-[10vh]' camera={{ fov: 75, position: [0,0, 6] }}  >
          <Suspense fallback={null} >
            <ambientLight/>
           <OrbitControls enableRotate={true} enableZoom={false}  />
            <Books/>
          </Suspense>
        </Canvas>
        </div>
        <Footer/>
      </div>
    </>

  )
}

export default Header