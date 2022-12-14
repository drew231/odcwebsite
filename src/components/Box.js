import React from 'react'
import img2 from '../images/card-item.png';
import img3 from '../images/css-img.png';
import img4 from '../images/js-img.png';
// import img5 from '../images/card-item4.png';
// import img6 from '../images/card-item5.png';
// import img7 from '../images/card-item6.png';

export default function Box() {
    return (
        <div className='container py-5'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='box'>
                        <img className='img-fluid' src={img2} />
                        <a href='/studentsec'>
                        <h2>HTML Basic I</h2>
                        <p>Everything you need to build fast
                            and beautiful websites with HTML5
                            and CSS3 in one bundle</p> </a>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className='box'>
                        <img className='img-fluid' src={img3} />
                        <a href='/studentsec'><h2>Basic CSS3</h2>
                        <p>Everything you need to build fast
                            and beautiful websites with HTML5
                            and CSS3 in one bundle</p></a>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className='box'>
                        <img className='img-fluid' src={img4} />
                        <a href='/studentsec'><h2>JavaScript</h2>
                        <p>Everything you need to build fast
                            and beautiful websites with HTML5
                            and CSS3 in one bundle</p></a>
                    </div>
                </div>

            </div>


        </div>
    )
}
