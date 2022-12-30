import React from 'react'
import sliderImg1 from '../images/odc_1.jpg';
import sliderImg2 from '../images/odc2.jpg';
import sliderImg3 from '../images/odc3.jpg';

export default function Slider() {
    return (
        <div className='slider'>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img className='img-fluid' src={sliderImg1} alt="odc1"/>
                    </div>
                    <div class="carousel-item">
                        <img className='img-fluid' src={sliderImg2} alt="odc2"/>
                    </div>
                    <div class="carousel-item">
                        <img className='img-fluid' src={sliderImg3} class="d-block w-100" alt="ode3"/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
