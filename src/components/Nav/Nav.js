import React from 'react';
import './Nav.css';
import '../../style.css';

import Container from 'react-bootstrap/Container';
import Spaero from '../../assets/icons/spaero.png';

export default function Nav(){
    return (
        <Container className="nav-container">
            <img className="logo" src={ Spaero }></img>
            <p className="nav">Book A Flight</p>
        </Container>
    );
};