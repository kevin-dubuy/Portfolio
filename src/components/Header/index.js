import React from 'react';
import {
  Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller,
} from 'react-scroll';

// == CSS
import './header.scss';

// == Composant
const Header = () => (
  <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">Welcome to my online portfolio!</div>
        <div className="intro-heading text-uppercase">Full stack web developper</div>
        <Link activeClass="active" className="nav-link" to="portfolio" spy smooth duration={500}><button className="btn btn-primary btn-xl text-uppercase" href="#services">Tell Me More</button></Link>
      </div>
    </div>
  </header>
);

// == Export
export default Header;
