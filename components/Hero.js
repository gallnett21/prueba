import React from "react";
import { Container, Row, Col } from "reactstrap";
const Hero = () => {
    return(
        <section className="section position-relative">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <div className="pr-lg-5">
                            <p className="text-uppercase text-primary font-weith-medium f-14 mb4">Ernesto Gallardo</p>
                            <h1 className="mb-4 font-weight-normal line-height-1_4">¿Qué es el anime?<span className="text-primary font-weight-medium"> ¡Descúbrelo!</span></h1>
                            <p className="text-muted mb-4 pb-2">Es un término que engloba a la animación tradicional o por computadora de procedencia japonesa. Tales como: Dragon ball, One Piece, Naruto. Durante los últimos años se ha popilarizado en occidente aumentando exponencialmente el número de espectadores, habiendo cada día más series de este tipo.</p>
                            <a href="#" className="btn btn-warning">
                                Ver series gratis aquí <span className="m1-2 right-icon">&#8594;</span>
                            </a>
                        </div>
                    </Col>
                    <Col ig={6}>
                        <div className="mt-5 mt-lg-0">
                            <img src="/Imagenes/one.jpg" alt="" className="img-fluid mx-auto d-block"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default Hero;