import { useState } from 'react'
import { Suspense } from 'react'
import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import Products from './components/products'


const fetchProductsData = async () => {
    const products = await fetch('/data.json');
    return products.json();
  }
function App() {
  const [changeBtn, setChangeBtn] = useState(true);

  const fetchProducts = fetchProductsData();
  return (
    <div className="">
        <Header />
        <div className='text-center m-2'>
            <h2 className='font-extrabold text-[48px]'>Premium Digital Tools</h2>
            <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br></br> to boost your productivity and creativity.</p>
            <div className='flex bg-base-300 rounded-full w-48 mx-auto my-2 justify-around'>
                
                    <button className='bg-gradient-to-l from-[#9514FA] to-[#4F39F6] px-5 py-2 rounded-full'>Products</button>
                    <button className='bg-gradient-to-l from-[#9514FA] to-[#4F39F6] px-5 py-2 rounded-full'>Cart(2)</button>
                
                
                
            </div>
        </div>
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
            <Products fetchProducts={fetchProducts}/>
        </Suspense>
        
       
        <Footer />
    </div>
  )
}

export default App
