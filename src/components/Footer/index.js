import React from 'react';

import './index.css';
import logo from '../../img/logo.svg';

const Footer = ({ elon_twitter: elonMusk, flickr, twitter, website }) => (
  <footer className="footer">
    <img src={logo} alt="logo SpaceX" className="logo"/>
    <nav className="footer-nav">
      <ul className="list">
        <li className="item">
          <a href={elonMusk} rel="noopener noreferrer" target='_blank' className="item-link">Elon Musk Twitter</a>
        </li>
        <li className="item">
          <a href={twitter} rel="noopener noreferrer" target='_blank' className="item-link">Twitter</a>
        </li>
        <li className="item">
          <a href={flickr} rel="noopener noreferrer" target='_blank' className="item-link">Flickr</a>
        </li>
        <li className="item">
          <a href={website} rel="noopener noreferrer" target='_blank' className="item-link">Website</a>
        </li>
      </ul>
    </nav>
    <p className="footer-text">
      For additional questions, contact
      <a className="footer-link" href="mailto:rideshare@spacex.com">rideshare@spacex.com</a>
    </p>
  </footer>
);

export default Footer;
