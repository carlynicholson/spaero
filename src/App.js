import React from 'react';
import './App.scss';

import Nav from './components/Nav/Nav';
import Main from './components/Main';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div>
      <Nav />
      <Main />
      <Footer />
    </div>
  );
};
