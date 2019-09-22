import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

// pages
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
    </Switch>
  );
}

export default App;
