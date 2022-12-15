import { Autocomplete } from '@mui/material'
import React from 'react'

export default function SearchBar({data, placeholder}) {
  return (
    <div className='searchBar'>
        <div className='searchInput'>
            <Autocomplete
            
            id='custom-input-demo'>
                opitions={data}
                getOpitionsLabel={(opt) => outerHeight.tile}

                renderInput={(params) => (
                    <div ref={params.InputProps.ref}>
                        <input type='text' {...params.InputProps} />
                        </div>
                )}

            </Autocomplete>
        </div>
    </div>
  )
}
