import { TOGGLE_CART_DROPDOWN, ADD_ITEM } from '../types';

export const toggleCartDropdown = () => dispatch => {
  dispatch({
    type: TOGGLE_CART_DROPDOWN
  });
};

export const addItem = item => dispatch => {
  dispatch({
    type: ADD_ITEM,
    payload: item
  });
};
