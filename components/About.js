import React from 'react';
import { Container, Row, Col } from "reactstrap";
const About = () => {
return (
    <section className="section bg-light" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">Acerca de <span className="text-warning">Us</span></h3>
              <p className="text-muted">One Piece fue creado por el mangaka Eichiro Oda en el año de 1997, desde entonces se han publicado 1032 capítulos y sigue en emisión, estando por más de 20 años en los primeros puestos de popularidad.</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h2 className="font-weight-light line-height-1_6 text-dark mb-4">One Piece fue creado por el mangaka Eichiro Oda en el año de 1997, desde entonces se han publicado 1032 capítulos y sigue en emisión, estando por más de 20 años en los primeros puestos de popularidad.</h2>
          </Col>
          <Col md={{ size:7, offset :1 }}>
            <Row>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Otros datos</h6>
                <p className="text-muted font-weight-light">Naruto el anime más visto en américa latina superando a dragon ball</p>
              </Col>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Otro más</h6>
                <p className="text-muted font-weight-light">shingeki no kyojin es el únimo anime en tener dos capítulos en el top de iDBM de los mejores capítulos de televisión en el mundo.</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default About;