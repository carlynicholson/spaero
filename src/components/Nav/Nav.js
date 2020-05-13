import React from 'react';
import './Nav.css';
import '../../style.css';

import Container from 'react-bootstrap/Container';

export default function Nav(){
    return (
        <Container className="nav-container">
            <p className="nav">Book A Flight</p>
        </Container>
    );
};