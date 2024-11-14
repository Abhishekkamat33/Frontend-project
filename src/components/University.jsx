import React from 'react'

function Data() {
    const top20Universities = [
        "Massachusetts Institute of Technology (MIT)",  // USA
        "Stanford University",  // USA
        "Harvard University",  // USA
        "California Institute of Technology (Caltech)",  // USA
        "University of Oxford",  // UK
        "University of Cambridge",  // UK
        "University of Chicago",  // USA
        "Imperial College London",  // UK
        "ETH Zurich – Swiss Federal Institute of Technology",  // Switzerland
        "University College London (UCL)",  // UK
        "Princeton University",  // USA
        "Columbia University",  // USA
        "Yale University",  // USA
        "Tsinghua University",  // China
        "National University of Singapore (NUS)",  // Singapore
        "Peking University",  // China
        "University of California, Berkeley",  // USA
        "University of California, Los Angeles (UCLA)",  // USA
        "London School of Economics and Political Science (LSE)",  // UK
        "University of Michigan-Ann Arbor"  // USA
      ];
  return (
   <div className="display flex justify-center items-center flex-wrap gap-[10px] m-[40px] ">
 {top20Universities.map((item, index) => (
          <li className='p-3 border-2 w-fit list-none rounded-xl' key={index}>{item}</li>
        ))} 
   </div>
  )
}

export default Data