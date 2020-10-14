import React from 'react';

import './index.css';
import logo from '../../img/logo.svg';

const Header = () => (
  <header className="header">
    <img className="logo" src={logo} alt="Logo Space X"/>
    <nav className="main-nav nav">
      <ul className="list">
        <li className="item">
          <a href="/" className="item-link">Falcon 1</a>
        </li>
        <li className="item">
          <a href="/" className="item-link">Falcon 9</a>
        </li>
        <li className="item">
          <a href="/" className="item-link">Falcon Heavy</a>
        </li>
        <li className="item">
          <a href="/" className="item-link">Updates</a>
        </li>
      </ul>
    </nav>
    <nav className="secondary-nav">
      <ul className="list">
        <li className="item">
          <a href="/" className="item-link">Home</a>
        </li>
        <li className="item">
          <a href="calendar.html" className="item-link">Calendar</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
