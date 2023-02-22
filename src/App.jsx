import { useState } from 'react'
import reactLogo from './assets/react.svg'
import About from './components/About/About'
import Booking from './components/Booking/Booking'
import Features from './components/Features/Features'
import Footer from './components/Footer/Footer'
import Header from './components/header/header'
import Navbar from './components/Navigation/Navbar'
import Stories from './components/Stories/Stories'
import Tours from './components/Tours/Tours'
// import './App.css'

function App() {

  return (
    <div className="s">
      <Navbar/>
     <Header/>
     <About/>
     <Features/>
     <Tours/>
     <Stories/>
     <Booking/>
     <Footer/>
    </div> 
  )
}

export default App
