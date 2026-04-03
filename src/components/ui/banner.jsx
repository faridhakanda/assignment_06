import React from 'react';
import Spinner from "https://i.ibb.co.com/cSTgzLKk/spinner.png"
import BannerImg from 'https://i.ibb.co.com/RGPtRDcJ/banner.png'
const Banner = () => {
    return (
        <div className='flex-row md:flex my-16 w-[1200px] mx-auto justify-between items-center'>
            <div>
                <div className='bg-violet-200 text-violet-600 flex items-center space-x-2 px-2 py-1 rounded-full m-1 w-fit '><img src={Spinner} alt="Spinner" /><h2>New: AI-Powered Tools Available</h2></div>
                <h2 className='font-extrabold text-[72px] text-[#101727]'>Supercharge Your <br></br>Digital Workflow</h2>
                <p className='text-[#627382] text-[18px]'>Access premium AI tools, design assets, templates, and productivity <br></br> software—all in one place. Start creating faster today.<br></br> Explore Products</p>
            </div>
            <div>
                <img src={BannerImg} alt="Banner Image" />
            </div>
        </div>
    );
};

export default Banner;