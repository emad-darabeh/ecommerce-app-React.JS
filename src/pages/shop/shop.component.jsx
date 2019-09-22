import React, { Component } from 'react';

// data
import SHOP_DATA from './shop.data';

// components
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
