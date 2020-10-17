import React from 'react';

import './index.css';

const video = {
  'Falcon 1': 'moon.mp4',
  'Falcon 9': 'earth.mp4',
  'Falcon Heavy': 'mars.mp4',
  'other': 'space.mp4'
};

const Main = ({ rocket, name }) => (
  <section className="main">
    <h1 className="title">{name || rocket}</h1>
    {rocket && <div className="video-container">
      <video src={`./video/${video.hasOwnProperty(rocket) ? video[rocket] : video.other}`}
             className="video" autoPlay loop muted/>
    </div>}
  </section>
);

export default Main;
