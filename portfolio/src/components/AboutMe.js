import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function AboutMe(){
    return (
        <div className="imageContainer">
            <Container className="imageContainer">
                <Row>
                    <Col xs={6} md={4}>
                        <Image src="/animated_portrait.jpeg" rounded />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutMe