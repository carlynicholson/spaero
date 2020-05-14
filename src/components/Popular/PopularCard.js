import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import useHover from '../../hooks/useHover';

const PopularCard = ({ loc }) => {
  const [hoverRef, isHovered] = useHover()
  return (
    <Col className='popular-col' md={true} style={styles.wrap}>
      <Card style={styles.card} ref={hoverRef}>
        <Card.Img src={loc.img} alt={loc.title} />
        <Card.ImgOverlay>
          <Card.Body
            style={
              isHovered
                ? { ...styles.info, opacity: '1', bottom: '20px' }
                : { ...styles.info, opacity: '0', bottom: '0' }
            }
          >
            <Card.Title style={styles.title}>{loc.title}</Card.Title>
            <Card.Text style={styles.text}>{loc.text} </Card.Text>
          </Card.Body>
        </Card.ImgOverlay>
      </Card>
    </Col>
  )
};

export default PopularCard

const styles = {
  wrap: {
    display: 'flex',
    justifyContent: 'center'
  },
  card: { width: '15rem' },
  info: {
    opacity: '0',
    position: 'absolute',
    left: '30px',
    right: '30px',
    bottom: '0',
    zIndex: '3',
    transition: 'all ease-in-out 0.3s',
    background: 'rgba(255, 255, 255, 0.9)'
  },
  title: {
    fontSize: '18px',
    color: '#fff',
    fontWeight: '600',
    color: '#2b2320'
  },
  text: {
    color: '#65534c',
    fontSize: '14px',
    marginBottom: '0'
  }
};
