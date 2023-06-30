import React from 'react';
import '../StackOverflow/css/index.css';
import MainQuestion from './MainQuestion';
import Navbar from '../StackOverflow/Navbar';

function index() {
  return (
    <div className='stack-index'>
        <div className='stack-index-content'>
            <Navbar />
            <MainQuestion />
      </div>
    </div>
  )
}

export default index
