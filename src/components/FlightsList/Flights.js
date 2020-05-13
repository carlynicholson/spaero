import React from 'react';
import './Flights.css';

import ResultsForm from '../ResultsForm/ResultsForm'
import Filters from '../Filters/Filters'

export default function Flights(){
    return (
        <div>
            <ResultsForm />
            <Filters />
        </div>
    );
};