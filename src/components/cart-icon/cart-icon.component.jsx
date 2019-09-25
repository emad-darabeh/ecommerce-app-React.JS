import React from 'react';

// style
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

// redux
import { connect } from 'react-redux';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';

// selectors
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartDropdown, itemCount }) => {
  return (
    <div onClick={toggleCartDropdown} className='cart-icon'>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

const mapActionsToProps = {
  toggleCartDropdown
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(CartIcon);
