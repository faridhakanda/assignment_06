import { useState } from 'react'
import { Suspense } from 'react'
import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import Products from './components/products'
import Carts from './components/carts'


const fetchProductsData = async () => {
    const products = await fetch('/data.json');
    return products.json();
  }
function App() {
  const [changeBtn, setChangeBtn] = useState("products");

  const fetchProducts = fetchProductsData();
  return (
    <div className="">
        <Header />
        <div className='text-center m-2'>
            <h2 className='font-extrabold text-[48px]'>Premium Digital Tools</h2>
            <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br></br> to boost your productivity and creativity.</p>
            <div className='flex border-base-300 border-1 rounded-full w-48 mx-auto my-2 justify-around'>
                
                    
                <button 
                    onClick={() => setChangeBtn("products")}
                    className={` ${changeBtn === "products" ? 'bg-gradient-to-l from-[#9514FA] to-[#4F39F6] font-medium text-[#FFFFFF]' : 'rounded-full'}   px-5 py-2 rounded-full`}>
                    Products
                </button>
                <button 
                    onClick={() => setChangeBtn("carts")}
                    className={`${changeBtn === "carts" ? 'bg-gradient-to-l from-[#9514FA] to-[#4F39F6] font-medium text-[#FFFFFF]' : 'rounded-full'} px-5 py-2 rounded-full`}>
                    Cart(2)
                </button> 
                
                
            </div>
        </div>
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
            {changeBtn === "products" ? 
                <Products fetchProducts={fetchProducts}/> :
                <Carts />
            }
            
        </Suspense>
        
       
        <Footer />
    </div>
  )
}

export default App
