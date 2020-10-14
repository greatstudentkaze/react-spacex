import React from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Features from './components/Features';
import Footer from './components/Footer';

import './css/style.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Features />
      <Footer />
    </React.Fragment>
  );
}

export default App;
