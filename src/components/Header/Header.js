import React from 'react';
import './Header.css';

import BookingForm from '../Booking/BookingForm';
import Carousel from 'react-bootstrap/Carousel';
import Havana from '../../assets/banner/havana.png';
import Peru from '../../assets/banner/peru.png';
import Japan from '../../assets/banner/japan.png';

export default function Header() {
    return (
        <div className="carousel-div">
            <Carousel>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Peru}
                    alt="Huacachina, Peru"
                    style={{ height: 500 }}
                    />
                    <Carousel.Caption>
                    <p>Huacachina, Peru</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Havana}
                    alt="Havana, Cuba"
                    style={{ height: 500 }}
                    />

                    <Carousel.Caption>
                    <p>Havana, Cuba</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Japan}
                    alt="Itsukushima, Japan"
                    style={{ height: 500 }}
                    />

                    <Carousel.Caption>
                    <p>Itsukushima, Japan</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

            <BookingForm />
        </div>
    );
};
