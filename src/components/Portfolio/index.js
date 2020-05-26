import React from 'react';

// == React Icons
import {FaPlus} from 'react-icons/fa';

// == Assets
import Thumb1 from '../../assets/img/portfolio/prendre-laire.gif';
import Thumb2 from '../../assets/img/portfolio/alternance.jpg';
import Thumb3 from '../../assets/img/portfolio/motion.jpg';

// == CSS
import './portfolio.scss';

// == Composant
const Portfolio = () => (
  <section className="bg-light page-section" id="portfolio">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Portfolio</h2>
          <h3 className="section-subheading text-muted">Mes derniers projets.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <FaPlus size="3em" />
              </div>
            </div>
            <img className="img-fluid" src={Thumb1} alt="" />
          </a>
          <div className="portfolio-caption">
            <h4>Prendre l'aire (WIP)</h4>
            <p className="text-muted">Web App</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <FaPlus size="3em" />
              </div>
            </div>
            <img className="img-fluid" src={Thumb2} alt="" />
          </a>
          <div className="portfolio-caption">
            <h4>Les alternants de l'Apec</h4>
            <p className="text-muted">Vidéo</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a className="portfolio-link" data-toggle="modal" href="#portfolioModal3">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <FaPlus size="3em" />
              </div>
            </div>
            <img className="img-fluid" src={Thumb3} alt="" />
          </a>
          <div className="portfolio-caption">
            <h4>Les études de l'Apec</h4>
            <p className="text-muted">Motion Design</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// == Export
export default Portfolio;
