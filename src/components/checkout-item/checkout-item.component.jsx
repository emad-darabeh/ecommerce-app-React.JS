import React from 'react';

// styled components
import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  DeleteButtonContainer
} from './checkout-item.styles';

// redux
import { connect } from 'react-redux';
import {
  deleteItem,
  decreaseItem,
  increaseItem
} from '../../redux/cart/cart.actions';

const CheckoutItem = ({ item, deleteItem, decreaseItem, increaseItem }) => {
  const { name, price, imageUrl, quantity } = item;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='cart item' />
      </ImageContainer>

      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => decreaseItem(item)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => increaseItem(item)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>

      <DeleteButtonContainer onClick={() => deleteItem(item)}>
        &#10005;
      </DeleteButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapActionsToProps = {
  deleteItem,
  decreaseItem,
  increaseItem
};

export default connect(
  null,
  mapActionsToProps
)(CheckoutItem);
