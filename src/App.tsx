import React from 'react'
import Navbar from './components/Navbar'
import MainSection from './components/MainSection'

function App() {

  return (
    
    <div className='flex flex-col bg-gradient-to-r from-[#DAEDFF] from-%100 to-[#F3E0FF] to-%10 w-full h-[100vh] justify-around items-center'>
      <Navbar/>
      <MainSection/>
    </div>

      )
}

export default App
