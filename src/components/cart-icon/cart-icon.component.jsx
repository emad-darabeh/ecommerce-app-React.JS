import React from 'react';

// styled components
import {
  CartIconContainer,
  ShoppingIcon,
  ItemCountContainer
} from './cart-icon.styles';

// redux
import { connect } from 'react-redux';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';

// selectors
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartDropdown, itemCount }) => {
  return (
    <CartIconContainer onClick={toggleCartDropdown}>
      <ShoppingIcon />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const mapActionsToProps = {
  toggleCartDropdown
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(CartIcon);
