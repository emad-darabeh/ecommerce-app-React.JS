import React, { Component, Fragment } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

// pages
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

// components
import Header from './components/header/header.component';

// firebase
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

// redux
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

// selector
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
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
              this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUp />
            }
          />
          <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapActionsToProps = {
  setCurrentUser
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
