import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

// redux
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

// components
import Spinner from '../../components/spinner/spinner.component';
const CollectionOverviewContainer = lazy(() =>
  import('../../components/collection-overview/collection-overview.container')
);

// pages
const CollectionPageContainer = lazy(() =>
  import('../collection/collection.container')
);

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />

        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
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
