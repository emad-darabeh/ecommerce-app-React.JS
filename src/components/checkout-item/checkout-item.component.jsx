import React from 'react';

// style
import './checkout-item.styles.scss';

// redux
import { connect } from 'react-redux';
import {
  deleteItem,
  decreaseItem,
  addItem
} from '../../redux/cart/cart.actions';

const CheckoutItem = ({ item, deleteItem, decreaseItem, addItem }) => {
  const { name, price, imageUrl, quantity } = item;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='cart item' />
      </div>

      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => decreaseItem(item)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(item)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>

      <div className='remove-button' onClick={() => deleteItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapActionsToProps = {
  deleteItem,
  decreaseItem,
  addItem
};

export default connect(
  null,
  mapActionsToProps
)(CheckoutItem);
