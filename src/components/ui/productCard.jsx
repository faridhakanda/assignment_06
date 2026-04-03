import React, {useState} from 'react';
import { IoMdCheckmark } from "react-icons/io";

import TagText from './tag';

const ProductCard = ({ product, cartItems, setCartItems}) => {
    const [addedToCart, setAddedToCart] = useState(true);
    const handleAddToCart = ({product}) => {
        const newProduct = [...cartItems, product];
        setCartItems(newProduct);
        console.log("product is:", product);
        //console.log("Added to Product!", product);
    }
    //console.log(product);
    return (
        <div className='w-96 bg-base-100 shadow-sm rounded-md p-5 m-2'>
            <div className='flex justify-between'>
                <img className='' src={product.icon} alt={product.description} />
                <TagText name={product.tag} />
            </div>
            <div>
                <h2 className='font-bold text-[24px] my-2'>{product.name}</h2>
                <p className='text-[#627382]'>{product.description}</p>
                <h3 className='my-1 '><span className='font-bold text-[20px]'>${product.price}</span>/<span className='text-[#627382]'>{product.period}</span></h3>
                <ul>
                    {product.features.map((feature, index) => 
                        <li 
                            key={index}
                            className='flex gap-1 items-center my-1 text-[#627382]'
                        >    
                            <div className='text-green-500'><IoMdCheckmark/></div>{feature}
                        </li>
                    )}
                    
                </ul>
            </div>
            <button 
                onClick={() => 
                    {
                        handleAddToCart(product)
                        setAddedToCart(false)
                    }
                    
                }
                className='cursor-pointer bg-gradient-to-l from-[#9514FA] to-[#4F39F6] w-full my-2 p-2 text-[#FFFFFF] font-medium rounded-full'
            >{addedToCart ? "Buy Now" : "Added to Cart"}</button>
        </div>
    );
};

export default ProductCard;