import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

// style
import './header.styles.scss';

// logo svg
import { ReactComponent as Logo } from '../../assets/crown.svg';

// redux
import { connect } from 'react-redux';

const Header = ({ currentUser }) => {
  console.log('header log', currentUser);
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo />
      </Link>

      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser
});

export default connect(mapStateToProps)(Header);
