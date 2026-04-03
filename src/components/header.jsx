import React from 'react';
import ShopingCart from "../assets/products/shopping-cart.png"
const Header = ({cartItems}) => {
    const cartLength = cartItems.length;
    return (
        <div className='shadow-sm '>
            <div className='flex justify-around py-2  items-center w-[1200px]  mx-auto'>
                <div>
                    <h2 className='bg-gradient-to-l from-[#9514FA] to-[#4F39F6] text-3xl font-bold bg-clip-text text-transparent'>DigiTools</h2>
                </div>
                <div className=''>
                    <ul className='flex space-x-3 font-semibold text-[#101727]'>
                        <li>Products</li>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Testimonials</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className='flex  text-[#101727] font-semibold z-1 space-x-6 p-2'>
                    <div className='flex space-x-2 items-center'>
                        <img className='' src={ShopingCart} alt="Shoping cart Bucket" />
                        <p className='z-10 absolute text-red-500 -mt-5 ml-1 text-sm'>{cartLength}</p>
                        <h2>Login</h2>
                    </div>
                    <h2 className='bg-gradient-to-l from-[#9514FA] to-[#4F39F6] text-[#FFFFFF] px-2 py-1 rounded-3xl'>Get Started</h2>
                </div>
                
            </div>
        </div>
        
    );
};

export default Header;