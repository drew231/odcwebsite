import React, { useState } from 'react'
import { Users } from './Users'

export default function SearchBar({ data, placeholder }) {

  const [query, setQuery] = useState("");
 
  return (
    <div className='searchBar'>
      <div className='searchInput'>
       

        {/* <ul className='list'>
          {Users.filter(Users => Users.name.toLowerCase().includes(query)).map((Users) => (
            <li className='list#-item'>{Users.name}</li>
          ))}

        </ul> */}

      </div>
    </div>
  )
}
