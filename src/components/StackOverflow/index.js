import React from 'react';
import './css/index.css';
import Navbar from './Navbar';
import Main from './Main';

function index() {
  return (
    <div className='stack-index'>
        <div className='stack-index-content'>
            <Navbar />
            <Main />
      </div>
    </div>
  )
}

export default index
