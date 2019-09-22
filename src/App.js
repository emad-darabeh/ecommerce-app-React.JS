import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

// pages
import HomePage from './pages/homepage/homepage.component';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
    </Switch>
  );
}

export default App;
