
import React from 'react';
import { use } from 'react';
import Card from './ui/card';

const Products = ({fetchProducts}) => {
    const products = use(fetchProducts);
    // console.log(products,  "products")
    return (
        <div>
            <div className='grid grid-cols-3 w-[1200px] justify-center mx-auto my-5'>
                {products.map(product => 
                    <div 
                        key={product.id}
                    >
                        <Card product={product}/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Products;