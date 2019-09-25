import React from 'react';

// style
import './cart-item.styles.scss';

const CartItem = ({ item: { name, price, imageUrl, quantity } }) => {
  return (
    <div className='cart-item'>
      <img src={imageUrl} alt='cart item' />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} X ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
