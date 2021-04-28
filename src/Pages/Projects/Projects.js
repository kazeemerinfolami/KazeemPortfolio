import React from 'react'
import Nav from '../Components/Nav'
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectIMG from './ProjectIMG';

function Projects() {
    return (
        <div className="project-container">
            <div>
                <Helmet>
                    <title>Kazeem | Projects</title>
                </Helmet>
                <Container>
                    <Nav />
                    <Row>
                        <Col>
                            <ProjectIMG />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Projects
