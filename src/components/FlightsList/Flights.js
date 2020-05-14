import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Flights() {
  // const [selected, setSelected] = React.useState(false);
  return (
    <div>
      <Row>
        <Card>
          <CardTitle>07:05AM</CardTitle>
          <CardSubtitle>JUNE 04, FRI</CardSubtitle>
          <CardTitle>LOS ANGELES LAX</CardTitle>
        </Card>
        <Card>
          <CardTitle>09:10PM</CardTitle>
          <CardSubtitle>JUNE 06, FRI</CardSubtitle>
          <CardTitle>ISTANBUL IST</CardTitle>
        </Card> 
      </Row>
      <Row>
        <Card>
          <CardTitle>09:30AM</CardTitle>
          <CardSubtitle>JUNE 20, TUE</CardSubtitle>
          <CardTitle>ISTANBUL IST</CardTitle>
        </Card>
        <Card>
          <CardTitle>12:30AM</CardTitle>
          <CardSubtitle>JUNE 22, THU</CardSubtitle>
          <CardTitle>LOS ANGELES LAX</CardTitle>
        </Card> 
      </Row>

      <Row>
        <Card>
          <CardTitle>07:05AM</CardTitle>
          <CardSubtitle>JUNE 04, FRI</CardSubtitle>
          <CardTitle>LOS ANGELES LAX</CardTitle>
        </Card>
        <Card>
          <CardTitle>09:10PM</CardTitle>
          <CardSubtitle>JUNE 06, FRI</CardSubtitle>
          <CardTitle>ISTANBUL IST</CardTitle>
        </Card> 
      </Row>
      <Row>
        <Card>
          <CardTitle>09:30AM</CardTitle>
          <CardSubtitle>JUNE 20, TUE</CardSubtitle>
          <CardTitle>ISTANBUL IST</CardTitle>
        </Card>
        <Card>
          <CardTitle>12:30AM</CardTitle>
          <CardSubtitle>JUNE 22, THU</CardSubtitle>
          <CardTitle>LOS ANGELES LAX</CardTitle>
        </Card> 
      </Row>
    </div>
  );
}
