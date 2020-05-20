// == Import : npm
import React from 'react';

// Components
import Header from '../Header';
import Navigation from '../Navigation';
import Resume from '../Resume';
import Portfolio from '../Portfolio';
import Modal1 from '../Modal1';
import Modal2 from '../Modal2';
import Modal3 from '../Modal3';
import About from '../About';
import Contact from '../Contact';
import Footer from '../Footer';

// == Import : local
import './app.scss';

// == Composant
const App = () => (
  <div id="app">
    <Navigation />
    <Header />
    <Resume />
    <Portfolio />
    <Modal1 />
    <Modal2 />
    <Modal3 />
    <About />
    <Contact />
    <Footer />
  </div>
);

// == Export
export default App;
