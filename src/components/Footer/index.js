import React from 'react';
// == React Icons
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

// == CSS
import './footer.scss';

// == Composant
const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <span className="copyright">Copyright &copy; Kevin Dubuy 2020</span>
        </div>
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="https://twitter.com/kiveun">
                <FaTwitter />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/dubuykevin/">
                <FaLinkedin />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://github.com/kevin-dubuy">
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="list-inline quicklinks">
            <li className="list-inline-item">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

// == Export
export default Footer;
