import React from 'react'
import {FaYoutube, FaCheck, FaArrowAltCircleRight} from 'react-icons/fa'

export default function Search() {
  return (
    <div className='searchInput mt-3'> 
        <input className='form-control' type="text" placeholder="Search Student" aria-label="default input example" />
        <div className='SearchIcons'><FaArrowAltCircleRight/></div>
    </div>
  )
}
