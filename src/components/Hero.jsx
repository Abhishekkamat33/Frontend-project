import React, { useState } from 'react'
import Data from './University';
import Courses from './Courses';

 

function Main() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  let content = null;
  if (activeIndex === 0) {
    content = <Data />;
  }
  if(activeIndex===1){
    content=<Courses/>;
  }
  return (
    <div className="main  w-screen bg-[#F6F7FB] flex justify-center items-center flex-col gap-[40px] pt-[80px]">
     <h1 className='text-4xl font-[anzo9]'>Only the best for the best</h1>
     <h2 className='text-xl font-[anzo1]'>Find the best study documents to ace your way through education.</h2>

     <div className="box w-[50vw] h-[80vh] bg-[#FFFFFF] rounded-xl  overflow-x-hidden">
      <ul className='flex  justify-center items-center gap-[20px] pt-[20px]'>
        <li
          className={` text-l font-[anzo1] list-none cursor-pointer ${activeIndex === 0 ? 'text-blue-500 border-b-4 border-blue-500 p-2' : ''}`}
          onClick={() => handleClick(0)}
        >
          Universities
        </li>
        <li
          className={` text-l font-[anzo1]list-none cursor-pointer ${activeIndex === 1 ? 'text-blue-500 border-b-4 border-blue-500 p-2 ' : ''}`}
          onClick={() => handleClick(1)}
        >
          Courses
        </li>
        <li
          className={`text-l font-[anzo1] list-none cursor-pointer ${activeIndex === 2 ? 'text-blue-500 border-b-4 border-blue-500 p-2' : ''}`}
          onClick={() => handleClick(2)}
        >
          Document
        </li>
      </ul>
      {content}
      
    </div>
    <div className="eye">
        <img src="https://d20ohkaloyme4g.cloudfront.net/img/landing/eye.svg" alt="" className="scr w-[30vw] h-[30vh]" />
    </div>
    </div>
   
    
  )
}

export default Main