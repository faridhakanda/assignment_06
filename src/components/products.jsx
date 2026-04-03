
import { use } from 'react';
import ProductCard from './ui/productCard';

const Products = ({  fetchProducts, handleAddToCart}) => {
    const products = use(fetchProducts);
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[1200px] justify-center mx-auto my-5'>
                {products.map(product => 
                    <div 
                        key={product.id}
                    >
                        <ProductCard product={product} handleAddToCart={handleAddToCart}/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Products;