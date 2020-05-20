import React, { useState, useContext } from "react";
import "./BookingForm.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {UniversalProps} from "../../App";
import history from '../../history';

const BookingForm = (props) => {
  const universalProps = useContext(UniversalProps);

  const handleChange = (e) => {
    const { name, value } = e.target;
    universalProps.setFlight({ ...universalProps.flight, [name]: value });
  };

  const getFlights = async (e) => {
      e.preventDefault();

  let resp = fetch(`https://cors-anywhere.herokuapp.com/https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/${universalProps.flight.origin}-sky/${universalProps.flight.destination}-sky/${universalProps.flight.depart}?inboundpartialdate=${universalProps.flight.return}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
		"x-rapidapi-key": "3f8bfd2f1emsh151e3e7783f5181p1ba74ajsnac1dd39bcb48"
	}
})
let restext = await (await resp).text();
try {
    let resJson = JSON.parse(restext);
    universalProps.setDestinations(resJson);
    history.push("/flights");
} catch (e) {
    alert(`The application has encountered the following error: ${e}
    Please close and restart the application.`)
}
  }

  return (
    <div className="form-styling">
      <Form>
        <Row className="form-row">
          <Col className="form-col">
            <Form.Control
              placeholder="Origin"
              name="origin"
              value={universalProps.flight.origin}
              onChange={handleChange}
            />
          </Col>
          <Col className="form-col">
            <Form.Control
              placeholder="Destination"
              name="destination"
              value={universalProps.flight.destination}
              onChange={handleChange}
            />
          </Col>
          <Col className="form-col">
            <Form.Control
              placeholder="Depart"
              name="depart"
              value={universalProps.flight.depart}
              onChange={handleChange}
            />
          </Col>
          <Col className="form-col">
            <Form.Control
              placeholder="Return"
              name="return"
              value={universalProps.flight.return}
              onChange={handleChange}
            />
          </Col>
          <Col className="flight-search">
            <Button variant="outline-primary" onClick={getFlights}>
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default BookingForm;
