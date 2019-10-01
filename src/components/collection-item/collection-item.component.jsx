import React from 'react';

// styled components
import {
  CollectionItemContainer,
  BackgroundImage,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer,
  AddButton
} from './collection-item.styles';

// redux
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooterContainer>

      <AddButton onClick={() => addItem(item)} inverted>
        add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapActionsToProps = {
  addItem
};

export default connect(
  null,
  mapActionsToProps
)(CollectionItem);
