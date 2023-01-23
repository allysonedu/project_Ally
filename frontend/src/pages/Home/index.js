import React from 'react';

import { Container, Row, Col } from './styles';

import homeLogo from '../../assets/logo.png';

import Particle from '../../shared/components/Preticle';

import { Button } from '../../shared/components';

import Type from './Type';

//import logopg from '../../assets/logo.png';

export const Home = () => {
  return (
    <Container fluid className="home-section" id="home">
      <Particle />
      <Container className="home-content">
        <img src={homeLogo} alt="Ally" className="imgAlly" />
        <Row>
          <Col className="home-header">
            <h1 style={{ paddingBottom: 15 }} className="intro">
              Bem-vindo ao <h2 className="Ally">Ally</h2> <span>👋🏻</span>
            </h1>

            <div style={{ padding: 50, textAlign: 'center' }}>
              <Type />
            </div>

            <Button>
              <a href="/assistidos"> Cadastrar </a>
            </Button>
          </Col>
          <Col md={5} style={{ PaddingLeft: 20 }}></Col>
        </Row>
      </Container>
    </Container>
  );
};

/** <img src={logopg} alt="Ally" /> */
