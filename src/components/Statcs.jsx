import React from 'react'

function Statcs() {
    return (
        <div className="profile h-[100vh] w-screen relative ">
            <div className="head">
            <h1 className='text-4xl text-black ml-[30vw] pt-[15vh] font-bold font-[anzo9] '>700M students saved, and
                <br></br><span className=' ml-[12vw]'>counting</span></h1>
            <h3 className='text-2xl text-black ml-[25vw] pt-[30px]'>50K new study notes added every day, from the world’s most  <br></br><span className='ml-[14vw] '>active student communities</span> </h3>
            </div>
            <div className="img absolute top-[55vh] left-[-10vw]">
                <img src="https://d20ohkaloyme4g.cloudfront.net/img/landing/hand-holding-phone.svg" alt="" className="src w-[55vw] h-[55vh]" />
            </div>
            <div className="value flex justify-center items-center gap-10 mt-14">
                <div className="value1 flex justify-center items-center flex-col gap-1">
                    <h1 className='text-5xl font-bold font-[anzo9]'>35M</h1>
                    <div className="mix relative"> 
                        <i className="ri-file-text-line absolute left-[-20px]"></i>
                        <h2 className='font-[anzo3] text-l'>Study resources</h2></div>
                    <div className="btnbutnot  rounded-full bg-[#B69DFC]  px-2">
                        1 new each second
                    </div>
                </div>
                <div className="value2 flex justify-center items-center flex-col gap-1">
                    <h1 className='text-5xl font-bold font-[anzo9]'>115K</h1>
                    <div className="mix2 relative">
                    <i className="ri-bank-line absolute left-[-20px]"></i>
                    <h2 className='font-[anzo3] text-l'>Institutions</h2>
                    </div>       
                    <div className="btnbutnot  rounded-full bg-[#2CC302] px-2">
                        In 100+ countries
                    </div></div>
                <div className="value3 flex justify-center items-center flex-col gap-1">  <h1 className='text-5xl font-bold font-[anzo9]'>60M</h1>
                <div className="mix3 relative">
                <i className="ri-group-line absolute left-[-20px] "></i>
                <h2 className='font-[anzo3] text-l'>Users</h2>
                </div>
                    
                    <div className="btnbutnot rounded-full bg-[#F36A1C]  px-2">
                        Every month
                    </div></div>
            </div>
        </div>
    )
}

export default Statcs