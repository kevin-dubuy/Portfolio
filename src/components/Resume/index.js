import React from 'react';
import { FaDev, FaCircle, FaPaintBrush } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';

// == CSS
import './resume.scss';

// == Composant
const Resume = () => (
  <section className="page-section" id="resume">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Mon CV</h2>
          <h3 className="section-subheading text-muted">Petit tour du propriétaire.</h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-6">
          <span className="fa-stack fa-4x">
            <FaCircle className="fas fa-stack-2x text-primary" />
            <FaDev className="fas fa-stack-1x fa-inverse fa-down" />
          </span>
          <h4 className="resume-heading">Développeur Full Stack</h4>
          <p className="text-muted add-marg">Même si je ne peux pas dire que j'ai plusieurs années d'expériences professionnelles dans ce domaine, ma passion pour la programmation ne me définit pas comme un débutant pour autant.</p>
        </div>
        <div className="col-md-6">
          <span className="fa-stack fa-4x">
            <FaCircle className="fas fa-stack-2x text-primary" />
            <FaPaintBrush className="fas fa-stack-1x fa-inverse fa-down" />
          </span>
          <h4 className="resume-heading">Graphiste</h4>
          <p className="text-muted add-marg">Avec une orientation plutôt web, l'utilisation de la suite d'Adobe depuis le lycée me permet d'être assez à l'aise avec toute leur gamme. J'ai pu dernièrement me former plus en profondeur sur l'aspect vidéo (tournage, montage, motion design).</p>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-12">
          <Button className="btn btn-primary btn-xl text-uppercase" href="./assets/files/CV_Kevin_Dubuy.pdf">
            Découvrez mon CV<br />
            <span className="file-info">(pdf, 574 ko)</span>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

// == Export
export default Resume;
