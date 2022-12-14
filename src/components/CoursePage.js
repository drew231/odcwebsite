import React from 'react'
import Box from './Box'
import Footer from './Footer'
import Navbar from './Navbar'
import Search from './Search'

export default function CoursePage() {
  return (
    
    <div className='Coursebg'>
      <Navbar />
      <div className='mb-3 mt-3'><Search /></div>
      
      <Box />
        <Footer />

        
        </div>
  )
}
