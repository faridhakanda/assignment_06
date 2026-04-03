import React from 'react';
import CartCard from './ui/cartCard';

const Carts = () => {
    const total = 1;
    return (
        <div className='border-1 border-base-300 rounded-md mx-auto justify-center p-4 m-4 w-[1200px]'>
            
            {total === 0 ? 
                <div className='text-center'>
                    <h2 className='font-bold text-[20px] p-2 text-[#627382]'>Cart is Empty!</h2>               
                </div> : 
                <div>
                    <h2 className='font-bold text-[24px] text-[#101727] p-2'>Your Cart</h2>
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <h2>Total Price: $839339</h2>
                    <button>Proceed To Checkout</button>
                </div>
            }
        </div>
    );
};

export default Carts;