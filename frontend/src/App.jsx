import { useState } from 'react'
import './css/global.css';
import Navbar from './components/navbar';

function App() {
  return (
    <div className='main-container'>
      <Navbar/>
      <div className='title-div'>
        <div className='title-divs'></div>
        <div className='title-divs'></div>
      </div>
      <div className='courses-div'>
        <div className="courses"></div>
        <div className="courses"></div>
        <div className="courses"></div>
        <div className="courses"></div>
      </div>
      <div className='features-div'>
        <div className="feature"></div>
      </div>
    </div>
  )
}

export default App

