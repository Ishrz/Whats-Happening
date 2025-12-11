import React from 'react'
import Navbar from './components/Navbar'
import News from './page/News'
import Category from './components/Category'
import Footer from './components/Footer'

import { useMycontext } from './context/NewsContext'
const App = () => {
  
  return (
    <div className='relative'>
      <Navbar className="sticky top-0 z-10"/>
      <Category className="py-10 sticky top-10 z-9 " />

      <News className='mb-15' />
      <Footer className=" w-full"/>
    </div>
  )
}

export default App
