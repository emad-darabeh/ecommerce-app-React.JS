import React from 'react';

// components
import CustomButton from '../custom-button/custom-button.component';

// style
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'></div>
      <CustomButton>go to checkout</CustomButton>
    </div>
  );
};

export default CartDropdown;
