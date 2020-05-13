import React from 'react';
import {
  Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller,
} from 'react-scroll';

// == CSS
import './navigation.scss';

// == Composant
class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink" id="mainNav">
        <div className="container">
          <a className="navbar-brand" href="#page-top" onClick={this.scrollToTop}>Kevin Dubuy</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item">
                {/* <a className="nav-link" href="#resume">CV</a> */}
                <Link activeClass="active" className="nav-link" to="resume" spy smooth duration={500}>CV</Link>
              </li>
              <li className="nav-item">
                <Link activeClass="active" className="nav-link" to="portfolio" spy smooth duration={500}>Portfolio</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

// == Export
export default Navigation;
