import React, { useState, createContext } from 'react';
import './App.scss';

import Nav from './components/Nav/Nav';
import Main from './components/Main';
import Footer from './components/Footer/Footer';

function App() {
  const [destinations, setDestinations] = useState([]);
  console.log("DESTINATIONS FROM APP",destinations);
  const [flight, setFlight] = useState({
    origin: "",
    destination: "",
    depart: "",
    return: "",
    passengers: "",
  });

  return (
    <div>
      <Nav />
      <UniversalProps.Provider value={
        {
          setDestinations,
          destinations,
          flight,
          setFlight,
        }
      }>
        <Main />
      </UniversalProps.Provider>
      <Footer />
    </div>
  );
};

export default App;
export const UniversalProps = createContext();
