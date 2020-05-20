import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

// == CSS
import './contact.scss';

const schema = yup.object({
  name: yup.string().min(3, 'Votre nom doit faire 3 lettres minimum').required('Vous avez oublié de nous donner votre nom.'),
  email: yup.string().email("Votre email n'est pas valide").required('Vous avez oublié de nous donner votre email.'),
  message: yup.string().min(10, 'Votre demande est un peu légère. 100 caractères, ce n\'est pas si long.').required("J'ai besoin d'en savoir plus"),
});

const API_PATH = 'https://www.kevin-dubuy.fr/api/contact/index.php';

// == Composant
const Contact = () => (
  <section className="page-section" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 id="contact-head" className="section-heading text-uppercase">Contactez moi</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <Formik
            validationSchema={schema}
            onSubmit={(values) => {
              console.log(values);
              axios({
                method: 'post',
                url: `${API_PATH}`,
                headers: {
                  'Access-Control-Allow-Origin': '*',
                  'Content-Type': 'application/json',
                },
                data: values,
              })
                .then((result) => {
                  console.log(result);
                })
                .catch((error) => {
                  console.log(error);
                });
            }}

            initialValues={{
              name: '',
              email: '',
              message: '',
            }}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              isValid,
              errors,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Row>
                  <Form.Group as={Col} md="6" controlId="validationFormik01">
                    <Form.Control
                      type="text"
                      placeholder="Votre nom*"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      isValid={touched.name && !errors.name}
                      isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationFormik02">
                    <Form.Control
                      type="email"
                      placeholder="Votre email*"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      isValid={touched.email && !errors.email}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md="12" controlId="validationFormik03">
                    <Form.Control
                      as="textarea"
                      placeholder="Votre message*"
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      isValid={touched.message && !errors.message}
                      isInvalid={!!errors.message}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                </Form.Row>
                <div className="clearfix" />
                <div className="col-lg-12 text-center">
                  <div id="success" />
                  <Button className="btn btn-primary btn-xl text-uppercase" type="submit">Envoyez votre message</Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
