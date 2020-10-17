import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useLaunches from '../useLaunches';

import './index.css';
import Main from '../Main';

const Details = props => {
  const [launch, setLaunch] = useState(null);

  const { getLaunch } = useLaunches();

  useEffect(() => {
    setLaunch(getLaunch(props.match.params.id));
  }, [getLaunch, props.match.params.id]);

  const history = useHistory();

  if (!launch) return null;

  return (
    <>
      <Main name={launch.name} />
      <main className="details">
        <div className="container">
          <div className="details-row">
            <div className="details-image">
              <img src={launch.links.patch.small} alt={launch.name} />
            </div>
            <div className="details-content">
              <p className="details-description">{launch.details}</p>
            </div>
          </div>
        </div>
        <button type="button" className="button button-back" onClick={history.goBack}>Go back</button>
      </main>
    </>
  );
};

export default Details;
