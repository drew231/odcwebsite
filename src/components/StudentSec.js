import React from 'react'
import { useState } from 'react'
import img1 from '../images/odc.png';
import profile from '../images/profile.png'
import Table from '../Table';
import Footer from './Footer';
import { Users } from './Users';


export default function SearchBar({ data, placeholder }) {

    const [query, setQuery] = useState("");

    const search = (data) => {
        return data.filter((item) => item.fitst_name.toLowerCase().includes(query)) 
    };

    return (
        <div>

            {/* nanbar */}
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src={img1} /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                        </ul>
                        <form class="d-flex" role="search">
                            <a href='/coursepage' className='btn0'>Back</a>
                        </form>
                    </div>
                </div>
            </nav>

            <input type='text' placeholder='Search...' className='search0 mt-5 mb-5 form-control'
                onChange={(e) => setQuery(e.target.value)} />


                <Table data={search(Users)}/>
         
            <Footer />
        </div>
    )
}
