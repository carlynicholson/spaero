import React from 'react';
import './Header.css';

import BookingForm from '../Booking/BookingForm';
import Carousel from 'react-bootstrap/Carousel';
import Havana from '../../assets/banner/havana.png';
import Peru from '../../assets/banner/peru.png';
import Japan from '../../assets/banner/japan.png';

export default function Header(){
    return (
        <div>
            <BookingForm />
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Peru}
                    alt="First slide"
                    style={{ height: 500}}
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Havana}
                    alt="Third slide"
                    style={{ height: 500}}
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Japan}
                    alt="Third slide"
                    style={{ height: 500}}
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
    );
};