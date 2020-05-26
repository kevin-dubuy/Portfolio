import React from 'react';

// == React Icons
import { FaTimes } from 'react-icons/fa';

// == Assets
import Img from '../../assets/img/portfolio/motion.jpg';

// == CSS
import './modal3.scss';

// == Composant
const Modal3 = () => (
  <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex="-1" role="dialog" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="close-modal" data-dismiss="modal">
          <div className="lr">
            <div className="rl" />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="modal-body">
                <h2 className="text-uppercase">Les études de l'Apec</h2>
                <p className="item-intro text-muted">Animations réalisées sur After Effects.
                </p>
                <img className="img-fluid d-block mx-auto" src={Img} alt="" />
                <p>J'ai eu plusieurs projets vidéos à réaliser pour mettre en avant<br />les résultats des études de l'Apec.</p>
                <p>L'occasion pour moi de pratiquer le Motion Design<br />et à certaines occasions de réaliser la voix off.</p>
                <p>Une manière pour moi de pouvoir mettre ma créativité<br />au service de la communication.</p>
                <p><a href="https://youtu.be/xjFCM-cA7XM">"Lorsque les Start-up recrutent" disponible sur Youtube</a></p>
                <p><a href="https://youtu.be/dee07kFw1OQ">"Les secteurs qui recrutent" disponible sur Youtube</a></p>
                <ul className="list-inline">
                  <li className="modal-li">2016-2020</li>
                  <li className="modal-li">Motion Design</li>
                </ul>
                <button className="btn btn-primary" data-dismiss="modal" type="button">
                  <FaTimes />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// == Export
export default Modal3;
