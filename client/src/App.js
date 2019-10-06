import React, { useEffect, Fragment } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

// pages
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

// components
import Header from './components/header/header.component';

// redux
import { connect } from 'react-redux';
import { checkUserSession } from './redux/user/user.actions';

// selector
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route
          exact
          path='/signin'
          render={() =>
            currentUser ? <Redirect to='/' /> : <SignInAndSignUp />
          }
        />
        <Route exact path='/checkout' component={CheckoutPage} />
      </Switch>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapActionToProps = {
  checkUserSession
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(App);
