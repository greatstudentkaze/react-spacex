import React from 'react';
import { useHistory } from 'react-router-dom';

import './index.css';

import Main from '../Main';

const Details = () => {
  const history = useHistory();

  return (
    <>
      <Main />
      <main className="details">
        <div className="container">
          <div className="details-row">
            <div className="details-image">
              <img src="https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png" alt="" />
            </div>
            <div className="details-content">
              <p className="details-description">Engine failure at 33 seconds and loss of vehicle</p>
            </div>
          </div>
          <div>
            <iframe className="details-youtube" width="560" height="315" src="https://www.youtube.com/embed/dLQ2tZEH6G0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
        </div>
        <button type="button" className="button button-back" onClick={history.goBack}>Go back</button>
      </main>
    </>
  );
};

export default Details;
