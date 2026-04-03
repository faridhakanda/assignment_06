import React from 'react';
//import operation from "../../assets/products/camera.png"
const CartCard = ({cartProduct, handleDeleteToCart}) => {
    console.log(cartProduct, "Cart item is added!");
    return (
        <div className='flex justify-between space-x-5 bg-gray-300 p-5 m-1 rounded-md '>
            <div className='flex items-center space-x-3'>
                <div className='w-[42px] h-[42px] items-center bg-[#FFFFFF] rounded-full'>
                    <img className='items-center justify-center m-1 ' src={cartProduct.icon} alt={cartProduct.description} />
                </div>
                
                <div>
                    <h2 className='font-semibold text-[20px] text-[#101727]'>{cartProduct.name}</h2>
                    <p className='text-[#627382] font-medium text-[16px]'>${cartProduct.price}</p>
                </div>
            </div>
            <button onClick={() => handleDeleteToCart(cartProduct)} className='cursor-pointer text-[#FF3980] font-bold text-[16px]'>Remove</button>
            
        </div>
    );
};

export default CartCard;