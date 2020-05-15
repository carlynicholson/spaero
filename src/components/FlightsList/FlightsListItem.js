import React, { useContext } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { UniversalProps } from '../../App';

export default function FlightListItem(props) {

    const universalProps = useContext(UniversalProps)

    return(
        <CardGroup className="flights-group">
      <Row className="flights-row">
        <Card className="a">
          <div className="flights">
            <h6>{props.element.QuoteDateTime}</h6>
            <h5>{universalProps.flight.origin}</h5>
          </div>
          <div className="flights">
            <h5>{universalProps.flight.destination}</h5>
          </div>
        </Card>
      </Row>
      <Card className="price">
        <Card.Title>${props.element.MinPrice}</Card.Title>
        <Button className="book-button">Book</Button>
      </Card>
    </CardGroup>
    )
}
