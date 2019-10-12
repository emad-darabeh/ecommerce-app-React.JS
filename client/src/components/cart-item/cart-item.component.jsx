import React, { memo } from 'react';

// styled components
import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer,
  ItemName,
  ItemPrice
} from './cart-item.styles';

const CartItem = ({ item: { name, price, imageUrl, quantity } }) => {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt='cart item' />
      <ItemDetailsContainer>
        <ItemName>{name}</ItemName>
        <ItemPrice>
          {quantity} X ${price}
        </ItemPrice>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default memo(CartItem);
