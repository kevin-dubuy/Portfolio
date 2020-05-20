import React from 'react';

// == React Icons
import {FaTimes} from 'react-icons/fa';

// == Assets
import Img from '../../assets/img/portfolio/01-full.jpg';

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
                <h2 className="text-uppercase">Project Name</h2>
                <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                <img className="img-fluid d-block mx-auto" src={Img} alt="" />
                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                <ul className="list-inline">
                  <li>Date: January 2017</li>
                  <li>Client: Threads</li>
                  <li>Category: Illustration</li>
                </ul>
                <button className="btn btn-primary" data-dismiss="modal" type="button">
                  <FaTimes />
                  Close Project
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
