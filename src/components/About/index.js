// == Import : npm
import React from 'react';

// == Assets
import Thumb1 from '../../assets/img/about/Brassart.png';
import Thumb2 from '../../assets/img/about/Fleur_de_lys_du_québec.svg';
import Thumb3 from '../../assets/img/about/Apec.svg';
import Thumb4 from '../../assets/img/about/Oclock.svg';

// == Import : local
import './about.scss';

// == Composant
const About = () => (
  <section className="page-section" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">À propos</h2>
          <h3 className="section-subheading text-muted">Découvrez les expériences qui ont marqué ma vie professionnelle.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img className="img-fluid" src={Thumb1} alt="Brassart, l'école des métiers de la création" />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2002-2005</h4>
                  <h4 className="subheading">Ma professionnalisation dans le graphisme et le web</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Ces 3 années au sein de l'école Brassart m'ont appris beaucoup de choses sur tous les aspects du web. Cette époque où Flash existait encore.</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="img-fluid" id="fleur" src={Thumb2} alt="Fleur de Lys du Québec" />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2007-2009</h4>
                  <h4 className="subheading">Le développement personnel à Montréal</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">C'est cette expérience qui m'a permis de passer de jeune adulte à adulte, de prendre confiance en moi. Le fait de voir que ma capacité d'adaptation était excellente et d'avoir développer mon relationnel.</p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img className="img-fluid" src={Thumb3} alt="" />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2009-2020</h4>
                  <h4 className="subheading">L'Apec, une longue carrière mais qui a beaucoup évolué.</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Mon évolution au sein de l'Apec était parfaite et c'est pour cette raison que j'y suis resté tant d'années. Ma polyvalence m'a permis de développer des compétences et d'avoir une expertise sur certains sujets.</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="img-fluid" src={Thumb4} alt="" />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Août 2019-Février 2020</h4>
                  <h4 className="subheading">CPF de transition</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Une belle opportunité de formation en téléprésentiel pour apprendre en intensif les bases du développeur et pour finir en beauté sur une spécialisation au choix : pour ma part, React.js.</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4 id="chapter">Un nouveau chapitre<br />avec vous ?</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

// == Export
export default About;
