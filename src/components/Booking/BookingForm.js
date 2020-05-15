import React, {useState, useEffect} from 'react';
import './BookingForm.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

var Amadeus = require('amadeus');

const BookingForm = () => {
    // const [bookingForm, setBookingForm] = useState([])


    var amadeus = new Amadeus({
        clientId: 'bqBABgPdwOhGBaPL22AYGrMyzl0Wz93b',
        clientSecret: 'N2duMpdsnUZvBOav'
        });
        
        amadeus.shopping.flightOffersSearch.get({
            originLocationCode: 'SYD',
            destinationLocationCode: 'BKK',
            departureDate: '2020-08-01',
            adults: '2'
        }).then(function(response){
        console.log(response.data);
        }).catch(function(responseError){
        console.log(responseError.code);
        });

    return (
        <div className="form-styling">
        <Form>
            <Row className="form-row">
                <Col className="form-col">
                    <Form.Control placeholder="From" />
                </Col>
                <Col className="form-col">
                    <Form.Control placeholder="To" />
                </Col>
                <Col className="form-col">
                    <Form.Control placeholder="Depart" />
                </Col>
                <Col className="form-col">
                    <Form.Control placeholder="Return" />
                </Col>
                <Col className="form-col">
                    <Form.Control placeholder="Passengers" />
                </Col>
                <Col className="flight-search">
                    <Button variant="outline-primary">Search</Button>{' '}
                </Col>
            </Row>
        </Form>
        </div>
    )
}

export default BookingForm;