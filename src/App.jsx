import React from 'react'
import Navbar from './Comonents/Navbar'
import Textitem from './Comonents/Textitem'
// import About from './Comonents/About'

export default function App() {
  return (
    <>

      <Navbar title="Text-Edit" aboutText="About Us" />

      <div className="container my-3" >
      <Textitem heading="Enter Your Text Here" />
      </div>

      {/* <About/> */}
      
    </>
  )
}
