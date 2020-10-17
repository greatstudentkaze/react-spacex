import React from 'react';
import { Link } from 'react-router-dom';
import useLaunches from '../useLaunches';

import Main from '../Main';

import './index.css';

const Calendar = () => {
  const { data } = useLaunches();

  return (
    <>
      <Main name="SpaceX Calendar"/>
      <section className="calendar">
        <div className="container">
          <ul className="calendar-list">
            {data && data.map(launch => (
              <li key={launch.id} className="calendar-item">
                <article className="launches">
                  <div className="launches-image">
                    <img src={launch.links.patch.small} alt=""/>
                  </div>
                  <div className="launches-content">
                    <h2 className="launches-title">{launch.name}</h2>
                    <Link to={`/details/${launch.id}`} className="button launches-details">More Details</Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Calendar;
