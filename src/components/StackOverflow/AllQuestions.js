import React from 'react'
import './css/AllQuestion.css';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

function AllQuestions() {
  return (
    <div className='all-questions'>
      <div className='all-queations-container'>
        <div className='all-questions-left'>
            <div className='all-options'>
                <div className='all-option'>
                    <p>0</p>
                    <span>Votes</span>
                </div>
                <div className='all-option'>
                    <p>0</p>
                    <span>Answers</span>
                </div>
                <div className='all-option'>
                    <small>0 Views</small>                    
                </div>
            </div>
        </div>
        <div className='question-answer'>
            <Link to="/question">This is title This is titleThis is titleThis is title</Link>
            <div style={{
                width:"90%"
            }}>
                <div>This is answer This is titleThis is titleThis is titleThis is titleThis is titleThis is titleThis is titleThis is titleThis is titleThis is titleThis is titleThis is titleThis is title</div>
            </div>
            <div style={{
                display:"flex"
            }}>
                <span className='question-tags'>react</span>
                <span className='question-tags'>ant</span>
                <span className='question-tags'>frontend</span>
            </div>
            <div className='author'>
                <small>Timestamp</small>
                <span className='author-details'><Avatar />
                <p>User name</p></span>
            </div>

        </div>
      </div>
    </div>
  )
}

export default AllQuestions
