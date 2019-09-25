import React from 'react';

// style
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

// redux
import { connect } from 'react-redux';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCartDropdown }) => {
  return (
    <div onClick={toggleCartDropdown} className='cart-icon'>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};

const mapActionsToProps = {
  toggleCartDropdown
};

export default connect(
  null,
  mapActionsToProps
)(CartIcon);
