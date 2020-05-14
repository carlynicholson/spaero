import React from 'react';
import './Popular.css';
import '../../style.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import locations from './assets/locations';

import PopularCard from './PopularCard';

export default function Popular() {
  return (
    <section id={'popular'} className='popular'>
      <div
        style={styles.container}
        className='section-title'
        data-aos='fade-up'
      >
        <h2>Popular Destinations</h2>
      </div>
      <div className='popular-container' data-aos='fade-up'>
        {locations.map((row, i) => (
          <Row
            key={`popular-row-${i}`}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-around'
            }}
          >
            {row.map(loc => (
              <PopularCard key={loc.title} loc={loc} />
            ))}
          </Row>
        ))}
      </div>
    </section>
  )
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
};
