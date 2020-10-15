import React from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Features from './components/Features';
import Footer from './components/Footer';

import './css/style.css';

import FetchData from './service/FetchData';

class App extends React.Component {
  state = {
    rocket: 'Falcon 1',
    rocketFeatures: null,
    rockets: [],
  };

  fetchData = new FetchData();

  componentDidMount() {
    this.updateRocket();
  }

  updateRocket() {
    this.fetchData.getRocket()
      .then(data => {
        this.setState({ rockets: data.map(rocket => rocket.name) });
        return data;
      })
      .then(data => data.find(rocket => rocket.name === this.state.rocket))
      .then(rocketFeatures => this.setState({ rocketFeatures }));
  }

  changeRocket = rocket => {
    this.setState({ rocket }, this.updateRocket);
  }

  render() {
    return (
      <React.Fragment>
        <Header rockets={this.state.rockets} changeRocket={this.changeRocket} />
        <Main rocket={this.state.rocket} />
        {this.state.rocketFeatures && <Features {...this.state.rocketFeatures} />}
        <Footer />
      </React.Fragment>
    );
  };
}

export default App;
