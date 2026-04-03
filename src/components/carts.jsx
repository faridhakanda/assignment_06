import React from 'react';
import CartCard from './ui/cartCard';

const Carts = ({cartItems, setCartItems}) => {
    
    //console.log("Cart items: ", cartItems);
    let total = cartItems.length;
    const handleDeleteToCart = (product) => {
        const filteredProduct = cartItems.filter(cart => cart.name !== product.name)
        //console.log(filteredProduct);
        setCartItems(filteredProduct);
        //console.log("deleted product!");
    }
    
    const handleToProceed = () => {
        setCartItems([]);
    }

    const updatePrice = () => {
        let total = cartItems.reduce((initialPrice, item) => initialPrice + item.price, 0);
        return total;
    }
    let currentPrice = updatePrice();
    return (
        <div className='border-1 border-base-300 rounded-md mx-auto justify-center p-4 m-4 w-[1200px]'>
            
            {total === 0 ? 
                <div className='text-center'>
                    <h2 className='font-bold text-[20px] p-2 text-[#627382]'>Cart is Empty!</h2>               
                </div> : 
                <div>
                    <h2 className='font-bold text-[24px] text-[#101727] p-2'>Your Cart</h2>
                    
                   {cartItems.map(cartProduct => 
                    <div key={cartProduct.id}>
                        <CartCard cartProduct={cartProduct} handleDeleteToCart={handleDeleteToCart}/>
                    </div>
                    
                   )}
                    <div className='flex justify-between items-center p-1 mx-2'>
                        <h2 className='text-[#627382] text-[16px]'>Total:</h2>
                        <h2 className='text-[#101727] font-bold text-[24px]'>${currentPrice}</h2>
                    </div>
                    <button onClick={handleToProceed} className='cursor-pointer bg-gradient-to-l from-[#9514FA] to-[#4F39F6] w-full p-2 rounded-full text-[#FFFFFF] font-bold text-[16px] my-2'>Proceed To Checkout</button>
                </div>
            }
        </div>
    );
};

export default Carts;