import { useState } from 'react'
import { Suspense } from 'react'
import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import Products from './components/products'
import Carts from './components/carts'
import { fetchProducts } from './components/dataFetch'
import Banner from './components/ui/banner'
import Sell from './components/ui/sell'
import GetStarted from './components/ui/get'
import SimpleBanner from './components/ui/simple'
import ReadyBanner from './components/ui/ready'

// if i use here fetch code the products page re-render every 
// time after click buy now button
// const fetchProductsData = async () => {
//     const products = await fetch('/data.json');
//     return products.json();
// }
//const fetchProductsData = fetchProductsData();
  
function App() {
    const [changeBtn, setChangeBtn] = useState("products");
    const [cartItems, setCartItems] = useState([]);
    const handleAddToCart = (product) => {
        const newProduct = [...cartItems, product];
        setCartItems(newProduct);
    }
  return (
    <div className="">
        <Header cartItems={cartItems}/>
        
        <Banner />
        <Sell />
        {/* Premium section, products and carts */}
        <div className='text-center m-2'>
            <h2 className='font-extrabold text-[48px]'>Premium Digital Tools</h2>
            <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br></br> to boost your productivity and creativity.</p>
            <div className='flex border-base-300 border-1 rounded-full w-48 mx-auto my-2 justify-around'>
                
                    
                <button 
                    onClick={() => setChangeBtn("products")}
                    className={` ${changeBtn === "products" ? 'bg-gradient-to-l from-[#9514FA] to-[#4F39F6] font-medium text-[#FFFFFF]' : 'rounded-full'}   px-5 py-2 rounded-full cursor-pointer`}>
                    Products
                </button>
                <button 
                    onClick={() => setChangeBtn("carts")}
                    className={`${changeBtn === "carts" ? 'bg-gradient-to-l from-[#9514FA] to-[#4F39F6] font-medium text-[#FFFFFF]' : 'rounded-full'} px-5 py-2 rounded-full cursor-pointer`}>
                    Cart({cartItems.length})
                </button> 
                
                
            </div>
            <Suspense 
                fallback={
                        <span className="flex mx-auto justify-center my-5 loading loading-spinner loading-xl"></span>
                    }
                >
                {changeBtn === 'products' ? 
                    <Products fetchProducts={fetchProducts}  handleAddToCart={handleAddToCart}/> : 
                    <Carts  cartItems={cartItems} setCartItems={setCartItems}/>
                }
            
            </Suspense>
        </div>
        
        
        
       <GetStarted />
       <SimpleBanner />
       <ReadyBanner />
        <Footer />
    </div>
  )
}

export default App
