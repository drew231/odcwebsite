import React from 'react';
import './App.css';
import Slider from './components/Slider';

function App() {
  return (

    <div className='hero-bg'>
      <div className='container-fluid'>

        <div className='row'>
          <div className='col-md-6 colon1'>
            <Slider />
          </div>

          <div className='col-md-6 colon2'>
            <div className='colon2_a'>
              <h2>Welcome to the</h2>
              <h1>Orange Digital <br />Center</h1>
              <p> &lt;coding.school &#47; &gt; </p>
            </div>
            <ul className='text-center mt-5'>
              <button className='btn0'>Get Started</button> 
              <button className='btn0'>Sign In</button>
            </ul>
          </div>
        </div>


      </div>

    </div>

  );
}

export default App;
