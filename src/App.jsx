import { CopyIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { RiFindReplaceLine } from "react-icons/ri";
import './App.css';
import Quotes from "./json_data/QUOTE_DATA.json";

function App() {
  
  let [ currentQuote , setCurrentQuote ] = useState(Quotes[1]);

  let changeQuote = ()=>{
    let randomNum = Math.floor((Math.random() * Quotes.length) + 1);
    setCurrentQuote(Quotes[randomNum]);
  }

  let [ highlighte , setHighlight ] = useState(false)

  let copyHandler = ()=>{
    let copyQuote = `${currentQuote.quote} --${currentQuote.author}`
    navigator.clipboard.writeText(copyQuote)
    .then(()=>{
      setHighlight(true)

    setTimeout(() => {
      setHighlight(false)
    }, 2000);
    })
    .catch((err)=>{
      alert("failed to copy Quote");
      console.log(err)
    })
  }

  return (
    <>
      <div className='w-full min-w-[100%] h-screen animate-color-change'>{/* this div is for animation */}
        <div className='w-full h-screen flex justify-center items-center'> {/* this div is for box */}
          <div className='w-auto max-w-[80%] h-auto bg-gray-300 flex flex-col p-10 rounded-md'>
            <p className={`font-sofadi font-semibold text-3xl leading-8 tracking-wider ${highlighte ? "bg-indigo-300" : "bg-transparent"}`}>{currentQuote.quote} --{currentQuote.author}
            </p>
            <div className='flex mt-3 justify-center items-center space-x-4'>
              <button className='bg-indigo-300 px-4 py-2 border-2 font-medium text-[17px] rounded-lg hover:bg-indigo-400 hover:border-2 hover:border-indigo-700 hover:scale-105 transition duration-300 delay-150 ease-in-out will-change-transform flex justify-center items-center space-x-1'> <RiFindReplaceLine /><span className='' onClick={changeQuote}>Generate Quote</span></button>
              <button className='bg-indigo-300 px-4 py-2 border-2 font-medium text-[17px] rounded-lg hover:bg-indigo-400 hover:border-2 hover:border-indigo-700 hover:scale-105 transition duration-300 delay-150 ease-in-out will-change-transform flex justify-center items-center space-x-1' onClick={copyHandler}> <CopyIcon />  <span>Copy</span> </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
