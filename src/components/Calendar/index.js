import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Main from '../Main';

import './index.css';

import FetchData from '../../service/FetchData';

const fetchData = new FetchData();

const Calendar = () => {

  const [data, setData] = useState();

  useEffect(() => {
    fetchData.getLaunches()
      .then(launches => setData(launches));
  }, []);

  return (
    <>
      <Main/>
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
                    <Link to="/details" className="button launches-details">More Details</Link>
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
