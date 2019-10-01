import { UPDATE_COLLECTIONS } from '../types';

export const updateCollections = collections => dispatch => {
  dispatch({
    type: UPDATE_COLLECTIONS,
    payload: collections
  });
};
