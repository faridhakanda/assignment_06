
//import React, {useState} from 'react';
import { use } from 'react';

import ProductCard from './ui/productCard';

const Products = ({handleAddToCart, fetchProducts}) => {
    const products = use(fetchProducts);
    // const [cartItems, setCartItems] = useState([]);
    // const handleAddToCart = (product) => {
    //     const newProduct = [...cartItems, product];
    //     setCartItems(newProduct);
    //     console.log("Added to Product!", product);
    // }
    // console.log(products,  "products")
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[1200px] justify-center mx-auto my-5'>
                {products.map(product => 
                    <div 
                        key={product.id}
                    >
                        <ProductCard handleAddToCart={handleAddToCart} product={product}/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Products;