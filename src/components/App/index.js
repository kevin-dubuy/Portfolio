// == Import : npm
import React from 'react';

// Components
import Header from '../Header';
import Navigation from '../Navigation';
import Resume from '../Resume';
import Portfolio from '../Portfolio';

// == Import : local
import './app.scss';

// == Composant
const App = () => (
  <div id="app">
    <Navigation />
    <Header />
    <Resume />
    <Portfolio />
  </div>
);

// == Export
export default App;
