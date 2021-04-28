import React from 'react';
import Content1 from './Content1';
import Content2 from './Content2';
import { Container, Col, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

function WelcomePage() {
    return (
        <div className="App-header">
            <div className="Welcome-container">
                <Helmet>
                    <title>Kazeem | Wecome</title>
                </Helmet>
                <Container>
                    <Row>
                        <Col lg={6} md={12} style={{ minHeight: "40vh" }} >
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

export default WelcomePage
