
import './App.css'
import Footer from './components/footer'
import Header from './components/header'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="">
        <Header />
        <h2 >Hello, World</h2>
        <button className='btn  btn-secondary btn-outline'>Click Me!</button>
        <h2 className='text-center items-center mx-auto text-3xl my-auto bg-yellow-400 text-lime-500'>Digital Tools Project for Assignment-06!</h2>
    
        <button className='btn btn-outline btn-primary'>Farid Akanda</button>
    
        <Footer />
    </div>
  )
}

export default App
