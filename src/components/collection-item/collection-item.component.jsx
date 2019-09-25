import React from 'react';

// style
import './collection-item.styles.scss';

// components
import CustomButton from '../custom-button/custom-button.component';

// redux
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>

      <CustomButton onClick={() => addItem(item)} inverted>
        add to cart
      </CustomButton>
    </div>
  );
};

const mapActionsToProps = {
  addItem
};

export default connect(
  null,
  mapActionsToProps
)(CollectionItem);
