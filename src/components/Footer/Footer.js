import React from 'react';
import './Footer.css';
import '../../style.css';

import Container from 'react-bootstrap/Container';

export default function Footer(){
    return (
        <Container className="footer-container">
            <p className="footer">Copyright 2020</p>
        </Container>
    );
};