import React from 'react';
import {
  Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller,
} from 'react-scroll';

// == Assets
import Logo from '../../assets/img/logo.svg';

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
      <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-shrink" id="mainNav">
        <div className="container">
        <a className="navbar-brand" onClick={this.scrollToTop}><img
            src={Logo}
            id="logo"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          /></a>
          <a className="navbar-brand" onClick={this.scrollToTop}>Kevin Dubuy</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item">
                <Link activeClass="active" className="nav-link" to="resume" spy smooth duration={500}>CV</Link>
              </li>
              <li className="nav-item">
                <Link activeClass="active" className="nav-link" to="portfolio" spy smooth duration={500}>Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link activeClass="active" className="nav-link" to="about" spy smooth duration={500}>À propos</Link>
              </li>
              <li className="nav-item">
                <Link activeClass="active" className="nav-link" to="contact" spy smooth duration={500}>Contact</Link>
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
