import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <>
   <Navbar/>
    <div className='flex flex-col items-center justify-center h-auto w-screen mb-5'>
      <div className='h-[720px] w-screen bg-[#fff0e5]'>
        <div className='title-divs text-[144px] mt-20 flex items-start justify-center '>Coderoom</div>
      </div>
      <div className='h-[720px] w-screen bg-[#10162f] flex items-center gap-7 justify-center'>
        <div className="h-[370px] w-[300px] bg-[#eafdc6] rounded-md"></div>
        <div className="h-[370px] w-[300px] bg-[#eafdc6] rounded-md"></div>
        <div className="h-[370px] w-[300px] bg-[#eafdc6] rounded-md"></div>
        <div className="h-[370px] w-[300px] bg-[#eafdc6] rounded-md"></div>
      </div>
      <div className='h-[720px] w-screen bg-[#3a10e5]'>
        <div className="feature"></div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default App

