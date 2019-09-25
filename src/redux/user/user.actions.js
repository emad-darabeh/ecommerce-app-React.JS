import { SET_CURRENT_USER } from '../types';

export const setCurrentUser = user => dispatch => {
  dispatch({
    type: SET_CURRENT_USER,
    payload: user
  });
};
