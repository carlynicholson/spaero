import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
// import CardTitle from 'react-bootstrap/CardTitle';
// import CardSubtitle from 'react-bootstrap/CardSubtitle';

import './Flights.css';


export default function Flights() {
  // const [selected, setSelected] = React.useState(false);
  return (
    <div>
        <CardGroup>
          <Row>
          <Card>
            <Card.Title>07:05AM</Card.Title>
            <Card.Subtitle>JUNE 04, FRI</Card.Subtitle>
            <Card.Title>LOS ANGELES LAX</Card.Title>

            <Card.Title>09:10PM</Card.Title>
            <Card.Subtitle>JUNE 06, FRI</Card.Subtitle>
            <Card.Title>ISTANBUL IST</Card.Title>
          </Card> 
        </Row>
        <Row>
          <Card>
            <Card.Title>09:30AM</Card.Title>
            <Card.Subtitle>JUNE 20, TUE</Card.Subtitle>
            <Card.Title>ISTANBUL IST</Card.Title>

            <Card.Title>12:30AM</Card.Title>
            <Card.Subtitle>JUNE 22, THU</Card.Subtitle>
            <Card.Title>LOS ANGELES LAX</Card.Title>
          </Card>
          </Row>
          <Card className="price">
            <Card.Title>$934</Card.Title>
            <Button>Book</Button>
          </Card>
        </CardGroup>
    </div>
  );
}
