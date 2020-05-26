import React from 'react';

// == React Icons
import { FaTimes } from 'react-icons/fa';

// == Assets
import Img from '../../assets/img/portfolio/prendre-laire.gif';

// == CSS
import './modal1.scss';

// == Composant
const Modal1 = () => (
  <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" role="dialog" aria-hidden="true">
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
                <h2 className="text-uppercase">Prendre l'aire</h2>
                <p className="item-intro text-muted">Site collaboratif concernant les aires d'autoroutes françaises.</p>
                <img className="img-fluid d-block mx-auto" src={Img} alt="" />
                <p>C'est un projet de fin de formation réalisé en 15 jours.<br />
                  Nous étions un groupe de 5 développeurs :<br />
                  - 2 personnes en frontend sur React.js<br />
                  - 3 personnes en backend API sur Symfony.
                </p>
                <p>Prendre l'aire est un site collaboratif qui vise à mettre en relation les usagers des aires d'autoroutes françaises.</p>
                <p><a href="https://youtu.be/zgBx2B4Xwd4?t=4309">Vidéo de présentation disponible sur Youtube</a></p>
                <ul className="list-inline">
                  <li className="modal-li">Date: Février 2020</li>
                  <li className="modal-li">Projet de fin de formation</li>
                  <li className="modal-li">Categorie: Web App</li>
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
export default Modal1;
