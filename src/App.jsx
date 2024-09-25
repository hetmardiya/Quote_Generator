
import './App.css'

function App() {

  return (
    <>
      <div className='w-full min-w-[100%] h-screen bg-green-400'>{/* this div is for animation */}
        <div className='w-full h-screen flex justify-center items-center'> {/* this div is for box */}
          <div className='w-auto max-w-[80%] h-auto bg-gray-300 flex flex-col p-10 rounded-md'>
            <p className='font-sofadi font-semibold text-3xl leading-8 tracking-wider'>helllo welcom tho the shoqSure! Here are three additional offers for your E-Carworkshop:

Limited Time Battery Check Offer
 </p>
            <div className='flex mt-3 justify-center items-center space-x-4'>
              <button className='bg-indigo-300 px-4 py-2 border-2 font-medium text-[17px] rounded-lg hover:bg-indigo-400 hover:border-2 hover:border-indigo-700 hover:scale-105 transition duration-300 delay-150 ease-in-out will-change-transform'>Generate Quote</button>
              <button className='bg-indigo-300 px-4 py-2 border-2 font-medium text-[17px] rounded-lg hover:bg-indigo-400 hover:border-2 hover:border-indigo-700 hover:scale-105 transition duration-300 delay-150 ease-in-out will-change-transform'>Copy</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
