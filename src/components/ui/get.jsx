import React from 'react';
import Box from '../../assets/package.png';
import Rocket from '../../assets/rocket.png';
import User from '../../assets/user.png'
const GetStarted = () => {
    return (
        <div className='bg-[#F9FAFC] mx-auto my-12 py-14'>

            <h2 className='font-extrabold text-[48px] text-[#101727] text-center'>Get Started In 3 Steps</h2>
            <p className='text-[#627382] text-[16px] text-center mb-5'>Start using premium digital tools in minutes, not hours.</p>
            <div className='flex w-[1200px] mx-auto'>
                <div className=' bg-[#FFFFFF] shadow-sm border-1 border-[#FFFFFF] rounded-md px-6 py-12 m-2 justify-center text-center'>
                    <p className='z-10 absolute bg-gradient-to-l from-[#9514FA] to-[#4F39F6] rounded-full p-1 w-8 h-8 ml-86 -mt-11 text-[#FFFFFF]'>01</p>
                    <img className='mx-auto bg-violet-100 rounded-full p-1' src={User} alt="user" />
                    <h2 className='text-[#101727] font-bold text-[24px]'>Create Account</h2>
                    <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className='bg-[#FFFFFF] shadow-sm border-1 border-[#FFFFFF] rounded-md px-6 py-12 m-2 justify-center text-center'>
                    <p className='z-10 absolute bg-gradient-to-l from-[#9514FA] to-[#4F39F6] rounded-full p-1 w-8 h-8 ml-77 -mt-11 text-[#FFFFFF]'>02</p>
                    <img className='mx-auto bg-violet-100 rounded-full p-1' src={Box} alt="box" />
                    <h2 className='text-[#101727] font-bold text-[24px]'>Choose Products</h2>
                    <p className='text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                </div>
                <div className='bg-[#FFFFFF]  shadow-sm border-1 border-[#FFFFFF] rounded-md px-6 py-12 m-2 justify-center text-center'>
                    <p className='z-10 absolute bg-gradient-to-l from-[#9514FA] to-[#4F39F6] rounded-full p-1 w-8 h-8 ml-77 -mt-11 text-[#FFFFFF]'>03</p>
                    <div className='flex bg-violet-100 w-18 h-18  items-center mx-auto my-auto rounded-full'>
                        <img className='mx-auto justify-center' src={Rocket} alt="rocket image" width={45} height={45}/>
                    </div>
                    
                    <h2 className='text-[#101727] font-bold text-[24px]'>Start Creating</h2>
                    <p className='text-[#627382]'>Download and start using your premium tools immediately.</p>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;