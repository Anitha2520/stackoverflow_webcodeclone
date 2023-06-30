import { Link } from 'react-router-dom';
import React from 'react';
import AllQuestions from './AllQuestions';
import './css/Main.css';

function Main() {
  return (
    <div className='main'>
      <div className='main-container'>
        <div className='main-top'>
            <h2>All Questions</h2>
            <Link to ='/add-question'>
                <button>Ask Question</button>
            </Link>
        </div>
        <div className='main-desc'>
            <p>All Question start</p>
        </div>
        <div className='queations'>
            <div className='question'>
                <AllQuestions />
                <AllQuestions />
                <AllQuestions />
                <AllQuestions />
                <AllQuestions />
            </div>
        </div>

      </div>
    </div>
  )
}

export default Main
