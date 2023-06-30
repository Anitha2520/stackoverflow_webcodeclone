import React from 'react';
import ReactQuill from 'react-quill';
import { TagsInput } from 'react-tag-input-component';
import './Question.css';

export default function Question() {
  return (
    <div className='add-question'>
        <div className='add-question-container'>
            <div className='head-title'>
                <h1>Ask a public question</h1>
            </div>
            <div className='question-container'>
                <div className='question-options'>
                    <div className='question-option'>
                        <div className='title'><h3>
                            Title</h3>
                        <small>
                        Be specific and imagine you’re asking a question to another person.
                        </small>
                        <input type='text' placeholder='Add question title'/>
                        </div>
                    </div>
                    <div className='question-option'>
                        <div className='title'><h3>
                        What are the details of your problem?</h3>
                        <small>
                        Introduce the problem and expand on what you put in the title. Minimum 20 characters.
                        </small>
                        <textarea type='text' placeholder='body content'/>
                        </div>
                    </div>
                    <div className='question-option'>
                        <div className='title'><h3>
                        Tags</h3>
                        <small>
                        Add up to 5 tags to describe what your question is about. Start typing to see suggestions.
                        </small>
                        <TagsInput  name='tags' placeHolder='Add tags'/>
                        </div>
                    </div>                     
                </div>
                
            </div>
            <button className='button'>Add your question</button>
        </div>
    </div>
  )
}
