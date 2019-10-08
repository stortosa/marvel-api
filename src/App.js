import React from 'react';
import './App.css';
import Characters from './components/characters';
import searchBar from './components/searchBar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={searchBar} />
        <Route path="/characters" exact component = {Characters} />
      </Switch>
    </Router>
  );
}

export default App;
