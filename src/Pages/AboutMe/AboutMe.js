import React from 'react'
import Nav from '../Components/Nav'
import { Container, Col, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Content1 from './Content1';
import Content2 from './Content2';

function AboutMe() {
    return (
        <div className="About-me-container">
            <div>
                <Helmet>
                    <title>Kazeem | About Me</title>
                </Helmet>
                <Container>
                    <Nav />
                    <Row>
                        <Col lg={6} md={12} >
                            <Content1 />
                        </Col>
                        <Col lg={6} md={12} >
                            <Content2 />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default AboutMe
