import React from 'react';

const ReadyBanner = () => {
    return (
        <div className='bg-gradient-to-l from-[#9514FA] to-[#4F39F6] text-center'>
            <div className='py-20 text-[#FFFFFF]'>
                <h2 className='font-extrabold text-[40px]'>Ready To Transform Your Workflow?</h2>
                <p>Join thousands of professionals who are already using Digitools to work smarter. <br></br>Start your free trial today.</p>
                <div>
                    <div className='flex mx-auto mt-5 mb-3 justify-center space-x-2'>
                        <div className='bg-base-200 items-center text-center rounded-full'>
                            <button className='cursor-pointer bg-gradient-to-l from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent items-center text-center px-3 py-2 font-semibold'>Explore Products</button>
                        </div>
                        
                        <button className='cursor-pointer border-1 border-base-300 px-3 py-2 text-center rounded-full font-semibold'>View Pricing</button>
                    </div>
                    <p className='text-[#FFFFFF] my-2'>14-day free trial • No credit card required • Cancel anytime</p>
                </div>
            </div>
           
        </div>
    );
};

export default ReadyBanner;