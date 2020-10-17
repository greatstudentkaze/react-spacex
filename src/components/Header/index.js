import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './index.css';
import logo from '../../img/logo.svg';

const Header = ({ rockets, changeRocket }) => (
  <header className="header">
    <Link to='/'>
      <img className="logo" src={logo} alt="Logo Space X"/>
    </Link>
    <nav className="main-nav nav">
      <ul className="list">
        {rockets.map((rocket, i) => (
          <li className="item" key={i}>
            <Link to="/rocket" className="item-link"
               onClick={() => {changeRocket(rocket)}}>{rocket}</Link>
          </li>
        ))}
      </ul>
    </nav>
    <nav className="secondary-nav">
      <ul className="list">
        <li className="item">
          <NavLink exact to="/" className="item-link" activeClassName="active">Home</NavLink>
        </li>
        <li className="item">
          <NavLink to="/calendar" className="item-link" activeClassName="active">Calendar</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
