import React from 'react';
import '../css/Header.css';
import SearchIcon from '@mui/icons-material/Search';
// import InboxIcon from '@mui/icons-material/Inbox';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return <header>
    <div className='header-container'>
      <div className="header-left">
        <Link to = '/'>
        <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*rEQGD7eciTUkoaePqyqY2A.png" alt='Logo' 
        style={{Height:"auto",width:"150px"}}/>
        </Link>
        <h3>Products</h3>
      </div>
      <div className="header-middle">
        <div className="header-search-container">
          <SearchIcon/>
          <input type='text' placeholder='Search...' />
        </div>
      </div>
      <div className="header-right">
      <div className="header-right-container">
        <Avatar />        
      </div>
      </div>
    </div>
  </header>
}

export default Header 
