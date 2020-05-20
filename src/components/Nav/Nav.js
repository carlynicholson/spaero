import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import '../../style.css';

import Spaero from '../../assets/icons/spaero.png';

export default function Nav(){
    return (
        <nav>
            <Link to={'/'} className="nav-links" style={{textDecoration: 'none'}}>
                <img className="logo" src={Spaero} alt={'logo'}/>
                <p className="nav">Spaero</p>
                <p className="tag">Book a flight</p>
            </Link>
        </nav>
    );
};