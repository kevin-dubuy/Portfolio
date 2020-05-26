import React from 'react';

// == React Icons
import {FaTimes} from 'react-icons/fa';

// == Assets
import Img from '../../assets/img/portfolio/alternance.jpg';

// == CSS
import './modal2.scss';

// == Composant
const Modal2 = () => (
  <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1" role="dialog" aria-hidden="true">
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
                <h2 className="text-uppercase">Les alternants de l'Apec</h2>
                <p className="item-intro text-muted">Témoignages de différents alternants au sein de l'Apec.</p>
                <img className="img-fluid d-block mx-auto" src={Img} alt="" />
                <p>Dans le cadre de la campagne de promotion de l'apprentissage #DémarreTaStory, nous avons réalisés des témoignages vidéo des alternants de l'Apec.</p>
                <p>Une belle expérience qui m'a permis de pratiquer l'ensemble des étapes pour avoir un rendu final plutôt sympathique pour une première.</p>
                <p>J'ai fait le tournage, le montage ainsi que l'habillage de cette série.</p>
                <p><a href="https://youtu.be/GoKuSxC1ito?list=PL6j5FtOMxH7uLrrxz6ZItBGXKRZZmmmGh">Vidéo de Jordan, chargé de coordination et d'information client, disponible sur Youtube</a></p>
                <p><a href="https://youtu.be/N-yaQiy-umA?list=PL6j5FtOMxH7uLrrxz6ZItBGXKRZZmmmGh">Vidéo de Maud, assistante relation médias, disponible sur Youtube</a></p>
                <ul className="list-inline">
                  <li className="modal-li">Année: 2019</li>
                  <li className="modal-li">Vidéo</li>
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
export default Modal2;
