import React from 'react';
import './Why.css';
import '../../style.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Trophy from '../../assets/icons/trophy.png';
import Mom from '../../assets/icons/mom.png';
import Health from '../../assets/icons/health.png';


export default function Why(){
    return (
        <Container>
            <div className="section-title" data-aos="fade-up">
                <h2>Why Book With Us</h2>
            </div>
            <Row>
                <Col>
                    <img className="why-icon" src={Trophy}></img>
                    <h5>We're awesome</h5>
                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </Col>

                <Col>
                    <img className="why-icon" src={Mom}></img>
                    <h5>Moms love us</h5>
                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </Col>

                <Col>
                    <img className="why-icon" src={Health}></img>
                    <h5>It's good for you</h5>
                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </Col>
            </Row>
        </Container>
    );
};