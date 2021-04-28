import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Nav from '../Components/Nav';
import ContactForm from './ContactForm';
import Content2 from './Content2';

function Contact() {
    return (
        <div>
            <Helmet>
                <title>Kazeem | Contact Me</title>
            </Helmet>
            <Container>
                <Nav />
                <Row>
                    <Col lg={6} md={12} >
                        <ContactForm />
                    </Col>
                    <Col lg={6} md={12} >
                        <Content2 />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact
