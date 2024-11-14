import React from 'react'

function Courses() {
    const courses = [
        "Computer Science",
        "Mechanical Engineering",
        "Business Administration",
        "Medicine",
        "Law",
        "Electrical Engineering",
        "Psychology",
        "Architecture",
        "Economics",
        "Environmental Science"
      ];
      
  return (
    <div className="display flex justify-center items-center flex-wrap gap-[10px] m-[40px] ">
 {courses.map((item, index) => (
          <li className='p-3 border-2 w-fit list-none rounded-xl' key={index}>{item}</li>
        ))} 
   </div>
  )
}

export default Courses