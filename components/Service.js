import React from 'react';
import { Container, Row, Col } from "reactstrap";
const Service = () => {
  const services = [
    { title : "Anime Live action", desc : "Netflix a arruinado el anime con sus adaptaciones live action" },
    { title : "Anime Live action", desc : "Netflix a arruinado el anime con sus adaptaciones live action" },
    { title : "Anime Live action", desc : "Netflix a arruinado el anime con sus adaptaciones live action" },
    { title : "Anime Live action", desc : "Netflix a arruinado el anime con sus adaptaciones live action" },
    { title : "Anime Live action", desc : "Netflix a arruinado el anime con sus adaptaciones live action" },
    { title : "Anime Live action", desc : "Netflix a arruinado el anime con sus adaptaciones live action" },
  ]
  
  return (
    <section className="section" id="service">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">Información extra</span></h3>
              <p className="text-muted">Mangaplus! es el primer servicio para lectura de manga en linea de forma legal y gratuita, surgió gracias al aumento maviso de consumidores de este contenido en el resto del mundo.</p>
            </div>
          </Col>
        </Row>
        <Row>
          {
            services.map((service, key) =>
              <Col key={key} lg={4} md={6}>
                <div>
                  <div className="mb-5">
                      <i className={service.icon}></i>
                  </div>
                  <h5 className="text-dark font-weight-normal pt-1 mb-4">{service.title}</h5>
                  <p className="text-muted mb-4">{service.desc}</p>
                </div>
              </Col>
            )
          }
        </Row>
      </Container>
    </section>
  );
}
export default Service;