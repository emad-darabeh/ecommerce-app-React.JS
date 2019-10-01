import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// pages
import CollectionPage from '../collection/collection.component';

// firebase
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';

// redux
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

// components
import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

// HOC
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

class ShopPage extends Component {
  state = {
    loading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionsRef = firestore.collection('collections');

    this.unsubscribeFromSnapshot = collectionsRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({
        loading: false
      });
    });
  }

  componentWillUnmount() {}

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapActionsToProps = {
  updateCollections
};

export default connect(
  null,
  mapActionsToProps
)(ShopPage);
