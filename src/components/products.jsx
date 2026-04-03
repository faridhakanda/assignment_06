
//import React, {useState} from 'react';
import { use } from 'react';

import ProductCard from './ui/productCard';

const Products = ({ fetchProducts, cartItems, setCartItems}) => {
    const products = use(fetchProducts);
    // const handleAddToCart = ({product}) => {
    //     const newProduct = [...cartItems, product];
    //     setCartItems(newProduct);
    //     //console.log("Added to Product!", product);
    // }
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[1200px] justify-center mx-auto my-5'>
                {products.map(product => 
                    <div 
                        key={product.id}
                    >
                        <ProductCard product={product} cartItems={cartItems} setCartItems={setCartItems}/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Products;