import React from 'react';
import './Popular.css';
import '../../style.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Austria from '../../assets/destinations/austria.png';
import Thailand from '../../assets/destinations/bangkok.png';
import London from '../../assets/destinations/london.png';
import NYC from '../../assets/destinations/nyc.png';
import Inverness from '../../assets/destinations/inverness.png';
import Peru from '../../assets/destinations/peru.png';

export default function Popular(){
    return (
        <section id={'popular'} className="popular">
        {/* <div className="container"> */}

        <div className="section-title" data-aos="fade-up">
        <h2>Popular Destinations</h2>
        </div>

        {/* <div className="row popular-container" data-aos="fade-up"> */}

        <Container data-aos="fade-up">
        <CardColumns>
            <Card style={{ width: '15rem' }}>
                <div className="popular-item">
                <Card.Img src={Austria} />
                <Card.ImgOverlay>
                    <div className="popular-info">
                        <Card.Body>
                            <Card.Title>Hallstatt</Card.Title>
                            <Card.Text>Austria </Card.Text>
                        </Card.Body>
                    </div>
                </Card.ImgOverlay>
                </div>
            </Card>

            <Card style={{ width: '15rem' }}>
                <div className="popular-item">
                <Card.Img src={London} />
                <Card.ImgOverlay>
                    <div className="popular-info">
                        <Card.Body>
                            <Card.Title>London</Card.Title>
                            <Card.Text>United Kingdom </Card.Text>
                        </Card.Body>
                    </div>
                </Card.ImgOverlay>
                </div>
            </Card>

            <Card style={{ width: '15rem' }}>
                <div className="popular-item">
                <Card.Img src={Inverness} />
                <Card.ImgOverlay>
                    <div className="popular-info">
                        <Card.Body>
                            <Card.Title>Inverness</Card.Title>
                            <Card.Text>United Kingdom </Card.Text>
                        </Card.Body>
                    </div>
                </Card.ImgOverlay>
                </div>
            </Card>

            <Card style={{ width: '15rem' }}>
                <div className="popular-item">
                <Card.Img src={NYC} />
                <Card.ImgOverlay>
                    <div className="popular-info">
                        <Card.Body>
                            <Card.Title>New York City</Card.Title>
                            <Card.Text>United States </Card.Text>
                        </Card.Body>
                    </div>
                </Card.ImgOverlay>
                </div>
            </Card>

            <Card style={{ width: '15rem' }}>
                <div className="popular-item">
                <Card.Img src={Thailand} />
                <Card.ImgOverlay>
                    <div className="popular-info">
                        <Card.Body>
                            <Card.Title>Bangkok</Card.Title>
                            <Card.Text>Thailand </Card.Text>
                        </Card.Body>
                    </div>
                </Card.ImgOverlay>
                </div>
            </Card>



            <Card style={{ width: '15rem' }}>
                <div className="popular-item">
                <Card.Img src={Peru} />
                <Card.ImgOverlay>
                    <div className="popular-info">
                        <Card.Body>
                            <Card.Title>Lima</Card.Title>
                            <Card.Text>Perú </Card.Text>
                        </Card.Body>
                    </div>
                </Card.ImgOverlay>
                </div>
            </Card>

        </CardColumns>
        </Container>
        {/* </div> */}
        {/* </div> */}
    </section>
    );
};