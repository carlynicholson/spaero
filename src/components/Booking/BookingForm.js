import React, {useState, useEffect} from 'react';
import './BookingForm.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BookingForm = () => {
    const [bookingForm, setBookingForm] = useState([])
    
    useEffect(() => {
        fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/", {
	        "method": "GET",
	        "headers": {
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
		"x-rapidapi-key": "3f8bfd2f1emsh151e3e7783f5181p1ba74ajsnac1dd39bcb48"
	        }
        })
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});
    })

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
        <Form>
            <Row className="form-row">
                <Col className="form-col">
                    <Form.Control placeholder="First name" />
                </Col>
                <Col>
                    <Form.Control placeholder="Last name" />
                </Col>
            </Row>
        </Form>
    )
}

export default BookingForm;