import React from 'react';
import {
  Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller,
} from 'react-scroll';
import { motion } from 'framer-motion';

// == CSS
import './header.scss';

const icon = {
  hidden: {
    pathLength: 0,
    fill: 'rgba(255, 255, 255, 0)',
  },
  visible: {
    pathLength: 1,
    fill: 'rgba(255, 255, 255, 1)',
  },
};

// == Composant
const Header = () => (
  <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div id="svg-bg">
          <motion.svg width="100%" height="100%" viewBox="0 0 800 800" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" className="item">
            <g transform="matrix(8.10654,0,0,8.10654,-1580.25,-4647.66)">
              <motion.path
                d="M200.441,649.273L200.441,671.392L236.024,671.392C245.968,671.392 254.78,669.498 262.462,665.712L225.605,623.467L200.441,649.273Z"
                variants={icon}
                initial="hidden"
                animate="visible"
                transition={{
                  default: { duration: 2, ease: 'easeInOut' },
                  fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                }}
              />
            </g>
            <g transform="matrix(8.10654,0,0,8.10654,-1580.25,-4647.66)">
              <motion.path
                d="M231.055,617.537L269.134,661.75C274.332,658.067 278.522,653.481 281.704,647.99C285.979,640.617 288.116,632.176 288.116,622.666C288.116,613.155 285.979,604.714 281.704,597.341C277.895,590.77 272.643,585.493 265.948,581.511L231.055,617.537Z"
                variants={icon}
                initial="hidden"
                animate="visible"
                transition={{
                  default: { duration: 2, ease: 'easeInOut' },
                  fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                }}
              />
            </g>
            <g transform="matrix(8.10654,0,0,8.10654,-1580.25,-4647.66)">
              <motion.path
                d="M236.024,573.94L200.441,573.94L200.441,638.694L259.224,578.162C252.332,575.347 244.599,573.94 236.024,573.94Z"
                variants={icon}
                initial="hidden"
                animate="visible"
                transition={{
                  default: { duration: 2, ease: 'easeInOut' },
                  fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                }}
              />
            </g>
          </motion.svg>
        </div>
        <div className="intro-lead-in">Bienvenue sur mon portfolio en ligne</div>
        <div className="intro-heading text-uppercase">Développeur Full stack<br />ET graphiste web</div>
        <Link activeClass="active" className="nav-link" to="portfolio" spy smooth duration={500}>
          <button className="btn btn-primary btn-xl text-uppercase" type="button">Mes projets</button>
        </Link>
      </div>
    </div>
  </header>
);

// == Export
export default Header;
