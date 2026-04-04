import React from 'react';

const Sell = () => {
    return (
        <div className='bg-gradient-to-l from-[#9514FA] to-[#4F39F6] mb-12 py-12'>
            <div className='flex justify-between w-[1200px] mx-auto py-6 '>
                <div className='mx-auto'>
                    <h2 className='font-extrabold text-[60px] text-[#FFFFFF]'>50K+</h2>
                    <p className='text-[#FFFFFF] font-medium text-[24px]'>Active Users</p>
                </div>
                <span className='border-1 border-gray-100'></span>
                <div className='mx-auto'>
                    <h2 className='font-extrabold text-[60px] text-[#FFFFFF]'>200+</h2>
                    <p className='text-[#FFFFFF] font-medium text-[24px]'>Premium Tools</p>
                </div>
                <span className='border-1 border-gray-100'></span>
                <div className='mx-auto'>
                    <h2 className='font-extrabold text-[60px] text-[#FFFFFF]'>4.9</h2>
                    <p className='text-[#FFFFFF] font-medium text-[24px]'>Rating</p>
                </div>
            </div>
        </div>
        
    );
};

export default Sell;