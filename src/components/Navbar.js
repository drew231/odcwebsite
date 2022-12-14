import React from 'react';
import img1 from '../images/odc.png';

export default function Navbar() {
  return (
    <div className='header'>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src={img1}></img></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            
            </ul>
            <form class="d-flex" role="search">
            <a href='#'><button className='btn0'>Sign In</button></a>
            </form>
          </div>
        </div>
      </nav>

    </div>
  )
}
