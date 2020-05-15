import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
// import CardTitle from 'react-bootstrap/CardTitle';
// import CardSubtitle from 'react-bootstrap/CardSubtitle';

import "./Flights.css";

export default function Flights() {
  // const [selected, setSelected] = React.useState(false);
  return (
    <CardGroup className="flights-group">
      <Row className="flights-row">
        <Card className="a">
          <div className="flights">
            <h5>07:05AM</h5>
            <h6>JUNE 04, FRI</h6>
            <h5>LOS ANGELES LAX</h5>
          </div>
          <div className="flights">
            <h5>09:10PM</h5>
            <h6>JUNE 06, FRI</h6>
            <h5>ISTANBUL IST</h5>
          </div>
        </Card>
      </Row>
      <Row>
        <Card className="b">
          <div className="flights">
            <h5>09:30AM</h5>
            <h6>JUNE 20, TUE</h6>
            <h5>ISTANBUL IST</h5>
          </div>
          <div className="flights">
            <h5>12:30AM</h5>
            <h6>JUNE 22, THU</h6>
            <h5>LOS ANGELES LAX</h5>
          </div>
        </Card>
      </Row>
      <Card className="price">
        <Card.Title>$934</Card.Title>
        <Button className="book-button">Book</Button>
      </Card>
    </CardGroup>
  );
}
