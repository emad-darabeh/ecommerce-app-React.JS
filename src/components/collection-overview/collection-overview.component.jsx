import React from 'react';

// styles
import './collection-overview.styles.scss';

// components
import CollectionPreview from '../collection-preview/collection-preview.component';

// redux
import { connect } from 'react-redux';

// selectors
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

const CollectionOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
