
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
        <h2 >Hello, World</h2>
        <button className='btn  btn-secondary btn-outline'>Click Me!</button>
        <h2 className='text-center items-center mx-auto text-3xl my-auto bg-yellow-400 text-lime-500'>Digital Tools Project for Assignment-06!</h2>
    
        <button className='btn btn-outline btn-primary'>Farid Akanda</button>
    
        <button className="btn" onclick="my_modal_2.showModal()">open modal</button>
        <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
            <h3 className="text-lg font-bold">Hello!</h3>
            <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
            <button>close</button>
        </form>
        </dialog>
    </div>
  )
}

export default App
