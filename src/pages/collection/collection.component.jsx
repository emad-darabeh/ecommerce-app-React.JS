import React from 'react';

// style
import './collection.styles.scss';

// components
import CollectionItem from '../../components/collection-item/collection-item.component';

// redux
import { connect } from 'react-redux';

// selectors
import { selectCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {collection ? (
          items.map(item => <CollectionItem key={item.id} item={item} />)
        ) : (
          <h2>this page dose not exists</h2>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
