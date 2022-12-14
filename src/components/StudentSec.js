import React from 'react'
import img1 from '../images/odc.png';
import Footer from './Footer';

export default function StudentSec() {
    return (
        <div>
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

            <div className='studentInfo'>
                <div className='container'>
                    <div className='row py-5'>
                        <div className='col-md-3'>
                            <p>lorem</p>
                        </div>

                        <div className='col-md-3'>
                            <p>lorem</p>
                        </div>

                        <div className='col-md-3'>
                            <p>lorem</p>
                        </div>

                        <div className='col-md-3'>
                            <p>lorem</p>
                        </div>
                    </div>

                    

                </div>

            </div>

            <Footer />
        </div>
    )
}
