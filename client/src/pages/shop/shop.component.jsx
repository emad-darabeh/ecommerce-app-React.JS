import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

// pages
import CollectionPageContainer from '../collection/collection.container';

// redux
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

// components
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />

      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapActionsToProps = {
  fetchCollectionsStart
};

export default connect(
  null,
  mapActionsToProps
)(ShopPage);
