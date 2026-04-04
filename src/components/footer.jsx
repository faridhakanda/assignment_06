import React from 'react';
import Facebook from '../assets/facebook.png';
import Instragram from '../assets/instragram.png';
import X from '../assets/x.png'
const Footer = () => {
    return (
        <div className='bg-[#101727]'>
            <div className='pt-18'>
                <div className='flex justify-between mx-auto w-[1200px] pb-6'>
                    <div>
                        <h2 className='font-bold text-[48px] text-[#FFFFFF] mb-2'>DigiTools</h2>
                        <p className='text-[#627382]'>Premium digital tools for creators. <br></br>
                        professionals, and businesses. Work smarter
                        <br></br> with our suite of powerful tools.</p>
                    </div>
                    <div>
                        <h2 className='text-[#FFFFFF] font-bold text-[20px]'>Product</h2>
                        <ul className='text-[#627382] my-1'>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Templates</li>
                            <li>Integrations</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-[#FFFFFF] font-bold text-[20px]'>Company</h2>
                        <ul className='text-[#627382] my-1'>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>Press</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-[#FFFFFF] font-bold text-[20px]'>Resources</h2>
                        <ul className='text-[#627382] my-1'>
                            <li>Documentatoin</li>
                            <li>Help Center</li>
                            <li>Community</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-[#FFFFFF] font-bold text-[20px]'>Social Links</h2>
                        <ul className='flex space-x-2'>
                            <img className='bg-[#FFFFFF] p-1 rounded-full' src={Instragram} alt="instragram" />
                            <img className='bg-[#FFFFFF] p-1 rounded-full' src={Facebook} alt="facebook" />
                            <img className='bg-[#FFFFFF] p-1 rounded-full' src={X} alt="X" />
                        </ul>
                    </div>
                </div>
                
                <hr className='border-[1px] border-gray-800'></hr>
                <div className='grid md:grid-cols-2 justify-between mx-auto w-[1200px] py-5 text-[#627382]'>
                    <p>&copy; 2026 Digitools. All rights reserved.</p>
                    <div className='flex space-x-5'>
                        <p>Privacy Policy</p>
                        <p>Terms of service</p>
                        <p>Cookies</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;