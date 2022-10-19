import React from 'react';

import Greeting from '../greeting/greeting_container'
import {Link} from 'react-router-dom'

export default ({currentUser, logout}) => {
    return (
      <header className="nav-bar">
        <ul className="nav-bar-items">
          <li>
            <Link to="/">
              <div className='nav-logo'>
                <img src="" />
                <h1 className="logo">RBNB</h1>
              </div>
            </Link>
          </li>
          <li>{/* Locations */}</li>
          <li>
            <Greeting />
          </li>
        </ul>
      </header>
    );
}

