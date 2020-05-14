import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home/Home';
// import Flights from '../components/FlightsList/Flights';
import Confirmation from '../components/ConfirmationPage/Confirmation';

export default function Main(props) {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/flights" component={Flights} /> */}
        <Route path="/flights/details" component={Confirmation} />
      </Switch>
    </main>
  );
}