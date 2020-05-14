import React, {useState, useEffect} from 'react';
import './BookingForm.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

var Amadeus = require('amadeus');

const BookingForm = () => {
    const [bookingForm, setBookingForm] = useState([])


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
    
//     useEffect(() => {
//         fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/${country}/${currency}/${locale}/${originplace}/${destinationplace}/${outboundpartialdate}?${inboundpartialdate}`, {
// 	        "method": "GET",
// 	        "headers": {
// 		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
// 		"x-rapidapi-key": "3f8bfd2f1emsh151e3e7783f5181p1ba74ajsnac1dd39bcb48"
// 	        }
//         })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.log(err);
// });
//     })

    // useEffect(() => {
    //     const callAPI = async() => {
    //         const apiKey="3f8bfd2f1emsh151e3e7783f5181p1ba74ajsnac1dd39bcb48"
    //         const url=`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/search?q=&api_key=${apiKey}`
    //         const res = await fetch(url)
    //         const json = await res.json
    //         console.log(json)
    //     }
    //     callAPI()
    //     }, [])
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
                    <Button variant="outline-primary">SEARCH</Button>{' '}
                </Col>
            </Row>
        </Form>
        </div>
    )
}

export default BookingForm;